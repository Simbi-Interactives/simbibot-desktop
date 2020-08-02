import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentresultsPage } from './studentresults';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentresultsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentresultsPage),
    FormsModule
  ],
})
export class StudentresultsPageModule {}
