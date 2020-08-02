import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaywithCardPage } from './paywithcard';

@NgModule({
    declarations: [
        PaywithCardPage,
    ],
    imports: [
        IonicPageModule.forChild(PaywithCardPage),
    ],
})
export class PaywithCardPageModule { }
