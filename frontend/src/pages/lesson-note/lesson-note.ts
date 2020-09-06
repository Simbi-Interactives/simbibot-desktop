import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  // LoadingController,
  AlertController,
  ModalController,
} from "ionic-angular";
import { NativeAudio } from "@ionic-native/native-audio";
// import { AuthProvider } from "../../providers/auth/auth";
import { OfflineProvider } from "../../providers/offline/offline";
import { Storage } from "@ionic/storage";
// import { LearningProvider } from "../../providers/learning/learning";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import * as sanitizeHtml from 'sanitize-html';
// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";
import { QuestionType } from "../../contants";
import { QuizPage } from "../quiz/quiz";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { LessonOutlinePage } from "../lesson-outline/lesson-outline";


@IonicPage({ name: 'lessonNote-page' })
@Component({
  selector: "page-lesson-note",
  templateUrl: "lesson-note.html"
})
export class LessonNote {
  topic: any;
  subject: any;
  loaded: Promise<boolean>;
  currentIndex: number = 0;
  test_type = 0;
  width;
  user;
  lessons: any = [];
  currentLesson: any;
  outline: any = [];
  readingData: any;
  timer: any;
  isSendingLearningData: boolean = false;
  isPlayingAudio: boolean = false;


  @ViewChild("quizcard") quizcard: ElementRef;
  shake: boolean = false;
  shakeGreen: boolean = false;
  startTime: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private loader: LoadingController,
    private alertController: AlertController,
    public storage: Storage,
    private tts: TextToSpeech,
    private audio: NativeAudio,
    // public learningProvider: LearningProvider,
    public offlineProvider: OfflineProvider,
    private desktopProvider: DesktopProvider,
    public modalCtrl: ModalController,
  ) {

    this.storage.get("user").then(user => {
      this.user = user;
    });

    // this.questionType = this.navParams.get("questionType");
    this.topic = this.navParams.get("topic");
    this.subject = this.navParams.get("subject");
    this.lessons = this.navParams.get("lessons");
    console.log(this.lessons)
    this.createLessons();
  }

  ionViewDidLoad() {
    this.storage.get("user").then(user => {
      this.user = user;

      this.readingData = {
        user_id: this.user.id,
        user_name: this.user.full_name,
        topic_id: this.topic.id,
        subject_id: this.subject.id,
        topic_name: this.topic.topic,
        subject_name: this.subject.name,
        track_type: "reading",
        time_spent: 0,
        started_at: new Date().toISOString(),
        completed_at: null
      }
      this.startTime = new Date().toISOString();
      this.startReadingInterval();
    });
  }

  ionViewWillEnter() {

  }


  ionViewWillLeave() {
    this.tts.speak("")

    if (this.timer) clearInterval(this.timer);
    this.sendReadingData();
  }

  startReadingInterval() {
    this.readingData.started_at = new Date().toISOString();
    this.readingData.time_spent = 0;
    this.isSendingLearningData = false;

    this.timer = setInterval(() => {
      this.readingData.time_spent += 1;
    })
  }


  clearReadingInterval() {
    if (!this.timer) return;
    clearInterval(this.timer);
  }

  createLessons() {
    // console.log('topic ', this.topic)
    this.currentLesson = this.lessons[0];
    this.width = 0;
    this.loaded = Promise.resolve(true);
    this.outline = this.lessons.map((lesson, i) => ({ title: lesson.title, index: i }));
  }

  playAudio(lesson) {
    if (this.isPlayingAudio) return this.stopAudio();
    // console.log('text ', text);
    const clean = sanitizeHtml(`${lesson.title} . ${lesson.content}`, {
      allowedTags: [],
      allowedAtrributes: {}
    });
    console.log('clean ', clean);

    this.isPlayingAudio = true;
    this.tts.speak({ text: clean, rate: 0.75 })
      .then(() => {
        console.log('done playing')
        this.isPlayingAudio = false;
      })
      .catch((reason: any) => console.log(reason));

  }

  stopAudio() {
    this.isPlayingAudio = false
    this.tts.speak("")
      .then(() => console.log('stop playing'))
      .catch((error: any) => console.log('cannot stop ', error))
  }

  sendReadingData() {
    if (this.isSendingLearningData) return;
    console.log('data', this.readingData)

    this.readingData = {
      user_id: this.user.id,
      user_name: this.user.full_name,
      topic_id: this.topic.id,
      subject_id: this.subject.id,
      topic_name: this.topic.topic,
      subject_name: this.subject.name,
      track_type: "reading",
      time_spent: 0,
      started_at: this.startTime,
      completed_at: null
    }

    this.readingData.completed_at = new Date().toISOString();
    const diff = new Date(this.readingData.completed_at).getTime() - new Date(this.readingData.started_at).getTime();

    if (diff < (60 * 1000)) return;

    this.readingData.user_id = this.user.id;
    this.isSendingLearningData = true;

    this.desktopProvider.sendReadingData(this.readingData)
      .subscribe(res => console.log('lesson note data sent ', res))

    this.clearReadingInterval()
  }

  async skipToEvaluation(test_type) {
    console.log('send data ')

    this.sendReadingData();
    this.fetchQuestion(test_type)
      .subscribe((response: any) => {
        console.log('que ', response)

        this.loaded = Promise.resolve(true);

        if (response) {
          this.navCtrl.push(QuizPage, {
            subject: this.subject,
            topic: this.topic,
            test_type: test_type,
            questions: response,
            questionType: test_type === 0 ? QuestionType.practice : QuestionType.test,
          });
        }
      });

    // this.fetchQuestion(test_type).then(data => {

    // })
  }

  fetchQuestion(test_type) {
    const practice = test_type == 0 ? true : false;
    return this.desktopProvider.fetchQuestionsForEvaluation(this.topic.id)
  }

  next() {

    if (this.currentIndex + 1 < this.lessons.length) {
      this.currentLesson = this.lessons[this.currentIndex];
      this.currentIndex++;
      this.width = ((this.currentIndex + 1) / this.lessons.length) * 100;
    } else {
      this.showDoneAlert();
    }
  }

  prev() {
    if (this.currentIndex != 0) {
      this.currentIndex--;
      this.width = ((this.currentIndex + 1) / this.lessons.length) * 100;
      this.currentLesson = this.lessons[this.currentIndex];
    }

  }

  openContentModal() {
    console.log('open outline ', this.outline);
    let modal = this.modalCtrl.create(LessonOutlinePage, {
      outline: this.outline,
    });

    modal.present();

    modal.onDidDismiss(data => {
      if (data && data.index !== undefined) {
        console.log('index ', data.index);
        this.currentIndex = data.index;
        this.width = ((this.currentIndex + 1) / this.lessons.length) * 100;
      }
    })
  }

  showDoneAlert() {
    const alert = this.alertController.create({
      title: "Well, that's all",
      message: `Hey friend, you're done with the lesson note. What'd you like to do next?`,
      buttons: [

        {
          text: "Proceed to Evaluation",
          handler: () => {
            this.skipToEvaluation(1)
          }
        },
        {
          text: "Proceed to Interactive questions",
          handler: () => {
            this.skipToEvaluation(0)
          }
        }
      ],
      enableBackdropDismiss: false,
      cssClass: "my-custom-alert-success"
    });

    alert.present();
  }

  playCorrectSound() {
    this.audio.play("correct");
  }

  playWrongSound() {
    this.audio.play("wrong");
  }

}
