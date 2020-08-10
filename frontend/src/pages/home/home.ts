import { Component } from "@angular/core";
import { NavController, LoadingController, Events, ToastController } from "ionic-angular";
import { config } from "../../config";
import { TopicPage } from "../topic/topic";
import { ExamsubjectsPage } from "../examsubjects/examsubjects";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { PostutmePage } from "../postutme/postutme";
import { SessionProvider } from "../../providers/session/session";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  config: any;
  subjects: any[];
  loaded: Promise<boolean>;

  exams: any[];
  examLoaded: Promise<boolean>;
  user: any;

  constructor(
    public navCtrl: NavController,
    private session: SessionProvider,
    private loadingCtrl: LoadingController,
    public events: Events,
    private desktopProvider: DesktopProvider,
    private toastCtrl: ToastController
  ) {
    this.user = this.session.getUser();
    this.fetchSubjects();
    this.fetchSuperExams();
  }

  fetchSubjects() {
    this.desktopProvider.fetchSubjects().subscribe((response: any) => {
      this.subjects = response;
      this.loaded = Promise.resolve(true);
    }, (err: any) => {
      this.toastCtrl.create({
        message: 'An error occured'
      }).present();
    })
  }

  fetchSuperExams() {
    this.desktopProvider.fetchSuperExam().subscribe((response: any) => {
      this.exams = response.filter((val) => {
        if(val.show == 1) {
          return val;
        }
      });
      this.examLoaded = Promise.resolve(true);
    }, (err: any) => {
      this.toastCtrl.create({
        message: 'An error occured'
      }).present();
    })
  }

  gotoTopicPage(i, subjectFiltered) {
    let subject = subjectFiltered;
    this.navCtrl.push(
      TopicPage,
      {
        subject: subject,
        questionType: "practice"
      },
      {
        animate: true,
        animation: "transition-ios",
        direction: "forward"
      }
    );
  }

  gotoSubjects(exam) {

    if(exam.has_subexam == 0) {
      this.navCtrl.push(ExamsubjectsPage, {
        exam
      }, {
        animate: true,
        animation: "transition-ios",
        direction: "forward"
      });
    } else {
      this.navCtrl.push(PostutmePage, { exam }, {
        animate: true,
        animation: "transition-ios",
        direction: "forward"
      });
    }
  }
}
