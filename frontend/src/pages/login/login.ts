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
  MenuController
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Device } from "@ionic-native/device";
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

import { SubscriptionProvider } from "../../providers/subscription/subscription";
import { AuthProvider } from "../../providers/auth/auth";
import { NetworkProvider } from "../../providers/network/network";
import { SessionProvider } from "../../providers/session/session";
import { InappbrowserProvider } from '../../providers/inappbrowser/inappbrowser';
import { config } from '../../config'
import { DesktopProvider } from "../../providers/desktop/desktop";
import { TeacherdashboardPage } from "../teacherdashboard/teacherdashboard";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: any;
  password: any;
  showLogin: boolean;
  user: any;
  currentMessage: string;
  registerUserBody: FormGroup;
  @ViewChild("slides") slides: Slides; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private network: NetworkProvider,
    private toast: ToastController,
    private alertController: AlertController,
    private session: SessionProvider,
    private menuController: MenuController,
    private desktopProvider: DesktopProvider,
    public appPreferences: AppPreferences
  ) {
    this.currentMessage = "Can I get your email?";
    this.registerUserBody = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.minLength(11)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.menuController.swipeEnable(false);
  }

  ionViewDidLoad() {
  }

 

  loginUser() {
    if (!this.email || this.email.lenght === 0) return;
    if(!this.password || this.password.lenght === 0) return;
    
    let loader = this.loadingCtrl.create({
      cssClass: "my-loading"
    });

    loader.present();
    
    this.desktopProvider.login({ email: this.email, password: this.password}).subscribe((resp: any) => {
      loader.dismiss();
      console.log(resp);
      this.session.newUser(resp);
      if(resp.usertype == 'teacher') this.navCtrl.setRoot(TeacherdashboardPage);

      if(resp.usertype == 'student') this.navCtrl.setRoot(HomePage);

      if(resp.usertype == 'admin') null;
    }, (err: any) => {
      console.log(err)
      loader.dismiss();

      this.alertController.create({
        title: 'Error',
        message: err.error.message || 'An error occured while attempting to login',
        buttons: ['ok']
      }).present();
    });
  }


  

  alertMessage(message) {
    this.alertController
      .create({
        subTitle: "Opps, an error occured",
        message: message,
        buttons: ["ok"]
      })
      .present();
  }
}
