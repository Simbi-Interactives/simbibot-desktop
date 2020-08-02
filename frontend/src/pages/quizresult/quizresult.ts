import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { OfflineProvider } from "../../providers/offline/offline";
import { QuizPage } from "../quiz/quiz";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { Chart } from "chart.js";

@IonicPage()
@Component({
  selector: "page-quizresult",
  templateUrl: "quizresult.html"
})
export class QuizresultPage {
  result: any = {};
  loaded: Promise<boolean>;
  evaluation = {};
  questionType: string;
  subject: any;
  questions: any;
  hideEvaluation: boolean = true;
  mostFrequentTopic;
  frequentTopic: string;
  topicLoaded: boolean = false;

  exam_update: any;
  test_type: any;

  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  private doughnutLine: Chart;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public offlineProvider: OfflineProvider,
    public alertController: AlertController,
    private desktopProvider: DesktopProvider
  ) {
    this.result = this.navParams.get("result");
    this.evaluation = this.navParams.get("evaluation");
    this.questionType = this.navParams.get("questionType");
    this.subject = this.navParams.get("subject");
    this.exam_update = this.navParams.get('exam_update');
    this.test_type = this.navParams.get('test_type');
    this.loaded = Promise.resolve(true);

  }

  ionViewDidLoad() {
    let counts = {};
    let compare = 0;
    for (let i = 0; i < this.result.questions.length; i++) {
      let question_correct = this.result.questions[i].correct;
      let topic_id = this.result.questions[i].topic_id;

      if(topic_id != null) {
        if (question_correct == "no") {
          if (counts[topic_id] === undefined) {
            counts[topic_id] = 1;
          } else {
            counts[topic_id] = counts[topic_id] + 1;
          }
  
          if (counts[topic_id] > compare) {
            compare = counts[topic_id];
            this.mostFrequentTopic = topic_id;  
          }
        }
      }
    }
    
    if (this.questionType == "normal") {
      this.finalEvaluation();
    }
  }

  ionViewDidEnter() {
    this.chart()
  }

  chart() {
    this.doughnutLine = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Missed'],
        datasets: [{
          data: [parseInt(this.result.percentage), 100 - this.result.percentage],
          backgroundColor: ['rgb(75,226,110)', 'rgb(255,0,0)'],
        }]
      },
    })
  }

  finalEvaluation() {
    this.desktopProvider.fetchTopicById(this.mostFrequentTopic).subscribe((topic: any) => {
      console.log(topic);
      this.frequentTopic = topic;
      this.topicLoaded = true; 
    }); 
  }

  learnMore() {
    this.desktopProvider.fetchQuestionsForEvaluation(this.mostFrequentTopic)
      .subscribe(questions => {
        console.log(questions);
        this.navCtrl.setRoot(
          QuizPage,
          {
            test_type: 0,
            subject: this.subject,
            questions: questions,
            topic: this.frequentTopic,
            questionType: "practice"
          },
          {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
          }
        );
      });
  }
}
