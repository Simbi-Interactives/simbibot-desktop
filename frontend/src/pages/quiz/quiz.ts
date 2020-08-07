import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController
} from "ionic-angular";
import { NativeAudio } from "@ionic-native/native-audio";
import { AuthProvider } from "../../providers/auth/auth";
import { OfflineProvider } from "../../providers/offline/offline";
import { QuizresultPage } from "../quizresult/quizresult";
import { Storage } from "@ionic/storage";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { SessionProvider } from "../../providers/session/session";
import { TopicPage } from "../topic/topic";
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html"
})
export class QuizPage {
  topic: any;
  subject: any;
  loaded: Promise<boolean>;
  questions: any[] = [];
  currentQuestion: any;
  currentIndex: number = 0;
  trialNumbers = 2;
  scores = 0;
  test_type = 0;
  selectedQuestion: any[] = [];
  time: any;
  timer: any;
  cleanQuestions;
  width;
  answer_input: string;
  user;
  showCorrectAnswer: boolean;
  questionType: string;
  topicId: any;
  canPlaySound: boolean;
  totalExamQuestionCount: number = 0;
  hasSubmitted: boolean = false;
  currentEvaluationId: number;

  @ViewChild("quizcard") quizcard: ElementRef;
  shake: boolean = false;
  shakeGreen: boolean = false;

  exam: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController,
    private alertController: AlertController,
    public storage: Storage,
    private toastCtrl: ToastController,
    private audio: NativeAudio,
    public userProvider: AuthProvider,
    public offlineProvider: OfflineProvider,
    private desktopProvider: DesktopProvider,
    private sessionProvider: SessionProvider
  ) {
    this.test_type = this.navParams.get("test_type");
    this.questionType = this.navParams.get("questionType");
    this.topicId = this.navParams.get("topicId");
    this.totalExamQuestionCount = this.navParams.get('count');
    if (this.navParams.get('exam') != undefined && this.navParams.get('exam') != null) {
      this.exam = this.navParams.get('exam');
    }

    this.storage.get("user").then(user => {
      this.user = user;
    });
    this.topic = this.navParams.get("topic");
    this.subject = this.navParams.get("subject");

    if (this.test_type == 0) {
      if (!this.topicId) {
        let preFetchQuestions = this.navParams.get("questions");
        this.createQuestions(preFetchQuestions);
      } else if (this.topicId) {
      }
    } else {
      this.taketest();
    }
  }

  ionViewDidLoad() {
    this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
  }



  ionViewWillLeave() {
    if (this.timer) clearInterval(this.timer);
  }

  createQuestions(que) {
    this.questions = que.map(question => {
      question["disabled"] = [false, false, false, false, false];
      return question;
    });
    this.questions = this.questions;
    this.cleanQuestions = this.questions; /// Change!!!!!
    this.currentQuestion = this.questions[0];
    this.loaded = Promise.resolve(true);
  }

  checkAnswer(i) {
    let selected_answer = this.currentQuestion.options[i].id;
    let correct_answer = this.currentQuestion.answer.id;
    if (this.trialNumbers == 2) {
      this.questions[this.currentIndex]["disabled"][i] = true;
      if (selected_answer == correct_answer) {
        this.shakeGreenCard().then(() => {
          this.showRealAnswer(true);
          this.trialNumbers = 0;
          this.scores++;
        });
      } else {
        this.trialNumbers--;
        this.shakeCard().then(() => {
          let alertCtrl = this.alertController.create({
            // title: "Incorrect answer",
            subTitle: `${this.currentQuestion.options[i].option_text} is incorrect`,
            buttons: ["Try Again"],
            cssClass: "my-custom-alert-danger"
          });

          alertCtrl.present();
        });
      }
    } else if (this.trialNumbers == 1) {
      this.questions[this.currentIndex]["disabled"][i] = true;
      if (selected_answer == correct_answer) {
        this.shakeGreenCard().then(() => {
          this.showRealAnswer(true);
          this.trialNumbers = 0;
          this.scores++;
        });
      } else {
        this.shakeCard(true).then(() => {
          let alertCtrl = this.alertController.create({
            // title: "Incorrect answer",
            subTitle: `${this.currentQuestion.options[i].option_text} is incorrect`,
            buttons: [
              {
                text: "View answer",
                handler: () => {
                  this.showRealAnswer();
                }
              }
            ],
            cssClass: "my-custom-alert-danger"
          });

          alertCtrl.present();
        });
      }
    }
  }

  onEndClick() {
    clearInterval(this.timer);
    this.navCtrl.setRoot(TopicPage, {
      subject: this.subject,
      questionType: "practice"
    })
  }

  showRealAnswer(userCorrect?) {
    if (userCorrect) {
      let alertCtrl = this.alertController.create({
        // title: "You are correct",
        subTitle: `${this.questions[this.currentIndex].answer.option_text} is correct`,
        buttons: [
          {
            text: "View Explanation",
            handler: () => {
              this.showCorrectAnswer = true;
            }
          },
          {
            text: "Got it",
            handler: () => {
              this.onGotItClick();
            }
          }
        ],
        cssClass: "my-custom-alert-success",
        enableBackdropDismiss: false
      });

      alertCtrl.present();
    } else {
      this.showCorrectAnswer = true;
    }
  }

  onGotItClick() {
    this.showCorrectAnswer = false;
    this.next();
  }

  next() {
    if (this.test_type == 0) {
      this.showCorrectAnswer = false;
      this.answer_input = null;
      if (this.currentIndex + 1 === this.questions.length) {
        this.showDoneAlert();
      } else if (this.currentIndex < this.questions.length) {
        this.currentIndex++;
        this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
        this.trialNumbers = 2;
        this.currentQuestion = this.questions[this.currentIndex];
      }
    } else {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
        this.trialNumbers = 2;
        this.currentQuestion = this.questions[this.currentIndex];
      }
    }
  }

  prev() {
    this.showCorrectAnswer = false;
    this.answer_input = null;
    if (this.currentIndex != 0) {
      this.currentIndex--;
    }
    this.trialNumbers = 2;
    this.currentQuestion = this.questions[this.currentIndex];
    this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
  }

  taketest() {
    this.loaded = Promise.resolve(false);
    this.hasSubmitted
    this.currentIndex = 0;
    this.scores = 0;
    const loader = this.loader.create({
      content: "Loading..."
    });
    loader.present();
    // console.log("quiz id", this.topic.id);
    console.log("test_type", this.test_type);
    if (this.test_type == 1) {
      this.desktopProvider.fetchQuestionsForTest(this.topic.id).subscribe(
        (response: any) => {
          this.questions = response;
          this.cleanQuestions = response;
          this.selectedQuestion = [];
          this.populateSelected(this.questions);
          this.calculateTime(12);
          this.test_type = 1;
          this.storeInitialEvalution();
          this.loaded = Promise.resolve(true);
          loader.dismiss();
        },
        error => {
          // this.alertNotFound;
          loader.dismiss();
        }
      );
    } else if (this.test_type == 2) {
      this.questions = this.navParams.get("questions");
      this.cleanQuestions = this.navParams.get("questions");
      this.selectedQuestion = [];
      this.populateSelected(this.questions);
      this.calculateTime(12);
      this.test_type = 2;
      this.storeInitialExamResult();
      this.loaded = Promise.resolve(true);
      loader.dismiss();
    } else {
      console.log("else", this.test_type);
      loader.dismiss();
    }
  }

  populateSelected(questions) {
    for (let i = 0; i < questions.length; i++) {
      this.selectedQuestion.push({
        questionId: questions[i].id,
        answerId: ""
      });
    }
  }

  showDoneAlert() {
    // this.shareUserTrack();
    const alert = this.alertController.create({
      title: "Congratulation",
      subTitle: `You have completed your lesson on ${this.topic.topic}`,
      message: `<ion-icon name="ios-thumbs-up" [ngStyle]="{'color' : ${this.subject.color} } class="thumb"></ion-icon>`,
      buttons: [
        {
          text: "Relearn",
          handler: () => {
            this.relearn();
          }
        },
        {
          text: "Take Test",
          handler: () => {
            this.test_type = 1;
            this.taketest();
          }
        }
      ],
      enableBackdropDismiss: false,
      cssClass: "custom-css"
    });

    alert.present();
  }

  relearn() {
    this.loaded = Promise.resolve(false);
    this.currentIndex = 0;
    this.trialNumbers = 2;
    this.scores = 0;
    this.questions = this.cleanQuestions;
    this.loaded = Promise.resolve(true);
  }

  calculateTime(time) {
    let minute = time;
    let second = 0;
    this.timer = setInterval(() => {
      if (minute == 0 && second == 0) {
        clearInterval(this.timer);
        if (!this.hasSubmitted) {
          this.submit();
        }
      } else if (second == 0) {
        minute--;
        second = 59;
      } else {
        second = second - 1;
      }
      this.time = minute + ":" + second;
    }, 1000);
  }

  addToSelected(question, answer) {
    for (let i = 0; i < this.selectedQuestion.length; i++) {
      if (this.selectedQuestion[i].questionId == question) {
        this.selectedQuestion[i].answerId = answer;
        break;
      }
    }
  }

  submit() {
    const time_second: number = parseInt(this.time.substring(0, 2), 10);
    if (time_second > 0) {
      this.alertController
        .create({
          subTitle: "Are you sure you want submit ?",
          buttons: [
            {
              text: "cancel",
              role: "cancel"
            },
            {
              text: "Yes",
              handler: () => {
                this.runSubmit();
              }
            }
          ]
        })
        .present();
    } else {
      this.runSubmit();
    }
  }

  runSubmit() {
    this.hasSubmitted = true;
    clearInterval(this.timer);
    let loader = this.loader.create({
      cssClass: "my-loading"
    });
    loader.present();

    const body = {
      score: null,
      end_time: new Date(Date.now()),
      completed_at: new Date(Date.now()),
      // topic_id: this.topic.id,
      status: 'completed',
      id: this.currentEvaluationId
    };

    for (let i = 0; i < this.selectedQuestion.length; i++) {
      if (this.questions[i].id == this.selectedQuestion[i].questionId) {
        if (this.selectedQuestion[i].answerId == this.questions[i].answer.id) {
          this.scores++;
        }
      }
    }

    body.score = this.scores;

    if (this.test_type == 1) {
      this.desktopProvider.updateInitialEvaluation(body).subscribe((response: any) => {
        console.log(response);
      }, (err: any) => {
        console.log(err);
      });
    }

    if (this.test_type == 2) {
      this.storeExamresultUpdate();
    }



    let percentage = (this.scores / this.questions.length) * 100;
    loader.dismiss();
    const resultAlert = this.alertController.create({
      title: "Test Completed",
      subTitle: `Your score is ${this.scores} out of ${this.questions.length}`,
      message: `Your percentage score is ${percentage.toFixed(2)}%`,
      buttons: [
        {
          text: "Try Again",
          handler: () => {
            this.tryTestAgain();
          }
        },
        {
          text: "View Correction",
          handler: () => {
            this.goToResult();
          }
        }
      ],
      enableBackdropDismiss: false
    });
    resultAlert.present();
  }

  sendUserProgress(body) {
    let user = this.sessionProvider.getUser();
  }

  shareUserTrack() {
    console.log('share track ', this.user.id, this.topic.id)
    this.userProvider
      .updateUserTrack(this.user.id, this.topic.id)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  tryTestAgain() {
    if (this.timer) clearInterval(this.timer);
    this.taketest();
  }

  goToResult() {
    const result: any = {};
    const evaluation: any = {};
    evaluation["questions"] = [];
    result["score"] = this.scores;
    result["percentage"] = (this.scores / this.questions.length) * 100;
    result["total"] = this.questions.length;
    result["questions"] = [];
    for (let i = 0; i < this.selectedQuestion.length; i++) {
      if (this.questions[i].id == this.selectedQuestion[i].questionId) {
        if (this.selectedQuestion[i].answerId == this.questions[i].answer.id) {
          evaluation.questions.push({
            questionId: this.questions[i].id,
            correctBool: true
          });
          result.questions.push({
            question: this.questions[i].question,
            topic_id: this.questions[i].topic_id,
            correct: "yes",
            chosen: this.questions[i].answer.option_text,
            answer: this.questions[i].answer.option_text,
            explanation: this.questions[i].explanation
          });
        } else {
          result.questions.push({
            question: this.questions[i].question,
            correct: "no",
            topic_id: this.questions[i].topic_id,
            chosen: this.questions[i].options.filter(opt => {
              if (opt.id == this.selectedQuestion[i].answerId) {
                return opt.option_text;
              }
            }),
            answer: this.questions[i].answer.option_text,
            explanation: this.questions[i].explanation
          });
          evaluation.questions.push({
            questionId: this.questions[i].id,
            correctBool: false
          });
        }
      }
    }



    this.navCtrl.setRoot(
      QuizresultPage,
      {
        result: result,
        evaluation: evaluation,
        questionType: this.questionType,
        subject: this.subject
      },
      {
        animate: true,
        animation: "transition-ios",
        direction: "forward"
      }
    );
  }

  shakeCard(veiwCorrect?) {
    return new Promise((resolve, reject) => {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;

        resolve(true);
      }, 1000);
    });
  }

  shakeGreenCard() {
    return new Promise((resolve, reject) => {
      this.shakeGreen = true;
      setTimeout(() => {
        this.shakeGreen = false;

        resolve(true);
      }, 1000);
    });
  }


  storeInitialEvalution() {
    const user = this.sessionProvider.getUser();
    const body = {
      topic_id: this.topic.id,
      subject_id: this.subject.id,
      status: 'started',
      user_id: user.id,
      completed_at: null,
      end_time: null,
      score: 0
    };
    this.desktopProvider.storeInitialEvaluation(body).subscribe((response: any) => {
      this.currentEvaluationId = response.id;
    }, (err: any) => {
      console.log(err);
    })
  }

  storeInitialExamResult() {
    const user = this.sessionProvider.getUser();
    const body = {
      exam_id: this.exam.id,
      subject_id: this.subject.id,
      score: 0,
      user_id: user.id,
      completed_at: null,
      start_time: new Date(Date.now()),
      end_time: null,
      recommended_topic: null
    };
    this.desktopProvider.storeInitialExaminationResult(body).subscribe((response: any) => {
      this.currentEvaluationId = response.id;
    }, (err: any) => {
      console.log(err);
    })
  }

  storeExamresultUpdate() {
    console.log('exam ', this.test_type, this.selectedQuestion)
    const result: any = {};
    result["questions"] = [];
    for (let i = 0; i < this.selectedQuestion.length; i++) {
      if (this.questions[i].id == this.selectedQuestion[i].questionId) {
        if (this.selectedQuestion[i].answerId == this.questions[i].answer.id) {
          result.questions.push({
            question: this.questions[i].question,
            topic_id: this.questions[i].topic_id,
            correct: "yes",
            chosen: this.questions[i].answer.option_text,
            answer: this.questions[i].answer.option_text,
            explanation: this.questions[i].explanation
          });
        } else {
          result.questions.push({
            question: this.questions[i].question,
            correct: "no",
            topic_id: this.questions[i].topic_id,
            chosen: this.questions[i].options.filter(opt => {
              if (opt.id == this.selectedQuestion[i].answerId) {
                return opt.option_text;
              }
            }),
            answer: this.questions[i].answer.option_text,
            explanation: this.questions[i].explanation
          });
        }
      }
    }

    let counts = {};
    let compare = 0;
    let current_topic_id;
    let recommended_topic = null;

    console.log('result ', result.questions)
    for (let i = 0; i < result.questions.length; i++) {
      let question_correct = result.questions[i].correct;
      let topic_id = result.questions[i].topic_id;
      console.log(topic_id);

      if (topic_id != null) {
        if (question_correct == "no") {
          if (counts[topic_id] === undefined) {
            counts[topic_id] = 1;
          } else {
            counts[topic_id] = counts[topic_id] + 1;
          }

          if(!recommended_topic) recommended_topic = topic_id;

          if (counts[topic_id] > counts[recommended_topic]) {
            recommended_topic = topic_id;
          }
        }
      }

      if ((i + 1) == result.questions.length) {
        console.log(topic_id, counts, compare)
        break;
      }

    }

    if (this.questionType == "normal") {
      
      let exam_update = {
        score: this.scores,
        end_time: new Date(Date.now()),
        completed_at: new Date(Date.now()),
        id: this.currentEvaluationId,
        recommended_topic: recommended_topic
      };

      console.log('exam update ', exam_update)

      this.desktopProvider.updateExaminationResult(exam_update).subscribe((response: any) => {
        console.log(response);

      }, (err: any) => {
        console.log(err);
      });
    }

  }
}
