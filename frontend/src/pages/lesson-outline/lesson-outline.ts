import { Component } from "@angular/core";
import {
    IonicPage,
    ViewController,
    NavParams,
} from "ionic-angular";
// import { CustomFirebaseAnalyticsProvider } from "../../providers/analytics/analytics";

@IonicPage({ name: 'lessonOutline-page' })
@Component({
    selector: "page-lesson-outline",
    templateUrl: "lesson-outline.html"
})
export class LessonOutlinePage {
    isLoading: boolean = false
    display: any;
    message: String = 'message';

    operator: number = 0;
    memory: any = [];
    operand: number = 0;
    outline: any;

    constructor(
        private viewController: ViewController,
        private navParams: NavParams,

    ) {
        this.outline = this.navParams.get('outline')
    }


    ionViewDidLoad() {
        console.log('calculator modal')
    }

    selectPoint(index) {
        this.viewController.dismiss({
            index
        });
    }

    closeModal() {
        this.viewController.dismiss();
    }   

}
