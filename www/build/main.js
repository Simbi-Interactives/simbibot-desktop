webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences_ngx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherdashboard_teacherdashboard__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Storage } from "@ionic/storage";
// import { HomePage } from "../home/home";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";


// import { NetworkProvider } from "../../providers/network/network";



// import { InappbrowserProvider } from '../../providers/inappbrowser/inappbrowser';
// import { config } from '../../config'
// import { DesktopProvider } from "../../providers/desktop/desktop";
// import { TeacherdashboardPage } from "../teacherdashboard/teacherdashboard";
/**
 * Generated class for the ActivationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivationPage = /** @class */ (function () {
    function ActivationPage(navCtrl, navParams, loadingCtrl, toast, alertController, session, menuController, _authProvider, appPreferences) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertController = alertController;
        this.session = session;
        this.menuController = menuController;
        this._authProvider = _authProvider;
        this.appPreferences = appPreferences;
        this.menuController.swipeEnable(false);
    }
    ActivationPage.prototype.ionViewDidLoad = function () {
        this.alertMessage('Contact +2349066450210 for your activation key');
        this.user = this.session.getUser();
    };
    ActivationPage.prototype.submit = function () {
        var _this = this;
        console.log('key ', this.key, 'user ', this.user);
        if (this.key == '') {
            return this.alertMessage('Enter a valid activation key.');
        }
        ;
        var loader = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        loader.present();
        this._authProvider.verifyActivation({ activation_key: this.key, email: this.user.email })
            .subscribe(function (response) {
            loader.dismiss();
            if (response.data.activation_key) {
                _this.session.newActivationKey(response.data.activation_key);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__teacherdashboard_teacherdashboard__["a" /* TeacherdashboardPage */]);
            }
            else {
                _this.alertMessage("Activation Key doesn't exists, contact +2349066450210");
            }
        }, function (err) {
            console.log(err);
            // this.alertMessage(err.error.message);
            loader.dismiss();
            _this.handleAuthError(err);
        });
    };
    ActivationPage.prototype.handleAuthError = function (err) {
        var errors = [];
        err.error.errors && (Object.entries(err.error.errors)
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return errors.push(key + ": " + value);
        }));
        var errorMessage = errors[0] || err.error.message;
        this.alertMessage(errorMessage || 'An unknown error occured');
    };
    ActivationPage.prototype.alertMessage = function (message) {
        this.alertController
            .create({
            message: message,
            buttons: ["ok"]
        })
            .present();
    };
    ActivationPage.prototype.showNoInternetConnection = function () {
        this.toast
            .create({
            message: "No Internet Connection.",
            cssClass: "errorToast",
            duration: 3000
        })
            .present();
    };
    ActivationPage.prototype.logout = function () {
        localStorage.removeItem('user');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], null, {
            animate: true,
            animation: "transition-ios",
            direction: "back"
        });
    };
    ActivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-activation",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/activationpage/activationpage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Confirm activation key</ion-title>\n     <ion-buttons end padding>\n      <button ion-button color="danger"  (click)="logout()">Log Out</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <ion-card>\n      <ion-card-content padding>\n        <!-- <img src="assets/imgs/simbibot-blue.png" class="logo" alt="" /> -->\n        <p>\n          Internet is required for activation \n        </p>\n        <p>How to get activation key? Contact\n          2349066450210 for your activation key</p>\n        <br />\n        <ion-item>\n          <ion-label class="email-label" stacked>\n            <ion-icon name="ios-mail"></ion-icon>Activation key\n          </ion-label>\n          <ion-input\n            type="text"\n            aria-required="true"\n            [(ngModel)]="key"\n            name="key"\n            class="email-input"\n            aria-placeholder="EKY265P"\n          ></ion-input>\n        </ion-item>\n        <br />\n        <button (click)="submit()" ion-button class="global-btn login-btn">\n          Submit\n        </button>\n        <!-- \n        <br />\n        <button ion-button clear color="dark" class="link-btn" text-center>\n          Confirm\n        </button> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/activationpage/activationpage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences_ngx__["a" /* AppPreferences */]])
    ], ActivationPage);
    return ActivationPage;
}());

//# sourceMappingURL=activationpage.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onboarding_onboarding__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lesson_note_lesson_note__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__match_cards_match_cards__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flash_cards_flash_cards__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the TopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicPage = /** @class */ (function () {
    function TopicPage(navCtrl, navParams, offlineProvider, modalCtrl, desktopProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.modalCtrl = modalCtrl;
        this.desktopProvider = desktopProvider;
        this.toastCtrl = toastCtrl;
        this.topics = [];
        this.subject = this.navParams.get("subject");
        this.questionType = this.navParams.get("questionType");
        this.fetchTopics(this.subject.id);
    }
    TopicPage.prototype.ionViewDidLoad = function () { };
    TopicPage.prototype.fetchTopics = function (id) {
        var _this = this;
        this.desktopProvider.fetchTopics(this.subject.id).subscribe(function (response) {
            _this.topics = response;
            _this.loaded = Promise.resolve(true);
        }, function (err) {
            _this.toastCtrl.create({
                message: 'An error occured'
            }).present();
        });
    };
    TopicPage.prototype.openTopicInfo = function (i) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__onboarding_onboarding__["a" /* OnboardingPage */], {
            subject: this.subject,
            topic: this.topics[i]
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log('data ', data);
            if (data) {
                if (data.take_test != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */], {
                        subject: _this.subject,
                        topic: _this.topics[i],
                        test_type: data.test_type,
                        questions: data.questions,
                        questionType: _this.questionType
                    });
                }
                else if (data.read_notes === true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__lesson_note_lesson_note__["a" /* LessonNote */], {
                        subject: _this.subject,
                        topic: _this.topics[i],
                        lessons: data.lessons,
                    });
                }
                else if (data.match_cards === true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__match_cards_match_cards__["a" /* MatchCards */], {
                        topic: _this.topics[i],
                        subject: _this.subject,
                    });
                }
                else if (data.flash_cards == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__flash_cards_flash_cards__["a" /* FlashCard */], {
                        topic: _this.topics[i],
                        subject: _this.subject,
                    });
                }
            }
        });
    };
    TopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-topic",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/topic/topic.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title color="brown">{{ subject.name | titlecase }}</ion-title>\n  </ion-navbar>\n\n  <div class="cont">\n    \n  <ion-searchbar [(ngModel)]="searchInput" class="search-bar"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="pad"></div>\n  \n  <div class="cont" *ngIf="loaded">\n    <h2><strong>Topics</strong></h2>\n    <br>\n    <ion-row>\n      <ion-col col-4  *ngFor="let topic of topics | searchFilter: searchInput; let i = index">\n        <button\n      ion-item\n     no-lines\n      (click)="openTopicInfo(i)"\n      class="animated pulse"\n    >\n      <div class="topic-obj">\n        <img\n          class="img-center"\n          [src]="subject.image_url"\n          alt=""\n          *ngIf="subject.image_url != null"\n        />\n        <h6>\n          <strong> {{ topic.topic | titlecase }} </strong>\n        </h6>\n      </div>\n      <ion-icon\n        item-end\n        name="ios-arrow-forward"\n        [ngStyle]="{ color: subject.color }"\n      ></ion-icon>\n    </button>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/topic/topic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], TopicPage);
    return TopicPage;
}());

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizresultPage = /** @class */ (function () {
    function QuizresultPage(navCtrl, navParams, offlineProvider, alertController, desktopProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.alertController = alertController;
        this.desktopProvider = desktopProvider;
        this.result = {};
        this.evaluation = {};
        this.hideEvaluation = true;
        this.topicLoaded = false;
        this.result = this.navParams.get("result");
        this.evaluation = this.navParams.get("evaluation");
        this.questionType = this.navParams.get("questionType");
        this.subject = this.navParams.get("subject");
        this.exam_update = this.navParams.get('exam_update');
        this.test_type = this.navParams.get('test_type');
        this.loaded = Promise.resolve(true);
    }
    QuizresultPage.prototype.ionViewDidLoad = function () {
        var counts = {};
        var compare = 0;
        for (var i = 0; i < this.result.questions.length; i++) {
            var question_correct = this.result.questions[i].correct;
            var topic_id = this.result.questions[i].topic_id;
            if (topic_id != null) {
                if (question_correct == "no") {
                    if (counts[topic_id] === undefined) {
                        counts[topic_id] = 1;
                    }
                    else {
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
    };
    QuizresultPage.prototype.ionViewDidEnter = function () {
        this.chart();
    };
    QuizresultPage.prototype.chart = function () {
        this.doughnutLine = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Missed'],
                datasets: [{
                        data: [parseInt(this.result.percentage), 100 - this.result.percentage],
                        backgroundColor: ['rgb(75,226,110)', 'rgb(255,0,0)'],
                    }]
            },
        });
    };
    QuizresultPage.prototype.finalEvaluation = function () {
        var _this = this;
        this.desktopProvider.fetchTopicById(this.mostFrequentTopic).subscribe(function (topic) {
            console.log(topic);
            _this.frequentTopic = topic;
            _this.topicLoaded = true;
        });
    };
    QuizresultPage.prototype.learnMore = function () {
        var _this = this;
        this.desktopProvider.fetchQuestionsForEvaluation(this.mostFrequentTopic)
            .subscribe(function (questions) {
            console.log(questions);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */], {
                test_type: 0,
                subject: _this.subject,
                questions: questions,
                topic: _this.frequentTopic,
                questionType: "practice"
            }, {
                animate: true,
                animation: "transition-ios",
                direction: "forward"
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QuizresultPage.prototype, "doughnutCanvas", void 0);
    QuizresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-quizresult",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/quizresult/quizresult.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Result</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="loaded | async">\n  <div class="cont">\n    <ion-row>\n      <ion-col col-4>\n        <ion-card>\n          <ion-card-content>\n            <canvas #doughnutCanvas></canvas>\n\n            <br>\n            <h4>Score : {{ result.score }} / {{ result.total }}</h4>\n            <h4>Total Percentage : {{ result.percentage | number: \'1.0-0\' }} %</h4>\n          </ion-card-content>\n        </ion-card>\n        \n   \n    <br />  \n    <ion-card *ngIf="questionType == \'normal\' && topicLoaded == true">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-12>\n            <h6><strong>Recommendation.</strong></h6>\n            <br />\n            <p>\n              After grading your test, I noticed that you are weak in {{\n              frequentTopic.topic }}, let\'s learn more on this topic, shall we?\n            </p>\n            <br />\n            <button ion-button full (click)="learnMore()">\n              Let\'s learn more\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n      </ion-col>\n\n      <ion-col col-8>\n        <ion-list\n      no-lines\n      class="questions"\n    >\n      <ion-card *ngFor="let question of result.questions; let i = index">\n        <ion-card-content>\n          <h3>\n            <strong\n              >Question&nbsp;&nbsp;{{ i + 1 + "/" + result.questions?.length\n              }}</strong\n            >\n            <span float-right\n              ><ion-icon\n                *ngIf="question.correct == \'yes\'"\n                style="color:#01c22e; padding-right: 10px"\n                name="checkmark"\n              ></ion-icon\n              ><ion-icon\n                *ngIf="question.correct == \'no\'"\n                style="color:#ff0000; padding-right: 10px"\n                name="close"\n              ></ion-icon\n            ></span>\n          </h3>\n          <br />\n          <p class="question" [innerHTML]="question.question"></p>\n          <br />\n          <div class="answer">\n            <div *ngIf="question.chosen?.length > 0">\n              <h3 *ngIf="question.correct == \'no\'" style="color:#FF0000;">\n                <strong\n                  >Your Answer :\n                  <span [innerHTML]="question.chosen[0].option_text"></span>\n                </strong>\n              </h3>\n              <h3 *ngIf="question.correct == \'yes\'" style="color:#01c22e;">\n                <strong\n                  >Your Answer : <span [innerHTML]="question.chosen"></span\n                ></strong>\n              </h3>\n            </div>\n            <br />\n            <h3 style="color:#01c22e;">\n              <strong\n                >Correct Answer :\n                <span [innerHTML]>{{ question.answer }}</span></strong\n              >\n            </h3>\n            <br />\n            <h3><strong>Explanation</strong></h3>\n            <p [innerHTML]="question.explanation"></p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n      </ion-col>\n    </ion-row>\n    \n  \n    \n  </div>\n \n\n \n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/quizresult/quizresult.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], QuizresultPage);
    return QuizresultPage;
}());

//# sourceMappingURL=quizresult.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonNote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sanitize_html__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sanitize_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sanitize_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contants__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quiz_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lesson_outline_lesson_outline__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { AuthProvider } from "../../providers/auth/auth";


// import { LearningProvider } from "../../providers/learning/learning";


// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";




var LessonNote = /** @class */ (function () {
    function LessonNote(navCtrl, navParams, 
        // private loader: LoadingController,
        alertController, storage, tts, audio, 
        // public learningProvider: LearningProvider,
        offlineProvider, desktopProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.storage = storage;
        this.tts = tts;
        this.audio = audio;
        this.offlineProvider = offlineProvider;
        this.desktopProvider = desktopProvider;
        this.modalCtrl = modalCtrl;
        this.currentIndex = 0;
        this.test_type = 0;
        this.lessons = [];
        this.outline = [];
        this.isSendingLearningData = false;
        this.isPlayingAudio = false;
        this.shake = false;
        this.shakeGreen = false;
        this.storage.get("user").then(function (user) {
            _this.user = user;
        });
        // this.questionType = this.navParams.get("questionType");
        this.topic = this.navParams.get("topic");
        this.subject = this.navParams.get("subject");
        this.lessons = this.navParams.get("lessons");
        console.log(this.lessons);
        this.createLessons();
    }
    LessonNote.prototype.ionViewDidLoad = function () {
    };
    LessonNote.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("user").then(function (user) {
            _this.user = user;
            _this.readingData = {
                user_id: _this.user.id,
                user_name: _this.user.full_name,
                topic_id: _this.topic.id,
                subject_id: _this.subject.id,
                topic_name: _this.topic.topic,
                subject_name: _this.subject.name,
                track_type: "reading",
                time_spent: 0,
                started_at: new Date().toISOString(),
                completed_at: null
            };
            _this.startReadingInterval();
        });
    };
    LessonNote.prototype.ionViewWillLeave = function () {
        console.log('will leave');
        this.tts.speak("");
        // if (this.timer) clearInterval(this.timer);
        // this.sendReadingData();
    };
    LessonNote.prototype.startReadingInterval = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.readingData.time_spent += 1;
        });
    };
    LessonNote.prototype.createLessons = function () {
        // console.log('topic ', this.topic)
        this.currentLesson = this.lessons[0];
        this.width = 0;
        this.loaded = Promise.resolve(true);
        this.outline = this.lessons.map(function (lesson, i) { return ({ title: lesson.title, index: i }); });
    };
    LessonNote.prototype.playAudio = function (lesson) {
        var _this = this;
        if (this.isPlayingAudio)
            return this.stopAudio();
        // console.log('text ', text);
        var clean = __WEBPACK_IMPORTED_MODULE_6_sanitize_html__(lesson.title + " . " + lesson.content, {
            allowedTags: [],
            allowedAtrributes: {}
        });
        console.log('clean ', clean);
        this.isPlayingAudio = true;
        this.tts.speak({ text: clean, rate: 0.75 })
            .then(function () {
            console.log('done playing');
            _this.isPlayingAudio = false;
        })
            .catch(function (reason) { return console.log(reason); });
    };
    LessonNote.prototype.stopAudio = function () {
        this.isPlayingAudio = false;
        this.tts.speak("")
            .then(function () { return console.log('stop playing'); })
            .catch(function (error) { return console.log('cannot stop ', error); });
    };
    // sendReadingData() {
    //   if (this.isSendingLearningData) return;
    //   this.readingData.completed_at = new Date().toISOString();
    //   const diff = new Date(this.readingData.completed_at).getTime() - new Date(this.readingData.started_at).getTime();
    //   if (diff < (60 * 1000)) {
    //     console.log('less than a minute ', diff)
    //     return;
    //   }
    //   this.readingData.user_id = this.user.id;
    //   console.log('reading data ', this.readingData);
    //   this.isSendingLearningData = true;
    //   this.learningProvider.sendReadingData(this.readingData)
    // }
    LessonNote.prototype.skipToEvaluation = function (test_type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('send data ');
                // this.sendReadingData();
                this.fetchQuestion(test_type)
                    .subscribe(function (response) {
                    console.log('que ', response);
                    _this.loaded = Promise.resolve(true);
                    if (response) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__quiz_quiz__["a" /* QuizPage */], {
                            subject: _this.subject,
                            topic: _this.topic,
                            test_type: test_type,
                            questions: response,
                            questionType: test_type === 0 ? __WEBPACK_IMPORTED_MODULE_7__contants__["b" /* QuestionType */].practice : __WEBPACK_IMPORTED_MODULE_7__contants__["b" /* QuestionType */].test,
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LessonNote.prototype.fetchQuestion = function (test_type) {
        var practice = test_type == 0 ? true : false;
        return this.desktopProvider.fetchQuestionsForEvaluation(this.topic.id);
    };
    LessonNote.prototype.next = function () {
        if (this.currentIndex + 1 < this.lessons.length) {
            this.currentLesson = this.lessons[this.currentIndex];
            this.currentIndex++;
            this.width = ((this.currentIndex + 1) / this.lessons.length) * 100;
        }
        else {
            this.showDoneAlert();
        }
    };
    LessonNote.prototype.prev = function () {
        if (this.currentIndex != 0) {
            this.currentIndex--;
            this.width = ((this.currentIndex + 1) / this.lessons.length) * 100;
            this.currentLesson = this.lessons[this.currentIndex];
        }
    };
    LessonNote.prototype.openContentModal = function () {
        var _this = this;
        console.log('open outline ', this.outline);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__lesson_outline_lesson_outline__["a" /* LessonOutlinePage */], {
            outline: this.outline,
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data && data.index !== undefined) {
                console.log('index ', data.index);
                _this.currentIndex = data.index;
                _this.width = ((_this.currentIndex + 1) / _this.lessons.length) * 100;
            }
        });
    };
    LessonNote.prototype.showDoneAlert = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: "Well, that's all",
            message: "Hey friend, you're done with the lesson note. What'd you like to do next?",
            buttons: [
                {
                    text: "Proceed to Evaluation",
                    handler: function () {
                        _this.skipToEvaluation(1);
                    }
                },
                {
                    text: "Proceed to Interactive questions",
                    handler: function () {
                        _this.skipToEvaluation(0);
                    }
                }
            ],
            enableBackdropDismiss: false,
            cssClass: "my-custom-alert-success"
        });
        alert.present();
    };
    LessonNote.prototype.playCorrectSound = function () {
        this.audio.play("correct");
    };
    LessonNote.prototype.playWrongSound = function () {
        this.audio.play("wrong");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("quizcard"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LessonNote.prototype, "quizcard", void 0);
    LessonNote = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-lesson-note",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/lesson-note/lesson-note.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title *ngIf="topic">{{ topic.topic }}</ion-title>\n    <ion-buttons end>\n      <button\n        ion-button\n        color="dark"\n        class="timer"\n        (click)="openContentModal()"\n      >\n        <ion-icon name="list" color="dark" class="calc-icon"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="loaded | async">\n    <!-- Lesson note Interface-->\n    <div>\n      <ion-row>\n        <ion-col col-8>\n          <div>\n            <div class="flex">\n              <button class="outline-trigger" (click)="openContentModal()">\n                <ion-icon name="menu" color="dark"></ion-icon>\n                <span>Contents outline</span>\n              </button>\n            </div>\n            <div\n              [ngClass]="[\n            shake ? \'shake-card\' : \'\',\n            shakeGreen ? \'shake-card-green\' : \'\'\n          ]"\n            >\n              <ion-card #quizcard>\n                <ion-card-content>\n                  <div class="progress">\n                    <div\n                      class="progress-inner"\n                      [ngStyle]="{\n                    width: width + \'%\',\n                    \'background-color\': \'#00dbaa\'\n                  }"\n                    ></div>\n                  </div>\n                  <div class="flex">\n                    <button\n                      ion-button\n                      color="light"\n                      class="sound"\n                      (click)="playAudio(lessons[currentIndex])"\n                    >\n                      <ion-icon\n                        name="ios-volume-up"\n                        color="dark"\n                        class="calc-icon"\n                        *ngIf="!isPlayingAudio"\n                      ></ion-icon>\n                      <ion-icon\n                        name="ios-volume-off"\n                        color="dark"\n                        class="calc-icon"\n                        *ngIf="isPlayingAudio"\n                      ></ion-icon>\n                    </button>\n                  </div>\n                  <h2 class="text-center lesson-title">\n                    {{ lessons[currentIndex].title }}\n                  </h2>\n                  <br />\n                  <article\n                    [innerHTML]="lessons[currentIndex].content"\n                  ></article>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </div>\n          <br />\n          <ion-row class="btn-row">\n            <ion-col col-6>\n              <button\n                (click)="prev()"\n                ion-button\n                round\n                color="deep-blue"\n                icon-start\n                *ngIf="currentIndex >= 1 && currentIndex < lessons.length"\n              >\n                <ion-icon name="ios-arrow-back"></ion-icon>\n                Previous\n              </button>\n            </ion-col>\n            <ion-col col-6>\n              <button\n                float-right\n                (click)="next()"\n                ion-button\n                round\n                color="deep-blue"\n                icon-end\n              >\n                Next\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <div class="ad-block">\n            <ion-card>\n              <ion-card-content>\n                <img src="assets/imgs/simbi-banner.jpg" alt="">\n              </ion-card-content>\n            </ion-card>          \n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-6 class="btn-skip--wrapper">\n      <button\n        icon-end\n        class="btn-skip learning"\n        color="secondary"\n        icon-only\n        (click)="skipToEvaluation(0)"\n      >\n        Skip to <br />\n        <br />\n        <span class="btn-skip__subtitle">INTERACTIVE QUESTIONS</span>\n        <!-- <ion-icon name="ios-arrow-forward"></ion-icon> -->\n      </button>\n    </ion-col>\n    <ion-col col-6 class="btn-skip--wrapper">\n      <button\n        icon-end\n        class="btn-skip evaluation"\n        color="primary"\n        icon-only\n        (click)="skipToEvaluation(1)"\n      >\n        Skip to <br />\n        <br />\n        <span class="btn-skip__subtitle">EVALUATION </span>\n        <!-- <ion-icon name="ios-arrow-forward"></ion-icon> -->\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/lesson-note/lesson-note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], LessonNote);
    return LessonNote;
}());

//# sourceMappingURL=lesson-note.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsubjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ExamsubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamsubjectsPage = /** @class */ (function () {
    function ExamsubjectsPage(navCtrl, navParams, offlineProvider, loadingCtrl, desktopProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.loadingCtrl = loadingCtrl;
        this.desktopProvider = desktopProvider;
    }
    ExamsubjectsPage.prototype.ionViewDidLoad = function () {
        this.exam = this.navParams.get('exam');
        console.log(this.exam);
        this.subjects = JSON.parse(this.exam.subjects_list);
        this.loaded = Promise.resolve(true);
    };
    ExamsubjectsPage.prototype.proceedToQuiz = function (i) {
        var _this = this;
        this.selectedSubject = this.subjects[i];
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        this.desktopProvider.fetchQuestionForExam(this.selectedSubject.id, this.exam.id)
            .subscribe(function (data) {
            _this.desktopProvider.fetchQuestionForExamCount(_this.selectedSubject.id, _this.exam.id).subscribe(function (count) {
                loader.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */], {
                    subject: _this.selectedSubject,
                    test_type: 2,
                    questions: data,
                    questionType: "normal",
                    count: count,
                    exam: _this.exam
                });
            });
        });
    };
    ExamsubjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-examsubjects",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/examsubjects/examsubjects.html"*/'<!--\n  Generated template for the PostutmesubjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title>{{ name | titlecase }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="center-page cont">\n    <h2><strong>Select Subjects</strong></h2>\n    <br>\n\n    <ion-row>\n      <ion-col col-4 *ngFor="let subject of subjects; let i= index">\n        <button\n      ion-item\n     no-lines\n      (click)="proceedToQuiz(i)"\n      class="animated pulse"\n    >\n      <div class="topic-obj">\n       \n        <h6>\n          <strong> {{ subject.name | titlecase }} </strong>\n        </h6>\n      </div>\n      <ion-icon\n        item-end\n        name="ios-arrow-forward"\n      ></ion-icon>\n    </button>\n      </ion-col>\n    </ion-row>\n \n   \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/examsubjects/examsubjects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], ExamsubjectsPage);
    return ExamsubjectsPage;
}());

//# sourceMappingURL=examsubjects.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SubscriptionProvider = /** @class */ (function () {
    function SubscriptionProvider(http, storage, device) {
        this.http = http;
        this.storage = storage;
        this.device = device;
        this.url = "https://learn.simbibot.com/api/";
    }
    SubscriptionProvider.prototype.checkIfFirstOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("first_open")];
                    case 1:
                        check = _a.sent();
                        if (check == true) {
                            return [2 /*return*/, false];
                        }
                        if (check == null) {
                            this.storage.set("first_open", true);
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionProvider.prototype.storeFirstDate = function (first_open_date) {
        return __awaiter(this, void 0, void 0, function () {
            var date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("first_date", first_open_date)];
                    case 1:
                        date = _a.sent();
                        if (date) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionProvider.prototype.checkIfOneDayHasPassed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var first_date, current_date, seconds, diff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("first_date")];
                    case 1:
                        first_date = _a.sent();
                        current_date = new Date();
                        seconds = 86400000;
                        diff = current_date.getTime() - first_date.getTime();
                        console.log('diff: ', diff);
                        console.log('time: ', seconds - diff);
                        if (seconds < diff) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionProvider.prototype.CheckIfSubscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var subscribed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("subscribed")];
                    case 1:
                        subscribed = _a.sent();
                        if (subscribed) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionProvider.prototype.checkIfUserHasSubscribed = function (device_id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("user")];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.http.get(this.url + "user/" + user.id + "/issubscribed?source=mobile&exam_id=" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].super_exam_id + "&device_id=" + device_id)];
                }
            });
        });
    };
    SubscriptionProvider.prototype.subscribeForExam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("user")];
                    case 1:
                        user = _a.sent();
                        body = {
                            plan: "exam",
                            exam_id: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].super_exam_id,
                            user_id: user.id
                        };
                        return [2 /*return*/, this.http.post(this.url + "subscribe", body)];
                }
            });
        });
    };
    SubscriptionProvider.prototype.confirmSubscription = function (txref) {
        return __awaiter(this, void 0, void 0, function () {
            var device_id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        device_id = this.device.uuid;
                        return [4 /*yield*/, this.storage.get("user")];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.http.get(this.url + "verify-payment?trxref=" + txref + "&source=mobile&device_id=" + device_id)];
                }
            });
        });
    };
    SubscriptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], SubscriptionProvider);
    return SubscriptionProvider;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_subscription_subscription__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inappbrowser_inappbrowser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paywithcard_paywithcard__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(navCtrl, navParams, socialSharing, subscription, loader, inappbrowser, events, device, storage, alertController, menuController, network, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.subscription = subscription;
        this.loader = loader;
        this.inappbrowser = inappbrowser;
        this.events = events;
        this.device = device;
        this.storage = storage;
        this.alertController = alertController;
        this.menuController = menuController;
        this.network = network;
        this.modalController = modalController;
        this.hasExpired = false;
        this.pageTitle = 'Payment';
        this.openPaywithcardInfo = function () {
            var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__paywithcard_paywithcard__["a" /* PaywithCardPage */]);
            modal.present();
        };
        this.menuController.swipeEnable(false);
        this.storage.get("status").then(function (val) {
            if (val != null) {
                _this.showCard = val;
                _this.storage.get("user").then(function (user) {
                    if (user != null) {
                        _this.user = user;
                        _this.loaded = Promise.resolve(true);
                    }
                });
            }
        });
    }
    SubscriptionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.loaded, ' will enter');
        this.storage.get("expiry_date").then(function (expiryDate) {
            _this.storage.get("status").then(function (status) {
                if (!expiryDate) {
                    expiryDate = new Date();
                    // Change to 1 day
                    expiryDate.setDate(expiryDate.getDate() + 1);
                    _this.storage.set("expiry_date", expiryDate);
                    _this.storage.set("status", "notshared");
                }
                var today = new Date();
                var expireTime = new Date(expiryDate).getTime();
                // check if user's free time has expired
                _this.hasExpired = today.getTime() > expireTime;
                _this.showCard = status || 'notshared';
                _this.canGoBack = !_this.hasExpired;
                if (_this.canGoBack)
                    _this.pageTitle = 'Activation';
                console.log(_this.canGoBack, _this.hasExpired, expiryDate);
            });
        });
    };
    SubscriptionPage.prototype.ionViewWillLeave = function () {
        this.menuController.swipeEnable(true);
        this.events.unsubscribe('browser_closed');
    };
    SubscriptionPage.prototype.checkIfUserHasSubscribed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader, device_id;
            return __generator(this, function (_a) {
                loader = this.loader.create({
                    content: "Loading..."
                });
                loader.present();
                device_id = this.device.uuid;
                this.subscription.checkIfUserHasSubscribed(device_id).then(function (resp) {
                    resp.subscribe(function (response) {
                        loader.dismiss();
                        _this.storage.set("subscribed", true);
                        _this.storage.set("expiry_date", new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
                        _this.events.publish('user_subscribed');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], null, {
                            animate: true,
                            animation: "transition-ios",
                            direction: "back"
                        });
                    }, function (err) {
                        loader.dismiss();
                        _this.alertController
                            .create({
                            title: "Payment Error",
                            message: "Payment was incomplete."
                        })
                            .present();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SubscriptionPage.prototype.share = function () {
        var _this = this;
        this.socialSharing
            .share("Check out Simbi, I use it to prepare for " + __WEBPACK_IMPORTED_MODULE_10__config__["a" /* config */].version_name + ". Join me at", "Simbibot", "", "https://learn.simbibot.com")
            .then(function () {
            var date = new Date();
            //Remember to return to 2days.
            date.setDate(date.getDate() + 2);
            console.log('new expire date ', date);
            _this.storage.set("expiry_date", date);
            _this.storage.set("status", "shared");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], null, {
                animation: "transition-ios",
                animate: true,
                direction: "back"
            });
        });
    };
    SubscriptionPage.prototype.subscribe = function () {
        var _this = this;
        console.log(this.network.isOffline());
        if (this.network.isOffline())
            return;
        var loader = this.loader.create({
            content: "Loading..."
        });
        loader.present();
        this.subscription.subscribeForExam().then(function (response) {
            response.subscribe(function (res) {
                console.log(res);
                loader.dismiss();
                _this.events.subscribe("browser_closed", function () {
                    _this.checkIfUserHasSubscribed();
                });
                _this.inappbrowser.openBrowser(res.payment_url);
            });
        });
    };
    SubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-subscription",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/subscription/subscription.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle *ngIf="!hasExpired">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br />\n  <div class="mid">\n    <ion-card *ngIf="hasExpired && showCard == \'notshared\'">\n      <ion-card-content>\n        <p class="grey-text" text-center *ngIf="loaded">\n          Dear {{ user.firstname | titlecase }},\n        </p>\n        <h3 text-center>\n          Your trial mode has expired, but you can still continue to learn with\n          me by sharing about me to your friends.\n        </h3>\n        <hr />\n        <button ion-button round full (click)="share()">\n          Share to friends\n        </button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="!hasExpired">\n      <ion-card-content>\n        <h3 text-center>\n          By activating your SimbiBot app, you get instant unlimited access for\n          the next one year.\n        </h3>\n        <button ion-button round full (click)="subscribe()">\n          Pay Online With ATM Card\n        </button>\n        <h3 text-center>\n          Make payment to the account details below to activate your app.\n        </h3>\n        <button ion-button round full (click)="openPaywithcardInfo()">\n          Bank Payment/Transfer\n        </button>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="hasExpired && showCard == \'shared\'">\n      <ion-card-content>\n        <p class="grey-text" text-center *ngIf="loaded">\n          Dear {{ user.firstname | titlecase }},\n        </p>\n        <h3 text-center>\n          Sorry to interrupt you, your trial mode has expired. You can continue\n          to learn with me by paying a one-time activation fee of N1,000. Click\n          the button below to activate\n        </h3>\n        <hr />\n        <p></p>\n\n        <br />\n        <button ion-button round full (click)="subscribe()">Activate</button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/subscription/subscription.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DesktopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DesktopProvider = /** @class */ (function () {
    function DesktopProvider(http) {
        this.http = http;
        // baseurl = `/api/v1`;
        this.baseurl = "http://localhost:3000/api/v1"; // change b4 push
    }
    DesktopProvider.prototype.checkIfTeacherHasubscribed = function () {
        return this.http.get(this.baseurl + "/users/is_teacher_created");
    };
    DesktopProvider.prototype.createTeacher = function (data) {
        return this.http.post(this.baseurl + "/users/create_teacher", data);
    };
    DesktopProvider.prototype.checkEmail = function (email) {
        return this.http.post(this.baseurl + "auth/validate-email", {
            email: email
        });
    };
    DesktopProvider.prototype.login = function (data) {
        return this.http.post(this.baseurl + "/users/login", data);
    };
    DesktopProvider.prototype.signup = function (body) {
        // const device_id = this.device.uuid;
        return this.http.post(this.baseurl + "auth/register", body);
    };
    DesktopProvider.prototype.createStudent = function (data) {
        return this.http.post(this.baseurl + "/users/create_student", data);
    };
    DesktopProvider.prototype.fetchStudents = function (page) {
        return this.http.get(this.baseurl + "/users/fetch_student?page=" + page);
    };
    DesktopProvider.prototype.bulkUploadStudent = function (file) {
        var form_data = new FormData;
        form_data.append('file', file);
        return this.http.post(this.baseurl + "/users/bulk_upload_student", form_data);
    };
    DesktopProvider.prototype.fetchSubjects = function () {
        return this.http.get(this.baseurl + "/app/fetch_subjects");
    };
    DesktopProvider.prototype.fetchTopics = function (id) {
        return this.http.get(this.baseurl + "/app/fetch_topics/" + id);
    };
    DesktopProvider.prototype.fetchQuestionsForEvaluation = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_questions/" + topic_id);
    };
    DesktopProvider.prototype.fetchQuestionsForTest = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_questions/" + topic_id);
    };
    DesktopProvider.prototype.fetchSuperExam = function () {
        return this.http.get(this.baseurl + "/app/fetch_super_exams");
    };
    DesktopProvider.prototype.postUtmeSchools = function () {
        return this.http.get(this.baseurl + "/app/fetch_post_utme");
    };
    DesktopProvider.prototype.fetchKeypointsCounts = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_keypoints_count/" + topic_id);
    };
    DesktopProvider.prototype.fetchFlashCardsCount = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_flashcards_count/" + topic_id);
    };
    DesktopProvider.prototype.fetchKeypoints = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_keypoints/" + topic_id);
    };
    DesktopProvider.prototype.fetchFlashCards = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_flashCards/" + topic_id);
    };
    DesktopProvider.prototype.fetchQuestionForExam = function (subject_id, super_exam_id) {
        return this.http.get(this.baseurl + "/app/fetch_questions_from_exam_list?subject_id=" + subject_id + "&super_exam_id=" + super_exam_id);
    };
    DesktopProvider.prototype.fetchQuestionForExamCount = function (subject_id, super_exam_id) {
        return this.http.get(this.baseurl + "/app/fetch_questions_from_exam_list_count?subject_id=" + subject_id + "&super_exam_id=" + super_exam_id);
    };
    DesktopProvider.prototype.fetchTopicById = function (topic_id) {
        return this.http.get(this.baseurl + "/app/fetch_topic_by_id/" + topic_id);
    };
    DesktopProvider.prototype.storeInitialEvaluation = function (body) {
        return this.http.post(this.baseurl + "/app/store_evaluation_result/", body);
    };
    DesktopProvider.prototype.updateInitialEvaluation = function (body) {
        return this.http.post(this.baseurl + "/app/update_evaluation_result", body);
    };
    DesktopProvider.prototype.storeInitialExaminationResult = function (body) {
        return this.http.post(this.baseurl + "/app/store_examination_result", body);
    };
    DesktopProvider.prototype.updateExaminationResult = function (body) {
        return this.http.post(this.baseurl + "/app/update_examination_result", body);
    };
    DesktopProvider.prototype.fetchExaminationAverage = function (user_id) {
        return this.http.get(this.baseurl + "/app/user_examination_report_avg/" + user_id);
    };
    DesktopProvider.prototype.fetchEvaluationAverage = function (user_id) {
        return this.http.get(this.baseurl + "/app/user_evaluation_report_avg/" + user_id);
    };
    DesktopProvider.prototype.fetchAllExamAttempt = function (user_id, exam_id, subject_id) {
        return this.http.get(this.baseurl + "/app/user_examination_all/" + user_id + "/" + exam_id + "/" + subject_id);
    };
    DesktopProvider.prototype.fetchAllEvaluationAttempt = function (user_id, subject_id, topic_id) {
        return this.http.get(this.baseurl + "/app/user_evaluation_all/" + user_id + "/" + subject_id + "/" + topic_id);
    };
    DesktopProvider.prototype.fetchEvaluationForChartScores = function (subject_id) {
        return this.http.get(this.baseurl + "/app/evaluations_by_subject_for_line_chart/" + subject_id);
    };
    DesktopProvider.prototype.fetchEvaluationAgg = function (subject_id) {
        return this.http.get(this.baseurl + "/app/evaluations_avg_score_on_subject/" + subject_id);
    };
    DesktopProvider.prototype.fetchExaminationForChartScores = function (exam_id) {
        return this.http.get(this.baseurl + "/app/examinations_by_subject_for_line_chart/" + exam_id);
    };
    DesktopProvider.prototype.fetchExaminationAgg = function (exam_id) {
        return this.http.get(this.baseurl + "/app/examination_avg_score_on_exams/" + exam_id);
    };
    DesktopProvider.prototype.setNovel = function (num) {
        return this.http.get(this.baseurl + "/app/set_novel/" + num);
    };
    DesktopProvider.prototype.updateexamsettings = function (body) {
        return this.http.post(this.baseurl + "/app/show_settings", body);
    };
    DesktopProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DesktopProvider);
    return DesktopProvider;
}());

//# sourceMappingURL=desktop.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activationpage/activationpage.module": [
		236
	],
	"../pages/createstudent/createstudent.module": [
		481
	],
	"../pages/createteacher/createteacher.module": [
		479
	],
	"../pages/examsubjects/examsubjects.module": [
		482
	],
	"../pages/flash-cards/flash-cards.module": [
		500
	],
	"../pages/lesson-note/lesson-note.module": [
		483
	],
	"../pages/lesson-outline/lesson-outline.module": [
		484
	],
	"../pages/login/login.module": [
		502
	],
	"../pages/match-cards/match-cards.module": [
		485
	],
	"../pages/onboarding/onboarding.module": [
		489
	],
	"../pages/paywithcard/paywithcard.module": [
		486
	],
	"../pages/postutme/postutme.module": [
		488
	],
	"../pages/quiz/quiz.module": [
		503
	],
	"../pages/quizresult/quizresult.module": [
		490
	],
	"../pages/register/register.module": [
		491
	],
	"../pages/studentreportdetails/studentreportdetails.module": [
		493
	],
	"../pages/studentresults/studentresults.module": [
		492
	],
	"../pages/subscription/subscription.module": [
		495
	],
	"../pages/teacherdashboard/teacherdashboard.module": [
		494
	],
	"../pages/teacherevaluationresult/teacherevaluationresult.module": [
		496
	],
	"../pages/teacherexaminationresult/teacherexaminationresult.module": [
		497
	],
	"../pages/topic/topic.module": [
		498
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageModule", function() { return ActivationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activationpage__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivationPageModule = /** @class */ (function () {
    function ActivationPageModule() {
    }
    ActivationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activationpage__["a" /* ActivationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activationpage__["a" /* ActivationPage */]),
            ],
        })
    ], ActivationPageModule);
    return ActivationPageModule;
}());

//# sourceMappingURL=activationpage.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_zip__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_db_copy__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var OfflineProvider = /** @class */ (function () {
    function OfflineProvider(http, zip, sqlite, sqliteCopy, storage, events, file) {
        var _this = this;
        this.http = http;
        this.zip = zip;
        this.sqlite = sqlite;
        this.sqliteCopy = sqliteCopy;
        this.storage = storage;
        this.events = events;
        this.file = file;
        this.updateSubjects = function (dataToInsert) { return __awaiter(_this, void 0, void 0, function () {
            var _i, dataToInsert_1, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updating subjects.......');
                        _i = 0, dataToInsert_1 = dataToInsert;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dataToInsert_1.length)) return [3 /*break*/, 4];
                        row = dataToInsert_1[_i];
                        return [4 /*yield*/, this.database.executeSql("INSERT  or REPLACE INTO subjects (id, name, display, color, image_url , createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7)", [row.id, row.name, row.display, row.color, row.image_url, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
                                .then(function (data) {
                                console.log('updating subject...................');
                                return true;
                            }).catch(function (err) { return console.log('error while updating subjects: ', err); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('.................. finished updating subjects..............');
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateTopics = function (dataToInsert) { return __awaiter(_this, void 0, void 0, function () {
            var _i, dataToInsert_2, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, dataToInsert_2 = dataToInsert;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dataToInsert_2.length)) return [3 /*break*/, 4];
                        row = dataToInsert_2[_i];
                        return [4 /*yield*/, this.database.executeSql("INSERT or REPLACE INTO topics (id, display, topic, index_number, subject_id, description, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [row.id, row.display, row.topic, row.index_number, row.subject_id, row.description, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
                                .then(function (data) {
                                console.log('updated topic..................................');
                                return true;
                            }).catch(function (err) { return console.log('error while updating topics: ', err); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('.................. finished updating topics..............');
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateSuperExams = function (dataToInsert) { return __awaiter(_this, void 0, void 0, function () {
            var _i, dataToInsert_3, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, dataToInsert_3 = dataToInsert;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dataToInsert_3.length)) return [3 /*break*/, 4];
                        row = dataToInsert_3[_i];
                        return [4 /*yield*/, this.database.executeSql("INSERT  or REPLACE INTO SuperExams (id, name, similar_name, rank, has_subexam, parent_id, subjects_list, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [row.id, row.name, row.similar_name, row.rank, row.has_subexam, row.parent_id, row.subjects_list, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
                                .then(function (data) {
                                console.log('updated super_exam.................');
                                return true;
                            }).catch(function (err) { return console.log('error while updating super_exams: ', err); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('.................. finished updating super exams..............');
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateOptions = function (dataToInsert) { return __awaiter(_this, void 0, void 0, function () {
            var _i, dataToInsert_4, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updating options....');
                        _i = 0, dataToInsert_4 = dataToInsert;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dataToInsert_4.length)) return [3 /*break*/, 4];
                        row = dataToInsert_4[_i];
                        return [4 /*yield*/, this.database.executeSql("INSERT  or REPLACE INTO options (id, q_id, option_text, correct, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6)", [row.id, row.q_id, row.option_text, row.correct, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
                                .then(function (data) {
                                console.log('updated option............................................');
                                return true;
                            }).catch(function (err) { return console.log('error while updating options: ', err); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('.................. finished updating super options..............');
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateQuestions = function (dataToInsert) { return __awaiter(_this, void 0, void 0, function () {
            var _i, dataToInsert_5, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updating questions....');
                        _i = 0, dataToInsert_5 = dataToInsert;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dataToInsert_5.length)) return [3 /*break*/, 4];
                        row = dataToInsert_5[_i];
                        // insert new data into table          
                        return [4 /*yield*/, this.database.executeSql("INSERT  or REPLACE INTO Questions (id, author_id, subject_id, topic_id, difficulty_number, question, year_tag, explanation, deleted_at, super_exam_id, school_id, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [row.id, row.author_id, row.subject_id, row.topic_id, row.difficulty_number, row.question, row.year_tag, row.explanation, row.deleted_at, row.super_exam_id, row.school_id, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
                                .then(function (data) {
                                console.log('updated question...........................: ');
                                return true;
                            }).catch(function (err) { return console.log('error while updating Questions: ', err); })];
                    case 2:
                        // insert new data into table          
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('.................. finished updating questions..............');
                        return [2 /*return*/];
                }
            });
        }); };
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](false);
        this.storage.get("db_copied").then(function (val) {
            if (val != null) {
                _this.sqlite
                    .create({
                    name: "" + __WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].db_name,
                    location: "default"
                })
                    .then(function (db) {
                    _this.database = db;
                    _this.databaseReady.next(true);
                });
            }
        });
        this.events.subscribe("db_hascopied", function () {
            _this.storage.get("db_copied").then(function (val) {
                if (val != null) {
                    _this.sqlite
                        .create({
                        name: "" + __WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].db_name,
                        location: "default"
                    })
                        .then(function (db) {
                        _this.database = db;
                        _this.databaseReady.next(true);
                    });
                }
            });
        });
    }
    // public async unzipDatabase() {
    //   const file_path = await this.file.resolveLocalFilesystemUrl(
    //     this.file.applicationDirectory + "www/data.zip"
    //   );
    //   const destination = await this.file.resolveLocalFilesystemUrl(
    //     this.file.applicationDirectory + "www/"
    //   );
    //   const file_dir = await this.file.resolveLocalFilesystemUrl(
    //     this.file.applicationDirectory + "www/data/"
    //   );
    //   console.log(file_path.nativeURL);
    //   this.zip
    //     .unzip(file_path.nativeURL, destination.nativeURL)
    //     .then(result => {
    //       console.log("result", result);
    //       if (result == 0) {
    //         this.file
    //           .moveFile(
    //             file_dir.nativeURL,
    //             `${config.db_name}`,
    //             destination.nativeURL,
    //             `${config.db_name}`
    //           )
    //           .then(moved => {
    //             console.log("File moved and unzipped succesffuly");
    //           });
    //         // this.initializeDb();
    //       }
    //       if (result == -1) {
    //         console.log("Error in unzipping");
    //       }
    //     })
    //     .catch(err => {
    //       console.log("err", err);
    //     });
    // }
    OfflineProvider.prototype.setupDb = function () {
        var _this = this;
        this.sqliteCopy
            .copy("" + __WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].db_name, 2)
            .then(function (copied) {
            _this.storage.set("db_copied", true);
            _this.events.publish("db_setup");
        })
            .catch(function (err) {
            console.log("unabled to cp", err);
            if (err.code == 516) {
                _this.sqliteCopy.remove("" + __WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].db_name, 2);
                _this.setupDb();
            }
        });
    };
    OfflineProvider.prototype.fetchSubjects = function () {
        return this.database
            .executeSql("Select * from subjects Where display=1", [])
            .then(function (data) {
            var subjects = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    subjects.push({
                        name: data.rows.item(i).name,
                        color: data.rows.item(i).color,
                        id: data.rows.item(i).id,
                        image_url: data.rows.item(i).image_url
                    });
                }
            }
            return subjects;
        });
    };
    OfflineProvider.prototype.fetchTopics = function (id) {
        return this.database
            .executeSql("select * from topics where topics. subject_id=" + id + " and topics.subject_id is not null and (select count(*) from questions where topics.id = questions.topic_id and explanation is not null and explanation <> '' and questions.deleted_at is null) > 9 and display = 1 order by index_number IS NULL, index_number ASC;", [])
            .then(function (data) {
            console.log(data);
            var topics = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    topics.push({
                        id: data.rows.item(i).id,
                        topic: data.rows.item(i).topic,
                        subject_id: data.rows.item(i).subject_id
                    });
                }
            }
            return topics;
        });
    };
    OfflineProvider.prototype.fetchQuestionForEvalutation = function (topic_id) {
        var _this = this;
        return this.database
            .executeSql("SELECT * FROM Questions WHERE topic_id=" + topic_id + " ORDER BY RANDOM() LIMIT 20;", [])
            .then(function (data) {
            var questions = [];
            if (data.rows.length > 0) {
                var _loop_1 = function () {
                    var current_Que = {
                        id: data.rows.item(i).id,
                        question: data.rows.item(i).question,
                        topic_id: data.rows.item(i).topic_id,
                        explanation: data.rows.item(i).explanation,
                        options: [],
                        answer: {}
                    };
                    var q_id = data.rows.item(i).id;
                    _this.database
                        .executeSql("Select * From options WHERE q_id= " + q_id, [])
                        .then(function (opt_data) {
                        if (opt_data.rows.length > 0) {
                            for (var j = 0; j < opt_data.rows.length; j++) {
                                var current_ans = {
                                    id: opt_data.rows.item(j).id,
                                    q_id: q_id,
                                    option_text: opt_data.rows.item(j).option_text,
                                    correct: opt_data.rows.item(j).correct
                                };
                                if (opt_data.rows.item(j).correct == 1) {
                                    current_Que.answer = current_ans;
                                }
                                current_Que.options.push(current_ans);
                            }
                        }
                    });
                    questions.push(current_Que);
                };
                for (var i = 0; i < data.rows.length; i++) {
                    _loop_1();
                }
            }
            return questions;
        });
    };
    OfflineProvider.prototype.fetchQuestionForTest = function (topic_id) {
        var _this = this;
        return this.database
            .executeSql("SELECT * FROM Questions WHERE topic_id=" + topic_id + " ORDER BY RANDOM() LIMIT 20;", [])
            .then(function (data) {
            var questions = [];
            if (data.rows.length > 0) {
                var _loop_2 = function () {
                    var current_Que = {
                        id: data.rows.item(i).id,
                        topic_id: data.rows.item(i).topic_id,
                        question: data.rows.item(i).question,
                        explanation: data.rows.item(i).explanation,
                        options: [],
                        answer: {}
                    };
                    var q_id = data.rows.item(i).id;
                    _this.database
                        .executeSql("Select * From options WHERE q_id= " + q_id, [])
                        .then(function (opt_data) {
                        if (opt_data.rows.length > 0) {
                            for (var j = 0; j < opt_data.rows.length; j++) {
                                var current_ans = {
                                    id: opt_data.rows.item(j).id,
                                    q_id: q_id,
                                    option_text: opt_data.rows.item(j).option_text,
                                    correct: opt_data.rows.item(j).correct
                                };
                                if (opt_data.rows.item(j).correct == 1) {
                                    current_Que.answer = current_ans;
                                }
                                current_Que.options.push(current_ans);
                            }
                        }
                    });
                    questions.push(current_Que);
                };
                for (var i = 0; i < data.rows.length; i++) {
                    _loop_2();
                }
            }
            return questions;
        });
    };
    OfflineProvider.prototype.fetchSuperExamByID = function (id) {
        return this.database
            .executeSql("Select * from SuperExams where id=" + id, [])
            .then(function (data) {
            return data.rows.item(0);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    OfflineProvider.prototype.fetchQuestionFromExamList = function (subject_id, super_exam_id) {
        var _this = this;
        return this.database
            .executeSql("SELECT * FROM Questions WHERE subject_id=" + subject_id + " AND super_exam_id=" + super_exam_id + " ORDER BY RANDOM() LIMIT 20;", [])
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var questions, _loop_3, this_1, i;
            return __generator(this, function (_a) {
                questions = [];
                if (data.rows.length > 0) {
                    _loop_3 = function () {
                        var current_Que = {
                            id: data.rows.item(i).id,
                            question: data.rows.item(i).question,
                            topic_id: data.rows.item(i).topic_id,
                            explanation: data.rows.item(i).explanation,
                            options: [],
                            answer: {}
                        };
                        var q_id = data.rows.item(i).id;
                        this_1.database
                            .executeSql("Select * From options WHERE q_id= " + q_id, [])
                            .then(function (opt_data) {
                            if (opt_data.rows.length > 0) {
                                for (var j = 0; j < opt_data.rows.length; j++) {
                                    var current_ans = {
                                        id: opt_data.rows.item(j).id,
                                        q_id: q_id,
                                        option_text: opt_data.rows.item(j).option_text,
                                        correct: opt_data.rows.item(j).correct
                                    };
                                    if (opt_data.rows.item(j).correct == 1) {
                                        current_Que.answer = current_ans;
                                    }
                                    current_Que.options.push(current_ans);
                                }
                            }
                        });
                        questions.push(current_Que);
                    };
                    this_1 = this;
                    for (i = 0; i < data.rows.length; i++) {
                        _loop_3();
                    }
                }
                return [2 /*return*/, questions];
            });
        }); });
    };
    OfflineProvider.prototype.fetchQuestionFromExamListCount = function (subject_id, super_exam_id) {
        return this.database
            .executeSql("SELECT count(*) FROM Questions WHERE subject_id=" + subject_id + " AND super_exam_id=" + super_exam_id, [])
            .then(function (data) {
            console.log('total count: ', data.rows.item(0)['count(*)']);
            return data.rows.item(0)['count(*)'];
        });
    };
    OfflineProvider.prototype.fetchTopicByID = function (id) {
        return this.database
            .executeSql("Select * from topics where id=" + id, [])
            .then(function (data) {
            return data.rows.item(0);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    OfflineProvider.prototype.updateTable = function (table, data) {
        console.log("updating " + table + "........................................................................");
        switch (table) {
            case "subjects":
                return this.updateSubjects(data);
            case "topics":
                return this.updateTopics(data);
            case "super_exams":
                return this.updateSuperExams(data);
            case "options":
                return this.updateOptions(data);
            case "questions":
                return this.updateQuestions(data);
            default:
                console.log(table + " doesn't exist");
                return;
        }
    };
    OfflineProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    OfflineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_zip__["a" /* Zip */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_db_copy__["a" /* SqliteDbCopy */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]])
    ], OfflineProvider);
    return OfflineProvider;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    base_url: "https://playground.simbibot.com/api/",
    /**
     * Version name  is the name of the version of this app for this duplicate
     */
    version_name: "utme",
    /**
     * Background color of the current app clone
     */
    background_color: "#1e4a32",
    /**
     * Logo to be put in the header
     */
    logo_dir: "assets/imgs/jamblogo.png",
    /**
     * Text color hexcode or name of color.
     */
    text_color: "white",
    storybook: "Sweet Sixteen",
    forgotPassword: "https://learn.simbibot.com/password/reset",
    super_exam_id: 1,
    exams: [
        {
            name: "waec",
            background_color: "rgb(52, 14, 103)",
            image_url: "assets/imgs/waec.png",
        },
        {
            name: "utme",
            background_color: "#1e4a32",
            image_url: "assets/imgs/jamblogo.png",
        }
    ],
    version: '1.0.1',
    db_name: 'data.db'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatestudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_desktop_desktop__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreatestudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatestudentPage = /** @class */ (function () {
    function CreatestudentPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, desktopProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.desktopProvider = desktopProvider;
        this.toastCtrl = toastCtrl;
        this.users = [];
        this.page = 1;
        this.uploading = false;
        this.createStudentForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    CreatestudentPage.prototype.ionViewDidLoad = function () {
        this.fetchUsers();
    };
    CreatestudentPage.prototype.fetchUsers = function () {
        var _this = this;
        this.desktopProvider.fetchStudents(this.page).subscribe(function (response) {
            _this.users = response;
            _this.loaded = Promise.resolve(true);
        }, function (err) {
            console.log(err);
        });
    };
    CreatestudentPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loader.present();
        this.desktopProvider.createStudent(this.createStudentForm.value).subscribe(function (resp) {
            loader.dismiss();
            _this.createStudentForm.reset();
            _this.alertCtrl.create({
                title: 'Success',
                message: 'Student Created succesfully',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            _this.fetchUsers();
                        }
                    }]
            }).present();
        }, function (err) {
            loader.dismiss();
            _this.alertCtrl.create({
                title: 'Error',
                message: err.error.message || 'An error occured',
                buttons: ['ok']
            }).present();
        });
    };
    CreatestudentPage.prototype.selectFile = function (event) {
        console.log(event);
        this.bulkuploadfile = event.target.files[0];
    };
    CreatestudentPage.prototype.uploadStudent = function () {
        var _this = this;
        this.uploading = true;
        this.desktopProvider.bulkUploadStudent(this.bulkuploadfile).subscribe(function (response) {
            _this.uploading = false;
            _this.fetchUsers();
            _this.toastCtrl.create({
                message: 'Bulk upload completed successfully',
                duration: 1000,
            }).present();
        }, function (err) {
            _this.uploading = false;
            _this.toastCtrl.create({
                message: 'An error occured',
                duration: 1000,
            }).present();
        });
    };
    CreatestudentPage.prototype.pageChange = function (p) {
        this.page = p;
        this.fetchUsers();
    };
    CreatestudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createstudent',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/createstudent/createstudent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Create Student</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <ion-row padding>\n      <ion-col col-5>\n        <ion-card>\n          <ion-card-content>\n            <ion-list>\n              <ion-list-header>\n                <ion-label\n                  >The bulk upload feature allows you to upload multiple\n                  information at once from an excel file.</ion-label\n                >\n              </ion-list-header>\n              <ion-item>\n                <ion-label\n                  >Download the excel file template (Click here to\n                  download).</ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  Fill your students\' details in the file starting from the\n                  second row and save the updated file.</ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  Click on the "choose file" button here to upload the updated\n                  excel file</ion-label\n                >\n              </ion-item>\n            </ion-list>\n\n            <ion-item>\n              <ion-label>Bulk Upload</ion-label>\n              <ion-input\n                type="file"\n                (change)="selectFile($event)"\n                accept=".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"\n              ></ion-input>\n            </ion-item>           \n            <ion-item>\n              <ion-label>\n                <a href="assets/template.xlsx" download>Download template</a>\n              </ion-label>\n            </ion-item>\n\n            <button\n              [disabled]="!bulkuploadfile || uploading"\n              (click)="uploadStudent() "\n              ion-button\n              full\n            >\n              Upload\n            </button>\n          </ion-card-content>\n        </ion-card>\n        <br />\n        <ion-card>\n          <ion-card-content>\n            <h3>Add new Student</h3>\n            <br />\n\n            <form [formGroup]="createStudentForm" (submit)="submit()">\n              <ion-item>\n                <ion-label floating>Student ID</ion-label>\n                <ion-input\n                  type="text"\n                  formControlName="email"\n                  value=""\n                ></ion-input>\n              </ion-item>\n              <br />\n              <ion-item>\n                <ion-label floating>First Name</ion-label>\n                <ion-input type="text" formControlName="firstname"></ion-input>\n              </ion-item>\n              <br />\n              <ion-item>\n                <ion-label floating>Last Name</ion-label>\n                <ion-input type="text" formControlName="lastname"></ion-input>\n              </ion-item>\n              <br />\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input\n                  type="password"\n                  formControlName="password"\n                ></ion-input>\n              </ion-item>\n              <br />\n              <button\n                type="submit"\n                ion-button\n                full\n                round\n                [disabled]="!createStudentForm.valid"\n              >\n                Create Student\n              </button>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <!-- <ion-col col-1></ion-col> -->\n\n      <ion-col col-7 *ngIf="loaded | async">\n        <ion-card>\n          <ion-card-content>\n            <h1>Students: <strong>{{users.metric}}</strong></h1>\n          </ion-card-content>\n        </ion-card>\n        <br />\n\n        <ion-card>\n          <ion-card-content>\n            <div class="table-responsive">\n              <table class="table table-bordered">\n                <thead>\n                  <tr>\n                    <th scope="col">#</th>\n                    <th scope="col">FirstName</th>\n                    <th scope="col">LastName</th>\n                    <th scope="col">Email Address</th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr\n                    *ngFor="let user of users.data  | paginate: { id: \'server\', itemsPerPage: users.limit, currentPage: page, totalItems: users.metric, numberOfPages: users.total }; let i = index"\n                  >\n                    <td>{{i + 1}}</td>\n                    <td>{{user.firstname}}</td>\n                    <td>{{user.lastname}}</td>\n                    <td>{{user.email}}</td>\n                  </tr>\n\n                  <br />\n                  <pagination-controls id="server"\n                    (pageChange)="pageChange($event)"\n                  ></pagination-controls>\n                </tbody>\n              </table>\n            </div>\n            <br />\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/createstudent/createstudent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_desktop_desktop__["a" /* DesktopProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], CreatestudentPage);
    return CreatestudentPage;
}());

//# sourceMappingURL=createstudent.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { OfflineProvider } from "../../providers/offline/offline";

var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams, viewController, alertCtrl, toastCtrl, desktopProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.desktopProvider = desktopProvider;
        this.hasKeypoints = false;
        this.hasFlashCards = false;
        this.flashCardCount = 0;
        this.keyPointsCount = 0;
        this.subscribed = false;
        this.isTrialPeriod = function (expire) {
            var today = new Date().getTime();
            var expiryTime = new Date(expire).getTime();
            var diff = today - expiryTime;
            diff = diff / 1000; // milliseconds to seconds
            diff = diff / 60; // seconds to minutes
            diff = diff / 60; // miutes to hours
            diff = diff / 24; // hours to days;
            console.log('diff ', diff);
            return diff < 7;
        };
        this.topic = this.navParams.get("topic");
        this.subject = this.navParams.get("subject");
        this.fetchQuestion(this.topic.id);
    }
    OnboardingPage.prototype.ionViewDidLoad = function () {
        this.fetchKeypointsCount();
        this.fetchFlashCardsCount();
    };
    OnboardingPage.prototype.fetchQuestion = function (topic_id) {
        var _this = this;
        this.desktopProvider.fetchQuestionsForEvaluation(topic_id).subscribe(function (response) {
            _this.questions = response;
            _this.loaded = Promise.resolve(true);
        });
    };
    OnboardingPage.prototype.takeTest = function (test_type) {
        this.viewController.dismiss({
            take_test: true,
            questions: this.questions,
            test_type: test_type
        });
    };
    OnboardingPage.prototype.fetchKeypointsCount = function () {
        var _this = this;
        this.desktopProvider.fetchKeypointsCounts(this.topic.id)
            .subscribe(function (response) {
            _this.keyPointsCount = response[0]["count(*)"];
            _this.hasKeypoints = _this.keyPointsCount > 0;
            console.log('key counts', _this.hasKeypoints, _this.topic.index);
        }, function (err) {
            console.log('err ', err);
        });
    };
    OnboardingPage.prototype.fetchFlashCardsCount = function () {
        var _this = this;
        this.desktopProvider.fetchFlashCardsCount(this.topic.id)
            .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.flashCardCount = response[0]["count(*)"];
                console.log('flashcards counts', this.flashCardCount);
                this.hasFlashCards = this.flashCardCount > 0;
                return [2 /*return*/];
            });
        }); }, function (err) {
            console.log('err ', err);
        });
    };
    OnboardingPage.prototype.openLessonNotes = function () {
        var _this = this;
        console.log('open lesson notes ', this.hasKeypoints);
        // if (!this.hasKeypoints) {
        //   return this.alertCtrl.create({message: "lesson note"});
        //   // return this.presentToast("You don't have access to this lesson note, subscribe now to access all contents and more...")
        // }
        return this.desktopProvider.fetchKeypoints(this.topic.id).subscribe(function (data) {
            var lessons = data;
            _this.loaded = Promise.resolve(true);
            return _this.viewController.dismiss({
                read_notes: true,
                lessons: lessons
            });
        });
    };
    OnboardingPage.prototype.openFlashCards = function () {
        if (this.flashCardCount === 0)
            return this.presentToast('This topic currently has no flashcard 😢.');
        return this.viewController.dismiss({
            flash_cards: true,
            topic: this.topic,
            subject: this.subject
        });
    };
    OnboardingPage.prototype.openMatchCards = function () {
        return this.viewController.dismiss({
            match_cards: true,
        });
    };
    OnboardingPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-onboarding",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/onboarding/onboarding.html"*/'<!-- <ion-content padding>\n  <div class="bg-text">\n    <h3 text-center>\n      Welcome to learning with simbi\n    </h3>\n    <div class="p-bg">\n      <p>\n        I am going to be using the Maieutic learning style to help you\n        understand\n        {{ topic.topic | titlecase }}.\n      </p>\n      <p>\n        Our learning method is going to be in form of me asking you questions on\n        {{ topic.topic | titlecase }} and allowing you two trials to make a\n        correct attempt.\n      </p>\n      <!-- <p>\n              While learning, take your time before attempting each question, as this is\n              not a test. It is OK to get it wrong. A detailed explanation will be\n              provided to you before proceeding to the next question. After completing\n              the learning stage, you can proceed to take a test on the topic to assess\n              your understanding of the topic.\n            </p> \n    </div>\n\n    <ion-spinner *ngIf="!loaded" class="spinner" color="brown"></ion-spinner>\n  </div>\n</ion-content>\n<ion-footer padding>\n  <ion-row>\n    <ion-col col-6>\n      <button\n        [disabled]="!loaded"\n        class="global-btn"\n        ion-button\n        color="brown"\n        (click)="takeTest(0)"\n      >\n        Start Learning\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button\n        [disabled]="!loaded"\n        class="global-btn"\n        ion-button\n        color="brown"\n        (click)="takeTest(1)"\n      >\n        Take Evaluation\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n\n<ion-content padding class="modal-content">\n  <div [ngClass]="[\'bg-text \' + \'subject--\' + subject.id ]">\n    <div class="flex flex-v mt-25">\n      <ion-row class="btn-row" *ngIf="hasFlashCards">\n        <ion-col col-12>\n          <button\n            [disabled]="!loaded"\n            [ngClass]="[\'global-btn \' + \'subject--\'+subject.id ]"\n            ion-button\n            color="brown"\n            (click)="openFlashCards()"\n          >\n            FlashCards\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="btn-row" *ngIf="keyPointsCount > 0">\n        <ion-col col-12>\n          <button\n            [ngClass]="[\'global-btn \' + \'subject--\'+subject.id ]"\n            ion-button\n            color="brown"\n            (click)="openLessonNotes()"\n          >\n            Read Lesson Note\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="btn-row">\n        <ion-col col-12>\n          <button\n            [disabled]="!loaded"\n            [ngClass]="[\'global-btn \' + \'subject--\'+subject.id ]"\n            ion-button\n            color="brown"\n            (click)="takeTest(0)"\n          >\n            Interactive Questions\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="btn-row">\n        <ion-col col-12>\n          <button\n            [disabled]="!loaded"\n            [ngClass]="[\'global-btn \' + \'subject--\'+subject.id ]"\n            ion-button\n            color="brown"\n            (click)="takeTest(1)"\n          >\n            Take Evaluation\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="btn-row">\n        <ion-col col-12>\n          <button\n            [disabled]="!loaded"\n            [ngClass]="[\'global-btn \' + \'subject--\'+subject.id ]"\n            ion-button\n            color="brown"\n            (click)="openMatchCards()"\n          >\n            Match Cards\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-spinner *ngIf="!loaded" class="spinner" color="brown"></ion-spinner>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/onboarding/onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionProvider = /** @class */ (function () {
    function SessionProvider(storage) {
        this.storage = storage;
    }
    SessionProvider.prototype.newUser = function (data) {
        localStorage.setItem('user', JSON.stringify(data));
    };
    SessionProvider.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user;
    };
    SessionProvider.prototype.newActivationKey = function (data) {
        localStorage.setItem('activation_key', JSON.stringify(data));
    };
    SessionProvider.prototype.getActivationKey = function () {
        // localStorage.removeItem('activation_key')
        return localStorage.getItem('activation_key');
    };
    SessionProvider.prototype.isActivated = function () {
        var activation_key = JSON.parse(localStorage.getItem('activation_key'));
        console.log('key ', activation_key);
        if (activation_key || activation_key !== null || !this.hasExpired(activation_key)) {
            console.log('activated ', activation_key);
            return true;
        }
        else {
            console.log('not activated ', activation_key);
            return false;
        }
    };
    SessionProvider.prototype.hasExpired = function (activation_key) {
        //   create date objects for comparison
        if (!activation_key)
            return true;
        var today = new Date();
        var expiryTime = new Date(activation_key.expiry_date);
        return (today.getTime() > expiryTime.getTime());
    };
    SessionProvider.prototype.checkUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log('user ', user);
        if (user != null || user != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keys; });
/* unused harmony export AppEvents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionType; });
/* unused harmony export SubscriptionPlan */
var Keys = {
    NOTIFICATIONS: 'notifications',
    USER: 'user',
    PUTME: 'putme',
    USER_PROFILE: 'user-profile',
    EXPIRY_DATE: 'expiry_date',
    CHALLENGE: 'challenge',
    SOUND_OFF: 'sound-off',
    PLAY_AUDIO: 'play_audio',
    SUBSCRIPTION: 'subscription',
    SUBSCRIBED: 'subscribed',
    SUBSCRIPTION_PLANS: 'SUBSCRIPTION_PLANS',
    USER_SUBSCRIBED: 'user_subscribed',
    CLASS_ID: 'class_id',
    COMPLETED_TEST_COUNT: 'completed_test_count',
    LAST_UPDATED_TIME: 'last_updated_time',
    REFERRER: 'referrer',
    DATABASE_COPIED: 'db_copied',
    FIRST_LAUNCH: 'first_launch',
    FIRST_OPEN: 'first_open',
    FIRST_DATE: 'first_date',
    WHATSAPP_LINKS: 'WHATSAPP_LINKS',
    VIDEO_COLUMN_ADDED: 'video_column_added',
    TOPICS_TABLE_UPDATED: 'topics_table_updated',
    DISPLAY_FLASHCARD_GUIDES: 'display_flashcard_guides',
    COMBAT_SUBJECTS: 'combat-subjects'
};
var AppEvents = {
    PLAY_AUDIO: 'play_audio',
    PLAY_BG_AUDIO: 'play_bg_audio',
    BROWSER_CLOSED: 'browser_closed',
    USER_SUBSCRIBED: 'user_subscribed',
    UPDATE_THEME: 'update_theme',
    DB_SETUP: 'db_setup',
    DB_HAS_COPIED: 'db_hascopied',
    REDUCE_VOLUME: 'reduce_volume',
    PAYMENT_INITIATED: 'payment_initiated',
    PAYMENT_CANCELLED: 'payment_cancelled',
    DISABLE_BACK_BUTTON: 'disable_back',
    ENABLE_BACK_BUTTON: 'disable_back',
    USER_AUTH: 'user_auth',
    PROFILE_UPDATED: 'profile_updated',
    UPDATE_DATABASE_TABLE: 'update_database_table',
    TOPICS_TABLE_UPDATED: 'topics_table_updated'
};
var QuestionType;
(function (QuestionType) {
    QuestionType["practice"] = "practice";
    QuestionType["exam"] = "exam";
    QuestionType["test"] = "test";
    QuestionType["reading"] = "reading";
    QuestionType["normal"] = "normal";
})(QuestionType || (QuestionType = {}));
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["termly"] = "termly";
    SubscriptionPlan["yearly"] = "yearly";
})(SubscriptionPlan || (SubscriptionPlan = {}));
//# sourceMappingURL=contants.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonOutlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CustomFirebaseAnalyticsProvider } from "../../providers/analytics/analytics";
var LessonOutlinePage = /** @class */ (function () {
    function LessonOutlinePage(viewController, navParams) {
        this.viewController = viewController;
        this.navParams = navParams;
        this.isLoading = false;
        this.message = 'message';
        this.operator = 0;
        this.memory = [];
        this.operand = 0;
        this.outline = this.navParams.get('outline');
    }
    LessonOutlinePage.prototype.ionViewDidLoad = function () {
        console.log('calculator modal');
    };
    LessonOutlinePage.prototype.selectPoint = function (index) {
        this.viewController.dismiss({
            index: index
        });
    };
    LessonOutlinePage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    LessonOutlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-lesson-outline",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/lesson-outline/lesson-outline.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <!-- <ion-icon name="close" color="brown"></ion-icon> -->\n    </button>\n    <ion-title> Contents </ion-title>\n    <ion-buttons end>\n      <button ion-button class="cal-icon" (click)="closeModal()">\n        <img src="../../assets/imgs/close.svg" class="close-icon" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="outline-wrapper">\n    <ion-row *ngFor="let point of outline">\n      <button\n        type="button"\n        class="button outline-btn"\n        (click)="selectPoint(point.index);"\n      >\n        {{point.title}}\n      </button>\n    </ion-row>\n  </div>\n</ion-content>\n<!-- <ion-footer padding>\n  <ion-row>\n    <ion-col col-6>\n      <button class="global-btn" ion-button color="brown">\n        Start Learning\n      </button>\n   \n    <ion-col col-6>\n      <button class="global-btn" ion-button color="brown">\n        Close\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/lesson-outline/lesson-outline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LessonOutlinePage);
    return LessonOutlinePage;
}());

//# sourceMappingURL=lesson-outline.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NativeAudio } from "@ionic-native/native-audio";
// import { AuthProvider } from "../../providers/auth/auth";



// import { LearningProvider } from "../../providers/learning/learning";
// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";
var MatchCards = /** @class */ (function () {
    function MatchCards(navCtrl, navParams, loader, storage, 
        // private modalController: ModalController,
        // private tts: TextToSpeech,
        // private audio: NativeAudio,
        // private events: Events,
        desktopProvider, offlineProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.storage = storage;
        this.desktopProvider = desktopProvider;
        this.offlineProvider = offlineProvider;
        this.loaded = Promise.resolve(true);
        this.time = 0;
        this.matchCount = 0;
        this.gameOver = false;
        this.newGame = true;
        this.storage.get("user").then(function (user) {
            _this.user = user;
        });
        this.topic = this.navParams.get('topic');
        this.subject = this.navParams.get('subject');
    }
    MatchCards.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("user").then(function (user) {
            _this.user = user;
        });
    };
    MatchCards.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create();
        loader.present().then(function (_) {
            _this.desktopProvider.fetchFlashCards(_this.topic.id)
                .subscribe(function (cards) {
                _this.matchData = cards;
                loader.dismiss();
                _this.loaded = Promise.resolve(true);
                console.log('cards ', cards);
                _this.initializeCards();
                _this.learningData = {
                    user_id: _this.user.id,
                    user_name: _this.user.full_name,
                    topic_id: _this.topic.id,
                    subject_id: _this.subject.id,
                    topic_name: _this.topic.topic,
                    subject_name: _this.subject.name,
                    track_type: "learning",
                    time_spent: 0,
                    started_at: null,
                    completed_at: null
                };
            }, function (e) {
                console.log('error ', e);
                loader.dismiss();
            });
        });
    };
    MatchCards.prototype.getFontSize = function (textLength) {
        var baseSize = 12;
        if (textLength >= baseSize) {
            textLength = baseSize - 4;
        }
        var fontSize = baseSize - textLength;
        return fontSize + "vw";
    };
    MatchCards.prototype.adjustCardFonts = function () {
        var _this = this;
        var cards = Array.from(document.querySelectorAll('.match-card p'));
        console.log(cards);
        cards.forEach(function (card) {
            card.style.fontSize = _this.getFontSize(card.textContent.length);
        });
    };
    MatchCards.prototype.initializeCards = function () {
        var cards = [];
        for (var _i = 0, _a = this.matchData; _i < _a.length; _i++) {
            var data = _a[_i];
            cards.push.apply(cards, [{ matchId: data.id, term: data.title }, { matchId: data.id, term: data.content }]);
        }
        this.newCards = cards.slice();
        this.matchCards = this.shuffleArrary(cards.slice(0, 12));
        console.log('matchcards ', this.matchCards);
    };
    MatchCards.prototype.shuffleArrary = function (data) {
        var arr = data;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };
    MatchCards.prototype.getTimeInSeconds = function (timeStamp) {
        return Number((timeStamp / 1000)).toFixed(2);
    };
    MatchCards.prototype.ionViewWillLeave = function () {
        console.log('will leave');
        if (this.timer)
            clearInterval(this.timer);
        if (this.dismissTimeout)
            clearTimeout(this.dismissTimeout);
        // this.sendReadingData();
    };
    MatchCards.prototype.startReadingInterval = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.time += 1;
        });
    };
    MatchCards.prototype.restart = function () {
        this.matchCards = this.shuffleArrary(this.newCards.slice(0, Math.min(12, this.newCards.length)));
        this.matchCount = 0;
        this.gameOver = false;
        this.time = 0;
        this.startReadingInterval();
    };
    MatchCards.prototype.start = function () {
        this.newGame = false;
        this.startReadingInterval();
        // this.adjustCardFonts()
    };
    MatchCards.prototype.handleCardSelect = function (e) {
        var card = e.target;
        if (card.classList.contains('selected')) {
            this.selectedCard = null;
            return card.classList.remove('selected');
        }
        if (!this.selectedCard) {
            this.selectedCard = card;
            // console.log('selected ', card);
            return card.classList.add('selected');
        }
        var card1 = this.selectedCard;
        card1.classList.remove('selected');
        this.selectedCard = null;
        if (card1.dataset.correctId === card.dataset.correctId) {
            return this.markCorrect(card1, card);
        }
        this.markWrong(card1, card);
    };
    MatchCards.prototype.markCorrect = function (card1, card2) {
        this.matchCount += 1;
        if (this.matchCount === this.matchCards.length / 2) {
            // game done
            // console.log('game over')
            this.matchCards = [];
            this.gameOver = true;
            clearInterval(this.timer);
        }
        card1.classList.add('correct');
        card2.classList.add('correct');
    };
    MatchCards.prototype.markWrong = function (card1, card2) {
        card1.classList.add('wrong');
        card2.classList.add('wrong');
        this.time += 1000;
        this.displayExtraTime();
        this.dismissTimeout = setTimeout(function () {
            card1.classList.remove('wrong');
            card2.classList.remove('wrong');
        }, 500);
    };
    MatchCards.prototype.displayExtraTime = function () {
        var _this = this;
        var p = document.createElement('p');
        p.textContent = '+1 sec';
        p.classList.add('added-time');
        this.timerContainer.nativeElement.appendChild(p);
        this.addedTimeTimeout = setTimeout(function () {
            _this.timerContainer.nativeElement.removeChild(p);
        }, 800);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("timer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MatchCards.prototype, "timerEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("timerContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MatchCards.prototype, "timerContainer", void 0);
    MatchCards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-matchcards",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/match-cards/match-cards.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title>Match</ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button color="dark" class="timer" (click)="UndoDissmis()">\n        <ion-icon name="ios-undo" color="dark" class="calc-icon"></ion-icon>\n      </button>-->\n      <!-- <button ion-button color="dark" class="timer" (click)="restart()">\n        <ion-icon name="refresh" color="dark" class="calc-icon"></ion-icon>\n      </button> -->\n      <button\n        ion-button\n        clear\n        color="dark"\n        class="timer"\n        *ngIf="!gameOver && !newGame"\n        #timer\n      >\n        {{ getTimeInSeconds(time) }} seconds\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngClass]="{\'match-done\': true, \'show\': gameOver === true}">\n    <p class="emoji">🎊</p>\n    <h1>Nice Work!</h1>\n    <br />\n    <h2>{{ getTimeInSeconds(time) }} seconds</h2>\n    <p>Your personal record is {{ getTimeInSeconds(time) }} seconds</p>\n    <br />\n    <br />\n    <button class="global-btn enroll-btn" ion-button (click)="restart()">\n      Play again\n    </button>\n    <!-- <button\n      class="global-btn tertiary-btn--outline"\n      ion-button\n      (click)="restart()"\n    >\n      Restart\n    </button> -->\n  </div>\n  <div [ngClass]="{\'match-done\': true, \'show\': newGame === true}">\n    <p class="emoji">🏁</p>\n    <h1>Ready to play?</h1>\n    <p>See how fast you can match all the terms with their definitions.</p>\n    <br />\n    <br />\n    <button class="global-btn enroll-btn" ion-button (click)="start()">\n      Start game\n    </button>\n    <br />\n    <!-- <button\n      class="global-btn tertiary-btn--outline"\n      ion-button\n      (click)="restart()"\n    >\n      Restart\n    </button> -->\n  </div>\n  <div *ngIf="loaded | async" class="match-container">\n    <!-- matchcards Interface-->\n    <div [ngClass]="{\'match-cards\': true, \'show\': !gameOver && !newGame }">\n      <div\n        class="match-card"\n        [attr.data-correct-id]="card.matchId"\n        *ngFor="let card of matchCards"\n        (click)="handleCardSelect($event)"\n        [innerHTML]="card.term"\n      ></div>\n      <div class="timer-container" #timerContainer>\n        <!-- <p class="added-time">+1 Sec</p> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/match-cards/match-cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */]])
    ], MatchCards);
    return MatchCards;
}());

//# sourceMappingURL=match-cards.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sanitize_html__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sanitize_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sanitize_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contants__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lesson_note_lesson_note__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { NativeAudio } from "@ionic-native/native-audio";
// import { AuthProvider } from "../../providers/auth/auth";


// import { LearningProvider } from "../../providers/learning/learning";




// import { LessonOutlinePage } from "../lesson-outline/lesson-outline";
var FlashCard = /** @class */ (function () {
    function FlashCard(navCtrl, navParams, loader, storage, 
        // private modalController: ModalController,
        tts, 
        // private audio: NativeAudio,
        // private events: Events,
        destkopProvider, offlineProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.storage = storage;
        this.tts = tts;
        this.destkopProvider = destkopProvider;
        this.offlineProvider = offlineProvider;
        this.modalCtrl = modalCtrl;
        this.learningDone = false;
        this.isSendingLearningData = false;
        this.studyAgain = new Set();
        this.displayGuides = false;
        this.displayLeftDragGuide = false;
        this.displayRightDragGuide = false;
        this.displaySoundGuide = false;
        this.displayFlipGuide = false;
        this.matchCardsPage = 'matchcards-page';
        this.lessonNote = 'lessonNote-page';
        this.subscribed = false;
        this.storage.get("user").then(function (user) {
            _this.user = user;
        });
        this.topic = this.navParams.get('topic');
        this.subject = this.navParams.get('subject');
    }
    FlashCard.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loader.create();
        loader.present().then(function (_) {
            console.log('topic ', _this.topic);
            _this.destkopProvider.fetchFlashCards(_this.topic.id)
                .subscribe(function (flashcards) {
                _this.flashCardData = flashcards;
                _this.learningDone = false;
                _this.loaded = Promise.resolve(true);
                // this.initializeCards();
                setTimeout(function () {
                    _this.initializeCards();
                    console.log('user ', _this.user);
                    _this.readingData = {
                        user_id: _this.user.id,
                        user_name: _this.user.full_name,
                        topic_id: _this.topic.id,
                        subject_id: _this.subject.id,
                        topic_name: _this.topic.topic,
                        subject_name: _this.subject.name,
                        track_type: "learning",
                        time_spent: 0,
                        started_at: null,
                        completed_at: null
                    };
                    _this.startReadingInterval();
                }, 100);
                loader.dismiss();
            }, function (e) {
                console.log('error ', e);
                loader.dismiss();
            });
        });
    };
    FlashCard.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get(__WEBPACK_IMPORTED_MODULE_6__contants__["a" /* Keys */].DISPLAY_FLASHCARD_GUIDES)];
                    case 1:
                        _a.displayGuides = _b.sent();
                        if (this.displayGuides === null) {
                            this.displaySoundGuide = true;
                            this.displayLeftDragGuide = true;
                            this.displayRightDragGuide = true;
                            this.displayFlipGuide = true;
                        }
                        console.log('display guides ', this.displayGuides);
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashCard.prototype.ionViewWillLeave = function () {
        this.sendReadingData();
        if (this.timer)
            clearInterval(this.timer);
        if (this.dismissTimeout)
            clearTimeout(this.dismissTimeout);
        this.tts.speak("");
        // this.sendReadingData();
        if (this.displayGuides) {
            this.displaySoundGuide = false;
            this.displayLeftDragGuide = false;
            this.displayRightDragGuide = false;
            this.displayFlipGuide = false;
        }
        this.storage.set(__WEBPACK_IMPORTED_MODULE_6__contants__["a" /* Keys */].DISPLAY_FLASHCARD_GUIDES, false);
    };
    FlashCard.prototype.showGuides = function () {
        if (this.learningDone)
            return;
        this.displayGuides = true;
        // setInterval(() => {
        //   this.displayGuides = false;
        // }, 3000)
    };
    FlashCard.prototype.startReadingInterval = function () {
        var _this = this;
        this.readingData.started_at = new Date().toISOString();
        this.readingData.time_spent = 0;
        this.isSendingLearningData = false;
        this.timer = setInterval(function () {
            _this.readingData.time_spent += 1;
        });
    };
    FlashCard.prototype.clearReadingInterval = function () {
        clearInterval(this.timer);
    };
    FlashCard.prototype.restart = function () {
        this.reverseReadCards();
    };
    FlashCard.prototype.restartWithStudyAgain = function () {
        console.log(this.studyAgain.values());
        if (this.studyAgain.size > 0)
            this.reverseReadCards(true);
    };
    FlashCard.prototype.playAudio = function (text) {
        // disable sound guide on first attempt to playsound
        if (this.displaySoundGuide)
            this.displaySoundGuide = false;
        var clean = __WEBPACK_IMPORTED_MODULE_5_sanitize_html__(text, {
            allowedTags: [],
            allowedAtrributes: {}
        });
        this.tts.speak(clean)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    FlashCard.prototype.initializeCards = function () {
        this.flashCards = document.querySelector('.flash-cards');
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
    };
    FlashCard.prototype.handleTouchStart = function (event) {
        // const coord = {x: event.touches[0].clientX, y: event.touches[0].clientY}
        var eventTarget = event.target;
        var activeParent = eventTarget.parentNode.classList.contains('active')
            ? eventTarget.parentNode
            : eventTarget;
        // console.log('target ', eventTarget)
        if (activeParent.classList.contains('active')) {
            this.cardToAnimate = activeParent;
            this.activeCard = this.cardToAnimate;
            this.activeCardStatus = this.activeCard.querySelector('.flash-card-status');
            // this.cardToAnimate.style.transition = 'none';
            this.activeCardRect = this.activeCard.getBoundingClientRect();
            this.touchStartRect = { x: event.clientX, y: event.clientY };
        }
    };
    FlashCard.prototype.handleTouchMove = function (e) {
        // console.log('touchmove ', e)
        if (this.cardToAnimate) {
            // console.log('mouse  move ', e.clientX, e.clientY );
            this.isAnimating = true;
            // this.touchEndRect = { x: e.clientX, y: e.clientY }
            // this.AnimateActiveCard(e.touches[0]);
            this.eventTouches = { clientX: e.clientX, clientY: e.clientY };
            if (this.requestId != null)
                return;
            this.requestId = requestAnimationFrame(this.AnimateActiveCard.bind(this, this.eventTouches));
        }
    };
    FlashCard.prototype.handleTouchEnd = function (event) {
        var cardToFlip = event.target.parentNode;
        if (this.isAnimating) {
            this.stopAnimation(this.touchEndRect);
        }
        else {
            this.isAnimating = false;
            this.cardToAnimate = null;
            this.flipCard(cardToFlip);
        }
    };
    FlashCard.prototype.handleOnTransitionEnd = function (e) {
        // console.log('transition end ', e);
        if (e.target.classList.contains('active') && e.propertyName === 'transform') {
            e.target.style.transition = 'transform .8s';
            e.target.removeEventListener('transitionend', this.handleOnTransitionEnd);
        }
    };
    FlashCard.prototype.stopAnimation = function (e) {
        cancelAnimationFrame(this.requestId);
        this.requestId = null;
        var lastX = this.touchEndRect.x - this.touchStartRect.x;
        var endY = this.touchEndRect.y - this.touchStartRect.y;
        this.activeCard.style.transition = 'transform .3s ease-out';
        this.activeCardStatus.style.opacity = '0';
        // console.log('dissmiss ', Math.abs(lastX) > this.activeCardRect.width / 2)
        // listen transitionEnd event and restore card transition to default (.3s)
        this.activeCard.addEventListener('transitionend', this.handleOnTransitionEnd);
        if (Math.abs(lastX) > this.activeCardRect.width / 4) {
            var right = lastX > 0 ? true : false;
            if (right) {
                this.activeCard.style.transform = "translate3d(100vw, " + endY + "px, 0px)";
                this.activeCard.style.tranform = "translateY(" + endY + "px)";
                var lastDismissedCard_1 = this.activeCard;
                this.dismissTimeout = setTimeout(function () {
                    lastDismissedCard_1.classList.add('read');
                }, 300);
                // console.log('got it  ', this.activeCard.dataset);
                this.studyAgain.delete(this.activeCard.dataset.id);
                // disable right drag guide on first right drag attempt 
                if (this.displayRightDragGuide)
                    this.displayRightDragGuide = false;
            }
            else {
                this.activeCard.style.transform = "translate3d(-100vw, " + endY + "px, 0px)";
                this.activeCard.style.tranform = "translateY(" + endY + "px)";
                this.studyAgain.add(this.activeCard.dataset.id);
                // console.log('study again', this.studyAgain);
                // disable left drag guide on first left drag attempt 
                if (this.displayLeftDragGuide)
                    this.displayLeftDragGuide = false;
            }
            this.readCards.push(this.activeCard);
            this.remainingCards.pop();
            this.setNextActiveCard();
        }
        else {
            this.activeCard.style.transform = 'none';
        }
        // this.activeCard = null;  
        this.isAnimating = false;
        this.cardToAnimate = null;
        this.activeCardStatus = null;
        // this.touchStartRect = null;
    };
    FlashCard.prototype.setNextActiveCard = function () {
        // console.log(this.readCards, this.remainingCards)
        // console.log(' active ', this.activeCard, this.activeCard.classList);
        if (this.remainingCards.length > 0) {
            // this.activeCard = this.remainingCards[this.remainingCards.length - 1];
            var nextCard = this.activeCard.previousElementSibling;
            // console.log('new active ', nextCard);
            nextCard.classList.add('active');
            nextCard.style.transform = 'none';
        }
        else {
            // this.flashOutroCard.classList.add('show')
            this.learningDone = true;
            this.sendReadingData();
        }
    };
    FlashCard.prototype.AnimateActiveCard = function (e) {
        // console.log('aac ', e, this.touchEndRect);
        if (!this.isAnimating || !this.cardToAnimate)
            return;
        var x = this.eventTouches.clientX - this.touchStartRect.x;
        var y = this.eventTouches.clientY - this.touchStartRect.y;
        this.touchEndRect = { x: this.eventTouches.clientX, y: this.eventTouches.clientY };
        // console.log('x ', x, ' y ', y, this.activeCard, this.cardToAnimate);
        this.cardToAnimate.style.transition = 'none';
        this.cardToAnimate.style.transform = "translate3d(" + x + "px, " + y + "px, 0px)";
        var right = x > 1 ? true : false;
        var cardOpacity = Math.min((Math.abs(x / (this.activeCardRect.width / 4)) * 1), 1);
        // console.log('opacity ', cardOpacity);
        if (right) {
            this.activeCardStatus.style.background = 'green';
            this.activeCardStatus.style.opacity = "" + cardOpacity;
            this.activeCardStatus.textContent = 'Got it';
        }
        else {
            this.activeCardStatus.style.background = 'orange';
            this.activeCardStatus.style.opacity = "" + cardOpacity;
            this.activeCardStatus.textContent = 'Study again';
        }
        requestAnimationFrame(this.AnimateActiveCard.bind(this));
    };
    FlashCard.prototype.flipCard = function (card) {
        // const card = event.target.parentNode.parentNode;
        if (!card.classList.contains('active'))
            return;
        // const innerCard = card.querySelector('.flash-card--inner');
        if (card.classList.contains('flip')) {
            card.classList.remove('flip');
            card.style.transform = 'rotateY(0deg)';
        }
        else {
            card.style.transform = 'rotateY(-180deg)';
            card.classList.add('flip');
        }
        // flip action has been detected
        if (this.displayFlipGuide)
            this.displayFlipGuide = false;
    };
    FlashCard.prototype.UndoDissmis = function () {
        // console.log('undo last swipe ', this.readCards, this.remainingCards)
        if (this.readCards.length > 0 && this.remainingCards.length > 0) {
            var nextCard = this.readCards.pop();
            var lastActive = this.activeCard;
            this.remainingCards.push(nextCard);
            this.activeCard.classList.remove('active');
            // console.log('active ', this.activeCard)
            this.activeCard = nextCard;
            var rotateAngle = this.remainingCards.length % 2 === 0 ? -5 : 5;
            // rotate last active card
            lastActive.style.transform = "rotate(" + rotateAngle + "deg)";
            this.activeCard.style.transition = 'transform .3s ease-in';
            this.activeCard.style.transform = 'none';
            nextCard.classList.remove('read');
            nextCard.classList.add('active');
            // console.log(' next ', nextCard, ' read ', this.readCards, '  new ', this.remainingCards);
        }
    };
    FlashCard.prototype.reverseReadCards = function (withStudyAgain) {
        var _this = this;
        if (withStudyAgain === void 0) { withStudyAgain = false; }
        this.readCards = this.readCards.reduce(function (allCards, card, i) {
            var nextCard = _this.readCards[i];
            // console.log('current ', nextCard.dataset.id, this.studyAgain.has(nextCard.dataset.id))
            if (withStudyAgain && !_this.studyAgain.has(nextCard.dataset.id)) {
                // console.log('skip ', nextCard.dataset.id)
                allCards.push(nextCard);
                return allCards;
            }
            // this.readCards.pop();
            var lastActive = _this.activeCard || nextCard;
            _this.remainingCards.push(nextCard);
            // console.log('active ', this.activeCard)
            // this.activeCard.classList.remove('active')
            nextCard.style.transition = 'transform .3s ease-in';
            nextCard.style.transform = 'none';
            var rotateAngle = _this.remainingCards.length % 2 === 0 ? -5 : 5;
            _this.activeCard = nextCard;
            lastActive.style.transform = "rotate(" + rotateAngle + "deg)";
            nextCard.classList.add('active');
            nextCard.classList.remove('read');
            // console.log(nextCard.classList);
            return allCards;
        }, []);
        // this.studyAgain = new Set();
        // console.log('read ', this.readCards, ' remaining ', this.remainingCards);
        if (this.remainingCards.length > 0)
            this.remainingCards[this.remainingCards.length - 1].classList.add('active');
        this.learningDone = false;
        this.startReadingInterval();
    };
    FlashCard.prototype.sendReadingData = function () {
        if (this.isSendingLearningData)
            return;
        this.readingData.completed_at = new Date().toISOString();
        var diff = new Date(this.readingData.completed_at).getTime() - new Date(this.readingData.started_at).getTime();
        if (diff < (60 * 1000)) {
            console.log('less than a minute ', diff);
            return;
        }
        this.readingData.user_id = this.user.id;
        // console.log('learning data ', this.readingData);
        // this.learningProvider.sendReadingData(this.readingData)
        this.clearReadingInterval();
    };
    FlashCard.prototype.openLessonNote = function () {
        var _this = this;
        return this.destkopProvider.fetchKeypoints(this.topic.id).subscribe(function (data) {
            return _this.navCtrl.pop().then(function (val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__lesson_note_lesson_note__["a" /* LessonNote */], {
                    topic: _this.topic,
                    subject: _this.subject,
                    lessons: data
                }, {
                    animate: true,
                    animation: "transition-ios",
                    direction: "forward"
                });
            });
        });
    };
    FlashCard.prototype.playGame = function () {
        // this.navCtrl.push(this.matchCardsPage, {
        //   topic: this.topic,
        //   subject: this.subject,
        // })
        var _this = this;
        this.navCtrl.pop().then(function (val) {
            _this.navCtrl.push(_this.matchCardsPage, {
                topic: _this.topic,
                subject: _this.subject,
            }, {
                animate: true,
                animation: "transition-ios",
                direction: "forward"
            });
        });
    };
    FlashCard.prototype.fetchQuestion = function (test_type) {
        var _this = this;
        var practice = test_type == 0 ? true : false;
        return this.destkopProvider.fetchQuestionsForEvaluation(this.topic.id).subscribe(function (data) {
            _this.loaded = Promise.resolve(true);
            return data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("flashcards"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FlashCard.prototype, "flashcards", void 0);
    FlashCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-flashcards",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/flash-cards/flash-cards.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title>{{ topic.topic }}</ion-title>\n    <ion-buttons end>\n      <button\n        ion-button\n        color="dark"\n        class="timer"\n        (click)="UndoDissmis()"\n        tooltip="Click to undo dismiss"\n        navTooltip\n      >\n        <ion-icon name="ios-undo" color="dark" class="calc-icon"></ion-icon>\n      </button>\n      <!-- <button\n        ion-button\n        color="dark"\n        class="timer danger"\n        (click)="showGuides()"\n      >\n        <ion-icon name="ios-alert" color="danger" class="calc-icon"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="loaded | async" class="flash-container">\n    <!-- flashcards Interface-->\n    <div class="flash-cards">\n      <div [ngClass]="{\'flash-done\': true, \'show\': learningDone === true}">\n        <p class="emoji" *ngIf="studyAgain.size > 0">😍</p>\n        <p class="emoji" *ngIf="studyAgain.size === 0">🎊</p>\n        <h1>Nice Work!</h1>\n        <p *ngIf="studyAgain.size > 0">\n          Keep practicing to master the {{studyAgain.size}} remaining\n        </p>\n        <p *ngIf="studyAgain.size === 0">You\'ve learned everything</p>\n        <br />\n        <!-- <br /> -->\n        <button\n          class="global-btn enroll-btn"\n          ion-button\n          (click)="restartWithStudyAgain()"\n          *ngIf="studyAgain.size > 0"\n        >\n          Practice again\n        </button>\n        <br />\n        <button\n          class="global-btn tertiary-btn--outline"\n          ion-button\n          (click)="restart()"\n        >\n          Restart all cards\n        </button>\n        <br />\n        <button\n          class="global-btn tertiary-btn--outline"\n          ion-button\n          (click)="openLessonNote()"\n        >\n          Read lesson note\n        </button>\n      </div>\n      <div\n        *ngFor="let card of flashCardData; let i = index;"\n        [ngClass]="{\'flash-card\' : true, \'active\': i === flashCardData.length - 1}"\n        [attr.data-id]="card.id"\n      >\n        <div class="flash-card-status">\n          <!-- {{ card.title }} -->\n        </div>\n        <!-- tutorial buttons -->\n        <button\n          ion-button\n          color="dark"\n          class="guide-btn left"\n          *ngIf="i === 0"\n          tooltip="Drag card to the left to practice again"\n          positionV="top"\n          duration="900000"\n          arrow\n          [active]="displayLeftDragGuide"\n        ></button>\n        <button\n          ion-button\n          color="dark"\n          class="guide-btn right"\n          *ngIf="i === 0"\n          tooltip="Drag card to the right if understood"\n          positionV="bottom"\n          duration="900000"\n          arrow\n          [active]="displayRightDragGuide"\n        ></button>\n        <button\n          ion-button\n          color="dark"\n          class="guide-btn right flip"\n          *ngIf="i === 0"\n          tooltip="Tap card to view explanation"\n          positionV="center"\n          duration="900000"\n          arrow\n          [active]="displayFlipGuide"\n        ></button>\n        <!-- end of tutorial buttons -->\n        <!-- <div class="flash-card--inner"> -->\n        <div\n          class="flash-card--front"\n          (mousedown)="handleTouchStart($event)"\n          (mousemove)="handleTouchMove($event)"\n          (mouseup)="handleTouchEnd($event)"\n        >\n          <h1 [innerHTML]="card.title"></h1>\n          <div class="flash-card--options">\n            <!-- <button\n              ion-button\n              color="light"\n              class="timer"\n              (click)="playAudio(card.title)"\n            >\n              <ion-icon\n                name="ios-volume-up"\n                color="dark"\n                class="calc-icon"\n              ></ion-icon>\n              <button\n                ion-button\n                color="dark"\n                class="guide-btn sound-guide"\n                *ngIf="i === 0"\n                tooltip="Click to listen to audio"\n                arrow\n                [active]="displaySoundGuide"\n                duration="900000"\n              ></button>\n            </button> -->\n            <!-- <button ion-button color="light" class="timer">\n              <ion-icon\n                name="md-star-outline"\n                color="dark"\n                class="calc-icon"\n              ></ion-icon>\n            </button> -->\n          </div>\n        </div>\n        <div\n          class="flash-card--back"\n          (mousedown)="handleTouchStart($event)"\n          (mousemove)="handleTouchMove($event)"\n          (mouseup)="handleTouchEnd($event)"\n        >\n          <h1 [innerHTML]="card.content"></h1>\n          <div class="flash-card--options">\n            <!-- <button\n              ion-button\n              color="light"\n              (click)="playAudio(card.content)"\n              tooltip="Click to listen to audio"\n              positionV="bottom"\n              positionH="right"\n              arrow\n            >\n              <ion-icon\n                name="ios-volume-up"\n                color="dark"\n                class="calc-icon"\n              ></ion-icon>\n            </button> -->\n            <!-- <button ion-button color="light">\n              <ion-icon\n                name="md-star-outline"\n                color="dark"\n                class="calc-icon"\n              ></ion-icon>\n            </button> -->\n          </div>\n        </div>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/flash-cards/flash-cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */],
            __WEBPACK_IMPORTED_MODULE_7__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], FlashCard);
    return FlashCard;
}());

//# sourceMappingURL=flash-cards.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostutmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examsubjects_examsubjects__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PostutmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostutmePage = /** @class */ (function () {
    function PostutmePage(navCtrl, navParams, desktopProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.toastCtrl = toastCtrl;
    }
    PostutmePage.prototype.ionViewDidLoad = function () {
        this.fetchSchools();
    };
    PostutmePage.prototype.fetchSchools = function () {
        var _this = this;
        this.desktopProvider.postUtmeSchools().subscribe(function (response) {
            _this.schools = response;
            _this.loaded = Promise.resolve(true);
        }, function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: 'An error occured'
            }).present();
        });
    };
    PostutmePage.prototype.gotoSubjects = function (school) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__examsubjects_examsubjects__["a" /* ExamsubjectsPage */], {
            exam: school
        }, {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    PostutmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postutme',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/postutme/postutme.html"*/'<!--\n  Generated template for the PostutmesubjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title>Post Utme</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="center-page cont">\n    <h2><strong>Select School</strong></h2>\n    <br>\n\n    <ion-row>\n      <ion-col col-4 *ngFor="let school of schools; let index = i">\n        <button\n      ion-item\n     no-lines\n      (click)="gotoSubjects(school)"\n      class="animated pulse"\n    >\n      <div class="topic-obj">\n       \n        <h6>\n          <strong> {{ school.name | titlecase }} </strong>\n        </h6>\n      </div>\n      <ion-icon\n        item-end\n        name="ios-arrow-forward"\n      ></ion-icon>\n    </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/postutme/postutme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], PostutmePage);
    return PostutmePage;
}());

//# sourceMappingURL=postutme.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherevaluationresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studentresults_studentresults__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherevaluationresultPage = /** @class */ (function () {
    function TeacherevaluationresultPage(navCtrl, navParams, desktopProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.currentSubject = '';
    }
    TeacherevaluationresultPage.prototype.ionViewDidLoad = function () {
        this.fetchSubject();
    };
    TeacherevaluationresultPage.prototype.fetchSubject = function () {
        var _this = this;
        this.desktopProvider.fetchSubjects().subscribe(function (response) {
            _this.subjects = response;
            _this.subjectLoaded = Promise.resolve(true);
            _this.currentSubject = _this.subjects[0].name;
            _this.fetchChartData(_this.subjects[0]);
        });
    };
    TeacherevaluationresultPage.prototype.fetchChartData = function (subject) {
        var _this = this;
        this.currentSubject = subject.name;
        this.desktopProvider.fetchEvaluationForChartScores(subject.id).subscribe(function (response) {
            _this.fetchSubjectStudentAgg(subject.id);
            _this.data = response;
            var labels = _this.data.map(function (val) {
                return val.topic;
            });
            var values = _this.data.map(function (val) {
                return val.score;
            });
            _this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.lineCanvas.nativeElement, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                            label: 'Chart of topics taken in this subject',
                            data: values
                        }]
                }
            });
        });
    };
    TeacherevaluationresultPage.prototype.fetchSubjectStudentAgg = function (subjectId) {
        var _this = this;
        this.desktopProvider.fetchEvaluationAgg(subjectId).subscribe(function (response) {
            _this.aggregates = response;
            _this.aggregatesLoaded = Promise.resolve(true);
        });
    };
    TeacherevaluationresultPage.prototype.viewPerfomances = function (evals) {
        console.log(evals);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__studentresults_studentresults__["a" /* StudentresultsPage */], {
            user: evals.uid
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TeacherevaluationresultPage.prototype, "lineCanvas", void 0);
    TeacherevaluationresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacherevaluationresult',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherevaluationresult/teacherevaluationresult.html"*/'<!--\n  Generated template for the TeacherevaluationresultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Evaluation Result </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <ion-row>\n      <ion-col col-4>\n        <ion-card *ngIf="subjectLoaded">\n          <ion-card-content>\n            <ion-item *ngFor="let subject of subjects">\n              <button ion-button item-start clear color="dark"> {{subject.name}}</button>\n              <button ion-button item-end (click)="fetchChartData(subject)">View Results</button>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n  \n  \n      <ion-col col-8 padding>\n        <h3>{{currentSubject}}</h3>\n        <br>\n      <ion-card>\n          <ion-card-content>\n            <canvas #lineChart></canvas>\n          </ion-card-content>\n        </ion-card >\n\n        <br>\n\n          <ion-card *ngIf="aggregatesLoaded">\n            <ion-card-content>\n              <div class="table-responsive">\n                <table class="table table-bordered">\n                  <thead>\n                    <th  scope="col">#</th>\n                    <th scope="col">Fullname</th>\n                    <th scope="col">Topic</th>\n                    <th scope="col">Subject</th>\n                    <th scope="col">Attempts</th>\n                    <th scope="col">Avg Score</th>\n                    <th scope="col"></th>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor="let aggregate of aggregates; let i =index">\n                    <td>{{i}}</td>\n                    <td>{{aggregate.firstname + \' \' + aggregate.lastname}}</td>\n                    <td>{{aggregate.topic}}</td>\n                    <td>{{aggregate.name}}</td>\n                    <td>{{aggregate.attempts}}</td>\n                    <td>{{aggregate.aggregate_score | number: \'1.2-2\'}}</td>\n                    <td>\n                      <button ion-button round (click)="viewPerfomances(aggregate)">View Students Result</button>\n                    </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n    </ion-row> \n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherevaluationresult/teacherevaluationresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], TeacherevaluationresultPage);
    return TeacherevaluationresultPage;
}());

//# sourceMappingURL=teacherevaluationresult.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentreportdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StudentreportdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentreportdetailsPage = /** @class */ (function () {
    function StudentreportdetailsPage(navCtrl, navParams, desktopProvider, sessionProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.sessionProvider = sessionProvider;
        var user;
        this.type = this.navParams.get('type');
        this.extras = this.navParams.get('body');
        console.log('extras ', this.extras);
        if (this.extras.user_id != undefined) {
            user = this.extras.user_id;
        }
        else {
            user = this.sessionProvider.getUser().id;
        }
        console.log(this.type);
        if (this.type == 'evals') {
            this.desktopProvider.fetchAllEvaluationAttempt(user, this.extras.subject_id, this.extras.topic_id).subscribe(function (response) {
                console.log(response);
                _this.data = response;
            });
        }
        else {
            this.desktopProvider.fetchAllExamAttempt(user, this.extras.exam_id, this.extras.subject_id).subscribe(function (response) {
                console.log(response);
                _this.data = response;
            });
        }
    }
    StudentreportdetailsPage.prototype.validDate = function (date) {
        return (date != 'undefined') && (date != 'null');
    };
    StudentreportdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentreportdetailsPage');
    };
    StudentreportdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentreportdetails',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/studentreportdetails/studentreportdetails.html"*/'<!--\n  Generated template for the StudentreportdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Result Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <ion-card>\n      <ion-card-content>\n        <div class="table-responsive">\n          <table class="table table-bordered" *ngIf="type == \'evals\'">\n            <thead>\n              <tr>\n                <th  scope="col">#</th>\n                <th scope="col">Subject</th>\n                <th scope="col">Topic</th>\n                <th scope="col">Status</th>\n                <th scope="col">Score</th>\n                <th scope="col">Start Time</th>\n                <th scope="col">End Time</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor="let eval of data; let i = index;">\n                <td></td>\n                <td>{{eval.name}}</td>\n                <td>{{eval.topic}}</td>\n                <td>{{eval.status}}</td>\n                <td>{{eval.score}}</td>\n                <td *ngIf="validDate(eval?.start_time)">{{ eval?.start_time | date: \'MMM d, y, h:mm:ss a\'}}</td>\n                <td *ngIf="!validDate(eval?.start_time)"> - </td>\n                <td *ngIf="validDate(eval?.end_time)">{{ eval.end_time | date: \'MMM d, y, h:mm:ss a\'}}</td>\n                <td *ngIf="!validDate(eval?.end_time)"> - </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <table class="table table-bordered" *ngIf="type == \'exams\'">\n            <thead>\n              <tr>\n                <th  scope="col">#</th>\n                <th scope="col">Exam</th>\n                <th scope="col">Subject</th> \n                <th scope="col">Score</th>\n                <th scope="col">Recommended Topic</th>\n                <th scope="col">Start Time</th>\n                <th scope="col">End Time</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor="let exam of data; let i = index;">\n                <td></td>\n                <td>{{exam.similar_name}}</td>\n                <td>{{exam.name}}</td>\n                <td>{{exam.score}}</td>\n                <td>{{exam.topic}}</td>\n                <td *ngIf="validDate(exam.start_time)">{{exam?.start_time | date: \'MMM d, y, h:mm:ss a\'}}</td>\n                <td *ngIf="!validDate(exam.start_time)"> - </td>\n                <td *ngIf="validDate(exam.end_time)">{{exam?.end_time | date: \'MMM d, y, h:mm:ss a\'}}</td>\n                <td *ngIf="!validDate(exam.end_time)"> - </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/studentreportdetails/studentreportdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */]])
    ], StudentreportdetailsPage);
    return StudentreportdetailsPage;
}());

//# sourceMappingURL=studentreportdetails.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherexaminationresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studentresults_studentresults__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherexaminationresultPage = /** @class */ (function () {
    function TeacherexaminationresultPage(navCtrl, navParams, desktopProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.currentExam = '';
    }
    TeacherexaminationresultPage.prototype.ionViewDidLoad = function () {
        this.fetchExams();
    };
    TeacherexaminationresultPage.prototype.fetchExams = function () {
        var _this = this;
        this.desktopProvider.fetchSuperExam().subscribe(function (response) {
            _this.exams = response;
            _this.examsLoaded = Promise.resolve(true);
            _this.currentExam = _this.exams[0].name;
            _this.fetchExamChartScores(_this.exams[0]);
        });
    };
    TeacherexaminationresultPage.prototype.fetchExamChartScores = function (exam) {
        var _this = this;
        this.desktopProvider.fetchExaminationForChartScores(exam.id).subscribe(function (response) {
            _this.fetchExamAggregates(exam.id);
            _this.data = response;
            var labels = _this.data.map(function (val) {
                return val.name;
            });
            var values = _this.data.map(function (val) {
                return val.score;
            });
            _this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.lineCanvas.nativeElement, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                            label: 'Chart of subject taken in this exam',
                            data: values
                        }]
                }
            });
        });
    };
    TeacherexaminationresultPage.prototype.fetchExamAggregates = function (exam_id) {
        var _this = this;
        this.desktopProvider.fetchExaminationAgg(exam_id).subscribe(function (response) {
            _this.aggregates = response;
            _this.aggregatesLoaded = Promise.resolve(true);
        });
    };
    TeacherexaminationresultPage.prototype.viewPerformances = function (aggregate) {
        console.log('user_id ', aggregate);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__studentresults_studentresults__["a" /* StudentresultsPage */], {
            user: aggregate.id // should be user_id but it is returned as null and then the value is attached to the *id* property
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TeacherexaminationresultPage.prototype, "lineCanvas", void 0);
    TeacherexaminationresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacherexaminationresult',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherexaminationresult/teacherexaminationresult.html"*/'<!--\n  Generated template for the TeacherexaminationresultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Examination Result</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-row>\n      <ion-col col-4>\n        <ion-card *ngIf="examsLoaded">\n          <ion-card-content>\n            <ion-item *ngFor="let exam of exams">\n              <button ion-button item-start clear color="dark"> {{exam.name}}</button>\n              <button ion-button item-end (click)="fetchExamChartScores(exam)">View Performance</button>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n      <ion-col col-8 padding>\n        <h3>{{currentExam}}</h3>\n        <br>\n        <ion-card>\n          <ion-card-content>\n            <canvas #lineChart></canvas>\n          </ion-card-content>\n        </ion-card>\n\n        <br>\n        <ion-card>\n          <ion-card-content>\n            <div class="table-responsive">\n              <table class="table table-bordered">\n                <thead>\n                  <tr>\n                    <th  scope="col">#</th>\n                    <th scope="col">FullName</th>\n                    <th scope="col">Subject</th>\n                    <th scope="col">Attempts</th>\n                    <th scope="col">Avg Score</th>\n                    <th scope="col">Recommended Topic</th>\n                    <th scope="col"></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor="let exam of aggregates; let i = index;">\n                    <td>{{i}}</td>\n                    <td>{{exam.firstname + \' \' + exam.lastname}}</td>\n                    <td>{{exam.name}}</td>\n                    <td>{{exam.attempts}}</td>\n                    <td>{{exam.aggregate_score | number: \'1.2-2\' }}</td>\n                    <td>{{exam.topic}}</td>\n                    <td>\n                      <button ion-button round (click)="viewPerformances(exam)">View Students Performances</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherexaminationresult/teacherexaminationresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], TeacherexaminationresultPage);
    return TeacherexaminationresultPage;
}());

//# sourceMappingURL=teacherexaminationresult.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateteacherPageModule", function() { return CreateteacherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createteacher__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateteacherPageModule = /** @class */ (function () {
    function CreateteacherPageModule() {
    }
    CreateteacherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createteacher__["a" /* CreateteacherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createteacher__["a" /* CreateteacherPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
            ],
        })
    ], CreateteacherPageModule);
    return CreateteacherPageModule;
}());

//# sourceMappingURL=createteacher.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherdashboard_teacherdashboard__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CreateteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateteacherPage = /** @class */ (function () {
    function CreateteacherPage(navCtrl, navParams, FormBuilder, desktopProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.desktopProvider = desktopProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.createTeacherForm = this.FormBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    CreateteacherPage.prototype.ionViewDidLoad = function () {
    };
    CreateteacherPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Creating Teacher'
        });
        loader.present();
        this.desktopProvider.createTeacher(this.createTeacherForm.value).subscribe(function (resp) {
            loader.dismiss();
            _this.alertCtrl.create({
                title: 'Success',
                message: 'Admin Created Successfully',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__teacherdashboard_teacherdashboard__["a" /* TeacherdashboardPage */]);
                        }
                    }]
            }).present();
        }, function (err) {
            loader.dismiss();
            _this.alertCtrl.create({
                title: 'Error',
                message: 'An error occured while attempting to create Admin account',
                buttons: ['ok']
            }).present();
        }, function () {
        });
    };
    CreateteacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createteacher',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/createteacher/createteacher.html"*/'<!--\n  Generated template for the CreateteacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Create Admin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="cont">\n\n  <img src="assets/imgs/simbibot-blue.png" class="logo" alt="">\n  <ion-card>\n    <ion-card-content>\n      <form action="" [formGroup]="createTeacherForm" (submit)="submit()">\n        <ion-item>\n          <ion-label floating>Email Address</ion-label>\n          <ion-input type="text" formControlName="email" value=""></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        <br>\n        <button type="submit" ion-button full round [disabled]="!createTeacherForm.valid"> Create Teacher</button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n \n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/createteacher/createteacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_desktop_desktop__["a" /* DesktopProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateteacherPage);
    return CreateteacherPage;
}());

//# sourceMappingURL=createteacher.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatestudentPageModule", function() { return CreatestudentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createstudent__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreatestudentPageModule = /** @class */ (function () {
    function CreatestudentPageModule() {
    }
    CreatestudentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createstudent__["a" /* CreatestudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createstudent__["a" /* CreatestudentPage */]),
            ],
        })
    ], CreatestudentPageModule);
    return CreatestudentPageModule;
}());

//# sourceMappingURL=createstudent.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsubjectsPageModule", function() { return ExamsubjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examsubjects__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExamsubjectsPageModule = /** @class */ (function () {
    function ExamsubjectsPageModule() {
    }
    ExamsubjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__examsubjects__["a" /* ExamsubjectsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__examsubjects__["a" /* ExamsubjectsPage */]),
            ],
        })
    ], ExamsubjectsPageModule);
    return ExamsubjectsPageModule;
}());

//# sourceMappingURL=examsubjects.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonNoteModule", function() { return LessonNoteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_note__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { LearningProvider } from "../../providers/learning/learning";


// import { CustomFirebaseAnalyticsProvider } from "../../providers/analytics/analytics";
var LessonNoteModule = /** @class */ (function () {
    function LessonNoteModule() {
    }
    LessonNoteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lesson_note__["a" /* LessonNote */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lesson_note__["a" /* LessonNote */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */]]
        })
    ], LessonNoteModule);
    return LessonNoteModule;
}());

//# sourceMappingURL=lesson-note.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOutlinePageModule", function() { return LessonOutlinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_outline__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LessonOutlinePageModule = /** @class */ (function () {
    function LessonOutlinePageModule() {
    }
    LessonOutlinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lesson_outline__["a" /* LessonOutlinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lesson_outline__["a" /* LessonOutlinePage */]),
            ],
        })
    ], LessonOutlinePageModule);
    return LessonOutlinePageModule;
}());

//# sourceMappingURL=lesson-outline.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchCardsModule", function() { return MatchCardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_cards__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { NativeAudio } from "@ionic-native/native-audio";
// import { OfflineProvider } from "../../providers/offline/offline";
// import { LearningProvider } from "../../providers/learning/learning";
// import { NetworkProvider } from "../../providers/network/network";
// import { TextToSpeech } from '@ionic-native/text-to-speech';
var MatchCardsModule = /** @class */ (function () {
    function MatchCardsModule() {
    }
    MatchCardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_cards__["a" /* MatchCards */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_cards__["a" /* MatchCards */]),
            ],
            providers: []
        })
    ], MatchCardsModule);
    return MatchCardsModule;
}());

//# sourceMappingURL=match-cards.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithCardPageModule", function() { return PaywithCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paywithcard__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaywithCardPageModule = /** @class */ (function () {
    function PaywithCardPageModule() {
    }
    PaywithCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paywithcard__["a" /* PaywithCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paywithcard__["a" /* PaywithCardPage */]),
            ],
        })
    ], PaywithCardPageModule);
    return PaywithCardPageModule;
}());

//# sourceMappingURL=paywithcard.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaywithCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_subscription_subscription__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaywithCardPage = /** @class */ (function () {
    function PaywithCardPage(storage, subscription, alertController, device, events) {
        this.storage = storage;
        this.subscription = subscription;
        this.alertController = alertController;
        this.device = device;
        this.events = events;
        this.isLoading = false;
    }
    PaywithCardPage.prototype.checkSubscriptionStatus = function () {
        var _this = this;
        var device_id = this.device.uuid;
        this.isLoading = true;
        this.subscription.checkIfUserHasSubscribed(device_id).then(function (resp) {
            resp.subscribe(function (response) {
                console.log('res: ', response);
                _this.isLoading = false;
                _this.storage.set("subscribed", true);
                _this.storage.set("expiry_date", new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
                _this.events.publish('user_subscribed');
                _this.alertController
                    .create({
                    title: "Subscription status",
                    message: "You subscription is active."
                })
                    .present();
            }, function (errorResponse) {
                _this.isLoading = false;
                console.log('error: ', errorResponse);
                _this.storage.set("subscribed", false);
                _this.alertController
                    .create({
                    title: "Subscription status",
                    message: errorResponse.error.message
                })
                    .present();
            });
        });
    };
    PaywithCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-paywithcard",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/paywithcard/paywithcard.html"*/'<ion-content padding>\n  <div class="bg-text">\n    <h3 text-center>\n      Activation fee: N1,000\n    </h3>\n    <div class="p-bg">\n      <p>\n        By activating your SimbiBot app, you get instant unlimited access for\n        the next one year.\n      </p>\n      <p>\n        Account number: 1022130195\n      </p>\n      <p>Account name: Simbi Interactives</p>\n      <p>Bank name : UBA Account type: Current</p>\n      <p>\n        What to do after payment? Send an SMS or Whatsapp message to SimbiBot\n        via 09066450210 The message should contain your Name, the bank you paid\n        with, and depositor\'s name (or account name if you did transfer)\n      </p>\n      <p>\n        Once this information is received, your app will be activated shortly.\n      </p>\n      <p>\n        You can click the button below at any time to check if your app has been\n        activated\n      </p>\n      <button\n        ion-button\n        round\n        full\n        (click)="checkSubscriptionStatus()"\n        class="activation-btn"\n      >\n        Check activation status\n        <ion-spinner\n          name="crescent"\n          class="btn-spinner"\n          *ngIf="isLoading"\n        ></ion-spinner>\n      </button>\n    </div>\n  </div>\n</ion-content>\n<!-- <ion-footer padding>\n  <ion-row>\n    <ion-col col-6>\n      <button class="global-btn" ion-button color="brown">\n        Close\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/paywithcard/paywithcard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], PaywithCardPage);
    return PaywithCardPage;
}());

//# sourceMappingURL=paywithcard.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostutmePageModule", function() { return PostutmePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postutme__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostutmePageModule = /** @class */ (function () {
    function PostutmePageModule() {
    }
    PostutmePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postutme__["a" /* PostutmePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postutme__["a" /* PostutmePage */]),
            ],
        })
    ], PostutmePageModule);
    return PostutmePageModule;
}());

//# sourceMappingURL=postutme.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardingPageModule = /** @class */ (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]),
            ],
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizresultPageModule", function() { return QuizresultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizresult__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizresultPageModule = /** @class */ (function () {
    function QuizresultPageModule() {
    }
    QuizresultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quizresult__["a" /* QuizresultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quizresult__["a" /* QuizresultPage */]),
            ],
        })
    ], QuizresultPageModule);
    return QuizresultPageModule;
}());

//# sourceMappingURL=quizresult.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentresultsPageModule", function() { return StudentresultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentresults__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentresultsPageModule = /** @class */ (function () {
    function StudentresultsPageModule() {
    }
    StudentresultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studentresults__["a" /* StudentresultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studentresults__["a" /* StudentresultsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
            ],
        })
    ], StudentresultsPageModule);
    return StudentresultsPageModule;
}());

//# sourceMappingURL=studentresults.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentreportdetailsPageModule", function() { return StudentreportdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentreportdetails__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudentreportdetailsPageModule = /** @class */ (function () {
    function StudentreportdetailsPageModule() {
    }
    StudentreportdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studentreportdetails__["a" /* StudentreportdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studentreportdetails__["a" /* StudentreportdetailsPage */]),
            ],
        })
    ], StudentreportdetailsPageModule);
    return StudentreportdetailsPageModule;
}());

//# sourceMappingURL=studentreportdetails.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherdashboardPageModule", function() { return TeacherdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherdashboard__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherdashboardPageModule = /** @class */ (function () {
    function TeacherdashboardPageModule() {
    }
    TeacherdashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacherdashboard__["a" /* TeacherdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacherdashboard__["a" /* TeacherdashboardPage */]),
            ],
        })
    ], TeacherdashboardPageModule);
    return TeacherdashboardPageModule;
}());

//# sourceMappingURL=teacherdashboard.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubscriptionPageModule = /** @class */ (function () {
    function SubscriptionPageModule() {
    }
    SubscriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subscription__["a" /* SubscriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subscription__["a" /* SubscriptionPage */]),
            ],
        })
    ], SubscriptionPageModule);
    return SubscriptionPageModule;
}());

//# sourceMappingURL=subscription.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherevaluationresultPageModule", function() { return TeacherevaluationresultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherevaluationresult__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherevaluationresultPageModule = /** @class */ (function () {
    function TeacherevaluationresultPageModule() {
    }
    TeacherevaluationresultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacherevaluationresult__["a" /* TeacherevaluationresultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacherevaluationresult__["a" /* TeacherevaluationresultPage */]),
            ],
        })
    ], TeacherevaluationresultPageModule);
    return TeacherevaluationresultPageModule;
}());

//# sourceMappingURL=teacherevaluationresult.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherexaminationresultPageModule", function() { return TeacherexaminationresultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherexaminationresult__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherexaminationresultPageModule = /** @class */ (function () {
    function TeacherexaminationresultPageModule() {
    }
    TeacherexaminationresultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacherexaminationresult__["a" /* TeacherexaminationresultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacherexaminationresult__["a" /* TeacherexaminationresultPage */]),
            ],
        })
    ], TeacherexaminationresultPageModule);
    return TeacherexaminationresultPageModule;
}());

//# sourceMappingURL=teacherexaminationresult.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageModule", function() { return TopicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TopicPageModule = /** @class */ (function () {
    function TopicPageModule() {
    }
    TopicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__topic__["a" /* TopicPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topic__["a" /* TopicPage */])]
        })
    ], TopicPageModule);
    return TopicPageModule;
}());

//# sourceMappingURL=topic.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchFilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchFilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardModule", function() { return FlashCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flash_cards__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_tooltips__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { LearningProvider } from "../../providers/learning/learning";



var FlashCardModule = /** @class */ (function () {
    function FlashCardModule() {
    }
    FlashCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flash_cards__["a" /* FlashCard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flash_cards__["a" /* FlashCard */]),
                __WEBPACK_IMPORTED_MODULE_7_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */]]
        })
    ], FlashCardModule);
    return FlashCardModule;
}());

//# sourceMappingURL=flash-cards.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageModule", function() { return QuizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizPageModule = /** @class */ (function () {
    function QuizPageModule() {
    }
    QuizPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */]),
            ],
        })
    ], QuizPageModule);
    return QuizPageModule;
}());

//# sourceMappingURL=quiz.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(socialSharing) {
        this.socialSharing = socialSharing;
        this.config = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */];
    }
    AboutPage.prototype.share = function () {
        this.socialSharing
            .share("Check out Simbi, I use it to prepare for " + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].version_name + ". Join me at", "Simbibot", "", "https://learn.simbibot.com")
            .then(function () {
            console.log('successfully shared');
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-about",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/about/about.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center class="about-title">\n        About SimbiBot\n      </ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <img\n    src="../../assets/imgs/simbi-girl.png"\n    alt="simbi"\n    class="simbi-girl img-center"\n  />\n  <div class="about-content">\n    <div class="about-text">\n      <p>\n        SimbiBot is a learning partner that helps you learn, master and evaluate\n        yourself in any topic across all subjects.\n      </p>\n      <p>\n        SimbiBot also helps you prepare to pass and excel in your exams (such as\n        Common Entrance, BECE, WAEC, NECO, UTME and PUTME).\n      </p>\n      <p>\n        SimbiBot is available on web (www.simbibot.com) and mobile app stores.\n      </p>\n      <p>For more info contact us: care@simbibot.com Tel:09066450210</p>\n      <div class="social-icons">\n        <a\n          href="https://twitter.com/SimbiBot"\n          target="_blank"\n          rel="no_referer"\n          class="twitter-icon"\n        ></a>\n        <a\n          href="https://instagram.com/simbibot/"\n          target="_blank"\n          rel="no_referer"\n          class="instagram-icon"\n        ></a>\n        <a\n          href="https://www.facebook.com/simbibot/"\n          target="_blank"\n          rel="no_referer"\n          class="facebook-icon"\n        ></a>\n      </div>\n      <!-- <button class="share-btn" (click)="share()">Share</button>\n      <p>Version {{ config.version }}</p> -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sweetSixteen = {
    introduction: { key: 'intro', title: 'Introduction', summary: "<p>Aliya - a 16 year old girl and protagonist of the story</p><p> Mr Bello - Aliya’s dad </p><p> Mrs Bello - Aliya’s mother </p><p> Tokunbo Alabi - Aliya’s Classmate </p><p> Sogo - Aliya’s Classmate </p><p> Akin - Aliya’s Classmate </p><p> Grace - Aliya’s Roommate </p><p>Aunt Molara - Aliya’s mother younger sister</p><p> Miss Salako - Aliya’s Mathematics teacher </p><p> Big Mummy - Aliya’s grandmother </p><p> Bunmi - Aliya’s senior and bully </p>" },
    chapters: [
        { key: 'chapter', title: 'Chapter 1', summary: "The novel introduces us to Aliya, a young girl of 16 years old who before reaching this age has always wanted to be an adult and referred to as one. She is an only child who has a father who is a journalist, and a mother who is a nurse . She has a close relationship with her father, compared to her mother and she tells him everything. <p>This helps her father to guide her smoothly in the affairs of her life. One of the things she tells him is her first encounter with a boy who claims he likes her. Being the first time she is at the receiving end of such gestures, she doesn't know what to feel and her dad is quick to put her through. Aliya's father's advice to her is also applicable to young adults. He advises that a recipient of a gift should not feel obliged to do anything because they feel indebted.</p><p> Also, gifts don't mean the giver really loves the other person and relationships shouldn't be based on material benefits. On her sixteenth birthday, she receives a birthday card, a digital camera and a 16-page letter detailing her life journey, each page for each year.</p>" },
        { key: 'chapter', title: 'Chapter 2', summary: "This chapter is a flashback as contained in the 16-page letter. Aliya is 12 years old and has just returned home from the boarding house when she goes on a drive with her father. During the drive, Aliya sees some girls hawking and she envies their freedom. She feels they are free to go around, meet people and have fun but her father cautions her, explaining that things don't always seem like how they look. <p>Though Aliya is born into a comfortable home, she isn't allowed the freedom of going wherever she likes. This situation explains the irony of life as no one has it all. Although Aliya is born with a silver spoon, she is not afforded the luxury of going wherever she wants or meet other people randomly. She lives in a high fenced house and also goes to a boarding school. On the other hand, the girls hawking on the streets may seem free and may be having fun but in Mr. Bello's words, 'they would not mind trading places' with Aliya in the air-conditioned car.</p> <p>Then, another disparity that exists between rich and poor children is the fact that rich children are naturally expected to do better in life because they have all the comfort in the world. However, the zeal, willingness, determination and desire to become great which propels some poor children is usually enough to make them eventually great.</p><p> During this drive, Mr. Bello also seizes the opportunity of the informal atmosphere to give his daughter sex education. A few days earlier, Aliya had seen her menstrual period for the first time and her father deems it fit she needs to learn about this important aspect of a woman's life. He teaches that menstruation is the body's way of telling a girl that she is biologically ready to be a mother, which means if she has unprotected sexual intercourse with a guy she could become pregnant. It is obvious that this is the first time Mr. Bello is having a discussion about sex with his daughter but surprisingly she already knows so much about the subject.</p><p> This is an indication that in the present age and century we live in, sex is no longer a hidden issue that is only discussed in hush tones, but it is everywhere. Aliya already learns about sex from the TV, friends, magazines, books and movies. She already has the basic knowledge of what sex is all about so her father gives her guides concerning sex and other things he refers to as filth, which can corrupt the beautiful room which is her mind. He advises her not to watch movies scenes that depict sex and also be watchful about the friends she keeps.<p>" },
        { key: 'chapter', title: 'Chapter 3', summary: "Aliya attempts severally to make her dad’s tea but she doesn't get it right until her mother puts her through. In this chapter she learns to make his tea perfectly and while he has his tea on a Saturday morning, she has a discussion with him concerning future ambition and other things.<p> Aliya informs her father she doesn't want to be a doctor anymore but a lawyer. In previous years, Aliya had wanted to be a pilot, then a musician, a songwriter and afterwards a fashion designer. Now she wants to be a lawyer. This depicts the indecision that comes with choosing a career at a young age. According to Mr. Bello, it doesn't matter what the choice of career is, what matters is having love and passion for what one does and only then can one be successful.</p><p> This leads to the discussion about parents choosing their children's career. This is not always a good idea as such child is only pursuing his/her parents' dream and not his/her dream. This in the end will only spell doom for both parties and lead to a waste of everyone's time if the child decides to follow his dreams afterwards. Mr. Bello is of the opinion that children are educated in order to be able to think for themselves and parents must learn to listen to them.</p><p> Afterwards Mr. Bello laments about the negative effects of technology on the young generation. Technology in his words, has a lot of effect on reading habits as most young people prefer visiting the social media and surfing the internet than reading books. This has reduced their thinking capability, spelling and language skills.<p>" },
        { key: 'chapter', title: 'Chapter 4', summary: "This chapter is about the Gandhi test gotten from the words of Mahatma Gandhi - an Indian who fought for the independence of his country from Great Britain.The test is that \"you can tell that what you are doing is good or bad if you want other people to know about it or not\". <p>This statement explains how a person can make morally right decisions. If a person is doing something and he wouldn't mind if other people know about it then what the person is doing is right but if such person doesn't want other people to know about what he is doing, then such action is most likely wrong.</p> <p>However, this doesn't apply to some people who Mr. Bello refers to as animals. This kind of people do not have a sense of shame as they do anything, whether right or wrong, without minding what others would think about them. Mr. Bello further explains to his daughter that before she makes decisions she should always be mindful that people are watching.</p>" },
        { key: 'chapter', title: 'Chapter 5', summary: "Aliya, now 16 years old, considers herself old enough to be in a relationship with a guy. She broaches the issue with her dad. Her father gives her a step by step explanation about what having a boyfriend entails. He explains that what most young people have towards the opposite sex is not love but infatuation which is often short-lived.<p> Thus young adults should thread softly when it comes to relationships because it may end up distracting them from their studies and also affect other areas of their lives. Aliya then reflects on the likeness she has for Bobo, how bad she felt when he left for Ireland and how horribly jealous she felt when she saw him with another girl. </p><p>Mr. Bello further counsels his child that it is best to wait for the right time before taking some steps in life. For most of the good things in life and luxuries, the price one is required to pay is the time one has to wait and in the end, it is always worth the wait. Aliya then tells her father about two students caught having sex in school by the school security. They were suspended indefinitely from school and Aliya explains how she feels embarrassed for the girl.<p>" },
        { key: 'chapter', title: 'Chapter 6', summary: "Boko Haram, the terrorist sect has just bombed a local market and the Bello family watches this news on the TV. Everyone expresses displeasure for the evil act of these terrorists and condemns them. During this, Aliya asks her dad if it is true that all Muslims will go to hell, because Muslims do not believe in Jesus and they like to kill people. <p>Mr. Bello calmly answers his daughter by explaining that it is wrong to judge or criticize other people's belief or faith because everyone is entitled to his or her faith. He also explains that the beauty of the world is because of the diversity in religion, people, religion, culture, tribe and colour. However, a set of ideas that people have about what someone or something is, especially an idea that is wrong, is known as stereotype. Stereotype is a constant act in our society, as Aliya, herself, is also stereotypical not long after, in this chapter.</p><p> It is wrong to have misconceptions or discriminating towards people, especially in instances where people are generally condemned for the misdeeds of few people.Also, stereoscopic people are not usually bad persons but are victims of bad thinking and circumstances. Thus, they shouldn't be condemned because of their attitude but, rather corrected</p>" },
        { key: 'chapter', title: 'Chapter 7', summary: "After listening to a story about a man who nursed his torturer back to health instead of leaving him to die, Aliya wonders if she can ever forgive those who have wronged her. She talks to her dad about how she has been feeling ugly and not have enough self-esteem concerning her shape and physique after one of her teachers and another student, Bunmi, who constantly call her FAT and pick on her. <p>This is known as body shaming, as they make negative comments about her weight and shape. Her father condemns this act but explains to her how to develop enough self esteem such that people's words don't hurt her. Mr Bello quoted Gandhi by saying, “nobody can hurt her without permission.” He teaches her that what she feels about herself is more important than how other people make her feel and she should have confidence in how she looks. Moreover, beauty is neither fat nor slim but however one looks is beautiful, the person just has to be confident about his/her physical appearance.</p><p> Beauty is also never enough but having a good character is best. Mr. Bello ends the conversation with a story which teaches that he has bestowed his intelligence and guidance to his daughter, and it is her responsibility to do the same for her children too.</p>" },
    ],
    practice: { key: 'practice', title: 'Possible Questions and Answers' },
    questions: [
        { question: "<p>Mr Bello is a/an ------------- by profession from the novel.<p>", options: "<p>A.Musician		B. Dentist	C. Journalist		D. Nurse</p>", answer: "C" },
        { question: "<p>----------- is the protagonist in the novel, sweet sixteen.<p>", options: "<p>A.Aliya	B. Mr Bello		C. Akin		D. Aunt Molara</p>", answer: "A" },
        { question: "<p>Aliya was referred to as ------- by her father.<p>", options: "<p>A.Omalincha 	B. First lady 		C. Journalist		D. Bookworm</p>", answer: "B" },
        { question: "<p>Who is the author of the book, “Sweet Sixteen?”.<p>", options: "<p>A.Bolade Abdullahi		B. Bolaji Abdullahi	C. Cyprian Ekwensi		D. Chimamanda Adichie</p>", answer: "B" },
        { question: "<p>What health condition is Aliya suffering from?.<p>", options: "<p>A.Asthma	B. Cancer	C. Sickle Cell Anemia 	D. Autism</p>", answer: "A" },
        { question: "<p>According to the sweet sixteen novel, which of these societies has “Fat-farms”, where girls were force-fed to fatten them up in the novel?.<p>", options: "<p>A.Nigeria		B. Mauritius		C. Mauritania		D. Ireland</p>", answer: "C" },
        { question: "<p>Who constantly calls Aliya fat?.<p>", options: "<p>A.Sogo	B. Grace	C. Bunmi	D. Akin</p>", answer: "C" },
        { question: "<p>In the novel, who often jokes that she was surprised Aliya’s father didn’t name her “Chelsea?”.<p>", options: "<p>A.Aliya’s mother	B. Aunt Molara	C.Miss Salako	D. Big mummy</p>", answer: "A" },
        { question: "<p>According to the novel,which of these characters is describe as a gold medalist?.<p>", options: "<p>A.Sogo	B. Aliya		C. Bunmi	D. Akin</p>", answer: "D" },
        { question: "<p>What lesson was Gandhi’s test to teach Aliya?.<p>", options: "<p>A.Beauty is nothing 	B. Contentment is wealth 		C. Beauty in the eyes of the beholder		D. Strategic thinking</p>", answer: "B" },
        { question: "<p>Whenever Aliya’s mom stops being angry, she...?.<p>", options: "<p>A.Shouts and screams	B. Sings around the house		C. Sits in surreality	D. Cooks</p>", answer: "B" },
        { question: "<p>Which of these inscription was on the spiral bond document gift from Aliya’s father on her sixteenth birthday?.<p>", options: "<p>A.Letter to my daughter		B. Happy birthday daughter		C. With love from daddy	D. Happy Sixteenth</p>", answer: "A" },
        { question: "<p>Choose the option opposite in meaning to the word underlined.<p><p><strong>Grace was a snob to people</strong></p>", options: "<p>A.Receptive	B. Considerate		C. Arrogant		D. Huffy</p>", answer: "A" },
        { question: "<p>Choose the option opposite in meaning to the word underlined.<p><p><strong>Contentment is wealth</strong></p>", options: "<p>A.Courteousness	B. Satisfaction	C. Agitation		D. Greed</p>", answer: "B" },
        { question: "<p>Who gave Aliya a valentine gift?</p>", options: "<p>A.Akin		B. Tokunbo		C. Zak		D. Mr Bello</p>", answer: "B" },
        { question: "<p>One of the following people made these statements</p><p><i>“Nobody can hurt me without my permission”</i></p>", options: "<p>A.Chinua Achebe	B. Mr Bello		C. Mahatma Gandhi		D. Muhammad Ali</p>", answer: "C" },
        { question: "<p>One of the following people made these statements</p><p><i>“Hating people because of their colour is wrong”</i></p>", options: "<p>A.Fela Kuti		B. Ali Bongo	C. Mrs Bello		D. Muhammad Ali</p>", answer: "D" },
    ]
};
var StoryBookPage = /** @class */ (function () {
    function StoryBookPage() {
        this.currentIndex = 0;
        this.showContent = '';
        this.selectedContent = null;
        this.storybook = sweetSixteen;
        this.pager = true;
        this.config = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */];
    }
    StoryBookPage.prototype.ionViewDidLoad = function () {
        // console.log(this.slides.getActiveIndex());
        this.currentIndex = this.slides.getActiveIndex();
        this.lockSwipe(true);
    };
    StoryBookPage.prototype.lockSwipe = function (condition) {
        this.slides.lockSwipes(condition);
    };
    StoryBookPage.prototype.onSlideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        if (this.currentIndex == 0)
            return this.lockSwipe(true);
        this.pager = false;
        // console.log('slide  changed ', this.currentIndex)
    };
    StoryBookPage.prototype.slideChanged = function () {
        console.log('slide  changed ', this.slides.getActiveIndex());
    };
    StoryBookPage.prototype.openFirst = function () {
        this.lockSwipe(false);
        this.selectedContent = this.storybook.introduction;
        this.slides.slideTo(1);
        this.currentIndex = 1;
    };
    StoryBookPage.prototype.openLast = function () {
        this.lockSwipe(false);
        this.selectedContent = this.storybook.practice;
        this.slides.slideTo(this.storybook.chapters.length + 2);
        // this.currentIndex = thi;
    };
    StoryBookPage.prototype.slideNext = function () {
        this.currentIndex = this.slides.getActiveIndex();
        // console.log('next ', this.slides.getActiveIndex())
        if (this.slides.isEnd()) {
            // console.log('end ', this.currentIndex)
            return null;
        }
        this.slides.slideNext();
    };
    StoryBookPage.prototype.openChapter = function (index) {
        var chapter = this.storybook.chapters[index];
        this.showContent = chapter.key;
        this.selectedContent = chapter;
        this.lockSwipe(false);
        this.slides.slideTo(index + 2);
        // this.lockSwipe(true);
    };
    StoryBookPage.prototype.goBack = function () {
        this.showContent = '';
        this.selectedContent = null;
        // this.lockSwipe(false)
        this.slides.slidePrev();
        // this.lockSwipe(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myslides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], StoryBookPage.prototype, "slides", void 0);
    StoryBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-storybook",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/storybook/storybook.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center class="about-title">\n        {{config.storybook}}\n      </ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class="cont">\n    <ion-slides\n      pager="pager"\n      #myslides\n      (ionSlideWillChange)="onSlideChanged($event)"\n      (ionSlideDidChange)="slideChanged()"\n    >\n      <ion-slide>\n        <div class="pad"></div>\n        <img\n          src="../../assets/imgs/sweet-sixteen.jpg"\n          alt="simbi"\n          class="simbi-girl img-center"\n        />\n        <h6 class="summary-heading">\n          <strong>SUMMARY OF JAMB SWEET SIXTEEN by Bolaji Abdullahi</strong>\n        </h6>\n        <ion-list>\n          <button ion-item (click)="openFirst()" class="animated pulse">\n            <div class="topic-obj">\n              <h6>\n                <strong>\n                  {{ storybook.introduction.title | titlecase }}\n                </strong>\n              </h6>\n            </div>\n            <ion-icon\n              item-end\n              name="ios-arrow-forward"\n              [ngStyle]="{ color: blue }"\n            ></ion-icon>\n          </button>\n          <button\n            ion-item\n            *ngFor="let chapter of storybook.chapters; let i = index"\n            (click)="openChapter(i)"\n            class="animated pulse"\n          >\n            <div class="topic-obj">\n              <h6>\n                <strong> {{ chapter.title | titlecase }} </strong>\n              </h6>\n            </div>\n            <ion-icon\n              item-end\n              name="ios-arrow-forward"\n              [ngStyle]="{ color: blue }"\n            ></ion-icon>\n          </button>\n          <button ion-item (click)="openLast()" class="animated pulse">\n            <div class="topic-obj">\n              <h6>\n                <strong>\n                  {{ storybook.practice.title | titlecase }}\n                </strong>\n              </h6>\n            </div>\n            <ion-icon\n              item-end\n              name="ios-arrow-forward"\n              [ngStyle]="{ color: blue }"\n            ></ion-icon>\n          </button>\n        </ion-list>\n      </ion-slide>\n      <ion-slide>\n        <h1>{{storybook.introduction.title}}</h1>\n        <div\n          *ngIf="currentIndex == 1"\n          class="chapter-summary"\n          [innerHTML]="storybook.introduction.summary"\n        ></div>\n      </ion-slide>\n      <ion-slide *ngFor="let chapter of storybook.chapters; let i = index">\n        <div class="summary-container">\n          <h1>{{chapter.title}}</h1>\n          <div class="chapter-summary" [innerHTML]="chapter.summary"></div>\n          <!-- <button class="share-btn back-btn" (click)="goBack()">Prev</button> -->\n          <!-- <button class="share-btn back-btn" (click)="slideNext()">Next</button> -->\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="summary-container">\n          <h1>{{storybook.practice.title}}</h1>\n          <div>\n            <ion-card\n              *ngFor="let question of storybook.questions; let i = index"\n            >\n              <ion-card-content>\n                <br />\n                <p\n                  class="question practice-question"\n                  [innerHTML]="question.question"\n                ></p>\n                <br />\n                <div class="answer chapter-practice">\n                  <div>\n                    <h3><span [innerHTML]="question.options"></span></h3>\n                  </div>\n                  <br />\n                  <h3 style="color:#01c22e;">\n                    <strong\n                      >Correct Answer :\n                      <span [innerHTML]>{{ question.answer }}</span></strong\n                    >\n                  </h3>\n                  <br />\n                </div>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div class="slide-buttons" *ngIf="currentIndex > 0">\n      <button class="share-btn back-btn" (click)="goBack()">Prev</button>\n      <button class="share-btn back-btn" (click)="slideNext()">Next</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/storybook/storybook.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StoryBookPage);
    return StoryBookPage;
}());

//# sourceMappingURL=storybook.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_updates_updates__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscription_subscription__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UpdatesPage = /** @class */ (function () {
    function UpdatesPage(nav, updatesProvider, offlineProvider, networkProvider, storage) {
        var _this = this;
        this.nav = nav;
        this.updatesProvider = updatesProvider;
        this.offlineProvider = offlineProvider;
        this.networkProvider = networkProvider;
        this.storage = storage;
        this.downloading = false;
        this.currentProgress = 0;
        this.totalProgress = 0;
        this.progressText = '';
        this.downloadsLeft = 0;
        this.subjects = null;
        this.updating = false;
        this.updated = false;
        this.finishedDownloads = 0;
        this.finishedUpdates = 0;
        this.progress = 0;
        this.totalMap = 0;
        this.error = false;
        this.hasSubscribed = false;
        this.updateDatabase = function (response) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var data, _loop_1, this_1, _a, _b, _i, tableName;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(response.status == 'success')) return [3 /*break*/, 4];
                        data = response.data;
                        _loop_1 = function (tableName) {
                            var table;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        table = data[tableName];
                                        if (!(table.length != 0)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.offlineProvider.updateTable(tableName, table).then(function (value) {
                                                console.log('finished  updating ', table);
                                            }).catch(function (error) {
                                                console.log(error);
                                                _this.downloading = false;
                                                _this.updating = false;
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        this_1.updating = false;
                                        this_1.updated = true;
                                        this_1.storage.set('last_updated_time', new Date().toISOString());
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a = [];
                        for (_b in data)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        tableName = _a[_i];
                        return [5 /*yield**/, _loop_1(tableName)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.downloadUpdates = function () { return __awaiter(_this, void 0, void 0, function () {
            var last_updated_time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('online: ', navigator.onLine, this.networkProvider.noConnection())
                        if (this.networkProvider.isOffline())
                            return [2 /*return*/];
                        this.error = false;
                        if (this.downloading)
                            return [2 /*return*/];
                        this.downloading = true;
                        this.progressText = "Downloading updates...";
                        return [4 /*yield*/, this.storage.get('last_updated_time')];
                    case 1:
                        last_updated_time = _a.sent();
                        console.log(last_updated_time);
                        return [4 /*yield*/, this.updatesProvider.downloadUpdates(last_updated_time, this.handleResponse.bind(this), this.handleError.bind(this))
                                .then(function (response) {
                                response.subscribe(function (res) {
                                });
                            }).catch(function (error) { return console.log('error: ', error); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.config = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */];
    }
    UpdatesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('subscribed').then(function (val) {
            _this.hasSubscribed = val;
            console.log('is subscribed ', val);
        });
    };
    UpdatesPage.prototype.goToSubscriptionPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__subscription_subscription__["a" /* SubscriptionPage */]);
    };
    UpdatesPage.prototype.getProgress = function (event) {
        switch (event.type) {
            case 0:
                this.totalProgress = 0;
                this.progressText = "Downloaded " + this.totalProgress + "% of " + 100 + "%.";
                this.downloadsLeft += 1;
                console.log('new download: ', this.downloadsLeft);
                return;
            case 3:
                /**
                 * table download is in progress, total table size is not
                 * in the total map opbject, add it and update the table's progess
                 * in the progress object
                 */
                if (this.totalMap === 0) {
                    this.totalMap = event.total;
                }
                this.progress = event.loaded;
                // calculate the percentage done and update the dom
                var percentDone = Math.round(100 * this.progress / this.totalMap);
                return this.progressText = "Downloading updates...";
            case 4:
                /**
                 * a download has completed
                 * subtract one from the nubmer of downloads left and if it is zero
                 * set downloading to false
                 */
                this.downloadsLeft -= 1;
                this.finishedDownloads += 1;
                if (this.downloadsLeft === 0) {
                    this.downloading = false;
                    this.updating = true;
                }
                return this.updateDatabase(event.body);
            default:
                this.progressText = "download started";
                this.totalProgress = 0;
                return;
        }
    };
    UpdatesPage.prototype.handleError = function (error) {
        this.updating = false;
        this.downloading = false;
        this.updated = false;
        this.error = true;
    };
    ;
    UpdatesPage.prototype.handleResponse = function (response) {
        this.downloading = false;
        this.updating = true;
        this.updateDatabase(response);
    };
    UpdatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-updates",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/updates/updates.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center class="about-title">\n        Updates\n      </ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <img\n    src="../../assets/imgs/simbi-girl.png"\n    alt="simbi"\n    class="simbi-girl img-center"\n  />\n  <div class="updates-content">\n    <div class="updates-text">\n      <ion-spinner\n        *ngIf="downloading || updating"\n        name="crescent"\n        color="primary"\n      ></ion-spinner>\n      <p *ngIf="downloading">{{ progressText }}</p>\n      <p *ngIf="updating">Installing updates please wait</p>\n      <p *ngIf="updated">Your app is up to date</p>\n      <p *ngIf="error">\n        An unknown error occurred, please check your network and try again\n      </p>\n      <p *ngIf="hasSubscribed">Version {{ config.version }}</p>\n      <p *ngIf="!hasSubscribed">\n        Activate your app to enjoy unlimited questions update\n      </p>\n      <button\n        class="share-btn"\n        (click)="downloadUpdates()"\n        [disabled]="updated || updating || downloading"\n        *ngIf="hasSubscribed"\n      >\n        Check for updates\n      </button>\n      <button\n        class="share-btn"\n        (click)="goToSubscriptionPage()"\n        *ngIf="!hasSubscribed"\n      >\n        Click here to activate\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/updates/updates.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_updates_updates__["a" /* UpdatesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UpdatesPage);
    return UpdatesPage;
}());

//# sourceMappingURL=updates.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UpdatesProvider = /** @class */ (function () {
    function UpdatesProvider(http, storage, device) {
        this.http = http;
        this.storage = storage;
        this.device = device;
        this.url = "https://learn.simbibot.com/api/app_updates?last_updated_time=";
    }
    UpdatesProvider.prototype.downloadUpdates = function (lastUpdateTime, progressMessage, handleError) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpRequest */]('get', "" + this.url + lastUpdateTime, null, { reportProgress: true });
                // return this.http.request(req).pipe(map(event => progressMessage(event)), retry(3), catchError(handleError))
                return [2 /*return*/, this.http.get("" + this.url + lastUpdateTime, { reportProgress: true }).map(progressMessage, handleError)];
            });
        });
    };
    UpdatesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], UpdatesProvider);
    return UpdatesProvider;
}());

//# sourceMappingURL=updates.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var NotificationsProvider = /** @class */ (function () {
    function NotificationsProvider(http, storage, device) {
        this.http = http;
        this.storage = storage;
        this.device = device;
        this.url = "https://learn.simbibot.com/api/inbox_messages";
    }
    NotificationsProvider.prototype.getNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get("" + this.url)];
            });
        });
    };
    NotificationsProvider.prototype.getNextPage = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get("" + url)];
            });
        });
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(556);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_syllabus_syllabus__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register_module__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_updates_updates__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_preferences_ngx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_zip__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_sqlite_db_copy__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_topic_topic_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_onboarding_onboarding_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_paywithcard_paywithcard_module__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_quiz_quiz_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_quizresult_quizresult_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_examsubjects_examsubjects_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_subscription_subscription__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_subscription_subscription_module__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_about_about_module__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_storybook_storybook_module__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_notifications_notifications_module__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_notifications_notifications__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_updates_updates_module__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_themeable_browser__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_spinner_dialog__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_inappbrowser_inappbrowser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_createteacher_createteacher_module__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_teacherdashboard_teacherdashboard_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_createstudent_createstudent_module__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ngx_paginate__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_postutme_postutme_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_studentresults_studentresults_module__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_studentreportdetails_studentreportdetails_module__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_teacherevaluationresult_teacherevaluationresult_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_teacherexaminationresult_teacherexaminationresult_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_activationpage_activationpage_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_lesson_note_lesson_note_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_lesson_outline_lesson_outline_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_match_cards_match_cards_module__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_flash_cards_flash_cards_module__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer/ngx';
// import { InstallReferrer } from 'install-referrer'











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_7__pages_syllabus_syllabus__["a" /* SyllabusPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_57__pages_activationpage_activationpage_module__["ActivationPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_topic_topic_module__["TopicPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_onboarding_onboarding_module__["OnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_paywithcard_paywithcard_module__["PaywithCardPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_quiz_quiz_module__["QuizPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_quizresult_quizresult_module__["QuizresultPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_lesson_note_lesson_note_module__["LessonNoteModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_match_cards_match_cards_module__["MatchCardsModule"],
                __WEBPACK_IMPORTED_MODULE_61__pages_flash_cards_flash_cards_module__["FlashCardModule"],
                __WEBPACK_IMPORTED_MODULE_59__pages_lesson_outline_lesson_outline_module__["LessonOutlinePageModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_34__pages_examsubjects_examsubjects_module__["ExamsubjectsPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_postutme_postutme_module__["PostutmePageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_studentresults_studentresults_module__["StudentresultsPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_subscription_subscription_module__["SubscriptionPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_about_about_module__["a" /* AboutPageModule */],
                __WEBPACK_IMPORTED_MODULE_55__pages_teacherevaluationresult_teacherevaluationresult_module__["TeacherevaluationresultPageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_teacherexaminationresult_teacherexaminationresult_module__["TeacherexaminationresultPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_storybook_storybook_module__["a" /* StoryBookPageModule */],
                __WEBPACK_IMPORTED_MODULE_54__pages_studentreportdetails_studentreportdetails_module__["StudentreportdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_createteacher_createteacher_module__["CreateteacherPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_teacherdashboard_teacherdashboard_module__["TeacherdashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_createstudent_createstudent_module__["CreatestudentPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_updates_updates_module__["a" /* UpdatesPageModule */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notifications_notifications_module__["a" /* NotificationsPageModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_51_ngx_paginate__["a" /* NgxPaginateModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activationpage/activationpage.module#ActivationPageModule', name: 'ActivationPage', segment: 'activationpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createteacher/createteacher.module#CreateteacherPageModule', name: 'CreateteacherPage', segment: 'createteacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createstudent/createstudent.module#CreatestudentPageModule', name: 'CreatestudentPage', segment: 'createstudent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examsubjects/examsubjects.module#ExamsubjectsPageModule', name: 'ExamsubjectsPage', segment: 'examsubjects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson-note/lesson-note.module#LessonNoteModule', name: 'lessonNote-page', segment: 'lesson-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson-outline/lesson-outline.module#LessonOutlinePageModule', name: 'lessonOutline-page', segment: 'lesson-outline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-cards/match-cards.module#MatchCardsModule', name: 'matchcards-page', segment: 'match-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paywithcard/paywithcard.module#PaywithCardPageModule', name: 'PaywithCardPage', segment: 'paywithcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postutme/postutme.module#PostutmePageModule', name: 'PostutmePage', segment: 'postutme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quizresult/quizresult.module#QuizresultPageModule', name: 'QuizresultPage', segment: 'quizresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentresults/studentresults.module#StudentresultsPageModule', name: 'StudentresultsPage', segment: 'studentresults', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentreportdetails/studentreportdetails.module#StudentreportdetailsPageModule', name: 'StudentreportdetailsPage', segment: 'studentreportdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacherdashboard/teacherdashboard.module#TeacherdashboardPageModule', name: 'TeacherdashboardPage', segment: 'teacherdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription/subscription.module#SubscriptionPageModule', name: 'SubscriptionPage', segment: 'subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacherevaluationresult/teacherevaluationresult.module#TeacherevaluationresultPageModule', name: 'TeacherevaluationresultPage', segment: 'teacherevaluationresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacherexaminationresult/teacherexaminationresult.module#TeacherexaminationresultPageModule', name: 'TeacherexaminationresultPage', segment: 'teacherexaminationresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic/topic.module#TopicPageModule', name: 'TopicPage', segment: 'topic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flash-cards/flash-cards.module#FlashCardModule', name: 'flashcards-page', segment: 'flash-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_7__pages_syllabus_syllabus__["a" /* SyllabusPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_zip__["a" /* Zip */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_sqlite_db_copy__["a" /* SqliteDbCopy */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_offline_offline__["a" /* OfflineProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_updates_updates__["a" /* UpdatesProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_35__providers_subscription_subscription__["a" /* SubscriptionProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_46__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_47__providers_desktop_desktop__["a" /* DesktopProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_preferences_ngx__["a" /* AppPreferences */],
                __WEBPACK_IMPORTED_MODULE_47__providers_desktop_desktop__["a" /* DesktopProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quizresult_quizresult__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_topic__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams, loader, alertController, storage, toastCtrl, audio, userProvider, offlineProvider, desktopProvider, sessionProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.alertController = alertController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.audio = audio;
        this.userProvider = userProvider;
        this.offlineProvider = offlineProvider;
        this.desktopProvider = desktopProvider;
        this.sessionProvider = sessionProvider;
        this.questions = [];
        this.currentIndex = 0;
        this.trialNumbers = 2;
        this.scores = 0;
        this.test_type = 0;
        this.selectedQuestion = [];
        this.totalExamQuestionCount = 0;
        this.hasSubmitted = false;
        this.shake = false;
        this.shakeGreen = false;
        this.test_type = this.navParams.get("test_type");
        this.questionType = this.navParams.get("questionType");
        this.topicId = this.navParams.get("topicId");
        this.totalExamQuestionCount = this.navParams.get('count');
        if (this.navParams.get('exam') != undefined && this.navParams.get('exam') != null) {
            this.exam = this.navParams.get('exam');
        }
        this.storage.get("user").then(function (user) {
            _this.user = user;
        });
        this.topic = this.navParams.get("topic");
        this.subject = this.navParams.get("subject");
        if (this.test_type == 0) {
            if (!this.topicId) {
                var preFetchQuestions = this.navParams.get("questions");
                this.createQuestions(preFetchQuestions);
            }
            else if (this.topicId) {
            }
        }
        else {
            this.taketest();
        }
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
    };
    QuizPage.prototype.ionViewWillLeave = function () {
        if (this.timer)
            clearInterval(this.timer);
    };
    QuizPage.prototype.createQuestions = function (que) {
        this.questions = que.map(function (question) {
            question["disabled"] = [false, false, false, false, false];
            return question;
        });
        this.questions = this.questions;
        this.cleanQuestions = this.questions; /// Change!!!!!
        this.currentQuestion = this.questions[0];
        this.loaded = Promise.resolve(true);
    };
    QuizPage.prototype.checkAnswer = function (i) {
        var _this = this;
        var selected_answer = this.currentQuestion.options[i].id;
        var correct_answer = this.currentQuestion.answer.id;
        if (this.trialNumbers == 2) {
            this.questions[this.currentIndex]["disabled"][i] = true;
            if (selected_answer == correct_answer) {
                this.shakeGreenCard().then(function () {
                    _this.showRealAnswer(true);
                    _this.trialNumbers = 0;
                    _this.scores++;
                });
            }
            else {
                this.trialNumbers--;
                this.shakeCard().then(function () {
                    var alertCtrl = _this.alertController.create({
                        // title: "Incorrect answer",
                        subTitle: _this.currentQuestion.options[i].option_text + " is incorrect",
                        buttons: ["Try Again"],
                        cssClass: "my-custom-alert-danger"
                    });
                    alertCtrl.present();
                });
            }
        }
        else if (this.trialNumbers == 1) {
            this.questions[this.currentIndex]["disabled"][i] = true;
            if (selected_answer == correct_answer) {
                this.shakeGreenCard().then(function () {
                    _this.showRealAnswer(true);
                    _this.trialNumbers = 0;
                    _this.scores++;
                });
            }
            else {
                this.shakeCard(true).then(function () {
                    var alertCtrl = _this.alertController.create({
                        // title: "Incorrect answer",
                        subTitle: _this.currentQuestion.options[i].option_text + " is incorrect",
                        buttons: [
                            {
                                text: "View answer",
                                handler: function () {
                                    _this.showRealAnswer();
                                }
                            }
                        ],
                        cssClass: "my-custom-alert-danger"
                    });
                    alertCtrl.present();
                });
            }
        }
    };
    QuizPage.prototype.onEndClick = function () {
        clearInterval(this.timer);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__topic_topic__["a" /* TopicPage */], {
            subject: this.subject,
            questionType: "practice"
        });
    };
    QuizPage.prototype.showRealAnswer = function (userCorrect) {
        var _this = this;
        if (userCorrect) {
            var alertCtrl = this.alertController.create({
                // title: "You are correct",
                subTitle: this.questions[this.currentIndex].answer.option_text + " is correct",
                buttons: [
                    {
                        text: "View Explanation",
                        handler: function () {
                            _this.showCorrectAnswer = true;
                        }
                    },
                    {
                        text: "Got it",
                        handler: function () {
                            _this.onGotItClick();
                        }
                    }
                ],
                cssClass: "my-custom-alert-success",
                enableBackdropDismiss: false
            });
            alertCtrl.present();
        }
        else {
            this.showCorrectAnswer = true;
        }
    };
    QuizPage.prototype.onGotItClick = function () {
        this.showCorrectAnswer = false;
        this.next();
    };
    QuizPage.prototype.next = function () {
        if (this.test_type == 0) {
            this.showCorrectAnswer = false;
            this.answer_input = null;
            if (this.currentIndex + 1 === this.questions.length) {
                this.showDoneAlert();
            }
            else if (this.currentIndex < this.questions.length) {
                this.currentIndex++;
                this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
                this.trialNumbers = 2;
                this.currentQuestion = this.questions[this.currentIndex];
            }
        }
        else {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
                this.trialNumbers = 2;
                this.currentQuestion = this.questions[this.currentIndex];
            }
        }
    };
    QuizPage.prototype.prev = function () {
        this.showCorrectAnswer = false;
        this.answer_input = null;
        if (this.currentIndex != 0) {
            this.currentIndex--;
        }
        this.trialNumbers = 2;
        this.currentQuestion = this.questions[this.currentIndex];
        this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
    };
    QuizPage.prototype.taketest = function () {
        var _this = this;
        this.loaded = Promise.resolve(false);
        this.hasSubmitted;
        this.currentIndex = 0;
        this.scores = 0;
        var loader = this.loader.create({
            content: "Loading..."
        });
        loader.present();
        // console.log("quiz id", this.topic.id);
        console.log("test_type", this.test_type);
        if (this.test_type == 1) {
            this.desktopProvider.fetchQuestionsForTest(this.topic.id).subscribe(function (response) {
                _this.questions = response;
                _this.cleanQuestions = response;
                _this.selectedQuestion = [];
                _this.populateSelected(_this.questions);
                _this.calculateTime(12);
                _this.test_type = 1;
                _this.storeInitialEvalution();
                _this.loaded = Promise.resolve(true);
                loader.dismiss();
            }, function (error) {
                // this.alertNotFound;
                loader.dismiss();
            });
        }
        else if (this.test_type == 2) {
            this.questions = this.navParams.get("questions");
            this.cleanQuestions = this.navParams.get("questions");
            this.selectedQuestion = [];
            this.populateSelected(this.questions);
            this.calculateTime(12);
            this.test_type = 2;
            this.storeInitialExamResult();
            this.loaded = Promise.resolve(true);
            loader.dismiss();
        }
        else {
            console.log("else", this.test_type);
            loader.dismiss();
        }
    };
    QuizPage.prototype.populateSelected = function (questions) {
        for (var i = 0; i < questions.length; i++) {
            this.selectedQuestion.push({
                questionId: questions[i].id,
                answerId: ""
            });
        }
    };
    QuizPage.prototype.showDoneAlert = function () {
        var _this = this;
        // this.shareUserTrack();
        var alert = this.alertController.create({
            title: "Congratulation",
            subTitle: "You have completed your lesson on " + this.topic.topic,
            message: "<ion-icon name=\"ios-thumbs-up\" [ngStyle]=\"{'color' : " + this.subject.color + " } class=\"thumb\"></ion-icon>",
            buttons: [
                {
                    text: "Relearn",
                    handler: function () {
                        _this.relearn();
                    }
                },
                {
                    text: "Take Test",
                    handler: function () {
                        _this.test_type = 1;
                        _this.taketest();
                    }
                }
            ],
            enableBackdropDismiss: false,
            cssClass: "custom-css"
        });
        alert.present();
    };
    QuizPage.prototype.relearn = function () {
        this.loaded = Promise.resolve(false);
        this.currentIndex = 0;
        this.trialNumbers = 2;
        this.scores = 0;
        this.questions = this.cleanQuestions;
        this.loaded = Promise.resolve(true);
    };
    QuizPage.prototype.calculateTime = function (time) {
        var _this = this;
        var minute = time;
        var second = 0;
        this.timer = setInterval(function () {
            if (minute == 0 && second == 0) {
                clearInterval(_this.timer);
                if (!_this.hasSubmitted) {
                    _this.submit();
                }
            }
            else if (second == 0) {
                minute--;
                second = 59;
            }
            else {
                second = second - 1;
            }
            _this.time = minute + ":" + second;
        }, 1000);
    };
    QuizPage.prototype.addToSelected = function (question, answer) {
        for (var i = 0; i < this.selectedQuestion.length; i++) {
            if (this.selectedQuestion[i].questionId == question) {
                this.selectedQuestion[i].answerId = answer;
                break;
            }
        }
    };
    QuizPage.prototype.submit = function () {
        var _this = this;
        var time_second = parseInt(this.time.substring(0, 2), 10);
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
                        handler: function () {
                            _this.runSubmit();
                        }
                    }
                ]
            })
                .present();
        }
        else {
            this.runSubmit();
        }
    };
    QuizPage.prototype.runSubmit = function () {
        var _this = this;
        this.hasSubmitted = true;
        clearInterval(this.timer);
        var loader = this.loader.create({
            cssClass: "my-loading"
        });
        loader.present();
        var body = {
            score: null,
            end_time: new Date(Date.now()),
            completed_at: new Date(Date.now()),
            // topic_id: this.topic.id,
            status: 'completed',
            id: this.currentEvaluationId
        };
        for (var i = 0; i < this.selectedQuestion.length; i++) {
            if (this.questions[i].id == this.selectedQuestion[i].questionId) {
                if (this.selectedQuestion[i].answerId == this.questions[i].answer.id) {
                    this.scores++;
                }
            }
        }
        body.score = this.scores;
        if (this.test_type == 1) {
            this.desktopProvider.updateInitialEvaluation(body).subscribe(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });
        }
        if (this.test_type == 2) {
            this.storeExamresultUpdate();
        }
        var percentage = (this.scores / this.questions.length) * 100;
        loader.dismiss();
        var resultAlert = this.alertController.create({
            title: "Test Completed",
            subTitle: "Your score is " + this.scores + " out of " + this.questions.length,
            message: "Your percentage score is " + percentage.toFixed(2) + "%",
            buttons: [
                {
                    text: "Try Again",
                    handler: function () {
                        _this.tryTestAgain();
                    }
                },
                {
                    text: "View Correction",
                    handler: function () {
                        _this.goToResult();
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        resultAlert.present();
    };
    QuizPage.prototype.sendUserProgress = function (body) {
        var user = this.sessionProvider.getUser();
    };
    QuizPage.prototype.shareUserTrack = function () {
        console.log('share track ', this.user.id, this.topic.id);
        this.userProvider
            .updateUserTrack(this.user.id, this.topic.id)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    QuizPage.prototype.tryTestAgain = function () {
        if (this.timer)
            clearInterval(this.timer);
        this.taketest();
    };
    QuizPage.prototype.goToResult = function () {
        var _this = this;
        var result = {};
        var evaluation = {};
        evaluation["questions"] = [];
        result["score"] = this.scores;
        result["percentage"] = (this.scores / this.questions.length) * 100;
        result["total"] = this.questions.length;
        result["questions"] = [];
        var _loop_1 = function (i) {
            if (this_1.questions[i].id == this_1.selectedQuestion[i].questionId) {
                if (this_1.selectedQuestion[i].answerId == this_1.questions[i].answer.id) {
                    evaluation.questions.push({
                        questionId: this_1.questions[i].id,
                        correctBool: true
                    });
                    result.questions.push({
                        question: this_1.questions[i].question,
                        topic_id: this_1.questions[i].topic_id,
                        correct: "yes",
                        chosen: this_1.questions[i].answer.option_text,
                        answer: this_1.questions[i].answer.option_text,
                        explanation: this_1.questions[i].explanation
                    });
                }
                else {
                    result.questions.push({
                        question: this_1.questions[i].question,
                        correct: "no",
                        topic_id: this_1.questions[i].topic_id,
                        chosen: this_1.questions[i].options.filter(function (opt) {
                            if (opt.id == _this.selectedQuestion[i].answerId) {
                                return opt.option_text;
                            }
                        }),
                        answer: this_1.questions[i].answer.option_text,
                        explanation: this_1.questions[i].explanation
                    });
                    evaluation.questions.push({
                        questionId: this_1.questions[i].id,
                        correctBool: false
                    });
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.selectedQuestion.length; i++) {
            _loop_1(i);
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__quizresult_quizresult__["a" /* QuizresultPage */], {
            result: result,
            evaluation: evaluation,
            questionType: this.questionType,
            subject: this.subject
        }, {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    QuizPage.prototype.shakeCard = function (veiwCorrect) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.shake = true;
            setTimeout(function () {
                _this.shake = false;
                resolve(true);
            }, 1000);
        });
    };
    QuizPage.prototype.shakeGreenCard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.shakeGreen = true;
            setTimeout(function () {
                _this.shakeGreen = false;
                resolve(true);
            }, 1000);
        });
    };
    QuizPage.prototype.storeInitialEvalution = function () {
        var _this = this;
        var user = this.sessionProvider.getUser();
        var body = {
            topic_id: this.topic.id,
            subject_id: this.subject.id,
            status: 'started',
            user_id: user.id,
            completed_at: null,
            end_time: null,
            score: 0
        };
        this.desktopProvider.storeInitialEvaluation(body).subscribe(function (response) {
            _this.currentEvaluationId = response.id;
        }, function (err) {
            console.log(err);
        });
    };
    QuizPage.prototype.storeInitialExamResult = function () {
        var _this = this;
        var user = this.sessionProvider.getUser();
        var body = {
            exam_id: this.exam.id,
            subject_id: this.subject.id,
            score: 0,
            user_id: user.id,
            completed_at: null,
            start_time: new Date(Date.now()),
            end_time: null,
            recommended_topic: null
        };
        this.desktopProvider.storeInitialExaminationResult(body).subscribe(function (response) {
            _this.currentEvaluationId = response.id;
        }, function (err) {
            console.log(err);
        });
    };
    QuizPage.prototype.storeExamresultUpdate = function () {
        var _this = this;
        console.log('exam ', this.test_type, this.selectedQuestion);
        var result = {};
        result["questions"] = [];
        var _loop_2 = function (i) {
            if (this_2.questions[i].id == this_2.selectedQuestion[i].questionId) {
                if (this_2.selectedQuestion[i].answerId == this_2.questions[i].answer.id) {
                    result.questions.push({
                        question: this_2.questions[i].question,
                        topic_id: this_2.questions[i].topic_id,
                        correct: "yes",
                        chosen: this_2.questions[i].answer.option_text,
                        answer: this_2.questions[i].answer.option_text,
                        explanation: this_2.questions[i].explanation
                    });
                }
                else {
                    result.questions.push({
                        question: this_2.questions[i].question,
                        correct: "no",
                        topic_id: this_2.questions[i].topic_id,
                        chosen: this_2.questions[i].options.filter(function (opt) {
                            if (opt.id == _this.selectedQuestion[i].answerId) {
                                return opt.option_text;
                            }
                        }),
                        answer: this_2.questions[i].answer.option_text,
                        explanation: this_2.questions[i].explanation
                    });
                }
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.selectedQuestion.length; i++) {
            _loop_2(i);
        }
        var counts = {};
        var compare = 0;
        var current_topic_id;
        var recommended_topic = null;
        console.log('result ', result.questions);
        for (var i = 0; i < result.questions.length; i++) {
            var question_correct = result.questions[i].correct;
            var topic_id = result.questions[i].topic_id;
            console.log(topic_id);
            if (topic_id != null) {
                if (question_correct == "no") {
                    if (counts[topic_id] === undefined) {
                        counts[topic_id] = 1;
                    }
                    else {
                        counts[topic_id] = counts[topic_id] + 1;
                    }
                    if (!recommended_topic)
                        recommended_topic = topic_id;
                    if (counts[topic_id] > counts[recommended_topic]) {
                        recommended_topic = topic_id;
                    }
                }
            }
            if ((i + 1) == result.questions.length) {
                console.log(topic_id, counts, compare);
                break;
            }
        }
        if (this.questionType == "normal") {
            var exam_update = {
                score: this.scores,
                end_time: new Date(Date.now()),
                completed_at: new Date(Date.now()),
                id: this.currentEvaluationId,
                recommended_topic: recommended_topic
            };
            console.log('exam update ', exam_update);
            this.desktopProvider.updateExaminationResult(exam_update).subscribe(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("quizcard"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QuizPage.prototype, "quizcard", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-quiz",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/quiz/quiz.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title *ngIf="topic">{{ topic.topic | titlecase }}</ion-title>\n    <ion-title *ngIf="!topic">{{ subject.name | titlecase }}</ion-title>\n    <ion-buttons end *ngIf="test_type == 1 || test_type == 2">\n      <button ion-button clear color="brown" class="timer">{{ time }}</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="loaded | async" class="cont mtop">\n    <!-- Learning Track Interface-->\n    <div *ngIf="test_type == 0">\n      <div>\n        <div\n          [ngClass]="[\n            shake ? \'shake-card\' : \'\',\n            shakeGreen ? \'shake-card-green\' : \'\'\n          ]"\n        >\n          <ion-card #quizcard>\n            <ion-card-content>\n              <div class="progress">\n                <div\n                  class="progress-inner"\n                  [ngStyle]="{\n                    width: width + \'%\',\n                    \'background-color\': \'#C27C39\'\n                  }"\n                ></div>\n              </div>\n              <h2 [innerHTML]="questions[currentIndex].question"></h2>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <br />\n        <div class="animated fadeIn explanation-card" *ngIf="showCorrectAnswer">\n          <ion-card>\n            <ion-card-content>\n              <h3>\n                <strong\n                  >The correct answer is &nbsp;<span\n                    [innerHTML]="currentQuestion.answer.option_text"\n                  ></span\n                ></strong>\n              </h3>\n              <br />\n              <h3><strong>Explanation</strong></h3>\n              <h3 [innerHTML]="currentQuestion.explanation"></h3>\n            </ion-card-content>\n          </ion-card>\n          <ion-row>\n            <ion-col col-4>\n              <button\n                ion-button\n                round\n                float-right\n                color="brown"\n                (click)="onEndClick()"\n              >\n                End\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button\n                ion-button\n                round\n                float-right\n                color="brown"\n                (click)="onEndClick()"\n              >\n                Back to Topics\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button\n                ion-button\n                round\n                color="brown"\n                icon-start\n                (click)="onGotItClick()"\n              >\n                <ion-icon name="thumbs-up" color="light"></ion-icon>\n                Got It\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class="anwser-grp" *ngIf="!showCorrectAnswer">\n          <div\n            *ngFor="\n              let answer of questions[currentIndex].options;\n              let i = index\n            "\n          >\n            <button\n              class="center answer-btn"\n              ion-button\n              color="brown"\n              round\n              [innerHTML]="answer.option_text"\n              [disabled]="\n                trialNumbers < 1 || questions[currentIndex].disabled[i]\n              "\n              (click)="checkAnswer(i)"\n            ></button>\n          </div>\n        </div>\n      </div>\n      <br />\n      <ion-row *ngIf="test_type == 0">\n        <ion-col col-6>\n          <button\n            (click)="prev()"\n            ion-button\n            round\n            color="brown"\n            icon-start\n            *ngIf="currentIndex >= 1 && currentIndex < questions.length"\n          >\n            <ion-icon name="ios-arrow-back"></ion-icon>\n            Previous\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button\n            float-right\n            (click)="next()"\n            ion-button\n            round\n            color="brown"\n            icon-end\n            *ngIf="questions.length > currentIndex"\n          >\n            Next\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- Evaluation Track Interface -->\n    <div *ngIf="test_type == 1 || test_type == 2">\n      <ion-row *ngIf="test_type == 1 || test_type == 2">\n        <ion-col col-6>\n          <button\n            (click)="prev()"\n            ion-button\n            round\n            color="brown"\n            icon-start\n            *ngIf="currentIndex > 0"\n          >\n            <ion-icon name="ios-arrow-back"></ion-icon>\n            Previous\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button\n            float-right\n            (click)="next()"\n            ion-button  \n            round\n            color="brown"\n            icon-end\n            *ngIf="questions.length - 1 > currentIndex"\n          >\n            Next\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <br>\n      <div>\n        <ion-card>\n          <ion-card-content>\n            <!-- display format for test type 1 -->\n            <p *ngIf="test_type == 1">\n              {{ currentIndex + 1 }} / {{ questions.length }}\n            </p>\n            <!-- display format for test type 2 -->\n            <p *ngIf="test_type == 2">\n              {{ currentIndex + 1 }} / {{ questions.length }} out of\n              {{ totalExamQuestionCount.count }} questions\n            </p>\n            <h2 [innerHTML]="questions[currentIndex].question"></h2>\n            <br>\n            <div>\n          \n              <ion-list radio-group>\n                <ion-item\n                  *ngFor="\n                    let answer of questions[currentIndex].options;\n                    let i = index\n                  "\n                >\n                  <ion-label\n                    ><strong [innerHTML]="answer.option_text"></strong\n                  ></ion-label>\n                  <ion-radio\n                    color="brown"\n                    mode="md"\n                    [value]="answer.id"\n                    [checked]="selectedQuestion[currentIndex].answerId == answer.id"\n                    (ionSelect)="\n                      addToSelected(questions[currentIndex].id, answer.id)\n                    "\n                  ></ion-radio>\n                </ion-item>\n              </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer padding *ngIf="loaded">\n  <!-- <div class="d-flex" *ngIf="test_type == 0">\n    <input\n      placeholder="Type answer here"\n      type="text"\n      class="input-box"\n      [(ngModel)]="answer_input"\n      name="anwser_input"\n    />\n    <button\n      icon-end\n      class="btn-send"\n      color="brown"\n      round\n      ion-button\n      icon-only\n      (click)="checkSubmittion()"\n    >\n      Submit\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n    </button>\n  </div> -->\n\n  <div class="cont">\n    <button\n    ion-button\n    round\n    (click)="submit()"\n    full\n    *ngIf="test_type == 1 || test_type == 2"\n    color="brown"\n  >\n    Submit\n  </button>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/quiz/quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_session_session__["a" /* SessionProvider */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(network, platform) {
        this.network = network;
        this.platform = platform;
        this.connected = true;
        this.onDevice = this.platform.is("cordova");
    }
    // ---- if there isn't any connection
    NetworkProvider.prototype.noConnection = function () {
        return this.network.type === "none";
    };
    // ------ if device is offline ---
    NetworkProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type == "none";
        }
        else {
            return !navigator.onLine;
        }
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createstudent_createstudent__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherevaluationresult_teacherevaluationresult__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherexaminationresult_teacherexaminationresult__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_session_session__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TeacherdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherdashboardPage = /** @class */ (function () {
    function TeacherdashboardPage(navCtrl, session, toastCtrl, navParams, desktopProvider) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.user = this.session.getUser();
        console.log('user ', this.user);
    }
    TeacherdashboardPage.prototype.ionViewDidLoad = function () {
        this.fetchSuperExams();
    };
    TeacherdashboardPage.prototype.createStudents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createstudent_createstudent__["a" /* CreatestudentPage */]);
    };
    TeacherdashboardPage.prototype.logout = function () {
        localStorage.removeItem('user');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], null, {
            animate: true,
            animation: "transition-ios",
            direction: "back"
        });
    };
    TeacherdashboardPage.prototype.gotoEvaluationResult = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__teacherevaluationresult_teacherevaluationresult__["a" /* TeacherevaluationresultPage */], {}, {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    TeacherdashboardPage.prototype.gotoExaminationResult = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacherexaminationresult_teacherexaminationresult__["a" /* TeacherexaminationresultPage */], null, {
            animation: 'transition-ios',
            animate: true,
            direction: "forward"
        });
    };
    TeacherdashboardPage.prototype.fetchSuperExams = function () {
        var _this = this;
        this.desktopProvider.fetchSuperExam().subscribe(function (response) {
            console.log(response);
            _this.superexams = response;
        });
        this.desktopProvider.checkIfTeacherHasubscribed().subscribe(function (response) {
            console.log(response);
            _this.show_sweet = response.show_sweet;
            _this.settingsLoaded = Promise.resolve(true);
        });
    };
    TeacherdashboardPage.prototype.updateExam = function (event, i) {
        var _this = this;
        var body = {};
        if (event.checked === true) {
            body = {
                value: 1,
                id: this.superexams[i].id
            };
        }
        else {
            body = {
                value: 0,
                id: this.superexams[i].id
            };
        }
        this.desktopProvider.updateexamsettings(body).subscribe(function (response) {
            _this.toastCtrl.create({
                message: 'Hurray, settings updated',
                duration: 2000
            }).present();
        }, function (err) {
            _this.toastCtrl.create({
                message: 'Oops an error occured',
                duration: 2000
            }).present();
        });
    };
    TeacherdashboardPage.prototype.updateSweetSixteen = function (event) {
        var _this = this;
        var val = null;
        if (event.checked === true) {
            val = 1;
        }
        else {
            val = 0;
        }
        this.desktopProvider.setNovel(val).subscribe(function (response) {
            _this.toastCtrl.create({
                message: 'Hurray, settings updated',
                duration: 2000
            }).present();
        }, function (err) {
            _this.toastCtrl.create({
                message: 'Oops an error occured',
                duration: 2000
            }).present();
        });
    };
    TeacherdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacherdashboard',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherdashboard/teacherdashboard.html"*/'<!--\n  Generated template for the TeacherdashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Admin Dashboard</ion-title>\n    <ion-buttons end padding>\n      <button ion-button color="danger"  (click)="logout()">Log Out</button>\n    </ion-buttons>\n  </ion-navbar>\n \n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <h1>Welcome {{user.firstname}}</h1>\n    <ion-row>\n      <ion-col col-4>\n        <ion-card>\n          <ion-card-content>\n            <img src="assets/imgs/users.png" class="img" alt="" />\n            <br />\n            <h2 text-center>Create Students.</h2>\n            <div padding>\n              <button ion-button full (click)="createStudents()">View</button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-card>\n          <ion-card-content>\n            <img src="assets/imgs/report.png" class="img" alt="" />\n            <br />\n            <h2 text-center>Evaluation Results</h2>\n            <div padding>\n              <button ion-button full (click)="gotoEvaluationResult()">\n                View\n              </button>  \n            </div>\n            \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4>\n        <ion-card>\n          <ion-card-content>\n            <img src="assets/imgs/report.png" class="img" alt="" />\n            <br />\n            <h2 text-center>Examination Results</h2>\n            <div padding>\n              <button ion-button full (click)="gotoExaminationResult()">\n                View\n              </button>  \n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <br>\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-card *ngIf="settingsLoaded">\n          <ion-card-content>\n            <h3>Settings</h3>\n            <br>\n            <ion-item *ngFor="let superexam of superexams; let i = index;">\n              <h3 item-start>{{superexam.name}}</h3>\n              <ion-toggle [checked]="superexam.show == 1" (ionChange)="updateExam($event, i)"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <h3 item-start>Show sweet sixteen</h3>\n              <ion-toggle [checked]="show_sweet == 1" (ionChange)="updateSweetSixteen($event)"></ion-toggle>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/teacherdashboard/teacherdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_session_session__["a" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_desktop_desktop__["a" /* DesktopProvider */]])
    ], TeacherdashboardPage);
    return TeacherdashboardPage;
}());

//# sourceMappingURL=teacherdashboard.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InappbrowserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_themeable_browser__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InappbrowserProvider = /** @class */ (function () {
    function InappbrowserProvider(themeableBrowser, spinnerDialog, events) {
        this.themeableBrowser = themeableBrowser;
        this.spinnerDialog = spinnerDialog;
        this.events = events;
        this.options = {
            hidden: false,
            statusbar: {
                color: "#36BFE9"
            },
            toolbar: {
                height: 60,
                color: "#36BFE9"
            },
            title: {
                color: "ffffff",
                showPageTitle: true,
            },
            backButton: {
                wwwImage: "",
                imagePressed: "back_pressed",
                align: "left",
                event: "backPressed"
            },
            forwardButton: {
                wwwImage: "",
                imagePressed: "forward_pressed",
                align: "left",
                event: "forwardPressed"
            },
            closeButton: {
                wwwImage: "assets/imgs/left-arrow.png",
                imagePressed: "close_pressed",
                align: "left",
                event: "closePressed"
            },
            customButtons: [
                {
                    image: "share",
                    imagePressed: "share_pressed",
                    align: "right",
                    event: "sharePressed"
                }
            ],
            backButtonCanClose: true
        };
    }
    InappbrowserProvider.prototype.openBrowser = function (url) {
        var _this = this;
        var browser = this.themeableBrowser.create(url, '_blank', this.options);
        browser.on('loadstart').subscribe(function (event) {
            console.log('browser loading ', browser);
            _this.spinnerDialog.show();
            console.log(event);
            var url = event.url;
            console.log(event);
            var startWith = url.includes('simbibot');
            if (startWith == true) {
                // this.spinnerDialog.hide();
                // return browser.close();
            }
        });
        browser.on('loadstop').subscribe(function (event) {
            console.log('browser loaded ', event);
            _this.spinnerDialog.hide();
            browser.show();
        });
        browser.on('exit').subscribe(function (event) {
            console.log('browser closed ', event);
            _this.events.publish('browser_closed');
        });
    };
    InappbrowserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_themeable_browser__["a" /* ThemeableBrowser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__["a" /* SpinnerDialog */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], InappbrowserProvider);
    return InappbrowserProvider;
}());

//# sourceMappingURL=inappbrowser.js.map

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 340,
	"./af.js": 340,
	"./ar": 341,
	"./ar-dz": 342,
	"./ar-dz.js": 342,
	"./ar-kw": 343,
	"./ar-kw.js": 343,
	"./ar-ly": 344,
	"./ar-ly.js": 344,
	"./ar-ma": 345,
	"./ar-ma.js": 345,
	"./ar-sa": 346,
	"./ar-sa.js": 346,
	"./ar-tn": 347,
	"./ar-tn.js": 347,
	"./ar.js": 341,
	"./az": 348,
	"./az.js": 348,
	"./be": 349,
	"./be.js": 349,
	"./bg": 350,
	"./bg.js": 350,
	"./bm": 351,
	"./bm.js": 351,
	"./bn": 352,
	"./bn.js": 352,
	"./bo": 353,
	"./bo.js": 353,
	"./br": 354,
	"./br.js": 354,
	"./bs": 355,
	"./bs.js": 355,
	"./ca": 356,
	"./ca.js": 356,
	"./cs": 357,
	"./cs.js": 357,
	"./cv": 358,
	"./cv.js": 358,
	"./cy": 359,
	"./cy.js": 359,
	"./da": 360,
	"./da.js": 360,
	"./de": 361,
	"./de-at": 362,
	"./de-at.js": 362,
	"./de-ch": 363,
	"./de-ch.js": 363,
	"./de.js": 361,
	"./dv": 364,
	"./dv.js": 364,
	"./el": 365,
	"./el.js": 365,
	"./en-SG": 366,
	"./en-SG.js": 366,
	"./en-au": 367,
	"./en-au.js": 367,
	"./en-ca": 368,
	"./en-ca.js": 368,
	"./en-gb": 369,
	"./en-gb.js": 369,
	"./en-ie": 370,
	"./en-ie.js": 370,
	"./en-il": 371,
	"./en-il.js": 371,
	"./en-nz": 372,
	"./en-nz.js": 372,
	"./eo": 373,
	"./eo.js": 373,
	"./es": 374,
	"./es-do": 375,
	"./es-do.js": 375,
	"./es-us": 376,
	"./es-us.js": 376,
	"./es.js": 374,
	"./et": 377,
	"./et.js": 377,
	"./eu": 378,
	"./eu.js": 378,
	"./fa": 379,
	"./fa.js": 379,
	"./fi": 380,
	"./fi.js": 380,
	"./fo": 381,
	"./fo.js": 381,
	"./fr": 382,
	"./fr-ca": 383,
	"./fr-ca.js": 383,
	"./fr-ch": 384,
	"./fr-ch.js": 384,
	"./fr.js": 382,
	"./fy": 385,
	"./fy.js": 385,
	"./ga": 386,
	"./ga.js": 386,
	"./gd": 387,
	"./gd.js": 387,
	"./gl": 388,
	"./gl.js": 388,
	"./gom-latn": 389,
	"./gom-latn.js": 389,
	"./gu": 390,
	"./gu.js": 390,
	"./he": 391,
	"./he.js": 391,
	"./hi": 392,
	"./hi.js": 392,
	"./hr": 393,
	"./hr.js": 393,
	"./hu": 394,
	"./hu.js": 394,
	"./hy-am": 395,
	"./hy-am.js": 395,
	"./id": 396,
	"./id.js": 396,
	"./is": 397,
	"./is.js": 397,
	"./it": 398,
	"./it-ch": 399,
	"./it-ch.js": 399,
	"./it.js": 398,
	"./ja": 400,
	"./ja.js": 400,
	"./jv": 401,
	"./jv.js": 401,
	"./ka": 402,
	"./ka.js": 402,
	"./kk": 403,
	"./kk.js": 403,
	"./km": 404,
	"./km.js": 404,
	"./kn": 405,
	"./kn.js": 405,
	"./ko": 406,
	"./ko.js": 406,
	"./ku": 407,
	"./ku.js": 407,
	"./ky": 408,
	"./ky.js": 408,
	"./lb": 409,
	"./lb.js": 409,
	"./lo": 410,
	"./lo.js": 410,
	"./lt": 411,
	"./lt.js": 411,
	"./lv": 412,
	"./lv.js": 412,
	"./me": 413,
	"./me.js": 413,
	"./mi": 414,
	"./mi.js": 414,
	"./mk": 415,
	"./mk.js": 415,
	"./ml": 416,
	"./ml.js": 416,
	"./mn": 417,
	"./mn.js": 417,
	"./mr": 418,
	"./mr.js": 418,
	"./ms": 419,
	"./ms-my": 420,
	"./ms-my.js": 420,
	"./ms.js": 419,
	"./mt": 421,
	"./mt.js": 421,
	"./my": 422,
	"./my.js": 422,
	"./nb": 423,
	"./nb.js": 423,
	"./ne": 424,
	"./ne.js": 424,
	"./nl": 425,
	"./nl-be": 426,
	"./nl-be.js": 426,
	"./nl.js": 425,
	"./nn": 427,
	"./nn.js": 427,
	"./pa-in": 428,
	"./pa-in.js": 428,
	"./pl": 429,
	"./pl.js": 429,
	"./pt": 430,
	"./pt-br": 431,
	"./pt-br.js": 431,
	"./pt.js": 430,
	"./ro": 432,
	"./ro.js": 432,
	"./ru": 433,
	"./ru.js": 433,
	"./sd": 434,
	"./sd.js": 434,
	"./se": 435,
	"./se.js": 435,
	"./si": 436,
	"./si.js": 436,
	"./sk": 437,
	"./sk.js": 437,
	"./sl": 438,
	"./sl.js": 438,
	"./sq": 439,
	"./sq.js": 439,
	"./sr": 440,
	"./sr-cyrl": 441,
	"./sr-cyrl.js": 441,
	"./sr.js": 440,
	"./ss": 442,
	"./ss.js": 442,
	"./sv": 443,
	"./sv.js": 443,
	"./sw": 444,
	"./sw.js": 444,
	"./ta": 445,
	"./ta.js": 445,
	"./te": 446,
	"./te.js": 446,
	"./tet": 447,
	"./tet.js": 447,
	"./tg": 448,
	"./tg.js": 448,
	"./th": 449,
	"./th.js": 449,
	"./tl-ph": 450,
	"./tl-ph.js": 450,
	"./tlh": 451,
	"./tlh.js": 451,
	"./tr": 452,
	"./tr.js": 452,
	"./tzl": 453,
	"./tzl.js": 453,
	"./tzm": 454,
	"./tzm-latn": 455,
	"./tzm-latn.js": 455,
	"./tzm.js": 454,
	"./ug-cn": 456,
	"./ug-cn.js": 456,
	"./uk": 457,
	"./uk.js": 457,
	"./ur": 458,
	"./ur.js": 458,
	"./uz": 459,
	"./uz-latn": 460,
	"./uz-latn.js": 460,
	"./uz.js": 459,
	"./vi": 461,
	"./vi.js": 461,
	"./x-pseudo": 462,
	"./x-pseudo.js": 462,
	"./yo": 463,
	"./yo.js": 463,
	"./zh-cn": 464,
	"./zh-cn.js": 464,
	"./zh-hk": 465,
	"./zh-hk.js": 465,
	"./zh-tw": 466,
	"./zh-tw.js": 466
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 863;

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            if (item.name)
                return item.name.toLowerCase().includes(args);
            if (item.topic)
                return item.topic.toLowerCase().includes(args);
        });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "searchFilter"
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_offline_offline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_storybook_storybook__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quizresult_quizresult__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_quiz_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_subscription_subscription__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_updates_updates__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_createteacher_createteacher__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teacherdashboard_teacherdashboard__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_studentresults_studentresults__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activationpage_activationpage__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer/ngx';
// import { InstallReferrer } from 'install-referrer'



















var Pusher = window.Pusher;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, menuController, offlineProvider, events, app, session, alertCtrl, toastCtrl, audio, localNotifications, desktopProvider
        // private installReferrer: TealiumInstallReferrer,
        // private _installReferrer: InstallReferrer,
    ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.menuController = menuController;
        this.offlineProvider = offlineProvider;
        this.events = events;
        this.app = app;
        this.session = session;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.audio = audio;
        this.localNotifications = localNotifications;
        this.desktopProvider = desktopProvider;
        this.switch = false;
        this.hasSubscribed = false;
        this.updatesPage = __WEBPACK_IMPORTED_MODULE_15__pages_updates_updates__["a" /* UpdatesPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */];
        this.subscriptionPage = __WEBPACK_IMPORTED_MODULE_14__pages_subscription_subscription__["a" /* SubscriptionPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: "home" },
            {
                title: "Performances",
                component: __WEBPACK_IMPORTED_MODULE_20__pages_studentresults_studentresults__["a" /* StudentresultsPage */],
                icon: "folder-open"
            },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // initialize install referrer
            // console.log('referrer ', this.installReferrer)
            // this.installReferrer.setPersistent("referrer");
            // this.installReferrer.setVolatile("referrer");
            // this._installReferrer.getReferrer()
            //   .then(data => {
            //     // data is a array with all parameters received
            //     console.log('data ', data)
            //   })
            //   .catch(err => { });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.keepSession();
            // this.offlineProvider.unzipDatabase();
            _this.statusBar.backgroundColorByHexString("#36BFE9");
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                var overlayView = _this.app._appRoot._overlayPortal._views[0];
                var view = _this.nav.getActive();
                var viewCtrl = _this.app._appRoot._modalPortal.getActive();
                console.log('back');
                try {
                    viewCtrl.dismiss();
                    console.log('dismiss view');
                }
                catch (e) {
                    console.log('dismiss view error ', e);
                    if (overlayView && overlayView.dismiss) {
                        overlayView.dismiss();
                    }
                    else {
                        var nav = _this.app.getActiveNav();
                        if (nav.canGoBack()) {
                            nav.pop();
                        }
                        else if (view.instance instanceof __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]) {
                            _this.alertCtrl
                                .create({
                                subTitle: "Do you want to quit?",
                                buttons: [
                                    {
                                        text: "cancel",
                                        role: "Cancel"
                                    },
                                    {
                                        text: "ok",
                                        handler: function () {
                                            _this.platform.exitApp();
                                        }
                                    }
                                ]
                            })
                                .present();
                        }
                        else if (viewCtrl.instance instanceof __WEBPACK_IMPORTED_MODULE_11__pages_quizresult_quizresult__["a" /* QuizresultPage */] ||
                            viewCtrl.instance instanceof __WEBPACK_IMPORTED_MODULE_12__pages_quiz_quiz__["a" /* QuizPage */]) {
                            viewCtrl.dismiss();
                        }
                        else {
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_quizresult_quizresult__["a" /* QuizresultPage */], {}, {
                                animate: true,
                                animation: "transition",
                                duration: 500,
                                direction: "back"
                            });
                        }
                    }
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPageManually = function (component) {
        this.nav.setRoot(component);
    };
    MyApp.prototype.keepSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.desktopProvider.checkIfTeacherHasubscribed().subscribe(function (res) {
                    if (res.show_sweet == 1) {
                        _this.pages.push({
                            title: "Sweet Sixteen",
                            component: __WEBPACK_IMPORTED_MODULE_10__pages_storybook_storybook__["a" /* StoryBookPage */],
                            icon: "book"
                        });
                    }
                    if (res.data) {
                        var session = _this.session.checkUser();
                        var activation_key = _this.session.getActivationKey();
                        console.log('session ', session, activation_key);
                        if (!session)
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                        else {
                            var user = _this.session.getUser();
                            var activation_key_1 = _this.session.getActivationKey();
                            if (!activation_key_1 || _this.hasExpired(activation_key_1)) {
                                _this.toastCtrl.create({ message: 'Your Actvation Key has expired, Please contact +2349066450210.' });
                                if (user.usertype == 'teacher')
                                    return _this.rootPage = __WEBPACK_IMPORTED_MODULE_21__pages_activationpage_activationpage__["a" /* ActivationPage */];
                                if (user.usertype == 'student')
                                    return _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                            }
                            if (user.usertype == 'teacher')
                                return _this.rootPage = __WEBPACK_IMPORTED_MODULE_19__pages_teacherdashboard_teacherdashboard__["a" /* TeacherdashboardPage */];
                            if (user.usertype == 'student')
                                return _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                        }
                    }
                    else {
                        console.log('e no work');
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_17__pages_createteacher_createteacher__["a" /* CreateteacherPage */];
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.hasExpired = function (activation_key) {
        //   create date objects for comparison      
        var today = new Date();
        var expiryTime = new Date(activation_key.expiry_date);
        return (today.getTime() > expiryTime.getTime());
    };
    MyApp.prototype.openWhatssapLink = function () {
        window.open("whatsapp://chat?code=KtybtfGE9QcHbDUEMY6JMc", "_system");
    };
    MyApp.prototype.logOut = function () {
        this.menuController.close();
        localStorage.removeItem('user');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], null, {
            animate: true,
            animation: "transition-ios",
            direction: "back"
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/app/app.html"*/'<ion-menu [content]="content" class="menu">\n  <ion-header>\n    <div class="menu-bg">\n      <ion-title text-center\n        ><img src="assets/imgs/simbi.png" class="img-src" alt=""\n      /></ion-title>\n      <h3 class="simbi-text" text-center>\n        Your Interactive Learning Assistant.\n      </h3>\n    </div>\n  </ion-header>\n\n  <ion-content>\n   \n\n    <ion-list class="padding-top">\n      <button\n        [ngClass]="p.title == activePage ? \'active-menu\' : \'\'"\n        menuClose\n        ion-item\n        no-lines\n        *ngFor="let p of pages"\n        (click)="openPage(p)"\n      >\n        <span class="menu-icon"><ion-icon [name]="p.icon"></ion-icon></span\n        ><span class="menu-text">{{ p.title }}</span>\n      </button>\n      <!-- For offline sidebar  -->\n      <!-- <button\n        [ngClass]="Activation == activePage ? \'active-menu\' : \'\'"\n        *ngIf="!hasSubscribed"\n        menuClose\n        ion-item\n        no-lines\n        (click)="openPageManually(subscriptionPage)"\n      >\n        <span class="menu-icon"><ion-icon name="compass"></ion-icon></span\n        ><span class="menu-text">Activation</span>\n      </button> -->\n      <!-- <button\n        *ngIf="hasSubscribed"\n        [ngClass]="Updates == activePage ? \'active-menu\' : \'\'"\n        menuClose\n        ion-item\n        no-lines\n        (click)="openPageManually(updatesPage)"\n      >\n        <span class="menu-icon"><ion-icon name="refresh"></ion-icon></span\n        ><span class="menu-text">Updates</span>\n      </button> -->\n      <!-- <button ion-item no-lines (click)="openWhatssapLink()">\n        <span class="menu-icon"\n          ><ion-icon\n            name="people"\n            class="icon-color"\n            color="light"\n          ></ion-icon></span\n        ><span class="menu-text">Join Community</span>\n      </button> -->\n      <button ion-item no-lines (click)="openPageManually(aboutPage)">\n        <span class="menu-icon"\n          ><ion-icon\n            name="information-circle"\n            class="icon-color"\n            color="light"\n          ></ion-icon></span\n        ><span class="menu-text">About Simbi</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button ion-item no-lines (click)="logOut()">\n      <span class="menu-icon"\n        ><ion-icon name="log-out" color="light"></ion-icon></span\n      ><span class="menu-text">Log Out</span>\n    </button>\n  </ion-footer>\n</ion-menu>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_18__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_16__providers_desktop_desktop__["a" /* DesktopProvider */]
            // private installReferrer: TealiumInstallReferrer,
            // private _installReferrer: InstallReferrer,
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyllabusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inappbrowser_inappbrowser__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SyllabusPage = /** @class */ (function () {
    function SyllabusPage(navCtrl, inappbrowser, events) {
        this.navCtrl = navCtrl;
        this.inappbrowser = inappbrowser;
        this.events = events;
        this.subjects = [{ name: "Mathematics", color: "#00DBAA", id: 1, image_url: "https://chat.simbibot.com/storage/subjects/icons/nay5afGwSz1F3PXRUIQU9VpCuuTSt9CGrUwmHbtb.png", doc: "https://drive.google.com/file/d/19NXhh9_30nBQZK1l8Z9x9AjEgp6EWTuK/view" },
            { name: "english", color: "#A560E8", id: 2, image_url: "https://chat.simbibot.com/storage/subjects/icons/CLc9iN4pCbuTAJ2ctQ93LyVyNbrDzOqoL0G08iHU.png", doc: "https://drive.google.com/open?id=1OC6rHR_u5qBBLPQdUTVmLqpIBflHDBY4" },
            { name: "biology", color: "#7AC70C", id: 3, image_url: "https://chat.simbibot.com/storage/subjects/icons/owTawhblrS3eeP96dPKoeEly5BWGoFUMzVwPtOyS.png", doc: "https://drive.google.com/open?id=1llMooY50z7kq5Trj5KT1pQIH1uiASZBk" },
            { name: "physics", color: "#E53B3B", id: 4, image_url: "https://chat.simbibot.com/storage/subjects/icons/o6UNSDFqMJNsHS3f3nQBLuvldUWjzR9zTrXLzgHF.png", doc: "https://drive.google.com/file/d/1I-JH_NpJlFjI50LPqv_y2ofmFXVa6-kA/view?usp=sharing" },
            { name: "chemistry", color: "#04A8FF", id: 5, image_url: "https://chat.simbibot.com/storage/subjects/icons/PqnO8HZgICktVYHlYU9LZeIgDxeCE899wxP9HY6a.png", doc: "https://drive.google.com/open?id=1QeWiBWIhahBXJbmDmDr2yfIuASAEnQ9l" },
            { name: "economics", color: "#F7C72E", id: 6, image_url: "https://chat.simbibot.com/storage/subjects/icons/Ia9HuZOl9TMlTLoxD4nzEb3LY4B1AU1drao3dVew.png", doc: "https://drive.google.com/open?id=1X2Qhp27_TYB1sAyrPp3rkcGf3dHs-iJo" },
            { name: "agriculture", color: "#F7C72E", id: 7, image_url: "https://chat.simbibot.com/storage/subjects/icons/3hc53l1zS5Y6bB1Dxtntc1CT4ONhmsVmrszeTtop.png", doc: "https://drive.google.com/open?id=1X319J3erRoqifjDNXrrM-lPTmSHF0-Ue" },
            { name: "geography", color: "#FF6377", id: 8, image_url: "https://chat.simbibot.com/storage/subjects/icons/UhpurdN0JAxqsiocUdUzMdsJTsdKjTE1yikmuTGC.png", doc: "https://drive.google.com/open?id=1FAij1xwsyFEXFIqjtPvOxjU26SI3cZta" },
            { name: "CRS", color: "#A560E8", id: 9, image_url: "https://chat.simbibot.com/storage/subjects/icons/Grx0oPrs6lIjLNhvUXhd6GS694uMW5ZGsRjQoXRy.png", doc: "https://drive.google.com/open?id=1leeUZds6Q0fGA8jd52rg9snU6LOhSdki" },
            { name: "government", color: "#E53B3B", id: 10, image_url: "https://chat.simbibot.com/storage/subjects/icons/VN4UJQrHeCr0Qeehybfsx370xYWk4c8AduaWyFzw.png", doc: "https://drive.google.com/open?id=1P9xKX0Iuxe33wl-gn41Wq1U6oy7_1-Wr" },
            { name: "commerce", color: "#7AC70C", id: 12, image_url: "https://chat.simbibot.com/storage/subjects/icons/ZCLzm1uf8X3H4oNhS34cyGVZ5DQOLDiu2w1ncUc1.png", doc: "https://drive.google.com/open?id=1vjMtbBwVOdfGRxIPnmBXKNSu70fhLcZY" },
            { name: "account", color: "#F7C72E", id: 13, image_url: "https://chat.simbibot.com/storage/subjects/icons/bKdKFjs1YLa6Te3m0Xn1bqrBI8cQKDIuNPEOK529.png", doc: "https://drive.google.com/open?id=18AJYv1RwU3u0sq2MCNqv_GPMy8_TcPyw" },
            { name: "literature", color: "#FF6377", id: 14, image_url: "https://chat.simbibot.com/storage/subjects/icons/FHzNoIxMCdxRNZpJzbfGybRQmOyA9bRjtyTby4Pv.png", doc: "https://drive.google.com/open?id=1CueSMrRZfVreXUlGKRJ20cyBmB2duTPO" },
            { name: "Civic Education", color: "#FFA500", id: 21, image_url: "https://chat.simbibot.com/storage/subjects/icons/3hc53l1zS5Y6bB1Dxtntc1CT4ONhmsVmrszeTtop.png", doc: "https://drive.google.com/open?id=192oQ32ldVn0K2eKZVyB5Rbs-m2P-ygT1" }];
        this.config = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */];
    }
    SyllabusPage.prototype.openSyllabus = function (subject) {
        console.log('open ', subject);
        if (subject.doc) {
            this.inappbrowser.openBrowser(subject.doc);
        }
    };
    SyllabusPage.prototype.ionViewDidLoad = function () {
        this.events.publish("play_bg_audio");
    };
    SyllabusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-syllabus",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/syllabus/syllabus.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center>Syllabus</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-row class="animated fadeInUp">\n      <ion-col\n        *ngFor="\n          let subject of subjects\n        "\n        col-6\n      >\n        <div>\n          <ion-card (click)="openSyllabus(subject)">\n            <ion-card-content>\n              <ion-card-title>\n                <img\n                  class="center img"\n                  [src]="subject.image_url"\n                  alt=""\n                  *ngIf="subject.image_url != null"\n                />\n                <p\n                  [ngStyle]="{ \'background-color\': subject.color }"\n                  class="p-bg"\n                  *ngIf="subject.image_url == null"\n                ></p>\n              </ion-card-title>\n              <p\n                class="center line"\n                [ngStyle]="{ \'border-bottom-color\': subject.color }"\n              ></p>\n              <p>\n                <strong> {{ subject.name | titlecase }} </strong>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/syllabus/syllabus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SyllabusPage);
    return SyllabusPage;
}());

//# sourceMappingURL=syllabus.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(546);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryBookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storybook__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoryBookPageModule = /** @class */ (function () {
    function StoryBookPageModule() {
    }
    StoryBookPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__storybook__["a" /* StoryBookPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__storybook__["a" /* StoryBookPage */])]
        })
    ], StoryBookPageModule);
    return StoryBookPageModule;
}());

//# sourceMappingURL=storybook.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */])]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_inappbrowser_inappbrowser__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(notifier, storage, inappbrowser) {
        var _this = this;
        this.notifier = notifier;
        this.storage = storage;
        this.inappbrowser = inappbrowser;
        this.notifications = [];
        this.loaded = false;
        this.response = null;
        this.ionViewDidLoad = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var notifications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('notifications')];
                    case 1:
                        notifications = _a.sent();
                        if (notifications) {
                            this.loaded = true;
                            this.notifications = notifications;
                        }
                        this.notifier.getNotifications().then(function (response) {
                            response.subscribe(function (resp) {
                                console.log('notifications ', resp.data);
                                _this.loaded = true;
                                _this.notifications = resp.data.data;
                                _this.storage.set('notifications', _this.notifications);
                                _this.response = resp.data;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.config = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */];
    }
    NotificationsPage.prototype.openNotification = function (notification) {
        if (notification.url) {
            this.inappbrowser.openBrowser(notification.url);
        }
    };
    NotificationsPage.prototype.loadData = function (event) {
        var _this = this;
        if (this.response && this.response.next_page_url) {
            this.notifier.getNextPage(this.response.next_page_url).then(function (response) {
                response.subscribe(function (resp) {
                    _this.loaded = true;
                    _this.notifications = _this.notifications.concat(resp.data.data);
                    _this.response = resp.data;
                    _this.storage.set('notifications', _this.notifications);
                    event.complete();
                }, function (error) {
                    console.log('error ', error);
                    event.complete();
                });
            });
        }
        else {
            event.complete();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* InfiniteScroll */])
    ], NotificationsPage.prototype, "infiniteScroll", void 0);
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-notifications",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/notifications/notifications.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center class="about-title">\n        Notifications\n      </ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <img\n    src="../../assets/imgs/simbi-girl.png"\n    alt="simbi"\n    class="simbi-girl img-center"\n  />\n\n  <div class="flex-vertical">\n    <ion-spinner name="bubbles" *ngIf="!loaded"></ion-spinner>\n  </div>\n  <div class=" flex-vertical notifications-container" *ngIf="loaded">\n    <div\n      class="notification-card"\n      *ngFor="let notification of notifications"\n      (click)="openNotification(notification)"\n    >\n      <h1>{{ notification.title }}</h1>\n      <p>\n        {{notification.content}}\n      </p>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data..."\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updates__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatesPageModule = /** @class */ (function () {
    function UpdatesPageModule() {
    }
    UpdatesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__updates__["a" /* UpdatesPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updates__["a" /* UpdatesPage */])]
        })
    ], UpdatesPageModule);
    return UpdatesPageModule;
}());

//# sourceMappingURL=updates.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, device) {
        this.http = http;
        this.device = device;
    }
    AuthProvider.prototype.checkEmail = function (email) {
        var device_id = this.device.uuid;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "auth/validate-email?source=mobile&device_id=" + device_id, {
            email: email
        });
    };
    AuthProvider.prototype.verifyActivation = function (body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "schools-management/schools/check-activation-key", body);
    };
    AuthProvider.prototype.login = function (email, password) {
        var device_id = this.device.uuid;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "auth/login?source=mobile&device_id=" + device_id, {
            email: email,
            password: password
        });
    };
    AuthProvider.prototype.loginAsAdmin = function (body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "schools-management/schools/login", body);
    };
    AuthProvider.prototype.signup = function (body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "schools-management/schools/new", body);
    };
    AuthProvider.prototype.submitUserProgress = function (user_id, body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "user/" + user_id + "/progress", body);
    };
    AuthProvider.prototype.updateUserTrack = function (user_id, topic_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "user/" + user_id + "/track/" + topic_id);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activationpage_activationpage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences_ngx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_network_network__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_inappbrowser_inappbrowser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__teacherdashboard_teacherdashboard__ = __webpack_require__(75);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, _authProvider, loadingCtrl, toast, formBuilder, network, inappBrowser, alertController, session, menuController, desktopProvider, appPreferences) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._authProvider = _authProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.network = network;
        this.inappBrowser = inappBrowser;
        this.alertController = alertController;
        this.session = session;
        this.menuController = menuController;
        this.desktopProvider = desktopProvider;
        this.appPreferences = appPreferences;
        this.showPassword = false;
        this.pageTitle = 'LOGIN';
        this.currentMessage = "Can I get your email?";
        this.userTypeForm = this.formBuilder.group({
            isStudent: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
        });
        this.userTypeForm.setValue({ isStudent: true });
        this.loginForm = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        this.registerUserBody = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]],
            address: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            name: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            // firstname: ["", [Validators.required]],
            // lastname: ["", [Validators.required]],
            phone: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(11)]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        this.menuController.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.onSliderChanged = function (e) {
        if (e.getActiveIndex() === 1) {
            this.pageTitle = 'CREATE ACCOUNT';
        }
        else {
            this.pageTitle = 'LOGIN';
        }
    };
    /*
      verifyEmailAddress() {
        // skip all actions if user has not entered their email
        console.log(this.loginForm.controls.email.invalid)
        if (this.loginForm.controls.email.invalid) {
          return this.alertMessage('Enter a valid Email address');
        };
    
        let loader = this.loadingCtrl.create({
          cssClass: "my-loading"
        });
    
        loader.present();
        this.desktopProvider.checkEmail(this.loginForm.controls.email.value).subscribe(
          (response: any) => {
    
            if (response.message == true) {
              this.user = response.user;
              this.currentMessage = `Welcome back, ${response.user.firstname}`;
              this.showLogin = true;
              loader.dismiss();
            } else {
              this.registerUserBody.controls.email.setValue(this.email);
              this.next();
              loader.dismiss();
            }
          },
          (err: any) => {
            console.log(err);
            this.alertMessage(err.error.message);
            loader.dismiss();
          }
        );
    
      }
    */
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.invalid || this.userTypeForm.invalid)
            return;
        // if(!this.password || this.password.lenght === 0) return;    
        if (this.userTypeForm.controls.isStudent.value === "false")
            return this.loginAsAdmin();
        // prevent student or teacher login if app hasn't been activated or the activation key has expired
        if (!this.session.isActivated())
            return this.alertMessage('You cannot login until your account has been activated, contact your admin or teacher for more info.');
        var loader = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        loader.present();
        this.desktopProvider.login(this.loginForm.value).subscribe(function (resp) {
            loader.dismiss();
            _this.session.newUser(resp);
            if (resp.usertype == 'teacher')
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__teacherdashboard_teacherdashboard__["a" /* TeacherdashboardPage */]);
            if (resp.usertype == 'student')
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            if (resp.usertype == 'admin')
                null;
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.alertController.create({
                title: 'Error',
                message: err.error.message || 'An error occured while attempting to login',
                buttons: ['ok']
            }).present();
        });
    };
    LoginPage.prototype.loginAsAdmin = function () {
        var _this = this;
        if (!this.network.isOffline()) {
            var loader_1 = this.loadingCtrl.create({
                cssClass: "my-loading"
            });
            loader_1.present().then(function (_) {
                _this._authProvider.loginAsAdmin(_this.loginForm.value)
                    .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                loader_1.dismiss();
                                console.log('admin login ', response);
                                return [4 /*yield*/, this.session.newUser(__assign({}, response.data, { usertype: 'teacher' }))
                                    // check if admin is activated on the desktop
                                ];
                            case 1:
                                _a.sent();
                                // check if admin is activated on the desktop
                                if (this.session.isActivated())
                                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__teacherdashboard_teacherdashboard__["a" /* TeacherdashboardPage */]);
                                else
                                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__activationpage_activationpage__["a" /* ActivationPage */]);
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log('admin login error ', err);
                    loader_1.dismiss();
                    _this.handleAuthError(err);
                });
            });
        }
        else {
            this.showNoInternetConnection();
        }
    };
    LoginPage.prototype.registerUser = function () {
        var _this = this;
        if (!this.network.isOffline()) {
            var loader_2 = this.loadingCtrl.create({
                cssClass: "my-loading"
            });
            loader_2.present().then(function (_) {
                try {
                    _this._authProvider.signup(_this.registerUserBody.value)
                        .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('registered ', response);
                                    loader_2.dismiss();
                                    return [4 /*yield*/, this.session.newUser(__assign({}, response.data, { usertype: 'teacher' }))];
                                case 1:
                                    _a.sent();
                                    this.createLocalTeacherAccount(response.data);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (err) {
                        loader_2.dismiss();
                        console.log('registered error ', err);
                        _this.handleAuthError(err);
                    });
                }
                catch (e) {
                    console.log('login error ', e);
                }
            });
        }
        else {
            this.showNoInternetConnection();
        }
    };
    LoginPage.prototype.handleAuthError = function (err) {
        if (err.status === 0) {
            return this.showNoInternetConnection();
        }
        var errors = [];
        err.error.errors && (Object.entries(err.error.errors)
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return errors.push(key + ": " + value);
        }));
        var errorMessage = errors[0] || err.error.message;
        this.alertMessage(errorMessage || 'An unknown error occured');
    };
    LoginPage.prototype.createLocalTeacherAccount = function (adminData) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        loader.present()
            .then(function (_) {
            _this.desktopProvider.createTeacher(__assign({}, adminData, { password: _this.registerUserBody.controls.password.value }))
                .subscribe(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('user ', this.session.getUser());
                    console.log('teacher created ', resp);
                    loader.dismiss();
                    // await this.session.newUser(response.data);
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__activationpage_activationpage__["a" /* ActivationPage */]);
                    return [2 /*return*/];
                });
            }); }, function (err) {
                loader.dismiss();
                _this.alertMessage('An error occured while attempting to create Admin account');
                //   this.alertCtrl.create({
                //     title: 'Error',
                //     message: 'An error occured while attempting to create Admin account',
                //     buttons: ['ok']
                //   }).present();
                // }, () => {
            });
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        this.inappBrowser.openBrowser(__WEBPACK_IMPORTED_MODULE_10__config__["a" /* config */].forgotPassword);
    };
    LoginPage.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
        console.log('showpasword ', this.showPassword);
    };
    LoginPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    LoginPage.prototype.prev = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    LoginPage.prototype.alertMessage = function (message) {
        this.alertController
            .create({
            subTitle: "Opps, an error occured",
            message: message,
            buttons: ["ok"]
        })
            .present();
    };
    LoginPage.prototype.showNoInternetConnection = function () {
        this.toast
            .create({
            message: "No Internet Connection.",
            cssClass: "errorToast",
            duration: 3000
        })
            .present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("slides"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <ion-slides\n      pager="false"\n      #slides\n      (ionSlideDidChange)="onSliderChanged($event)"\n    >\n      <ion-slide>\n        <ion-card>\n          <ion-card-content padding>\n            <img src="assets/imgs/simbibot-blue.png" class="logo" alt="" />\n            <br />\n            <!-- <form\n              [formGroup]="loginForm"\n              (ngSubmit)="verifyEmailAddress()"\n              *ngIf="!showLogin"\n            >\n              <ion-item>\n                <ion-label class="email-label" stacked>\n                  <ion-icon name="ios-mail"></ion-icon>Email Address\n                </ion-label>\n                <ion-input\n                  type="email"\n                  aria-required="true"\n                  [(ngModel)]="email"\n                  formControlName="email"\n                  class="email-input"\n                  aria-placeholder="Enter your email"\n                ></ion-input>\n              </ion-item>\n              <br />\n              <button\n                *ngIf="!showLogin"\n                ion-button\n                class="global-btn login-btn"\n              >\n                Get started\n              </button>\n            </form> -->\n            <div [formGroup]="userTypeForm">\n              <ion-list radio-group formControlName="isStudent">\n                <ion-item>\n                  <ion-label>Login as a Student</ion-label>\n                  <ion-radio slot="start" value="true" checked></ion-radio>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>Login as Admin</ion-label>\n                  <ion-radio slot="start" value="false"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </div>\n            <br />\n            <br />\n            <form [formGroup]="loginForm" (ngSubmit)="loginUser()">\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-mail"></ion-icon>\n                  {{ userTypeForm.controls.isStudent.value == \'false\' ? \'Email\'\n                  : \'Student ID\' }}\n                </ion-label>\n                <ion-input\n                  type="text"\n                  aria-required="true"\n                  formControlName="email"\n                  class="email-input"\n                  aria-placeholder="Enter your student ID"\n                ></ion-input>\n              </ion-item>\n\n              <br />\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="key"></ion-icon>Password\n                </ion-label>\n                <ion-input\n                  type="password"\n                  aria-required="true"\n                  formControlName="password"\n                  *ngIf="!showPassword"\n                ></ion-input>\n                <ion-input\n                  type="text"\n                  aria-required="true"\n                  formControlName="password"\n                  *ngIf="showPassword"\n                ></ion-input>\n                <ion-label position="fixed" class="show-password">\n                  <ion-icon\n                    name="eye"\n                    *ngIf="showPassword"\n                    (click)="toggleShowPassword()"\n                  ></ion-icon>\n                  <ion-icon\n                    name="eye-off"\n                    *ngIf="!showPassword"\n                    (click)="toggleShowPassword()"\n                  ></ion-icon>\n                </ion-label>\n              </ion-item>\n              <br />\n              <!-- <div>\n                <button\n                  ion-button\n                  clear\n                  color="dark"\n                  (tap)="forgotPassword()"\n                  class="link-btn"\n                  text-center\n                >\n                  Forgot Password ?\n                </button>\n              </div> -->\n\n              <button ion-button type="submit" class="global-btn login-btn">\n                Login\n              </button>\n            </form>\n            <br />\n            <button\n              ion-button\n              clear\n              color="dark"\n              (tap)="next()"\n              class="link-btn"\n              text-center\n            >\n              Don\'t have an account yet? Click here to sign up.\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <ion-card-content padding>\n            <img src="assets/imgs/simbibot-blue.png" class="logo" alt="" />\n            <br />\n            <span\n            >Create an administrator account that will be used in managing all\n            operations on the platform. NOTE: Internet connection is needed to\n            signup your account!</span\n            >\n            <br />\n            <!-- Sign up form student details centric -->\n            <form [formGroup]="registerUserBody" (ngSubmit)="registerUser()">\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-person"></ion-icon>School Name\n                </ion-label>\n                <ion-input\n                  type="type"\n                  aria-required="true"\n                  formControlName="name"\n                ></ion-input>\n              </ion-item>\n              <!-- <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-person"></ion-icon>First Name\n                </ion-label>\n                <ion-input\n                  type="type"\n                  aria-required="true"\n                  formControlName="firstname"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-person"></ion-icon>Last Name\n                </ion-label>\n                <ion-input\n                  type="type"\n                  aria-required="true"\n                  formControlName="lastname"\n                ></ion-input>\n              </ion-item> -->\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-mail"></ion-icon>Email Address\n                </ion-label>\n                <ion-input\n                  type="email"\n                  aria-required="true"\n                  formControlName="email"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-call"></ion-icon>Phone Number\n                </ion-label>\n                <ion-input\n                  type="number"\n                  aria-required="true"\n                  formControlName="phone"\n                ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="ios-person"></ion-icon>Address\n                </ion-label>\n                <ion-input\n                  type="type"\n                  aria-required="true"\n                  formControlName="address"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>\n                  <ion-icon name="key"></ion-icon>Password\n                </ion-label>\n                <ion-input\n                  type="password"\n                  aria-required="true"\n                  formControlName="password"\n                  *ngIf="!showPassword"\n                ></ion-input>\n                <ion-input\n                  type="input"\n                  aria-required="true"\n                  formControlName="password"\n                  *ngIf="showPassword"\n                ></ion-input>\n                <ion-label position="fixed" class="show-password">\n                  <ion-icon\n                    name="eye"\n                    *ngIf="showPassword"\n                    (click)="toggleShowPassword()"\n                  ></ion-icon>\n                  <ion-icon\n                    name="eye-off"\n                    *ngIf="!showPassword"\n                    (click)="toggleShowPassword()"\n                  ></ion-icon>\n                </ion-label>\n              </ion-item>\n              <br />\n              <button\n                [disabled]="!registerUserBody.valid"\n                type="submit"\n                ion-button\n                class="global-btn login-btn"\n              >\n                Proceed\n              </button>\n            </form>\n            <!-- End Sign up form  tudent details centric-->\n            <br />\n            <button\n              ion-button\n              clear\n              color="dark"\n              (tap)="prev()"\n              class="link-btn"\n              text-center\n            >\n              Already have an account? Login.\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences_ngx__["a" /* AppPreferences */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_topic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examsubjects_examsubjects__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__postutme_postutme__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_session_session__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, session, loadingCtrl, events, desktopProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.desktopProvider = desktopProvider;
        this.toastCtrl = toastCtrl;
        this.user = this.session.getUser();
        this.fetchSubjects();
        this.fetchSuperExams();
    }
    HomePage.prototype.fetchSubjects = function () {
        var _this = this;
        this.desktopProvider.fetchSubjects().subscribe(function (response) {
            _this.subjects = response;
            _this.loaded = Promise.resolve(true);
        }, function (err) {
            _this.toastCtrl.create({
                message: 'An error occured'
            }).present();
        });
    };
    HomePage.prototype.fetchSuperExams = function () {
        var _this = this;
        this.desktopProvider.fetchSuperExam().subscribe(function (response) {
            _this.exams = response.filter(function (val) {
                if (val.show == 1) {
                    return val;
                }
            });
            _this.examLoaded = Promise.resolve(true);
        }, function (err) {
            _this.toastCtrl.create({
                message: 'An error occured'
            }).present();
        });
    };
    HomePage.prototype.getExamLogo = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].exams.find(function (exam) { return exam.name == name.toLowerCase(); })['image_url'];
    };
    HomePage.prototype.gotoTopicPage = function (i, subjectFiltered) {
        var subject = subjectFiltered;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_topic__["a" /* TopicPage */], {
            subject: subject,
            questionType: "practice"
        }, {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    HomePage.prototype.gotoSubjects = function (exam) {
        if (exam.has_subexam == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__examsubjects_examsubjects__["a" /* ExamsubjectsPage */], {
                exam: exam
            }, {
                animate: true,
                animation: "transition-ios",
                direction: "forward"
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__postutme_postutme__["a" /* PostutmePage */], { exam: exam }, {
                animate: true,
                animation: "transition-ios",
                direction: "forward"
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/home/home.html"*/'<ion-header>\n  <div class="bg-head">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="brown"></ion-icon>\n      </button>\n      <ion-title text-center\n        ><img src="assets/imgs/simbibot-blue.png" alt=""\n      /></ion-title>\n    </ion-navbar>\n    <div class="cont">\n      <ion-searchbar [(ngModel)]="searchInput" class="search-bar"></ion-searchbar>\n      <p class="learn-more"><strong> To learn more from the comfort of your mobile device anywhere you are, simply search for SimbiBot on playstore and install.</strong></p>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content overflow-scroll = "true">\n  <!-- <ion-card\n    (click)="gotoSubjects()"\n    [ngStyle]="{ \'background-color\': config.background_color }"\n    class="banner-card"\n  >\n    <ion-row>\n      <ion-col col-6>\n        <img [src]="config.logo_dir" class="logo" alt="" />\n      </ion-col>\n      <ion-col col-6>\n        <br />\n        <h3 [ngStyle]="{ color: config.text_color }">Prepare for</h3>\n        <h1 [ngStyle]="{ color: config.text_color }">\n          {{ config.version_name | titlecase }}\n        </h1>\n        <p [ngStyle]="{ color: config.text_color }">Click Here</p>\n      </ion-col>\n    </ion-row>\n  </ion-card> -->\n  <div *ngIf="loaded && examLoaded" class="cont">\n    <h1 class="greeting-text">Welcome {{user.firstname | titlecase}}</h1>\n    <br />\n    <br />\n    <h2>Practice Exams</h2>\n    <ion-row>\n      <ion-col col-3 *ngFor="let exam of exams">\n        <ion-card (click)="gotoSubjects(exam)" >\n          <ion-card-content>\n            <img\n                  class="center img"\n                  [src]="getExamLogo(exam.name)"\n                  alt=""\n                  *ngIf="getExamLogo(exam.name)"\n                />\n            <p>\n              \n              <strong> {{ exam.name }} </strong>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <h2 >Learn any topic</h2>\n    <ion-row class="animated fadeInUp">\n      <ion-col\n        *ngFor="\n          let subject of subjects | searchFilter: searchInput;\n          let i = index\n        "\n        col-3\n      >\n        <div>\n          <ion-card (click)="gotoTopicPage(i, subject)">\n            <ion-card-content>\n              <ion-card-title>\n                <img\n                  class="center img"\n                  [src]="subject.image_url"\n                  alt=""\n                  *ngIf="subject.image_url != null"\n                />\n                <p\n                  [ngStyle]="{ \'background-color\': subject.color }"\n                  class="p-bg"\n                  *ngIf="subject.image_url == null"\n                ></p>\n              </ion-card-title>\n              <p\n                class="center line"\n                [ngStyle]="{ \'border-bottom-color\': subject.color }"\n              ></p>\n              <p>\n                <strong> {{ subject.name }} </strong>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- <div class="subject-card" *ngFor="let subject of subjects | searchFilter : searchInput; let i = index; " [ngStyle]="{\'background-color\' : subject.color}" (tap)="gotoTopicPage(i)">\n      <ion-row>\n        <ion-col col-4>\n        <img [src]="subject.image_url" class="img-center" alt="" [ngClass]="i == 1 ? \'.move_img_left\' : \'\'">\n        </ion-col>\n        <ion-col col-8>\n          <h3>{{subject.name}}</h3>\n        </ion-col>\n      </ion-row>\n        <h3> </h3> -->\n    <!-- </div> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_desktop_desktop__["a" /* DesktopProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentresultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studentreportdetails_studentreportdetails__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StudentresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentresultsPage = /** @class */ (function () {
    function StudentresultsPage(navCtrl, navParams, desktopProvider, sessionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desktopProvider = desktopProvider;
        this.sessionProvider = sessionProvider;
        this.type = "evals";
    }
    StudentresultsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('view user ', this.navParams.get('user'));
        var user;
        if (this.navParams.get('user')) {
            user = this.navParams.get('user');
        }
        else {
            var u = this.sessionProvider.getUser();
            user = u.id;
        }
        console.log(user);
        this.desktopProvider.fetchExaminationAverage(user).subscribe(function (response) {
            // console.log(response);
            _this.exams = response;
        });
        this.desktopProvider.fetchEvaluationAverage(user).subscribe(function (response) {
            console.log(response);
            _this.evals = response;
        });
    };
    StudentresultsPage.prototype.viewPerfomances = function (type, i) {
        var body;
        if (type == 'exams') {
            body = this.exams[i];
        }
        if (type == 'evals') {
            body = this.evals[i];
        }
        ;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__studentreportdetails_studentreportdetails__["a" /* StudentreportdetailsPage */], {
            type: type,
            body: body
        });
    };
    StudentresultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentresults',template:/*ion-inline-start:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/studentresults/studentresults.html"*/'<!--\n  Generated template for the StudentresultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="brown"></ion-icon>\n    </button>\n    <ion-title text-center>Student Results</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont">\n    <div padding>\n      <ion-segment [(ngModel)]="type">\n      <ion-segment-button  value="evals">\n        Evaluations Report\n      </ion-segment-button>\n\n        <ion-segment-button value="exams">\n          Examinations Report\n        </ion-segment-button>\n       \n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="type">\n      <div *ngSwitchCase="\'evals\'">\n        \n        <ion-card>\n          <ion-card-content padding>\n            <div class="table-responsive">\n              <table class="table table-bordered">\n                <thead>\n                  <tr>\n                    <th  scope="col">#</th>\n                    <th scope="col">Topic</th>\n                    <th scope="col">Subject</th>\n                    <th scope="col">Attempts</th>\n                    <th scope="col">Avg Score</th>\n                    <th scope="col"></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor="let eval of evals; let i = index">\n                    <td></td>\n                    <td>{{eval.topic}}</td>\n                    <td>{{eval.name}}</td>\n                    <td>{{eval.attempts}}</td>\n                    <td>{{eval.aggregate_score | number}}</td>\n                    <td>\n                      <button ion-button round (click)="viewPerfomances(\'evals\', i)">View All Performances</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <div *ngSwitchCase="\'exams\'">\n        <ion-card>\n          <ion-card-content>\n            <div class="table-responsive">\n              <table class="table table-bordered">\n                <thead>\n                  <tr>\n                    <th  scope="col">#</th>\n                    <th scope="col">Exam</th>\n                    <th scope="col">Subject</th>\n                    <th scope="col">Attempts</th>\n                    <th scope="col">Avg Score</th>\n                    <th scope="col">Recommended Topic</th>\n                    <th scope="col"></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor="let exam of exams; let i = index;">\n                    <td></td>\n                    <td>{{exam.similar_name}}</td>\n                    <td>{{exam.name}}</td>\n                    <td>{{exam.attempts}}</td>\n                    <td>{{exam.aggregate_score | number}}</td>\n                    <td>{{exam.topic}}</td>\n                    <td>\n                      <button ion-button round (click)="viewPerfomances(\'exams\', i)">View All Performances</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shadrach/Documents/Brimatel/simbibotdesktopbackend/frontend/src/pages/studentresults/studentresults.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_desktop_desktop__["a" /* DesktopProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */]])
    ], StudentresultsPage);
    return StudentresultsPage;
}());

//# sourceMappingURL=studentresults.js.map

/***/ })

},[551]);
//# sourceMappingURL=main.js.map