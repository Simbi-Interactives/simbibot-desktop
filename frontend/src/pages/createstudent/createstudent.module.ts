import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatestudentPage } from './createstudent';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    CreatestudentPage,
  ],
  imports: [
    NgxPaginationModule,
    IonicPageModule.forChild(CreatestudentPage),
  ],
})
export class CreatestudentPageModule {}
