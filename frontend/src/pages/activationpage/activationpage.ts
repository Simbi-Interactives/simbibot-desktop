import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  Events,
  LoadingController,
  ToastController,
  AlertController,
  MenuController,
  Toast
} from "ionic-angular";
// import { Storage } from "@ionic/storage";
// import { HomePage } from "../home/home";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

import { AuthProvider } from "../../providers/auth/auth";
// import { NetworkProvider } from "../../providers/network/network";
import { SessionProvider } from "../../providers/session/session";
import { TeacherdashboardPage } from "../teacherdashboard/teacherdashboard";
import { LoginPage } from "../login/login";
// import { InappbrowserProvider } from '../../providers/inappbrowser/inappbrowser';
// import { config } from '../../config'
// import { DesktopProvider } from "../../providers/desktop/desktop";
// import { TeacherdashboardPage } from "../teacherdashboard/teacherdashboard";

/**
 * Generated class for the ActivationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-activation",
  templateUrl: "activationpage.html"
})
export class ActivationPage {
  key: any;
  password: any;
  showLogin: boolean;
  user: any;
  currentMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private toast: ToastController,
    private alertController: AlertController,
    private session: SessionProvider,
    private menuController: MenuController,
    private _authProvider: AuthProvider,
    public appPreferences: AppPreferences
  ) {
    this.menuController.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.alertMessage('Contact +2349066450210 for your activation key')
    this.user = this.session.getUser()
  }


  submit() {
    console.log('key ', this.key, 'user ', this.user)

    if (this.key == '') {
      return this.alertMessage('Enter a valid activation key.');
    };

    let loader = this.loadingCtrl.create({
      cssClass: "my-loading"
    });

    loader.present();
    this._authProvider.verifyActivation({ activation_key: this.key, email: this.user.email })
      .subscribe((response: any) => {

        loader.dismiss();

        if (response.data.activation_key) {
          this.session.newActivationKey(response.data.activation_key)
          this.navCtrl.setRoot(TeacherdashboardPage);
        }  else {
          this.alertMessage("Activation Key doesn't exists, contact +2349066450210")
        }
      },
        (err: any) => {
          console.log(err);
          // this.alertMessage(err.error.message);
          loader.dismiss();
          this.handleAuthError(err)
        }
      );

  }

  handleAuthError(err) {
    const errors = [];

    err.error.errors && (Object.entries(err.error.errors)
      .forEach(([key, value]) => errors.push(`${key}: ${value}`)))

    let errorMessage = errors[0] || err.error.message;
    this.alertMessage(errorMessage || 'An unknown error occured');
  }

  alertMessage(message) {
    this.alertController
      .create({
        message: message,
        buttons: ["ok"]
      })
      .present();
  }


  showNoInternetConnection() {
    this.toast
      .create({
        message: "No Internet Connection.",
        cssClass: "errorToast",
        duration: 3000
      })
      .present();
  }


  logout() {
    localStorage.removeItem('user');
    this.navCtrl.setRoot(LoginPage, null, {
      animate: true,
      animation: "transition-ios",
      direction: "back"
    });
  }
}
