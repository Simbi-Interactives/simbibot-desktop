import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditStudentPage } from './editstudent';

@NgModule({
    declarations: [
        EditStudentPage,
    ],
    imports: [
        IonicPageModule.forChild(EditStudentPage),
    ],
})
export class EditStudentPageModule { }
