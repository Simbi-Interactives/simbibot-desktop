import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsubjectsPage } from './examsubjects';

@NgModule({
  declarations: [
    ExamsubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamsubjectsPage),
  ],
})
export class ExamsubjectsPageModule {}
