import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchCards } from './match-cards';
// import { NativeAudio } from "@ionic-native/native-audio";
// import { OfflineProvider } from "../../providers/offline/offline";
// import { LearningProvider } from "../../providers/learning/learning";
// import { NetworkProvider } from "../../providers/network/network";
// import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    MatchCards,
  ],
  imports: [
    IonicPageModule.forChild(MatchCards),
  ],
  providers: []
})
export class MatchCardsModule { }
