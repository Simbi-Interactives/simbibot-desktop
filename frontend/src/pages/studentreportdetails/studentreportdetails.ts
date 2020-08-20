import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the StudentreportdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentreportdetails',
  templateUrl: 'studentreportdetails.html',
})
export class StudentreportdetailsPage {
  type;
  extras;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopProvider: DesktopProvider, private sessionProvider: SessionProvider) {
    let user;
    this.type = this.navParams.get('type');
    this.extras = this.navParams.get('body');
    console.log('extras ', this.extras)

    if(this.extras.user_id != undefined) {
      user = this.extras.user_id
    } else {
      user = this.sessionProvider.getUser().id;
    }

    console.log(this.type)
    if(this.type == 'evals') {

      this.desktopProvider.fetchAllEvaluationAttempt(user, this.extras.subject_id, this.extras.topic_id).subscribe((response: any) => {
        console.log(response);
        this.data = response;
      });
     } else {
      this.desktopProvider.fetchAllExamAttempt(user, this.extras.exam_id, this.extras.subject_id).subscribe((response: any) => {
        console.log(response);
        this.data = response;
      })
    }
  }

  validDate(date) {
    return (date != 'undefined') && (date != 'null');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentreportdetailsPage');
  }

}
