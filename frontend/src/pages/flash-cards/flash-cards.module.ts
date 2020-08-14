import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashCard } from './flash-cards';
import { NativeAudio } from "@ionic-native/native-audio";
import { OfflineProvider } from "../../providers/offline/offline";
// import { LearningProvider } from "../../providers/learning/learning";
import { NetworkProvider } from "../../providers/network/network";
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TooltipsModule } from 'ionic-tooltips';


@NgModule({
  declarations: [
    FlashCard,
  ],
  imports: [
    IonicPageModule.forChild(FlashCard),
    TooltipsModule.forRoot()
  ],
  providers: [NativeAudio, TextToSpeech, NetworkProvider, OfflineProvider]
})
export class FlashCardModule { }
