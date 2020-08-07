import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivationPage } from './activationpage';

@NgModule({
  declarations: [
    ActivationPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivationPage),
  ],
})
export class ActivationPageModule {}
