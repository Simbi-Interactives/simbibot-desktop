import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateteacherPage } from './createteacher';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateteacherPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateteacherPage),
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CreateteacherPageModule {}
