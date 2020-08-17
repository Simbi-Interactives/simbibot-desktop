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
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { ActivationPage } from "../activationpage/activationpage";
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
  userTypeForm: FormGroup;
  loginForm: FormGroup;
  registerUserBody: FormGroup;
  showPassword: boolean = false;
  @ViewChild("slides") slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private loadingCtrl: LoadingController,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    private network: NetworkProvider,
    private inappBrowser: InappbrowserProvider,
    private alertController: AlertController,
    private session: SessionProvider,
    private menuController: MenuController,
    private desktopProvider: DesktopProvider,
    public appPreferences: AppPreferences
  ) {

    this.currentMessage = "Can I get your email?";

    this.userTypeForm = this.formBuilder.group({
      isStudent: ["", [Validators.required]],
    });

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],      
      password: ["", [Validators.required, Validators.minLength(6)]]
    });

    this.registerUserBody = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      address: ["", [Validators.required]],
      name: ["", [Validators.required]],
      // firstname: ["", [Validators.required]],
      // lastname: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.minLength(11)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.menuController.swipeEnable(false);
  }

  ionViewDidLoad() {
  }

  /*
    verifyEmailAddress() {
      // skip all actions if user has not entered their email    
      console.log(this.loginForm.controls.email.invalid)
      if (this.loginForm.controls.email.invalid) {
        return this.alertMessage('Enter a valid Email address');
      };
  
      let loader = this.loadingCtrl.create({
        cssClass: "my-loading"
      });
  
      loader.present();
      this.desktopProvider.checkEmail(this.loginForm.controls.email.value).subscribe(
        (response: any) => {
  
          if (response.message == true) {
            this.user = response.user;
            this.currentMessage = `Welcome back, ${response.user.firstname}`;
            this.showLogin = true;
            loader.dismiss();
          } else {
            this.registerUserBody.controls.email.setValue(this.email);
            this.next();
            loader.dismiss();
          }
        },
        (err: any) => {
          console.log(err);
          this.alertMessage(err.error.message);
          loader.dismiss();
        }
      );
  
    }
  */

  loginUser() {
    if (this.loginForm.invalid || this.userTypeForm.invalid) return;
    // if(!this.password || this.password.lenght === 0) return;    
    
    if (this.userTypeForm.controls.isStudent.value === "false") return this.loginAsAdmin();

    // prevent student or teacher login if app hasn't been activated or the activation key has expired
    if(!this.session.isActivated()) return this.alertMessage('You cannot login until your account has been activated, contact your admin or teacher for more info.')

    let loader = this.loadingCtrl.create({
      cssClass: "my-loading"
    });

    loader.present();

    this.desktopProvider.login(this.loginForm.value).subscribe((resp: any) => {
      loader.dismiss();      

      this.session.newUser(resp);

      if (resp.usertype == 'teacher') this.navCtrl.setRoot(TeacherdashboardPage);

      if (resp.usertype == 'student') this.navCtrl.setRoot(HomePage);

      if (resp.usertype == 'admin') null;

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

  loginAsAdmin() {
    if (!this.network.isOffline()) {
      let loader = this.loadingCtrl.create({
        cssClass: "my-loading"
      });

      loader.present().then(_ => {
        this._authProvider.loginAsAdmin(this.loginForm.value)
          .subscribe(async (response: any) => {
            loader.dismiss();

            console.log('admin login ', response)
            await this.session.newUser({...response.data, usertype: 'teacher'})

            // check if admin is activated on the desktop
            if(this.session.isActivated())  this.navCtrl.setRoot(TeacherdashboardPage);
            else this.navCtrl.setRoot(ActivationPage);
                        
          },
            (err: any) => {
              console.log('admin login error ', err)
              loader.dismiss();
              this.handleAuthError(err);
            }
          )
      })

    } else {
      this.showNoInternetConnection();
    }
  }

  registerUser() {
    if (!this.network.isOffline()) {
      let loader = this.loadingCtrl.create({
        cssClass: "my-loading"
      });

      loader.present().then(_ => {
        try {

          this._authProvider.signup(this.registerUserBody.value)
            .subscribe(async (response: any) => {
              console.log('registered ', response)
              loader.dismiss();
              await this.session.newUser({...response.data, usertype: 'teacher'});
              this.createLocalTeacherAccount(response.data)
            },
              (err: any) => {
                loader.dismiss();
                console.log('registered error ', err)
                this.handleAuthError(err)
              }
            )
        } catch (e) {
          console.log('login error ', e)
        }
      })

    } else {
      this.showNoInternetConnection();
    }
  }


  handleAuthError(err) {
    if(err.status === 0) {
      return this.showNoInternetConnection();
    }
    
    const errors = [];

    err.error.errors && (Object.entries(err.error.errors)
      .forEach(([key, value]) => errors.push(`${key}: ${value}`)))

    let errorMessage = errors[0] || err.error.message;
    this.alertMessage(errorMessage || 'An unknown error occured');
  }

  createLocalTeacherAccount(adminData) {
    let loader = this.loadingCtrl.create({
      cssClass: "my-loading"
    });

    loader.present()
      .then(_ => {
        this.desktopProvider.createTeacher({ ...adminData, password: this.registerUserBody.controls.password.value })
          .subscribe(async (resp) => {
            console.log('user ', this.session.getUser())
            console.log('teacher created ', resp);
            loader.dismiss();

            // await this.session.newUser(response.data);
            this.navCtrl.setRoot(ActivationPage);

            // this.alertCtrl.create({
            //   title: 'Success',
            //   message: 'Admin Created Successfully',
            //   buttons: [{
            //     text: 'Ok',
            //     handler: () => {
            //       this.navCtrl.setRoot(TeacherdashboardPage);
            //     }
            //   }]
            // }).present();
          }, (err: any) => {

            loader.dismiss();
            this.alertMessage('An error occured while attempting to create Admin account');
            //   this.alertCtrl.create({
            //     title: 'Error',
            //     message: 'An error occured while attempting to create Admin account',
            //     buttons: ['ok']
            //   }).present();
            // }, () => {
          })
      })

  }

  forgotPassword() {
    this.inappBrowser.openBrowser(config.forgotPassword);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log('showpasword ', this.showPassword)
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
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


  showNoInternetConnection() {
    this.toast
      .create({
        message: "No Internet Connection.",
        cssClass: "errorToast",
        duration: 3000
      })
      .present();
  }
}
