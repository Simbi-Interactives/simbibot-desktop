import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ActivationPage } from "../pages/activationpage/activationpage";
import { ListPage } from "../pages/list/list";
import { SyllabusPage } from "../pages/syllabus/syllabus";
import { PaywithCardPage } from "../pages/paywithcard/paywithcard";

import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPageModule } from "../pages/register/register.module";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OfflineProvider } from "../providers/offline/offline";
import { AuthProvider } from "../providers/auth/auth";
import { NetworkProvider } from "../providers/network/network";
import { SessionProvider } from "../providers/session/session";
import { UpdatesProvider } from "../providers/updates/updates";

import { IonicStorageModule } from "@ionic/storage";
import { LocalNotifications } from '@ionic-native/local-notifications';
// import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer/ngx';
// import { InstallReferrer } from 'install-referrer'
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Network } from "@ionic-native/network";
import { PipesModule } from "../pipes/pipes.module";
import { Zip } from "@ionic-native/zip";
import { File } from "@ionic-native/file";
import { SQLite } from "@ionic-native/sqlite";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy";
import { NativeAudio } from "@ionic-native/native-audio";
import { TopicPageModule } from "../pages/topic/topic.module";
import { OnboardingPageModule } from "../pages/onboarding/onboarding.module";
import { PaywithCardPageModule } from "../pages/paywithcard/paywithcard.module";
import { QuizPageModule } from "../pages/quiz/quiz.module";
import { QuizresultPageModule } from "../pages/quizresult/quizresult.module";
import { ExamsubjectsPageModule } from "../pages/examsubjects/examsubjects.module";
import { SubscriptionProvider } from "../providers/subscription/subscription";
import { SubscriptionPageModule } from "../pages/subscription/subscription.module";
import { AboutPageModule } from "../pages/about/about.module";
import { StoryBookPageModule } from "../pages/storybook/storybook.module";
import { NotificationsPageModule } from "../pages/notifications/notifications.module";
import { NotificationsProvider } from "../providers/notifications/notifications";
import { UpdatesPageModule } from "../pages/updates/updates.module";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Device } from "@ionic-native/device";
import { SocialSharing } from "@ionic-native/social-sharing";
import { ThemeableBrowser } from "@ionic-native/themeable-browser";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { InappbrowserProvider } from "../providers/inappbrowser/inappbrowser";
import { DesktopProvider } from '../providers/desktop/desktop';
import { CreateteacherPageModule } from "../pages/createteacher/createteacher.module";
import { TeacherdashboardPageModule } from "../pages/teacherdashboard/teacherdashboard.module";
import { CreatestudentPage } from "../pages/createstudent/createstudent";
import { CreatestudentPageModule } from "../pages/createstudent/createstudent.module";
import { NgxPaginateModule } from 'ngx-paginate';
import { PostutmePageModule } from "../pages/postutme/postutme.module";
import { StudentresultsPageModule } from "../pages/studentresults/studentresults.module";
import { StudentreportdetailsPageModule } from "../pages/studentreportdetails/studentreportdetails.module";
import { TeacherevaluationresultPageModule } from "../pages/teacherevaluationresult/teacherevaluationresult.module";
import { TeacherexaminationresultPageModule } from "../pages/teacherexaminationresult/teacherexaminationresult.module";
import { ActivationPageModule } from "../pages/activationpage/activationpage.module";
import { LessonNoteModule } from "../pages/lesson-note/lesson-note.module";
import { LessonOutlinePageModule } from "../pages/lesson-outline/lesson-outline.module";
import { MatchCardsModule } from "../pages/match-cards/match-cards.module";


@NgModule({
  declarations: [MyApp, HomePage, ListPage, SyllabusPage],
  imports: [
    BrowserModule,
    ActivationPageModule,
    LoginPageModule,
    RegisterPageModule,
    TopicPageModule,
    OnboardingPageModule,
    PaywithCardPageModule,
    QuizPageModule,
    QuizresultPageModule,
    LessonNoteModule,
    MatchCardsModule,
    LessonOutlinePageModule,
    HttpClientModule,
    PipesModule,
    ExamsubjectsPageModule,
    PostutmePageModule,
    StudentresultsPageModule,
    SubscriptionPageModule,
    AboutPageModule,
    TeacherevaluationresultPageModule,
    TeacherexaminationresultPageModule,
    StoryBookPageModule,
    StudentreportdetailsPageModule,
    CreateteacherPageModule,
    TeacherdashboardPageModule,
    CreatestudentPageModule,
    UpdatesPageModule,
    NotificationsPageModule,
    FormsModule,
    NgxPaginateModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, SyllabusPage],
  providers: [
    StatusBar,
    Zip,
    SQLite,
    SqliteDbCopy,
    NativeAudio,
    Network,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OfflineProvider,
    AuthProvider,
    NetworkProvider,
    SessionProvider,
    UpdatesProvider,
    File,
    SubscriptionProvider,
    NotificationsProvider,
    ThemeableBrowser,
    Device,
    SocialSharing,
    SpinnerDialog,
    InappbrowserProvider,
    LocalNotifications,
    DesktopProvider,
    AppPreferences,
    DesktopProvider,
    // TealiumInstallReferrer,
    // InstallReferrer
    // FilePath
  ]
})
export class AppModule { }
