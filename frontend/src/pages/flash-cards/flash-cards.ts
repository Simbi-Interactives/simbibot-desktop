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
// import { LearningProvider } from "../../providers/learning/learning";
import * as sanitizeHtml from 'sanitize-html';
import { Keys } from "../../contants";
import { DesktopProvider } from "../../providers/desktop/desktop";
import { LessonNote } from "../lesson-note/lesson-note";


// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";

@IonicPage({ name: 'flashcards-page' })
@Component({
  selector: "page-flashcards",
  templateUrl: "flash-cards.html"
})
export class FlashCard {
  @ViewChild("flashcards") flashcards: ElementRef;

  topic: any;
  subject: any;
  loaded: Promise<boolean>;
  user;
  timer: any;
  readingData: any;
  flashCards: any;
  flashOutroCard: any;
  remainingCards: any;
  readCards: any;
  activeCard: any;
  activeCardStatus: any;
  activeCardRect: any;
  isAnimating: any;
  touchStartRect: any;
  touchEndRect: any;
  cardToAnimate: any;
  learningDone: boolean = false;
  isSendingLearningData: boolean = false;
  studyAgain: Set<any> = new Set();
  dismissTimeout: any;
  displayGuides: boolean = false;
  displayLeftDragGuide: boolean = false;
  displayRightDragGuide: boolean = false;
  displaySoundGuide: boolean = false;
  displayFlipGuide: boolean = false;

  flashCardData: Array<any>;
  matchCardsPage: string = 'matchcards-page';
  lessonNote: string = 'lessonNote-page';
  requestId: any;
  eventTouches: any;

  subscribed: boolean = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController,
    public storage: Storage,
    // private modalController: ModalController,
    private tts: TextToSpeech,
    // private audio: NativeAudio,
    // private events: Events,
    public destkopProvider: DesktopProvider,
    public offlineProvider: OfflineProvider,
    public modalCtrl: ModalController,
  ) {


    this.storage.get("user").then(user => {
      this.user = user;
    });

    this.topic = this.navParams.get('topic');
    this.subject = this.navParams.get('subject');
  }

  ionViewWillEnter() {
    const loader = this.loader.create();
    loader.present().then(_ => {
      console.log('topic ', this.topic);
      this.destkopProvider.fetchFlashCards(this.topic.id)
        .subscribe((flashcards: any) => {
          this.flashCardData = flashcards;
          this.learningDone = false;
          this.loaded = Promise.resolve(true);
          // this.initializeCards();
          setTimeout(() => {
            this.initializeCards()

            console.log('user ', this.user);
            this.readingData = {
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
            this.startReadingInterval();

          }, 100);
          loader.dismiss();
        }, (e) => {
          console.log('error ', e);
          loader.dismiss();
        })
    })
  }

  async ionViewDidLoad() {
    this.displayGuides = await this.storage.get(Keys.DISPLAY_FLASHCARD_GUIDES);
    if (this.displayGuides === null) {
      this.displaySoundGuide = true;
      this.displayLeftDragGuide = true;
      this.displayRightDragGuide = true;
      this.displayFlipGuide = true;
    }

    console.log('display guides ', this.displayGuides)
  }

  ionViewWillLeave() {

    this.sendReadingData();
    if (this.timer) clearInterval(this.timer);
    if (this.dismissTimeout) clearTimeout(this.dismissTimeout);
    this.tts.speak("");
    // this.sendReadingData();

    if (this.displayGuides) {
      this.displaySoundGuide = false;
      this.displayLeftDragGuide = false;
      this.displayRightDragGuide = false;
      this.displayFlipGuide = false;
    }

    this.storage.set(Keys.DISPLAY_FLASHCARD_GUIDES, false)
  }

  showGuides() {
    if (this.learningDone) return;
    this.displayGuides = true;
    // setInterval(() => {
    //   this.displayGuides = false;
    // }, 3000)
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
    clearInterval(this.timer);
  }

  restart() {
    this.reverseReadCards();
  }

  restartWithStudyAgain() {
    console.log(this.studyAgain.values())

    if (this.studyAgain.size > 0) this.reverseReadCards(true);
  }

  playAudio(text) {
    // disable sound guide on first attempt to playsound
    if (this.displaySoundGuide) this.displaySoundGuide = false;

    const clean = sanitizeHtml(text, {
      allowedTags: [],
      allowedAtrributes: {}
    });

    this.tts.speak(clean)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  initializeCards() {
    this.flashCards = document.querySelector('.flash-cards')
    this.flashOutroCard = document.querySelector('.flash-done');
    this.remainingCards = Array.from(document.querySelectorAll('.flash-card'));
    this.readCards = [];
    // console.log('remain ', this.remainingCards)
    this.activeCard = null;
    this.activeCardStatus = null;
    this.isAnimating = false;
    this.cardToAnimate = null;
    this.activeCardRect = null;
    this.touchStartRect = {};

  }

  handleTouchStart(event: any) {
    // const coord = {x: event.touches[0].clientX, y: event.touches[0].clientY}
    const eventTarget = event.target;

    const activeParent = eventTarget.parentNode.classList.contains('active')
      ? eventTarget.parentNode
      : eventTarget;

    // console.log('target ', eventTarget)

    if (activeParent.classList.contains('active')) {
      this.cardToAnimate = activeParent;
      this.activeCard = this.cardToAnimate;
      this.activeCardStatus = this.activeCard.querySelector('.flash-card-status')
      // this.cardToAnimate.style.transition = 'none';
      this.activeCardRect = this.activeCard.getBoundingClientRect();
      this.touchStartRect = { x: event.clientX, y: event.clientY }
    }

  }


  handleTouchMove(e) {
    // console.log('touchmove ', e)
    if (this.cardToAnimate) {
      // console.log('mouse  move ', e.clientX, e.clientY );
      this.isAnimating = true;
      // this.touchEndRect = { x: e.clientX, y: e.clientY }
      // this.AnimateActiveCard(e.touches[0]);
      this.eventTouches = { clientX: e.clientX, clientY: e.clientY }
      if (this.requestId != null) return;
      this.requestId = requestAnimationFrame(this.AnimateActiveCard.bind(this, this.eventTouches))

    }
  }

  handleTouchEnd(event) {
    const cardToFlip = event.target.parentNode;    

    if (this.isAnimating) {
      this.stopAnimation(this.touchEndRect);
    } else {
      this.isAnimating = false;
      this.cardToAnimate = null;
      this.flipCard(cardToFlip);
    }
  }

  handleOnTransitionEnd(e) {
    // console.log('transition end ', e);
    if (e.target.classList.contains('active') && e.propertyName === 'transform') {

      e.target.style.transition = 'transform .8s';
      e.target.removeEventListener('transitionend', this.handleOnTransitionEnd);
    }
  }

  stopAnimation(e) {
    cancelAnimationFrame(this.requestId);
    this.requestId = null;

    const lastX = this.touchEndRect.x - this.touchStartRect.x;
    const endY = this.touchEndRect.y - this.touchStartRect.y;
    this.activeCard.style.transition = 'transform .3s ease-out';
    this.activeCardStatus.style.opacity = '0';
    // console.log('dissmiss ', Math.abs(lastX) > this.activeCardRect.width / 2)

    // listen transitionEnd event and restore card transition to default (.3s)
    this.activeCard.addEventListener('transitionend', this.handleOnTransitionEnd);

    if (Math.abs(lastX) > this.activeCardRect.width / 4) {
      const right = lastX > 0 ? true : false;

      if (right) {
        this.activeCard.style.transform = `translate3d(100vw, ${endY}px, 0px)`;
        this.activeCard.style.tranform = `translateY(${endY}px)`;
        let lastDismissedCard = this.activeCard;
        this.dismissTimeout = setTimeout(() => {
          lastDismissedCard.classList.add('read');
        }, 300);
        // console.log('got it  ', this.activeCard.dataset);
        this.studyAgain.delete(this.activeCard.dataset.id);

        // disable right drag guide on first right drag attempt 
        if (this.displayRightDragGuide) this.displayRightDragGuide = false;
      } else {
        this.activeCard.style.transform = `translate3d(-100vw, ${endY}px, 0px)`;
        this.activeCard.style.tranform = `translateY(${endY}px)`;
        this.studyAgain.add(this.activeCard.dataset.id);
        // console.log('study again', this.studyAgain);

        // disable left drag guide on first left drag attempt 
        if (this.displayLeftDragGuide) this.displayLeftDragGuide = false;
      }

      this.readCards.push(this.activeCard);
      this.remainingCards.pop();
      this.setNextActiveCard();

    } else {
      this.activeCard.style.transform = 'none';
    }

    // this.activeCard = null;  
    this.isAnimating = false
    this.cardToAnimate = null;
    this.activeCardStatus = null;
    // this.touchStartRect = null;
  }

  setNextActiveCard() {
    // console.log(this.readCards, this.remainingCards)
    // console.log(' active ', this.activeCard, this.activeCard.classList);
    if (this.remainingCards.length > 0) {
      // this.activeCard = this.remainingCards[this.remainingCards.length - 1];
      let nextCard = this.activeCard.previousElementSibling;
      // console.log('new active ', nextCard);
      nextCard.classList.add('active');
      nextCard.style.transform = 'none';
    } else {
      // this.flashOutroCard.classList.add('show')
      this.learningDone = true;

      this.sendReadingData();
    }
  }

  AnimateActiveCard(e) {

    // console.log('aac ', e, this.touchEndRect);
    if (!this.isAnimating || !this.cardToAnimate) return;

    const x = this.eventTouches.clientX - this.touchStartRect.x;
    const y = this.eventTouches.clientY - this.touchStartRect.y;
    this.touchEndRect = { x: this.eventTouches.clientX, y: this.eventTouches.clientY }

    // console.log('x ', x, ' y ', y, this.activeCard, this.cardToAnimate);
    this.cardToAnimate.style.transition = 'none';
    this.cardToAnimate.style.transform = `translate3d(${x}px, ${y}px, 0px)`;

    const right = x > 1 ? true : false;
    const cardOpacity = Math.min((Math.abs(x / (this.activeCardRect.width / 4)) * 1), 1);
    // console.log('opacity ', cardOpacity);

    if (right) {
      this.activeCardStatus.style.background = 'green';
      this.activeCardStatus.style.opacity = `${cardOpacity}`
      this.activeCardStatus.textContent = 'Got it';

    } else {
      this.activeCardStatus.style.background = 'orange';
      this.activeCardStatus.style.opacity = `${cardOpacity}`;
      this.activeCardStatus.textContent = 'Study again';
    }

    requestAnimationFrame(this.AnimateActiveCard.bind(this))
  }

  flipCard(card) {
   
    // const card = event.target.parentNode.parentNode;

    if (!card.classList.contains('active')) return;

    // const innerCard = card.querySelector('.flash-card--inner');

    if (card.classList.contains('flip')) {
      card.classList.remove('flip')
      card.style.transform = 'rotateY(0deg)'
    } else {
      card.style.transform = 'rotateY(-180deg)'
      card.classList.add('flip');
    }

    // flip action has been detected
    if (this.displayFlipGuide) this.displayFlipGuide = false
  }

  UndoDissmis() {
    // console.log('undo last swipe ', this.readCards, this.remainingCards)
    if (this.readCards.length > 0 && this.remainingCards.length > 0) {

      const nextCard = this.readCards.pop();
      const lastActive = this.activeCard;

      this.remainingCards.push(nextCard);

      this.activeCard.classList.remove('active')
      // console.log('active ', this.activeCard)
      this.activeCard = nextCard;

      let rotateAngle = this.remainingCards.length % 2 === 0 ? -5 : 5;
      // rotate last active card
      lastActive.style.transform = `rotate(${rotateAngle}deg)`;

      this.activeCard.style.transition = 'transform .3s ease-in';
      this.activeCard.style.transform = 'none';

      nextCard.classList.remove('read')
      nextCard.classList.add('active')

      // console.log(' next ', nextCard, ' read ', this.readCards, '  new ', this.remainingCards);

    }
  }

  reverseReadCards(withStudyAgain = false) {
    this.readCards = this.readCards.reduce((allCards, card, i) => {
      let nextCard = this.readCards[i];
      // console.log('current ', nextCard.dataset.id, this.studyAgain.has(nextCard.dataset.id))

      if (withStudyAgain && !this.studyAgain.has(nextCard.dataset.id)) {
        // console.log('skip ', nextCard.dataset.id)
        allCards.push(nextCard);
        return allCards;
      }

      // this.readCards.pop();
      const lastActive = this.activeCard || nextCard;

      this.remainingCards.push(nextCard);

      // console.log('active ', this.activeCard)
      // this.activeCard.classList.remove('active')

      nextCard.style.transition = 'transform .3s ease-in';
      nextCard.style.transform = 'none';
      let rotateAngle = this.remainingCards.length % 2 === 0 ? -5 : 5;
      this.activeCard = nextCard;
      lastActive.style.transform = `rotate(${rotateAngle}deg)`;

      nextCard.classList.add('active')
      nextCard.classList.remove('read')
      // console.log(nextCard.classList);

      return allCards;


    }, [])

    // this.studyAgain = new Set();
    // console.log('read ', this.readCards, ' remaining ', this.remainingCards);
    if (this.remainingCards.length > 0) this.remainingCards[this.remainingCards.length - 1].classList.add('active')
    this.learningDone = false;
    this.startReadingInterval();
  }

  sendReadingData() {
    if (this.isSendingLearningData) return;

    this.readingData.completed_at = new Date().toISOString();
    const diff = new Date(this.readingData.completed_at).getTime() - new Date(this.readingData.started_at).getTime();

    if (diff < (60 * 1000)) {
      console.log('less than a minute ', diff)
      return;
    }

    this.readingData.user_id = this.user.id;
    // console.log('learning data ', this.readingData);

    // this.learningProvider.sendReadingData(this.readingData)
    this.clearReadingInterval();
  }

  openLessonNote() {    
    return this.destkopProvider.fetchKeypoints(this.topic.id).subscribe(data => {
      return this.navCtrl.pop().then(val => {
        this.navCtrl.push(
          LessonNote,
          {
            topic: this.topic,
            subject: this.subject,
            lessons: data
          },
          {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
          }
        );

      })
    });
  }

  playGame() {
    // this.navCtrl.push(this.matchCardsPage, {
    //   topic: this.topic,
    //   subject: this.subject,
    // })

    this.navCtrl.pop().then(val => {
      this.navCtrl.push(
        this.matchCardsPage,
        {
          topic: this.topic,
          subject: this.subject,
        },
        {
          animate: true,
          animation: "transition-ios",
          direction: "forward"
        }
      );

    })
  }

  fetchQuestion(test_type) {
    const practice = test_type == 0 ? true : false;
    return this.destkopProvider.fetchQuestionsForEvaluation(this.topic.id).subscribe(data => {
      this.loaded = Promise.resolve(true);
      return data;
    });
  }

}
