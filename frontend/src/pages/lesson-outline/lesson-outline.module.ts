import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonOutlinePage } from './lesson-outline';

@NgModule({
    declarations: [
        LessonOutlinePage,
    ],
    imports: [
        IonicPageModule.forChild(LessonOutlinePage),
    ],
})
export class LessonOutlinePageModule { }
