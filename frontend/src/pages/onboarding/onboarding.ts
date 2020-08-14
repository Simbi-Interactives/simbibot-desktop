import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController,
  ToastController
} from "ionic-angular";
// import { OfflineProvider } from "../../providers/offline/offline";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { Keys } from "../../contants";

@IonicPage()
@Component({
  selector: "page-onboarding",
  templateUrl: "onboarding.html"
})
export class OnboardingPage {
  topic: any;
  subject: any;
  loaded: Promise<boolean>;
  questions: any[];
  hasKeypoints: boolean = false;
  hasFlashCards: boolean = false;
  flashCardCount: number = 0;
  keyPointsCount: number = 0;
  subscribed: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewController: ViewController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private desktopProvider: DesktopProvider,
  ) {
    this.topic = this.navParams.get("topic");
    this.subject = this.navParams.get("subject");
    this.fetchQuestion(this.topic.id);
  }

  ionViewDidLoad() {
    this.fetchKeypointsCount()
    this.fetchFlashCardsCount();
  }

  fetchQuestion(topic_id) {
    this.desktopProvider.fetchQuestionsForEvaluation(topic_id).subscribe((response: any) => {
      this.questions = response;
      this.loaded = Promise.resolve(true);
    });
  }

  takeTest(test_type) {
    this.viewController.dismiss({
      take_test: true,
      questions: this.questions,
      test_type: test_type
    });
  }

  fetchKeypointsCount() {
    this.desktopProvider.fetchKeypointsCounts(this.topic.id)
      .subscribe((response: any) => {
        this.keyPointsCount = response[0]["count(*)"];

        this.hasKeypoints = this.keyPointsCount > 0;
        console.log('key counts', this.hasKeypoints, this.topic.index)
      }, err => {
        console.log('err ', err);
      })
  }


  fetchFlashCardsCount() {
    this.desktopProvider.fetchFlashCardsCount(this.topic.id)
      .subscribe(async (response: any) => {
        this.flashCardCount = response[0]["count(*)"];        
        console.log('flashcards counts', this.flashCardCount)

        this.hasFlashCards = this.flashCardCount > 0;
        // this.hasFlashCards = (this.subscribed || this.isTrialPeriod(expiryDate)) ? (count > 0) : (count > 0 && this.topic.index == 0);

      }, err => {
        console.log('err ', err);
      })
  }

  isTrialPeriod = (expire) => {
    let today = new Date().getTime();
    let expiryTime = new Date(expire).getTime();

    let diff = today - expiryTime;
    diff = diff / 1000; // milliseconds to seconds
    diff = diff / 60; // seconds to minutes
    diff = diff / 60; // miutes to hours
    diff = diff / 24; // hours to days;
    console.log('diff ', diff);
    return diff < 7;

  }

  openLessonNotes() {
    console.log('open lesson notes ', this.hasKeypoints)
    // if (!this.hasKeypoints) {
    //   return this.alertCtrl.create({message: "lesson note"});
    //   // return this.presentToast("You don't have access to this lesson note, subscribe now to access all contents and more...")
    // }

    return this.desktopProvider.fetchKeypoints(this.topic.id).subscribe(data => {
      const lessons = data;
      this.loaded = Promise.resolve(true);
      return this.viewController.dismiss({
        read_notes: true,
        lessons
      });
    });
  }

  openFlashCards() {
    if (this.flashCardCount === 0) return this.presentToast('This topic currently has no flashcard 😢.')

    return this.viewController.dismiss({
      flash_cards: true,
      topic: this.topic,
      subject: this.subject
    });
  }

  openMatchCards() {
    return this.viewController.dismiss({
      match_cards: true,
    });
  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }
}
