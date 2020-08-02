import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { TeacherdashboardPage } from '../teacherdashboard/teacherdashboard';

/**
 * Generated class for the CreateteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createteacher',
  templateUrl: 'createteacher.html',
})
export class CreateteacherPage {
  createTeacherForm: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private FormBuilder: FormBuilder, private desktopProvider: DesktopProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.createTeacherForm = this.FormBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
  }

  
  submit() {
    let loader = this.loadingCtrl.create({
      content: 'Creating Teacher'
    });

    loader.present();

    this.desktopProvider.createTeacher(this.createTeacherForm.value).subscribe((resp) => {
      
      loader.dismiss();
      this.alertCtrl.create({
        title: 'Success',
        message: 'Admin Created Successfully',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(TeacherdashboardPage);
          }
        }]
      }).present();
    }, (err: any) => {
      
      loader.dismiss();
      this.alertCtrl.create({
        title: 'Error',
        message: 'An error occured while attempting to create Admin account',
        buttons: ['ok']
      }).present();
    }, () => {
    })
  }

}
