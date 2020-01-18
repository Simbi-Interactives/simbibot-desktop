webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsubjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__ = __webpack_require__(69);
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
    function ExamsubjectsPage(navCtrl, navParams, offlineProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.loadingCtrl = loadingCtrl;
        this.config = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */];
        this.fetchExamSubject();
    }
    ExamsubjectsPage.prototype.ionViewDidLoad = function () { };
    ExamsubjectsPage.prototype.fetchExamSubject = function () {
        var _this = this;
        this.offlineProvider
            .fetchSuperExamByID(this.config.super_exam_id)
            .then(function (data) {
            console.log(data);
            _this.subjects = JSON.parse(data.subjects_list);
            _this.loaded = Promise.resolve(true);
        });
    };
    ExamsubjectsPage.prototype.proceedToQuiz = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        this.offlineProvider
            .fetchQuestionFromExamList(this.selectedSubject.id, this.config.super_exam_id)
            .then(function (data) {
            _this.offlineProvider
                .fetchQuestionFromExamListCount(_this.selectedSubject.id, _this.config.super_exam_id).then(function (count) {
                loader.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */], {
                    subject: _this.selectedSubject,
                    test_type: 2,
                    questions: data,
                    questionType: "normal",
                    count: count
                });
            });
        });
    };
    ExamsubjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-examsubjects",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\examsubjects\examsubjects.html"*/'<!--\n\n  Generated template for the PostutmesubjectsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" color="brown"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ name | titlecase }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="center-page">\n\n    <h3>Select Subject</h3>\n\n\n\n    <ion-item>\n\n      <ion-select interface="popover" [(ngModel)]="selectedSubject">\n\n        <ion-option [value]="subject" *ngFor="let subject of subjects">{{\n\n          subject.name | titlecase\n\n        }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <br />\n\n    <button\n\n      [disabled]="selectedSubject == null"\n\n      class="global-btn"\n\n      ion-button\n\n      full\n\n      (click)="proceedToQuiz()"\n\n    >\n\n      Proceed\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\examsubjects\examsubjects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ExamsubjectsPage);
    return ExamsubjectsPage;
}());

//# sourceMappingURL=examsubjects.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(42);
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
    AuthProvider.prototype.login = function (email, password) {
        var device_id = this.device.uuid;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "auth/login?source=mobile&device_id=" + device_id, {
            email: email,
            password: password
        });
    };
    AuthProvider.prototype.signup = function (body) {
        var device_id = this.device.uuid;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */].base_url + "auth/register?source=mobile&device_id=" + device_id, __assign({}, body));
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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(69);
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
 * Generated class for the QuizresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizresultPage = /** @class */ (function () {
    function QuizresultPage(navCtrl, navParams, offlineProvider, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.alertController = alertController;
        this.result = {};
        this.evaluation = {};
        this.hideEvaluation = true;
        this.topicLoaded = false;
        this.result = this.navParams.get("result");
        this.evaluation = this.navParams.get("evaluation");
        this.questionType = this.navParams.get("questionType");
        this.subject = this.navParams.get("subject");
        this.loaded = Promise.resolve(true);
    }
    QuizresultPage.prototype.ionViewDidLoad = function () {
        var counts = {};
        var compare = 0;
        for (var i = 0; i < this.result.questions.length; i++) {
            var question_correct = this.result.questions[i].correct;
            var topic_id = this.result.questions[i].topic_id;
            console.log(question_correct, topic_id);
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
                    if (this.questionType == "normal") {
                        this.finalEvaluation();
                    }
                }
            }
        }
    };
    QuizresultPage.prototype.finalEvaluation = function () {
        var _this = this;
        this.offlineProvider.fetchTopicByID(this.mostFrequentTopic).then(function (topic) {
            _this.frequentTopic = topic;
            _this.topicLoaded = true;
        });
    };
    QuizresultPage.prototype.learnMore = function () {
        var _this = this;
        this.offlineProvider
            .fetchQuestionForEvalutation(this.mostFrequentTopic)
            .then(function (questions) {
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
    QuizresultPage.prototype.rateUs = function () {
        var alert = this.alertController.create({
            title: "Do you love simbibot?",
            buttons: [
                {
                    text: "No",
                    cssClass: "buttonAlert",
                    handler: function (data) {
                        window.open("mailto:az.brimatel@gmail.com", "_system");
                    }
                },
                {
                    text: "Yes",
                    cssClass: "buttonAlert",
                    handler: function (data) {
                        window.open("https://play.google.com/store/apps/details?id=app.simbibotv2.com&hl=en_US", "_system");
                    }
                }
            ]
        });
        alert.present();
    };
    QuizresultPage.prototype.contactUs = function () {
        window.open("mailto:talktosimbibot@gmail.com", "_system");
    };
    QuizresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-quizresult",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\quizresult\quizresult.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Result</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="loaded | async">\n\n  <h4>Score : {{ result.score }} / {{ result.total }}</h4>\n\n  <h4>Total Percentage : {{ result.percentage + "%" }}</h4>\n\n  <br />\n\n  <ion-list\n\n    no-lines\n\n    class="questions"\n\n    [approxItemHeight]="\'400px\'"\n\n    [virtualScroll]="result.questions"\n\n  >\n\n    <ion-card *virtualItem="let question; let i = index">\n\n      <ion-card-content>\n\n        <h3>\n\n          <strong\n\n            >Question&nbsp;&nbsp;{{ i + 1 + "/" + result.questions?.length\n\n            }}</strong\n\n          >\n\n          <span float-right\n\n            ><ion-icon\n\n              *ngIf="question.correct == \'yes\'"\n\n              style="color:#01c22e; padding-right: 10px"\n\n              name="checkmark"\n\n            ></ion-icon\n\n            ><ion-icon\n\n              *ngIf="question.correct == \'no\'"\n\n              style="color:#ff0000; padding-right: 10px"\n\n              name="close"\n\n            ></ion-icon\n\n          ></span>\n\n        </h3>\n\n        <br />\n\n        <p class="question" [innerHTML]="question.question"></p>\n\n        <br />\n\n        <div class="answer">\n\n          <div *ngIf="question.chosen?.length > 0">\n\n            <h3 *ngIf="question.correct == \'no\'" style="color:#FF0000;">\n\n              <strong\n\n                >Your Answer :\n\n                <span [innerHTML]="question.chosen[0].option_text"></span>\n\n              </strong>\n\n            </h3>\n\n            <h3 *ngIf="question.correct == \'yes\'" style="color:#01c22e;">\n\n              <strong\n\n                >Your Answer : <span [innerHTML]="question.chosen"></span\n\n              ></strong>\n\n            </h3>\n\n          </div>\n\n          <br />\n\n          <h3 style="color:#01c22e;">\n\n            <strong\n\n              >Correct Answer :\n\n              <span [innerHTML]>{{ question.answer }}</span></strong\n\n            >\n\n          </h3>\n\n          <br />\n\n          <h3><strong>Explanation</strong></h3>\n\n          <p [innerHTML]="question.explanation"></p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-card *ngIf="questionType == \'normal\' && topicLoaded == true">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6><strong>Recommendation.</strong></h6>\n\n          <br />\n\n          <p>\n\n            After grading your test, I noticed that you are weak in {{\n\n            frequentTopic.topic }}, let\'s learn more on this topic, shall we?\n\n          </p>\n\n          <br />\n\n          <button ion-button full (click)="learnMore()">\n\n            Let\'s learn more\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button full (click)="contactUs()">Complaint</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button full (click)="rateUs()">\n\n              Rate Us &nbsp;<ion-icon name="star"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <!--*ngIf = "questionType !== \'practice\'"-->\n\n      <!--</ion-content>-->\n\n    </ion-card></ion-card\n\n  >\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\quizresult\quizresult.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuizresultPage);
    return QuizresultPage;
}());

//# sourceMappingURL=quizresult.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_subscription_subscription__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inappbrowser_inappbrowser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paywithcard_paywithcard__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(24);
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
            selector: "page-subscription",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\subscription\subscription.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="!hasExpired">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ pageTitle }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <br />\n\n  <div class="mid">\n\n    <ion-card *ngIf="hasExpired && showCard == \'notshared\'">\n\n      <ion-card-content>\n\n        <p class="grey-text" text-center *ngIf="loaded">\n\n          Dear {{ user.firstname | titlecase }},\n\n        </p>\n\n        <h3 text-center>\n\n          Your trial mode has expired, but you can still continue to learn with\n\n          me by sharing about me to your friends.\n\n        </h3>\n\n        <hr />\n\n        <button ion-button round full (click)="share()">\n\n          Share to friends\n\n        </button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="!hasExpired">\n\n      <ion-card-content>\n\n        <h3 text-center>\n\n          By activating your SimbiBot app, you get instant unlimited access for\n\n          the next one year.\n\n        </h3>\n\n        <button ion-button round full (click)="subscribe()">\n\n          Pay Online With ATM Card\n\n        </button>\n\n        <h3 text-center>\n\n          Make payment to the account details below to activate your app.\n\n        </h3>\n\n        <button ion-button round full (click)="openPaywithcardInfo()">\n\n          Bank Payment/Transfer\n\n        </button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="hasExpired && showCard == \'shared\'">\n\n      <ion-card-content>\n\n        <p class="grey-text" text-center *ngIf="loaded">\n\n          Dear {{ user.firstname | titlecase }},\n\n        </p>\n\n        <h3 text-center>\n\n          Sorry to interrupt you, your trial mode has expired. You can continue\n\n          to learn with me by paying a one-time activation fee of N1,000. Click\n\n          the button below to activate\n\n        </h3>\n\n        <hr />\n\n        <p></p>\n\n\n\n        <br />\n\n        <button ion-button round full (click)="subscribe()">Activate</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\subscription\subscription.html"*/
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

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/examsubjects/examsubjects.module": [
		221
	],
	"../pages/login/login.module": [
		323
	],
	"../pages/onboarding/onboarding.module": [
		332
	],
	"../pages/paywithcard/paywithcard.module": [
		333
	],
	"../pages/quiz/quiz.module": [
		335
	],
	"../pages/quizresult/quizresult.module": [
		336
	],
	"../pages/register/register.module": [
		337
	],
	"../pages/subscription/subscription.module": [
		338
	],
	"../pages/topic/topic.module": [
		339
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
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsubjectsPageModule", function() { return ExamsubjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examsubjects__ = __webpack_require__(124);
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

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    base_url: "https://learn.simbibot.com/api/",
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
    version: '1.0.1',
    db_name: 'data.db'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(324);
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_preferences_ngx__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_subscription_subscription__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_session_session__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_inappbrowser_inappbrowser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(24);
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
    function LoginPage(navCtrl, navParams, _authProvider, loadingCtrl, formBuilder, network, toast, alertController, session, menuController, storage, inappBrowser, subscription, device, events, appPreferences) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._authProvider = _authProvider;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.network = network;
        this.toast = toast;
        this.alertController = alertController;
        this.session = session;
        this.menuController = menuController;
        this.storage = storage;
        this.inappBrowser = inappBrowser;
        this.subscription = subscription;
        this.device = device;
        this.events = events;
        this.appPreferences = appPreferences;
        this.currentMessage = "Can I get your email?";
        this.registerUserBody = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]],
            firstname: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            lastname: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            phone: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(11)]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        this.menuController.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        // set last updated time to now
        this.storage.set('last_updated_time', new Date().toISOString());
        // console.log(this.appPreferences)
        // this.appPreferences.fetch('referrer').then((res) => { console.log('referrer ', res); });
    };
    LoginPage.prototype.forgotPassword = function () {
        console.log('forgot password');
        // window.open(config.forgotPassword, "_blank")
        this.inappBrowser.openBrowser(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* config */].forgotPassword);
    };
    LoginPage.prototype.verifyEmailAddress = function () {
        var _this = this;
        // skip all actions if user has not entered their email
        if (!this.email || this.email.lenght === 0)
            return;
        var loader = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        loader.present();
        this._authProvider.checkEmail(this.email).subscribe(function (response) {
            if (response.message == true) {
                _this.user = response.user;
                _this.currentMessage = "Welcome back, " + response.user.firstname;
                _this.showLogin = true;
                loader.dismiss();
            }
            else {
                _this.registerUserBody.controls.email.setValue(_this.email);
                _this.next();
                loader.dismiss();
            }
        }, function (err) {
            console.log(err);
            loader.dismiss();
        });
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.network.isOffline()) {
            var loader_1 = this.loadingCtrl.create({
                cssClass: "my-loading"
            });
            loader_1.present();
            this._authProvider.login(this.email, this.password).subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var device_id;
                return __generator(this, function (_a) {
                    this.session.newUser(response.user);
                    device_id = this.device.uuid;
                    console.log('device id ', device_id);
                    this.subscription.checkIfUserHasSubscribed(device_id).then(function (resp) {
                        resp.subscribe(function (response) {
                            loader_1.dismiss();
                            _this.storage.set("subscribed", true);
                            _this.storage.set("expiry_date", new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], null, {
                                animate: true,
                                animation: "transition-ios",
                                direction: "forward"
                            });
                            console.log('user has subscribed published');
                            _this.events.publish('user_subscribed');
                        }, function (err) {
                            console.log('user has not subscribed');
                        });
                    });
                    loader_1.dismiss();
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], null, {
                        animate: true,
                        animation: "transition-ios",
                        direction: "forward"
                    });
                    return [2 /*return*/];
                });
            }); }, function (err) {
                _this.alertMessage(err.error.message);
                loader_1.dismiss();
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
            loader_2.present();
            this._authProvider.signup(this.registerUserBody.value).subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.session.newUser(response.user)];
                        case 1:
                            _a.sent();
                            loader_2.dismiss();
                            // const date = new Date();
                            // date.setDate(date.getMinutes() + 3)
                            // console.log(date.getUTCDate())
                            // await this.storage.set("expiry_date", date);
                            console.log(this.storage.get('user'));
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], null, {
                                animate: true,
                                animation: "transition-ios",
                                direction: "forward"
                            });
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                _this.alertMessage(err.error.message);
                loader_2.dismiss();
            });
        }
        else {
            this.showNoInternetConnection();
        }
    };
    LoginPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
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
    LoginPage.prototype.alertMessage = function (message) {
        this.alertController
            .create({
            subTitle: "Opps, an error occured",
            message: message,
            buttons: ["ok"]
        })
            .present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("slides"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-slides pager="false" #slides>\n\n    <ion-slide>\n\n      <img src="assets/imgs/simbibot-blue.png" class="logo" alt="" />\n\n      <br />\n\n      <h3 text-center>{{currentMessage}}</h3>\n\n      <p *ngIf="showLogin">Please enter your password to log In.</p>\n\n      <ion-item>\n\n        <ion-label stacked>\n\n          <ion-icon name="ios-mail"></ion-icon>Email Address\n\n        </ion-label>\n\n        <ion-input\n\n          type="email"\n\n          aria-required="true"\n\n          [(ngModel)]="email"\n\n        ></ion-input>\n\n      </ion-item>\n\n      <br />\n\n      <ion-item *ngIf="showLogin">\n\n        <ion-label stacked>\n\n          <ion-icon name="key"></ion-icon>Password\n\n        </ion-label>\n\n        <ion-input\n\n          type="password"\n\n          aria-required="true"\n\n          [(ngModel)]="password"\n\n        ></ion-input>\n\n      </ion-item>\n\n      <br />\n\n      <div *ngIf="showLogin">\n\n        <button\n\n          ion-button\n\n          clear\n\n          color="dark"\n\n          (tap)="forgotPassword()"\n\n          class="forgot-btn"\n\n          text-center\n\n        >\n\n          Forgot Password ?\n\n        </button>\n\n      </div>\n\n      <br />\n\n      <button\n\n        *ngIf="!showLogin"\n\n        ion-button\n\n        class="global-btn"\n\n        (click)="verifyEmailAddress()"\n\n      >\n\n        Get Started\n\n      </button>\n\n      <button\n\n        *ngIf="showLogin"\n\n        ion-button\n\n        class="global-btn"\n\n        (click)="loginUser()"\n\n      >\n\n        Login\n\n      </button>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/imgs/simbibot-blue.png" class="logo" alt="" />\n\n      <br />\n\n      <h3>Welcome, Friend</h3>\n\n      <p>Let me get to know you better</p>\n\n      <form [formGroup]="registerUserBody" (ngSubmit)="registerUser()">\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            <ion-icon name="ios-mail"></ion-icon>Email Address\n\n          </ion-label>\n\n          <ion-input\n\n            type="email"\n\n            aria-required="true"\n\n            formControlName="email"\n\n          ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            <ion-icon name="ios-person"></ion-icon>First Name\n\n          </ion-label>\n\n          <ion-input\n\n            type="type"\n\n            aria-required="true"\n\n            formControlName="firstname"\n\n          ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            <ion-icon name="ios-person"></ion-icon>Last Name\n\n          </ion-label>\n\n          <ion-input\n\n            type="type"\n\n            aria-required="true"\n\n            formControlName="lastname"\n\n          ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            <ion-icon name="ios-call"></ion-icon>Phone Number\n\n          </ion-label>\n\n          <ion-input\n\n            type="number"\n\n            aria-required="true"\n\n            formControlName="phone"\n\n          ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            <ion-icon name="key"></ion-icon>Password\n\n          </ion-label>\n\n          <ion-input\n\n            type="password"\n\n            aria-required="true"\n\n            formControlName="password"\n\n          ></ion-input>\n\n        </ion-item>\n\n        <br />\n\n        <button\n\n          [disabled]="!registerUserBody.valid"\n\n          type="submit"\n\n          ion-button\n\n          class="global-btn"\n\n        >\n\n          Proceed\n\n        </button>\n\n      </form>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_preferences_ngx__["a" /* AppPreferences */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onboarding_onboarding__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__ = __webpack_require__(69);
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
    function TopicPage(navCtrl, navParams, offlineProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offlineProvider = offlineProvider;
        this.modalCtrl = modalCtrl;
        this.topics = [];
        this.subject = this.navParams.get("subject");
        this.questionType = this.navParams.get("questionType");
        this.fetchTopics(this.subject.id);
    }
    TopicPage.prototype.ionViewDidLoad = function () { };
    TopicPage.prototype.fetchTopics = function (id) {
        var _this = this;
        this.offlineProvider.fetchTopics(id).then(function (data) {
            _this.topics = data;
            _this.loaded = Promise.resolve(true);
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
            }
        });
    };
    TopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-topic",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\topic\topic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="brown">{{ subject.name | titlecase }}</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-searchbar [(ngModel)]="searchInput" class="search-bar"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="pad"></div>\n\n  <h6><strong>Topics</strong></h6>\n\n  <ion-list *ngIf="loaded">\n\n    <button\n\n      ion-item\n\n      *ngFor="let topic of topics | searchFilter: searchInput; let i = index"\n\n      (click)="openTopicInfo(i)"\n\n      class="animated pulse"\n\n    >\n\n      <div class="topic-obj">\n\n        <img\n\n          class="img-center"\n\n          [src]="subject.image_url"\n\n          alt=""\n\n          *ngIf="subject.image_url != null"\n\n        />\n\n        <h6>\n\n          <strong> {{ topic.topic | titlecase }} </strong>\n\n        </h6>\n\n      </div>\n\n      <ion-icon\n\n        item-end\n\n        name="ios-arrow-forward"\n\n        [ngStyle]="{ color: subject.color }"\n\n      ></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\topic\topic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], TopicPage);
    return TopicPage;
}());

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams, viewController, offlineProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.offlineProvider = offlineProvider;
        this.topic = this.navParams.get("topic");
        this.subject = this.navParams.get("subject");
        this.fetchQuestion(this.topic.id);
    }
    OnboardingPage.prototype.ionViewDidLoad = function () { };
    OnboardingPage.prototype.fetchQuestion = function (topic_id) {
        var _this = this;
        this.offlineProvider.fetchQuestionForEvalutation(topic_id).then(function (data) {
            console.log(data);
            _this.questions = data;
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
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-onboarding",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\onboarding\onboarding.html"*/'<ion-content padding>\n\n  <div class="bg-text">\n\n    <h3 text-center>\n\n      Welcome to learning with simbi\n\n    </h3>\n\n    <div class="p-bg">\n\n      <p>\n\n        I am going to be using the Maieutic learning style to help you\n\n        understand\n\n        {{ topic.topic | titlecase }}.\n\n      </p>\n\n      <p>\n\n        Our learning method is going to be in form of me asking you questions on\n\n        {{ topic.topic | titlecase }} and allowing you two trials to make a\n\n        correct attempt.\n\n      </p>\n\n      <!-- <p>\n\n              While learning, take your time before attempting each question, as this is\n\n              not a test. It is OK to get it wrong. A detailed explanation will be\n\n              provided to you before proceeding to the next question. After completing\n\n              the learning stage, you can proceed to take a test on the topic to assess\n\n              your understanding of the topic.\n\n            </p> -->\n\n    </div>\n\n\n\n    <ion-spinner *ngIf="!loaded" class="spinner" color="brown"></ion-spinner>\n\n  </div>\n\n</ion-content>\n\n<ion-footer padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button\n\n        [disabled]="!loaded"\n\n        class="global-btn"\n\n        ion-button\n\n        color="brown"\n\n        (click)="takeTest(0)"\n\n      >\n\n        Start Learning\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button\n\n        [disabled]="!loaded"\n\n        class="global-btn"\n\n        ion-button\n\n        color="brown"\n\n        (click)="takeTest(1)"\n\n      >\n\n        Take Evaluation\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\onboarding\onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offline_offline__["a" /* OfflineProvider */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(23);
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
        console.log('set  user: ', data);
        this.storage.set("user", data);
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(326);
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithCardPageModule", function() { return PaywithCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paywithcard__ = __webpack_require__(334);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaywithCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_subscription_subscription__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(42);
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
            selector: "page-paywithcard",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\paywithcard\paywithcard.html"*/'<ion-content padding>\n\n  <div class="bg-text">\n\n    <h3 text-center>\n\n      Activation fee: N1,000\n\n    </h3>\n\n    <div class="p-bg">\n\n      <p>\n\n        By activating your SimbiBot app, you get instant unlimited access for\n\n        the next one year.\n\n      </p>\n\n      <p>\n\n        Account number: 1022130195\n\n      </p>\n\n      <p>Account name: Simbi Interactives</p>\n\n      <p>Bank name : UBA Account type: Current</p>\n\n      <p>\n\n        What to do after payment? Send an SMS or Whatsapp message to SimbiBot\n\n        via 09066450210 The message should contain your Name, the bank you paid\n\n        with, and depositor\'s name (or account name if you did transfer)\n\n      </p>\n\n      <p>\n\n        Once this information is received, your app will be activated shortly.\n\n      </p>\n\n      <p>\n\n        You can click the button below at any time to check if your app has been\n\n        activated\n\n      </p>\n\n      <button\n\n        ion-button\n\n        round\n\n        full\n\n        (click)="checkSubscriptionStatus()"\n\n        class="activation-btn"\n\n      >\n\n        Check activation status\n\n        <ion-spinner\n\n          name="crescent"\n\n          class="btn-spinner"\n\n          *ngIf="isLoading"\n\n        ></ion-spinner>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button class="global-btn" ion-button color="brown">\n\n        Close\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\paywithcard\paywithcard.html"*/
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageModule", function() { return QuizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(69);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizresultPageModule", function() { return QuizresultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizresult__ = __webpack_require__(142);
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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(700);
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

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription__ = __webpack_require__(143);
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageModule", function() { return TopicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(340);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(701);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_zip__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_db_copy__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(24);
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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(144);
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
            selector: "page-about",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\about\about.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center class="about-title">\n\n        About SimbiBot\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img\n\n    src="../../assets/imgs/simbi-girl.png"\n\n    alt="simbi"\n\n    class="simbi-girl img-center"\n\n  />\n\n  <div class="about-content">\n\n    <div class="about-text">\n\n      <p>\n\n        SimbiBot is a learning partner that helps you learn, master and evaluate\n\n        yourself in any topic across all subjects.\n\n      </p>\n\n      <p>\n\n        SimbiBot also helps you prepare to pass and excel in your exams (such as\n\n        Common Entrance, BECE, WAEC, NECO, UTME and PUTME).\n\n      </p>\n\n      <p>\n\n        SimbiBot is available on web (www.simbibot.com) and mobile app stores.\n\n      </p>\n\n      <p>For more info contact us: care@simbibot.com Tel:09066450210</p>\n\n      <div class="social-icons">\n\n        <a\n\n          href="https://twitter.com/SimbiBot"\n\n          target="_blank"\n\n          rel="no_referer"\n\n          class="twitter-icon"\n\n        ></a>\n\n        <a\n\n          href="https://instagram.com/simbibot/"\n\n          target="_blank"\n\n          rel="no_referer"\n\n          class="instagram-icon"\n\n        ></a>\n\n        <a\n\n          href="https://www.facebook.com/simbibot/"\n\n          target="_blank"\n\n          rel="no_referer"\n\n          class="facebook-icon"\n\n        ></a>\n\n      </div>\n\n      <button class="share-btn" (click)="share()">Share</button>\n\n      <p>Version {{ config.version }}</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(24);
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
            selector: "page-storybook",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\storybook\storybook.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center class="about-title">\n\n        {{config.storybook}}\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <ion-slides\n\n      pager="pager"\n\n      #myslides\n\n      (ionSlideWillChange)="onSlideChanged($event)"\n\n      (ionSlideDidChange)="slideChanged()"\n\n    >\n\n      <ion-slide>\n\n        <div class="pad"></div>\n\n        <img\n\n          src="../../assets/imgs/sweet-sixteen.jpg"\n\n          alt="simbi"\n\n          class="simbi-girl img-center"\n\n        />\n\n        <h6 class="summary-heading">\n\n          <strong>SUMMARY OF JAMB SWEET SIXTEEN by Bolaji Abdullahi</strong>\n\n        </h6>\n\n        <ion-list>\n\n          <button ion-item (click)="openFirst()" class="animated pulse">\n\n            <div class="topic-obj">\n\n              <h6>\n\n                <strong>\n\n                  {{ storybook.introduction.title | titlecase }}\n\n                </strong>\n\n              </h6>\n\n            </div>\n\n            <ion-icon\n\n              item-end\n\n              name="ios-arrow-forward"\n\n              [ngStyle]="{ color: blue }"\n\n            ></ion-icon>\n\n          </button>\n\n          <button\n\n            ion-item\n\n            *ngFor="let chapter of storybook.chapters; let i = index"\n\n            (click)="openChapter(i)"\n\n            class="animated pulse"\n\n          >\n\n            <div class="topic-obj">\n\n              <h6>\n\n                <strong> {{ chapter.title | titlecase }} </strong>\n\n              </h6>\n\n            </div>\n\n            <ion-icon\n\n              item-end\n\n              name="ios-arrow-forward"\n\n              [ngStyle]="{ color: blue }"\n\n            ></ion-icon>\n\n          </button>\n\n          <button ion-item (click)="openLast()" class="animated pulse">\n\n            <div class="topic-obj">\n\n              <h6>\n\n                <strong>\n\n                  {{ storybook.practice.title | titlecase }}\n\n                </strong>\n\n              </h6>\n\n            </div>\n\n            <ion-icon\n\n              item-end\n\n              name="ios-arrow-forward"\n\n              [ngStyle]="{ color: blue }"\n\n            ></ion-icon>\n\n          </button>\n\n        </ion-list>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <h1>{{storybook.introduction.title}}</h1>\n\n        <div\n\n          *ngIf="currentIndex == 1"\n\n          class="chapter-summary"\n\n          [innerHTML]="storybook.introduction.summary"\n\n        ></div>\n\n      </ion-slide>\n\n      <ion-slide *ngFor="let chapter of storybook.chapters; let i = index">\n\n        <div class="summary-container">\n\n          <h1>{{chapter.title}}</h1>\n\n          <div class="chapter-summary" [innerHTML]="chapter.summary"></div>\n\n          <!-- <button class="share-btn back-btn" (click)="goBack()">Prev</button> -->\n\n          <!-- <button class="share-btn back-btn" (click)="slideNext()">Next</button> -->\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div class="summary-container">\n\n          <h1>{{storybook.practice.title}}</h1>\n\n          <div>\n\n            <ion-card\n\n              *ngFor="let question of storybook.questions; let i = index"\n\n            >\n\n              <ion-card-content>\n\n                <br />\n\n                <p\n\n                  class="question practice-question"\n\n                  [innerHTML]="question.question"\n\n                ></p>\n\n                <br />\n\n                <div class="answer chapter-practice">\n\n                  <div>\n\n                    <h3><span [innerHTML]="question.options"></span></h3>\n\n                  </div>\n\n                  <br />\n\n                  <h3 style="color:#01c22e;">\n\n                    <strong\n\n                      >Correct Answer :\n\n                      <span [innerHTML]>{{ question.answer }}</span></strong\n\n                    >\n\n                  </h3>\n\n                  <br />\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <div class="slide-buttons" *ngIf="currentIndex > 0">\n\n      <button class="share-btn back-btn" (click)="goBack()">Prev</button>\n\n      <button class="share-btn back-btn" (click)="slideNext()">Next</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\storybook\storybook.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StoryBookPage);
    return StoryBookPage;
}());

//# sourceMappingURL=storybook.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_updates_updates__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscription_subscription__ = __webpack_require__(143);
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
            selector: "page-updates",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\updates\updates.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center class="about-title">\n\n        Updates\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img\n\n    src="../../assets/imgs/simbi-girl.png"\n\n    alt="simbi"\n\n    class="simbi-girl img-center"\n\n  />\n\n  <div class="updates-content">\n\n    <div class="updates-text">\n\n      <ion-spinner\n\n        *ngIf="downloading || updating"\n\n        name="crescent"\n\n        color="primary"\n\n      ></ion-spinner>\n\n      <p *ngIf="downloading">{{ progressText }}</p>\n\n      <p *ngIf="updating">Installing updates please wait</p>\n\n      <p *ngIf="updated">Your app is up to date</p>\n\n      <p *ngIf="error">\n\n        An unknown error occurred, please check your network and try again\n\n      </p>\n\n      <p *ngIf="hasSubscribed">Version {{ config.version }}</p>\n\n      <p *ngIf="!hasSubscribed">\n\n        Activate your app to enjoy unlimited questions update\n\n      </p>\n\n      <button\n\n        class="share-btn"\n\n        (click)="downloadUpdates()"\n\n        [disabled]="updated || updating || downloading"\n\n        *ngIf="hasSubscribed"\n\n      >\n\n        Check for updates\n\n      </button>\n\n      <button\n\n        class="share-btn"\n\n        (click)="goToSubscriptionPage()"\n\n        *ngIf="!hasSubscribed"\n\n      >\n\n        Click here to activate\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\updates\updates.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_updates_updates__["a" /* UpdatesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UpdatesPage);
    return UpdatesPage;
}());

//# sourceMappingURL=updates.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(42);
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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_inappbrowser_inappbrowser__ = __webpack_require__(70);
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
            selector: "page-notifications",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center class="about-title">\n\n        Notifications\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img\n\n    src="../../assets/imgs/simbi-girl.png"\n\n    alt="simbi"\n\n    class="simbi-girl img-center"\n\n  />\n\n\n\n  <div class="flex-vertical">\n\n    <ion-spinner name="bubbles" *ngIf="!loaded"></ion-spinner>\n\n  </div>\n\n  <div class=" flex-vertical notifications-container" *ngIf="loaded">\n\n    <div\n\n      class="notification-card"\n\n      *ngFor="let notification of notifications"\n\n      (click)="openNotification(notification)"\n\n    >\n\n      <h1>{{ notification.title }}</h1>\n\n      <p>\n\n        {{notification.content}}\n\n      </p>\n\n    </div>\n\n  </div>\n\n  <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n\n    <ion-infinite-scroll-content\n\n      loadingSpinner="bubbles"\n\n      loadingText="Loading more data..."\n\n    >\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(42);
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_syllabus_syllabus__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_network_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_session_session__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_updates_updates__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_preferences_ngx__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_network__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_pipes_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_zip__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_sqlite__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite_db_copy__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_audio__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_topic_topic_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_onboarding_onboarding_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_paywithcard_paywithcard_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_quiz_quiz_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_quizresult_quizresult_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_examsubjects_examsubjects_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_subscription_subscription__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_subscription_subscription_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_about_about_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_storybook_storybook_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_notifications_notifications_module__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_notifications_notifications__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_updates_updates_module__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_device__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_social_sharing__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_themeable_browser__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_spinner_dialog__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_inappbrowser_inappbrowser__ = __webpack_require__(70);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_6__pages_syllabus_syllabus__["a" /* SyllabusPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_topic_topic_module__["TopicPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_onboarding_onboarding_module__["OnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_paywithcard_paywithcard_module__["PaywithCardPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_quiz_quiz_module__["QuizPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_quizresult_quizresult_module__["QuizresultPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_examsubjects_examsubjects_module__["ExamsubjectsPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_subscription_subscription_module__["SubscriptionPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_about_about_module__["a" /* AboutPageModule */],
                __WEBPACK_IMPORTED_MODULE_37__pages_storybook_storybook_module__["a" /* StoryBookPageModule */],
                __WEBPACK_IMPORTED_MODULE_40__pages_updates_updates_module__["a" /* UpdatesPageModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_notifications_notifications_module__["a" /* NotificationsPageModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/examsubjects/examsubjects.module#ExamsubjectsPageModule', name: 'ExamsubjectsPage', segment: 'examsubjects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paywithcard/paywithcard.module#PaywithCardPageModule', name: 'PaywithCardPage', segment: 'paywithcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quizresult/quizresult.module#QuizresultPageModule', name: 'QuizresultPage', segment: 'quizresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription/subscription.module#SubscriptionPageModule', name: 'SubscriptionPage', segment: 'subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic/topic.module#TopicPageModule', name: 'TopicPage', segment: 'topic', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_6__pages_syllabus_syllabus__["a" /* SyllabusPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_zip__["a" /* Zip */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite_db_copy__["a" /* SqliteDbCopy */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_offline_offline__["a" /* OfflineProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_updates_updates__["a" /* UpdatesProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__providers_subscription_subscription__["a" /* SubscriptionProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_45__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_preferences_ngx__["a" /* AppPreferences */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quizresult_quizresult__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
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
    function QuizPage(navCtrl, navParams, loader, alertController, storage, toastCtrl, audio, userProvider, offlineProvider) {
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
        this.questions = [];
        this.currentIndex = 0;
        this.trialNumbers = 2;
        this.scores = 0;
        this.test_type = 0;
        this.selectedQuestion = [];
        this.totalExamQuestionCount = 0;
        this.shake = false;
        this.shakeGreen = false;
        this.test_type = this.navParams.get("test_type");
        this.questionType = this.navParams.get("questionType");
        this.topicId = this.navParams.get("topicId");
        this.totalExamQuestionCount = this.navParams.get('count');
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
        console.log('count: ', this.navParams.get('count'));
        this.width = ((this.currentIndex + 1) / this.questions.length) * 100;
    };
    QuizPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("sound-off").then(function (val) {
            _this.canPlaySound = val;
        });
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
        this.currentIndex = 0;
        this.scores = 0;
        var loader = this.loader.create({
            content: "Loading..."
        });
        loader.present();
        // console.log("quiz id", this.topic.id);
        console.log("test_type", this.test_type);
        if (this.test_type == 1) {
            this.offlineProvider.fetchQuestionForTest(this.topic.id).then(function (response) {
                _this.questions = response;
                _this.cleanQuestions = response;
                _this.selectedQuestion = [];
                _this.populateSelected(_this.questions);
                _this.calculateTime(12);
                _this.test_type = 1;
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
            this.loaded = Promise.resolve(true);
            loader.dismiss();
        }
        else {
            console.log("else", this.test_type);
            loader.dismiss();
        }
    };
    QuizPage.prototype.populateSelected = function (questions) {
        console.log(questions);
        for (var i = 0; i < questions.length; i++) {
            this.selectedQuestion.push({
                questionId: questions[i].id,
                answerId: ""
            });
        }
        console.log(this.selectedQuestion);
    };
    QuizPage.prototype.showDoneAlert = function () {
        var _this = this;
        this.shareUserTrack();
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
                _this.submit();
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
        var loader = this.loader.create({
            cssClass: "my-loading"
        });
        loader.present();
        var body = {
            no_of_questions_answered: this.questions.length,
            total_questions: this.questions.length,
            no_of_correct_questions: null,
            // topic_id: this.topic.id,
            subject_id: this.subject.id
        };
        for (var i = 0; i < this.selectedQuestion.length; i++) {
            if (this.questions[i].id == this.selectedQuestion[i].questionId) {
                if (this.selectedQuestion[i].answerId == this.questions[i].answer.id) {
                    this.scores++;
                }
            }
        }
        body.no_of_correct_questions = this.scores;
        this.sendUserProgress(body);
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
        var _this = this;
        this.storage.get("user").then(function (user) {
            console.log(user);
            _this.userProvider.submitUserProgress(user.id, body).subscribe(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });
        });
    };
    QuizPage.prototype.shareUserTrack = function () {
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
        console.log("quiz type", this.questionType);
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
            if (_this.canPlaySound)
                _this.playWrongSound();
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
            if (_this.canPlaySound)
                _this.playCorrectSound();
            _this.shakeGreen = true;
            setTimeout(function () {
                _this.shakeGreen = false;
                resolve(true);
            }, 1000);
        });
    };
    QuizPage.prototype.playCorrectSound = function () {
        this.audio.play("correct");
    };
    QuizPage.prototype.playWrongSound = function () {
        this.audio.play("wrong");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("quizcard"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QuizPage.prototype, "quizcard", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-quiz",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\quiz\quiz.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" color="brown"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="topic">{{ topic.topic | titlecase }}</ion-title>\n\n    <ion-title *ngIf="!topic">{{ subject.name | titlecase }}</ion-title>\n\n    <ion-buttons end *ngIf="test_type == 1 || test_type == 2">\n\n      <button ion-button clear color="brown" class="timer">{{ time }}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="loaded | async">\n\n    <!-- Learning Track Interface-->\n\n    <div *ngIf="test_type == 0">\n\n      <div>\n\n        <div\n\n          [ngClass]="[\n\n            shake ? \'shake-card\' : \'\',\n\n            shakeGreen ? \'shake-card-green\' : \'\'\n\n          ]"\n\n        >\n\n          <ion-card #quizcard>\n\n            <ion-card-content>\n\n              <div class="progress">\n\n                <div\n\n                  class="progress-inner"\n\n                  [ngStyle]="{\n\n                    width: width + \'%\',\n\n                    \'background-color\': \'#C27C39\'\n\n                  }"\n\n                ></div>\n\n              </div>\n\n              <h2 [innerHTML]="questions[currentIndex].question"></h2>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </div>\n\n        <br />\n\n        <div class="animated fadeIn explanation-card" *ngIf="showCorrectAnswer">\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <h3>\n\n                <strong\n\n                  >The correct answer is &nbsp;<span\n\n                    [innerHTML]="currentQuestion.answer.option_text"\n\n                  ></span\n\n                ></strong>\n\n              </h3>\n\n              <br />\n\n              <h3><strong>Explanation</strong></h3>\n\n              <h3 [innerHTML]="currentQuestion.explanation"></h3>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <button\n\n                ion-button\n\n                round\n\n                float-right\n\n                color="brown"\n\n                (click)="onEndClick()"\n\n              >\n\n                End\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <button\n\n                ion-button\n\n                round\n\n                color="brown"\n\n                icon-start\n\n                (click)="onGotItClick()"\n\n              >\n\n                <ion-icon name="thumbs-up" color="light"></ion-icon>\n\n                Got It\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div class="anwser-grp" *ngIf="!showCorrectAnswer">\n\n          <div\n\n            *ngFor="\n\n              let answer of questions[currentIndex].options;\n\n              let i = index\n\n            "\n\n          >\n\n            <button\n\n              class="center answer-btn"\n\n              ion-button\n\n              color="brown"\n\n              round\n\n              [innerHTML]="answer.option_text"\n\n              [disabled]="\n\n                trialNumbers < 1 || questions[currentIndex].disabled[i]\n\n              "\n\n              (click)="checkAnswer(i)"\n\n            ></button>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <br />\n\n      <ion-row *ngIf="test_type == 0">\n\n        <ion-col col-6>\n\n          <button\n\n            (click)="prev()"\n\n            ion-button\n\n            round\n\n            color="brown"\n\n            icon-start\n\n            *ngIf="currentIndex >= 1 && currentIndex < questions.length"\n\n          >\n\n            <ion-icon name="ios-arrow-back"></ion-icon>\n\n            Previous\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button\n\n            float-right\n\n            (click)="next()"\n\n            ion-button\n\n            round\n\n            color="brown"\n\n            icon-end\n\n            *ngIf="questions.length > currentIndex"\n\n          >\n\n            Next\n\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <!-- Evaluation Track Interface -->\n\n    <div *ngIf="test_type == 1 || test_type == 2">\n\n      <div>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <!-- display format for test type 1 -->\n\n            <p *ngIf="test_type == 1">\n\n              {{ currentIndex + 1 }} / {{ questions.length }}\n\n            </p>\n\n            <!-- display format for test type 2 -->\n\n            <p *ngIf="test_type == 2">\n\n              {{ currentIndex + 1 }} / {{ questions.length }} out of\n\n              {{ totalExamQuestionCount }} questions\n\n            </p>\n\n            <h2 [innerHTML]="questions[currentIndex].question"></h2>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <br />\n\n\n\n        <div>\n\n          <ion-list radio-group>\n\n            <ion-item\n\n              *ngFor="\n\n                let answer of questions[currentIndex].options;\n\n                let i = index\n\n              "\n\n            >\n\n              <ion-label\n\n                ><strong [innerHTML]="answer.option_text"></strong\n\n              ></ion-label>\n\n              <ion-radio\n\n                color="brown"\n\n                mode="md"\n\n                [value]="answer.id"\n\n                [checked]="selectedQuestion[currentIndex].answerId == answer.id"\n\n                (ionSelect)="\n\n                  addToSelected(questions[currentIndex].id, answer.id)\n\n                "\n\n              ></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n\n\n        <ion-row *ngIf="test_type == 1 || test_type == 2">\n\n          <ion-col col-6>\n\n            <button\n\n              (click)="prev()"\n\n              ion-button\n\n              round\n\n              color="brown"\n\n              icon-start\n\n              *ngIf="currentIndex > 0"\n\n            >\n\n              <ion-icon name="ios-arrow-back"></ion-icon>\n\n              Previous\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button\n\n              float-right\n\n              (click)="next()"\n\n              ion-button\n\n              round\n\n              color="brown"\n\n              icon-end\n\n              *ngIf="questions.length - 1 > currentIndex"\n\n            >\n\n              Next\n\n              <ion-icon name="ios-arrow-forward"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer padding *ngIf="loaded">\n\n  <!-- <div class="d-flex" *ngIf="test_type == 0">\n\n    <input\n\n      placeholder="Type answer here"\n\n      type="text"\n\n      class="input-box"\n\n      [(ngModel)]="answer_input"\n\n      name="anwser_input"\n\n    />\n\n    <button\n\n      icon-end\n\n      class="btn-send"\n\n      color="brown"\n\n      round\n\n      ion-button\n\n      icon-only\n\n      (click)="checkSubmittion()"\n\n    >\n\n      Submit\n\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </div> -->\n\n\n\n  <button\n\n    ion-button\n\n    round\n\n    (click)="submit()"\n\n    full\n\n    *ngIf="test_type == 1 || test_type == 2"\n\n    color="brown"\n\n  >\n\n    Submit\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\quiz\quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_offline_offline__["a" /* OfflineProvider */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InappbrowserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_themeable_browser__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__ = __webpack_require__(331);
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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 701:
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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_examsubjects_examsubjects__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_storybook_storybook__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quizresult_quizresult__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_subscription_subscription__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_updates_updates__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__ = __webpack_require__(387);
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
    function MyApp(platform, statusBar, splashScreen, storage, menuController, offlineProvider, events, app, alertCtrl, audio, localNotifications) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.menuController = menuController;
        this.offlineProvider = offlineProvider;
        this.events = events;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.audio = audio;
        this.localNotifications = localNotifications;
        this.switch = false;
        this.hasSubscribed = false;
        this.updatesPage = __WEBPACK_IMPORTED_MODULE_17__pages_updates_updates__["a" /* UpdatesPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */];
        this.subscriptionPage = __WEBPACK_IMPORTED_MODULE_16__pages_subscription_subscription__["a" /* SubscriptionPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: "home" },
            {
                title: "Pratice " + __WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].version_name.toUpperCase(),
                component: __WEBPACK_IMPORTED_MODULE_10__pages_examsubjects_examsubjects__["a" /* ExamsubjectsPage */],
                icon: "create"
            },
            {
                title: "Sweet Sixteen",
                component: __WEBPACK_IMPORTED_MODULE_12__pages_storybook_storybook__["a" /* StoryBookPage */],
                icon: "book"
            },
            // {
            //   title: "Syllabus",
            //   component: SyllabusPage,
            //   icon: "book"
            // },
            {
                title: "Notifications",
                component: __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
                icon: "notifications"
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var myapp = _this;
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
            var pusher = new window.Pusher('b882ddf2f684e4162fd3', {
                cluster: 'eu'
            });
            var channel = pusher.subscribe('general-message-channel');
            // console.log('channel ', channel)
            channel.bind('App\\Events\\GeneralInboxAdded', function (data) {
                // console.log('data from pusher', data, ' trigger ', this);
                myapp.displayNotification(data);
            });
            pusher.connection.bind('error', function (err) {
                console.log('pusher error ', err);
                if (err.error.data.code === 4004) {
                    console.log('>>> detected limit error');
                }
            });
            _this.keepSession();
            _this.checkIfDbhasbeenCopied();
            // this.offlineProvider.unzipDatabase();
            _this.statusBar.backgroundColorByHexString("#36BFE9");
            _this.splashScreen.hide();
            _this.events.subscribe("db_setup", function () {
                console.log("Event when db has finished copying");
                console.log("Waiting 3 seconds");
                setTimeout(function () {
                    _this.checkIfDbhasbeenCopied();
                }, 3000);
            });
            _this.events.subscribe('user_subscribed', function () {
                console.log('user has subscripbed');
                _this.hasSubscribed = true;
            });
            _this.storage.get('subscribed').then(function (val) { return _this.hasSubscribed = val; });
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
                        else if (viewCtrl.instance instanceof __WEBPACK_IMPORTED_MODULE_13__pages_quizresult_quizresult__["a" /* QuizresultPage */] ||
                            viewCtrl.instance instanceof __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__["a" /* QuizPage */]) {
                            viewCtrl.dismiss();
                        }
                        else {
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_quizresult_quizresult__["a" /* QuizresultPage */], {}, {
                                animate: true,
                                animation: "transition",
                                duration: 500,
                                direction: "back"
                            });
                        }
                    }
                }
            });
            _this.audio
                .preloadComplex("themesong", "assets/audio/themesong.mp3", 1, 1, 0)
                .then(function (data) {
                _this.audio.preloadSimple("correct", "assets/audio/correct.mp3");
                _this.audio.preloadSimple("wrong", "assets/audio/wrong.mp3");
                console.log(data);
            }, function (err) {
                console.log("error while preloading.");
            });
            _this.events.subscribe("play_bg_audio", function () {
                if (_this.switch) {
                    _this.audio.loop("themesong").then(function () {
                        console.log("Playing theme song");
                    });
                }
            });
            _this.events.subscribe("reduce_volume", function () {
                _this.audio.setVolumeForComplexAsset("themesong", 0.4);
            });
        });
    };
    MyApp.prototype.displayNotification = function (data) {
        var _this = this;
        var inboxMessage = data.inboxMessage;
        // If the user accepts, let's create a notification
        this.localNotifications.hasPermission().then(function (permission) {
            if (permission) {
                _this.localNotifications.schedule({
                    id: inboxMessage.id,
                    title: inboxMessage.title,
                    text: inboxMessage.content,
                    icon: '../assets/imgs/Simbibot-favicon.png',
                    data: { secret: 'key_data' }
                });
            }
            else {
                _this.localNotifications.requestPermission().then(function (permission) {
                    // console.log('requested ', permission)
                    if (permission) {
                        _this.localNotifications.schedule({
                            id: inboxMessage.id,
                            title: inboxMessage.title,
                            text: inboxMessage.content,
                            icon: '../assets/imgs/Simbibot-favicon.png',
                            data: { secret: 'key_data' }
                        });
                    }
                });
            }
        });
        if ('Notifications' in window) {
            var notification = new Notification(inboxMessage.title, { body: inboxMessage.content, icon: '../assets/imgs/Simbibot-favicon.png' });
            notification.onclick = function (event) {
                event.preventDefault();
                console.log('notification clicked ', event, inboxMessage);
            };
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPageManually = function (component) {
        this.nav.setRoot(component);
    };
    MyApp.prototype.keepSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, subscribed, expiryDate, status_1, today, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("user")];
                    case 1:
                        user = _a.sent();
                        console.log('get user: ', user);
                        if (!(user != null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.storage.get("subscribed")];
                    case 2:
                        subscribed = _a.sent();
                        console.log("subscribe", subscribed);
                        if (!(subscribed != null && subscribed == true)) return [3 /*break*/, 3];
                        return [2 /*return*/, (this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */])];
                    case 3: return [4 /*yield*/, this.storage.get("expiry_date")];
                    case 4:
                        expiryDate = _a.sent();
                        return [4 /*yield*/, this.storage.get("status")];
                    case 5:
                        status_1 = _a.sent();
                        console.log('status ', status_1);
                        today = new Date();
                        expiryDate = new Date(expiryDate);
                        console.log('today ', today.getDate(), ' expiry date ', expiryDate.getDate());
                        if ((status_1 != null && status_1 == "shared") ||
                            (status_1 != null && status_1 == "notshared")) {
                            console.log('expired ', today.getDate() > expiryDate.getDate());
                            if (today.getDate() > expiryDate.getDate()) {
                                this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_subscription_subscription__["a" /* SubscriptionPage */];
                            }
                            else {
                                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                            }
                        }
                        else {
                            date = new Date();
                            // Change to 1 day
                            date.setDate(date.getDate() + 1);
                            console.log('set expiry date: ', date.getDate());
                            this.storage.set("expiry_date", date);
                            this.storage.set("status", "notshared");
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                        }
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        console.log('get user: ', user);
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.checkIfDbhasbeenCopied = function () {
        var _this = this;
        this.storage.get("db_copied").then(function (val) {
            if (val == null) {
                _this.offlineProvider.setupDb();
            }
            else {
                _this.events.publish("db_hascopied");
            }
        });
    };
    MyApp.prototype.offSound = function () {
        var _this = this;
        console.log('sound-off: ', this.switch);
        this.switch = !this.switch;
        if (!this.switch) {
            this.storage.set("sound-off", this.switch).then(function (val) {
                _this.audio.stop("themesong");
            });
        }
        else {
            this.storage.set("sound-off", this.switch).then(function (_) {
                _this.audio.stop("themesong");
                _this.audio.loop("themesong").then(function () {
                    console.log("Playing theme song");
                });
            });
        }
    };
    MyApp.prototype.openWhatssapLink = function () {
        window.open("whatsapp://chat?code=KtybtfGE9QcHbDUEMY6JMc", "_system");
    };
    MyApp.prototype.logOut = function () {
        this.menuController.close();
        this.storage.clear();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\app\app.html"*/'<ion-menu [content]="content" class="menu">\n\n  <ion-header>\n\n    <div class="menu-bg">\n\n      <ion-title text-center\n\n        ><img src="assets/imgs/simbi.png" class="img-src" alt=""\n\n      /></ion-title>\n\n      <h3 class="simbi-text" text-center>\n\n        Your Interactive Learning Assistant.\n\n      </h3>\n\n    </div>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <div>\n\n      <ion-toggle\n\n        color="button"\n\n        text-center\n\n        [checked]="switch"\n\n        (ionChange)="offSound()"\n\n      ></ion-toggle>\n\n      <p text-center>Sound</p>\n\n    </div>\n\n\n\n    <ion-list class="padding-top">\n\n      <button\n\n        [ngClass]="p.title == activePage ? \'active-menu\' : \'\'"\n\n        menuClose\n\n        ion-item\n\n        no-lines\n\n        *ngFor="let p of pages"\n\n        (click)="openPage(p)"\n\n      >\n\n        <span class="menu-icon"><ion-icon [name]="p.icon"></ion-icon></span\n\n        ><span class="menu-text">{{ p.title }}</span>\n\n      </button>\n\n      <!-- For offline sidebar  -->\n\n      <button\n\n        [ngClass]="Activation == activePage ? \'active-menu\' : \'\'"\n\n        *ngIf="!hasSubscribed"\n\n        menuClose\n\n        ion-item\n\n        no-lines\n\n        (click)="openPageManually(subscriptionPage)"\n\n      >\n\n        <span class="menu-icon"><ion-icon name="compass"></ion-icon></span\n\n        ><span class="menu-text">Activation</span>\n\n      </button>\n\n      <button\n\n        *ngIf="hasSubscribed"\n\n        [ngClass]="Updates == activePage ? \'active-menu\' : \'\'"\n\n        menuClose\n\n        ion-item\n\n        no-lines\n\n        (click)="openPageManually(updatesPage)"\n\n      >\n\n        <span class="menu-icon"><ion-icon name="refresh"></ion-icon></span\n\n        ><span class="menu-text">Updates</span>\n\n      </button>\n\n      <button ion-item no-lines (click)="openWhatssapLink()">\n\n        <span class="menu-icon"\n\n          ><ion-icon\n\n            name="people"\n\n            class="icon-color"\n\n            color="light"\n\n          ></ion-icon></span\n\n        ><span class="menu-text">Join Community</span>\n\n      </button>\n\n      <button ion-item no-lines (click)="openPageManually(aboutPage)">\n\n        <span class="menu-icon"\n\n          ><ion-icon\n\n            name="information-circle"\n\n            class="icon-color"\n\n            color="light"\n\n          ></ion-icon></span\n\n        ><span class="menu-text">About Simbi</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n  <ion-footer>\n\n    <!-- <button ion-item no-lines (click)="logOut()">\n\n      <span class="menu-icon"\n\n        ><ion-icon name="log-out" color="light"></ion-icon></span\n\n      ><span class="menu-text">Log Out</span>\n\n    </button> -->\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyllabusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inappbrowser_inappbrowser__ = __webpack_require__(70);
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
            selector: "page-syllabus",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\syllabus\syllabus.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center>Syllabus</ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <ion-row class="animated fadeInUp">\n\n      <ion-col\n\n        *ngFor="\n\n          let subject of subjects\n\n        "\n\n        col-6\n\n      >\n\n        <div>\n\n          <ion-card (click)="openSyllabus(subject)">\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                <img\n\n                  class="center img"\n\n                  [src]="subject.image_url"\n\n                  alt=""\n\n                  *ngIf="subject.image_url != null"\n\n                />\n\n                <p\n\n                  [ngStyle]="{ \'background-color\': subject.color }"\n\n                  class="p-bg"\n\n                  *ngIf="subject.image_url == null"\n\n                ></p>\n\n              </ion-card-title>\n\n              <p\n\n                class="center line"\n\n                [ngStyle]="{ \'border-bottom-color\': subject.color }"\n\n              ></p>\n\n              <p>\n\n                <strong> {{ subject.name | titlecase }} </strong>\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\syllabus\syllabus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_inappbrowser_inappbrowser__["a" /* InappbrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SyllabusPage);
    return SyllabusPage;
}());

//# sourceMappingURL=syllabus.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(383);
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryBookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storybook__ = __webpack_require__(384);
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

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(387);
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

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updates__ = __webpack_require__(385);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examsubjects_examsubjects__ = __webpack_require__(124);
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






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, offlineProvider, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.offlineProvider = offlineProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.config = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* config */];
        var loader = this.loadingCtrl.create({
            content: "Initiating DB"
        });
        loader.present().then(function () {
            console.log('loader presented');
            _this.offlineProvider.getDatabaseState().subscribe(function (rdy) {
                if (rdy) {
                    loader.dismiss();
                    console.log("here");
                    _this.offlineProvider
                        .fetchSubjects()
                        .then(function (data) {
                        _this.subjects = data;
                        console.log(data);
                        _this.loaded = Promise.resolve(true);
                    })
                        .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log("err", err);
                                    return [4 /*yield*/, this.offlineProvider.setupDb()];
                                case 1:
                                    _a.sent();
                                    window.location.reload();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
            });
        });
    }
    HomePage.prototype.gotoTopicPage = function (i, subjectFiltered) {
        var subject = subjectFiltered;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_topic__["a" /* TopicPage */], {
            subject: subject,
            questionType: "practice"
        }, {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    HomePage.prototype.gotoSubjects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__examsubjects_examsubjects__["a" /* ExamsubjectsPage */], {
            animate: true,
            animation: "transition-ios",
            direction: "forward"
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.events.publish("play_bg_audio");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\home\home.html"*/'<ion-header>\n\n  <div class="bg-head">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="brown"></ion-icon>\n\n      </button>\n\n      <ion-title text-center\n\n        ><img src="assets/imgs/simbibot-blue.png" alt=""\n\n      /></ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar [(ngModel)]="searchInput" class="search-bar"></ion-searchbar>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card\n\n    (click)="gotoSubjects()"\n\n    [ngStyle]="{ \'background-color\': config.background_color }"\n\n    class="banner-card"\n\n  >\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <img [src]="config.logo_dir" class="logo" alt="" />\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <br />\n\n        <h3 [ngStyle]="{ color: config.text_color }">Prepare for</h3>\n\n        <h1 [ngStyle]="{ color: config.text_color }">\n\n          {{ config.version_name | titlecase }}\n\n        </h1>\n\n        <p [ngStyle]="{ color: config.text_color }">Click Here</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <div *ngIf="loaded">\n\n    <h3 padding>Learn any topic</h3>\n\n    <ion-row class="animated fadeInUp">\n\n      <ion-col\n\n        *ngFor="\n\n          let subject of subjects | searchFilter: searchInput;\n\n          let i = index\n\n        "\n\n        col-6\n\n      >\n\n        <div>\n\n          <ion-card (click)="gotoTopicPage(i, subject)">\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                <img\n\n                  class="center img"\n\n                  [src]="subject.image_url"\n\n                  alt=""\n\n                  *ngIf="subject.image_url != null"\n\n                />\n\n                <p\n\n                  [ngStyle]="{ \'background-color\': subject.color }"\n\n                  class="p-bg"\n\n                  *ngIf="subject.image_url == null"\n\n                ></p>\n\n              </ion-card-title>\n\n              <p\n\n                class="center line"\n\n                [ngStyle]="{ \'border-bottom-color\': subject.color }"\n\n              ></p>\n\n              <p>\n\n                <strong> {{ subject.name | titlecase }} </strong>\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <div class="subject-card" *ngFor="let subject of subjects | searchFilter : searchInput; let i = index; " [ngStyle]="{\'background-color\' : subject.color}" (tap)="gotoTopicPage(i)">\n\n      <ion-row>\n\n        <ion-col col-4>\n\n        <img [src]="subject.image_url" class="img-center" alt="" [ngClass]="i == 1 ? \'.move_img_left\' : \'\'">\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <h3>{{subject.name}}</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n        <h3> </h3> -->\n\n    <!-- </div> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\simbidesktop\offline-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_offline_offline__["a" /* OfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(42);
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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

/***/ })

},[389]);
//# sourceMappingURL=main.js.map