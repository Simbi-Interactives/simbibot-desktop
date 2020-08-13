import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ToastController
} from "ionic-angular";
import { OfflineProvider } from "../../providers/offline/offline";
import { OnboardingPage } from "../onboarding/onboarding";
import { QuizPage } from "../quiz/quiz";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { LessonNote } from "../lesson-note/lesson-note";
import { MatchCards } from "../match-cards/match-cards";

/**
 * Generated class for the TopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-topic",
  templateUrl: "topic.html"
})
export class TopicPage {
  subject: any;
  questionType: string;
  topics: any[] = [];
  loaded: Promise<boolean>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public offlineProvider: OfflineProvider,
    public modalCtrl: ModalController,
    public desktopProvider: DesktopProvider,
    private toastCtrl: ToastController
  ) {
    this.subject = this.navParams.get("subject");
    this.questionType = this.navParams.get("questionType");
    this.fetchTopics(this.subject.id);
  }

  ionViewDidLoad() { }

  fetchTopics(id) {
    this.desktopProvider.fetchTopics(this.subject.id).subscribe((response: any) => {
      this.topics = response;
      this.loaded = Promise.resolve(true);
    }, (err: any) => {
      this.toastCtrl.create({
        message: 'An error occured'
      }).present();
    });
  }

  openTopicInfo(i) {
    let modal = this.modalCtrl.create(OnboardingPage, {
      subject: this.subject,
      topic: this.topics[i]
    });

    modal.present();

    modal.onDidDismiss(data => {
      console.log('data ', data)
      if (data) {
        if (data.take_test != null) {
          this.navCtrl.setRoot(QuizPage, {
            subject: this.subject,
            topic: this.topics[i],
            test_type: data.test_type,
            questions: data.questions,
            questionType: this.questionType
          });
        } else if(data.read_notes === true) {
          this.navCtrl.setRoot(LessonNote, {
            subject: this.subject,
            topic: this.topics[i],
            lessons: data.lessons,
          });
        } else if (data.match_cards === true) {
          this.navCtrl.push(MatchCards, {
            topic: this.topics[i],
            subject: this.subject,
          })
        } 
      }
    });
  }
}
