import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { ExamsubjectsPage } from '../examsubjects/examsubjects';

/**
 * Generated class for the PostutmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postutme',
  templateUrl: 'postutme.html',
})
export class PostutmePage {
  schools: any[];
  loaded: Promise<boolean>;
  selectedSchool: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopProvider: DesktopProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.fetchSchools();
  }


  fetchSchools() {
    this.desktopProvider.postUtmeSchools().subscribe((response: any) => {
      this.schools = response;
      this.loaded = Promise.resolve(true);
    }, (err: any) => {
      console.log(err);
      this.toastCtrl.create({
        message: 'An error occured'
      }).present();
    });
  }


  gotoSubjects(school) {
    this.navCtrl.push(ExamsubjectsPage, {
      exam: school
    }, {
      animate: true,
      animation: "transition-ios",
      direction: "forward"
    });
  }

}
