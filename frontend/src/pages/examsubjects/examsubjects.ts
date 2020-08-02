import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { OfflineProvider } from "../../providers/offline/offline";
import { config } from "../../config";
import { QuizPage } from "../quiz/quiz";
import { DesktopProvider } from "../../providers/desktop/desktop";

/**
 * Generated class for the ExamsubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-examsubjects",
  templateUrl: "examsubjects.html"
})
export class ExamsubjectsPage {
  config: any;
  loaded: Promise<boolean>;
  subjects: any;
  selectedSubject: any;
  exam: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public offlineProvider: OfflineProvider,
    public loadingCtrl: LoadingController,
    public desktopProvider: DesktopProvider
  ) {
    
  }

  ionViewDidLoad() { 
    this.exam = this.navParams.get('exam');
    console.log(this.exam)
    this.subjects = JSON.parse(this.exam.subjects_list);
    this.loaded = Promise.resolve(true);
  }

 

  proceedToQuiz(i) {
    this.selectedSubject = this.subjects[i];
    const loader = this.loadingCtrl.create({
      content: "Loading..."
    });

    loader.present();
    this.desktopProvider.fetchQuestionForExam(
        this.selectedSubject.id,
        this.exam.id
      )
      .subscribe(data => {
        this.desktopProvider.fetchQuestionForExamCount(
            this.selectedSubject.id,
            this.exam.id
          ).subscribe(count => {
            loader.dismiss();
            this.navCtrl.setRoot(QuizPage, {
              subject: this.selectedSubject,
              test_type: 2,
              questions: data,
              questionType: "normal",
              count,
              exam: this.exam
            });
          })
      });
  }
}
