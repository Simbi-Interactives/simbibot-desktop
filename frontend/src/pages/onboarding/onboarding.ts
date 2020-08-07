import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";
import { OfflineProvider } from "../../providers/offline/offline";
import { DesktopProvider } from "../../providers/desktop/desktop";

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
  keyPointsCount: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewController: ViewController,
    private alertCtrl: AlertController,
    private desktopProvider: DesktopProvider,
  ) {
    this.topic = this.navParams.get("topic");
    this.subject = this.navParams.get("subject");
    this.fetchQuestion(this.topic.id);
  }

  ionViewDidLoad() {
    this.fetchKeypointsCount()
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
        console.log('counts', this.hasKeypoints, this.topic.index)
      }, err => {
        console.log('err ', err);
      })
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
}
