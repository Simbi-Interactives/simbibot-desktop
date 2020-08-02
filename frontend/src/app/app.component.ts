import { Component, ViewChild } from "@angular/core";
import {
  Nav,
  Platform,
  MenuController,
  Events,
  App,
  AlertController
} from "ionic-angular";
import { Device } from "@ionic-native/device";
import { LocalNotifications } from '@ionic-native/local-notifications';
// import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer/ngx';
// import { InstallReferrer } from 'install-referrer'

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";

import { HomePage } from "../pages/home/home";
import { SyllabusPage } from "../pages/syllabus/syllabus";
import { ListPage } from "../pages/list/list";
import { LoginPage } from "../pages/login/login";
import { OfflineProvider } from "../providers/offline/offline";
import { config } from "../config";
import { ExamsubjectsPage } from "../pages/examsubjects/examsubjects";
import { AboutPage } from "../pages/about/about";
import { StoryBookPage } from "../pages/storybook/storybook";
import { QuizresultPage } from "../pages/quizresult/quizresult";
import { QuizPage } from "../pages/quiz/quiz";
import { NativeAudio } from "@ionic-native/native-audio";
import { SubscriptionProvider } from "../providers/subscription/subscription";
import { SubscriptionPage } from "../pages/subscription/subscription";
import { UpdatesPage } from "../pages/updates/updates";
import { NotificationsPage } from "../pages/notifications/notifications";
import { DesktopProvider } from "../providers/desktop/desktop";
import { CreateteacherPage } from "../pages/createteacher/createteacher";
import { SessionProvider } from "../providers/session/session";
import { TeacherdashboardPage } from "../pages/teacherdashboard/teacherdashboard";
import { StudentresultsPage } from "../pages/studentresults/studentresults";

declare global {
  interface Window {
    Pusher: any;
    Notification: {
      permission: any
    }
  }
}

let Pusher = window.Pusher;

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  switch: boolean = false;

  pages: Array<{ title: string; component: any; icon: string }>;

  hasSubscribed: boolean = false;

  updatesPage: any = UpdatesPage

  aboutPage: any = AboutPage

  subscriptionPage: any = SubscriptionPage

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    private menuController: MenuController,
    private offlineProvider: OfflineProvider,
    private events: Events,
    private app: App,
    private session: SessionProvider,
    private alertCtrl: AlertController,
    private audio: NativeAudio,
    private localNotifications: LocalNotifications,
    private desktopProvider: DesktopProvider
    // private installReferrer: TealiumInstallReferrer,
    // private _installReferrer: InstallReferrer,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage, icon: "home" },
      {
        title: "Report",
        component: StudentresultsPage,
        icon: "folder-open"
      },
      
      
      // {
      //   title: "Syllabus",
      //   component: SyllabusPage,
      //   icon: "book"
      // },
      // {
      //   title: "Notifications",
      //   component: NotificationsPage,
      //   icon: "notifications"
      // }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

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
      

      this.keepSession();
      // this.offlineProvider.unzipDatabase();
      this.statusBar.backgroundColorByHexString("#36BFE9");
      this.splashScreen.hide();

      this.platform.registerBackButtonAction(() => {
        const overlayView = this.app._appRoot._overlayPortal._views[0];
        const view = this.nav.getActive();
        const viewCtrl = this.app._appRoot._modalPortal.getActive();
        console.log('back')
        try {
          viewCtrl.dismiss();
          console.log('dismiss view')
        } catch (e) {
          console.log('dismiss view error ', e)
          if (overlayView && overlayView.dismiss) {
            overlayView.dismiss();
          } else {
            let nav = this.app.getActiveNav();
            if (nav.canGoBack()) {
              nav.pop();
            } else if (view.instance instanceof HomePage) {
              this.alertCtrl
                .create({
                  subTitle: "Do you want to quit?",
                  buttons: [
                    {
                      text: "cancel",
                      role: "Cancel"
                    },
                    {
                      text: "ok",
                      handler: () => {
                        this.platform.exitApp();
                      }
                    }
                  ]
                })
                .present();
            } else if (
              viewCtrl.instance instanceof QuizresultPage ||
              viewCtrl.instance instanceof QuizPage
            ) {
              viewCtrl.dismiss();
            } else {
              this.app.getRootNav().setRoot(
                QuizresultPage,
                {},
                {
                  animate: true,
                  animation: "transition",
                  duration: 500,
                  direction: "back"
                }
              );
            }
          }
        }
      });
    });
  }



  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openPageManually(component) {
    this.nav.setRoot(component);
  }

  async keepSession() {
    this.desktopProvider.checkIfTeacherHasubscribed().subscribe((res: any) => {
      if(res.show_sweet == 1) {
        this.pages.push(
          {
            title: "Sweet Sixteen",
            component: StoryBookPage,
            icon: "book"
          },
        )
      }
      if(res.data) {
        let session = this.session.checkUser();
        if(!session) this.rootPage = LoginPage;
        else {
          const user = this.session.getUser();
          if(user.usertype == 'teacher') return this.rootPage = TeacherdashboardPage;

          if(user.usertype == 'student') return this.rootPage = HomePage;
        }
      } else {
        console.log('e no work');
        this.rootPage = CreateteacherPage;
      }
    })
  }



  

  openWhatssapLink() {
    window.open("whatsapp://chat?code=KtybtfGE9QcHbDUEMY6JMc", "_system");
  }

  logOut() {
    this.menuController.close();
    localStorage.removeItem('user');
    this.nav.setRoot(LoginPage, null, {
      animate: true,
      animation: "transition-ios",
      direction: "back"
    });
  }
}
