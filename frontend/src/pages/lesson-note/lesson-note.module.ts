import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonNote } from './lesson-note';
import { NativeAudio } from "@ionic-native/native-audio";
import { OfflineProvider } from "../../providers/offline/offline";
// import { LearningProvider } from "../../providers/learning/learning";
import { NetworkProvider } from "../../providers/network/network";
import { TextToSpeech } from "@ionic-native/text-to-speech";
// import { CustomFirebaseAnalyticsProvider } from "../../providers/analytics/analytics";


@NgModule({
  declarations: [
    LessonNote,
  ],
  imports: [
    IonicPageModule.forChild(LessonNote),
  ],
  providers: [NativeAudio, TextToSpeech, NetworkProvider, OfflineProvider]
})
export class LessonNoteModule { }
