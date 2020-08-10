import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CreatestudentPage } from '../createstudent/createstudent';
import { LoginPage } from '../login/login';
import { TeacherevaluationresultPage } from '../teacherevaluationresult/teacherevaluationresult';
import { TeacherexaminationresultPage } from '../teacherexaminationresult/teacherexaminationresult';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the TeacherdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherdashboard',
  templateUrl: 'teacherdashboard.html',
})
export class TeacherdashboardPage {
  superexams: any;
  show_sweet: any;
  user: any;

  settingsLoaded: Promise<boolean>;
  constructor(public navCtrl: NavController, public session: SessionProvider, private toastCtrl: ToastController, public navParams: NavParams, private desktopProvider: DesktopProvider) {
    this.user = this.session.getUser();
    console.log('user ', this.user)
  }

  ionViewDidLoad() {
    this.fetchSuperExams();
  }

  createStudents() {
    this.navCtrl.push(CreatestudentPage);
  }


  logout() {
    localStorage.removeItem('user');
    this.navCtrl.setRoot(LoginPage, null, {
      animate: true,
      animation: "transition-ios",
      direction: "back"
    });
  }


  gotoEvaluationResult() {
    this.navCtrl.push(TeacherevaluationresultPage, {}, {
      animate: true,
      animation: "transition-ios",
      direction: "forward"
    });
  }

  gotoExaminationResult() {
    this.navCtrl.push(TeacherexaminationresultPage, null, {
      animation: 'transition-ios',
      animate: true,
      direction: "forward"
    });
  }

  fetchSuperExams() {
    this.desktopProvider.fetchSuperExam().subscribe((response: any) => {
      console.log(response);
      this.superexams = response;
    });

    this.desktopProvider.checkIfTeacherHasubscribed().subscribe((response: any) => {
      console.log(response);
      this.show_sweet = response.show_sweet;
      this.settingsLoaded = Promise.resolve(true);
    });
  }

  updateExam(event, i) {
    let body = {};
    if (event.checked === true) {
      body = {
        value: 1,
        id: this.superexams[i].id
      }
    } else {
      body = {
        value: 0,
        id: this.superexams[i].id
      }
    }
    this.desktopProvider.updateexamsettings(body).subscribe((response: any) => {
      this.toastCtrl.create({
        message: 'Hurray, settings updated',
        duration: 2000
      }).present();
    }, (err: any) => {
      this.toastCtrl.create({
        message: 'Oops an error occured',
        duration: 2000
      }).present();
    });
  }

  updateSweetSixteen(event) {
    let val = null;
    if (event.checked === true) {
      val = 1;
    } else {
      val = 0;
    }

    this.desktopProvider.setNovel(val).subscribe((response: any) => {
      this.toastCtrl.create({
        message: 'Hurray, settings updated',
        duration: 2000
      }).present();
    }, (err: any) => {
      this.toastCtrl.create({
        message: 'Oops an error occured',
        duration: 2000
      }).present();
    });
  }
}
