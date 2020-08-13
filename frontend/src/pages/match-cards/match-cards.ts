import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ModalController,
  Events,
} from "ionic-angular";
import { TextToSpeech } from '@ionic-native/text-to-speech';
// import { NativeAudio } from "@ionic-native/native-audio";
// import { AuthProvider } from "../../providers/auth/auth";
import { OfflineProvider } from "../../providers/offline/offline";
import { Storage } from "@ionic/storage";
import { DesktopProvider } from "../../providers/desktop/desktop";
// import { LearningProvider } from "../../providers/learning/learning";


// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";

@IonicPage({ name: 'matchcards-page' })
@Component({
  selector: "page-matchcards",
  templateUrl: "match-cards.html"
})
export class MatchCards {
  @ViewChild("timer") timerEl: ElementRef;
  @ViewChild("timerContainer") timerContainer: ElementRef;

  topic: any;
  subject: any;
  loaded: Promise<boolean> = Promise.resolve(true);
  user;
  timer: any;
  time: number = 0;
  matchData: any;
  dismissTimeout: any;
  addedTimeTimeout: any;
  selectedCard: any;
  learningData: any;
  matchCards: any[];
  newCards: any[];

  matchCount: number = 0;
  gameOver: boolean = false;
  newGame: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController,
    public storage: Storage,
    // private modalController: ModalController,
    // private tts: TextToSpeech,
    // private audio: NativeAudio,
    // private events: Events,
    public desktopProvider: DesktopProvider,
    public offlineProvider: OfflineProvider,
    // public modalCtrl: ModalController,
  ) {

    this.storage.get("user").then(user => {
      this.user = user;
    });


    this.topic = this.navParams.get('topic');
    this.subject = this.navParams.get('subject');
  }

  ionViewWillEnter() {
    this.storage.get("user").then(user => {
      this.user = user;
    });
  }

  ionViewDidLoad() {
    const loader = this.loader.create();
    loader.present().then(_ => {
      this.desktopProvider.fetchFlashCards(this.topic.id)
      .subscribe(cards => {
        this.matchData = cards;
        this.loaded = Promise.resolve(true);
        
        console.log('cards ', cards);
          this.initializeCards()

          this.learningData = {
            user_id: this.user.id,
            user_name: this.user.full_name,
            topic_id: this.topic.id,
            subject_id: this.subject.id,
            topic_name: this.topic.topic,
            subject_name: this.subject.name,
            track_type: "learning",
            time_spent: 0,
            started_at: null,
            completed_at: null
          }


          loader.dismiss();
        },
          (e) => {
            console.log('error ', e);
            loader.dismiss();
          })
    })
  }

  getFontSize(textLength) {
    let baseSize = 12;
    if (textLength >= baseSize) {
      textLength = baseSize - 4;
    }
    const fontSize = baseSize - textLength;
    return `${fontSize}vw`;
  }

  adjustCardFonts() {
    const cards = Array.from(document.querySelectorAll('.match-card p'))
    console.log(cards);
    cards.forEach((card: HTMLParagraphElement) => {
      card.style.fontSize = this.getFontSize(card.textContent.length)
    })
  }

  initializeCards() {
    const cards = []
    for (const data of this.matchData) {

      cards.push(...[{ matchId: data.id, term: data.title }, { matchId: data.id, term: data.content }])
    }
    this.newCards = [...cards];
    this.matchCards = this.shuffleArrary(cards.slice(0, 12));
    console.log('matchcards ', this.matchCards);
  }

  shuffleArrary(data) {
    let arr = data
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  getTimeInSeconds(timeStamp) {
    return Number((timeStamp / 1000)).toFixed(2);
  }

  ionViewWillLeave() {
    console.log('will leave')
    if (this.timer) clearInterval(this.timer);
    if (this.dismissTimeout) clearTimeout(this.dismissTimeout);
    // this.sendReadingData();
  }

  startReadingInterval() {
    this.timer = setInterval(() => {
      this.time += 1;
    })
  }

  restart() {    
    this.matchCards = this.shuffleArrary(this.newCards.slice(0, Math.min(12, this.newCards.length)));
    this.matchCount = 0;
    this.gameOver = false;
    this.time = 0;
    this.startReadingInterval();
  }

  start() {
    this.newGame = false;
    this.startReadingInterval()
    // this.adjustCardFonts()
  }

  handleCardSelect(e) {
    const card = e.target;

    if (card.classList.contains('selected')) {
      this.selectedCard = null;
      return card.classList.remove('selected')
    }

    if (!this.selectedCard) {
      this.selectedCard = card;
      // console.log('selected ', card);
      return card.classList.add('selected');
    }

    let card1 = this.selectedCard;
    card1.classList.remove('selected')
    this.selectedCard = null;

    if (card1.dataset.correctId === card.dataset.correctId) {
      return this.markCorrect(card1, card);
    }

    this.markWrong(card1, card);

  }

  markCorrect(card1, card2) {
    this.matchCount += 1;
    if (this.matchCount === this.matchCards.length / 2) {
      // game done
      // console.log('game over')
      this.matchCards = [];
      this.gameOver = true;
      clearInterval(this.timer);
    }
    card1.classList.add('correct')
    card2.classList.add('correct')
  }

  markWrong(card1, card2) {
    card1.classList.add('wrong')
    card2.classList.add('wrong')
    this.time += 1000;
    this.displayExtraTime();

    this.dismissTimeout = setTimeout(() => {
      card1.classList.remove('wrong')
      card2.classList.remove('wrong')
    }, 500)
  }

  displayExtraTime() {
    const p = document.createElement('p');
    p.textContent = '+1 sec';
    p.classList.add('added-time');

    this.timerContainer.nativeElement.appendChild(p);
    this.addedTimeTimeout = setTimeout(() => {
      this.timerContainer.nativeElement.removeChild(p);
    }, 800)
  }

  // sendReadingData() {
  //   if (this.isSendingLearningData) return;

  //   this.matchData.completed_at = new Date().toISOString();
  //   const diff = new Date(this.matchData.completed_at).getTime() - new Date(this.matchData.started_at).getTime();

  //   if (diff < (60 * 1000)) {
  //     console.log('less than a minute ', diff)
  //     return;
  //   }

  //   this.matchData.user_id = this.user.id;
  //   console.log('reading data ', this.matchData);
  //   this.isSendingLearningData = true;

  //   this.learningProvider.sendReadingData(this.matchData)
  // }


}
