import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatestudentPage } from './createstudent';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CreatestudentPage,
  ],
  imports: [
    PipesModule,
    NgxPaginationModule,
    IonicPageModule.forChild(CreatestudentPage),
  ],
})
export class CreatestudentPageModule {}
