import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { SessionProvider } from '../../providers/session/session';
import { ThrowStmt } from '@angular/compiler';
import { StudentreportdetailsPage } from '../studentreportdetails/studentreportdetails';

/**
 * Generated class for the StudentresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentresults',
  templateUrl: 'studentresults.html',
})
export class StudentresultsPage {
  exams;
  evals;

  type= "evals";
  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopProvider: DesktopProvider, private sessionProvider: SessionProvider  ) {
  }

  ionViewDidLoad() {
    let user;
    if(this.navParams.get('user')) {
      user = this.navParams.get('user');
    } else {
      let u = this.sessionProvider.getUser();
      user = u.id;
    }

    console.log(user);
    this.desktopProvider.fetchExaminationAverage(user).subscribe((response: any) => {
      // console.log(response);
      this.exams = response;
    });

    this.desktopProvider.fetchEvaluationAverage(user).subscribe((response: any) => {
      console.log(response);
      this.evals = response;
    })
  }

  viewPerfomances(type, i) {
    let body;
    if(type=='exams') {
      body = this.exams[i];
    }

    if(type == 'evals') {
      body = this.evals[i];
    };

    this.navCtrl.push(StudentreportdetailsPage, {
      type,
      body 
    });
  }

}
