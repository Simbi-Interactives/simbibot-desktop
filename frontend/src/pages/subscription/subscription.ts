import { Component, ɵConsole } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Events,
  AlertController,
  MenuController,
  ModalController,
} from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";
import { SubscriptionProvider } from "../../providers/subscription/subscription";
import { InappbrowserProvider } from "../../providers/inappbrowser/inappbrowser";
import { NetworkProvider } from "../../providers/network/network";
import { Device } from "@ionic-native/device";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { PaywithCardPage } from '../paywithcard/paywithcard'
import { config } from "../../config";

@IonicPage()
@Component({
  selector: "page-subscription",
  templateUrl: "subscription.html"
})
export class SubscriptionPage {
  showCard: string;
  user: any;
  loaded: Promise<boolean>;
  canGoBack: boolean;
  hasExpired: boolean = false;
  pageTitle: string = 'Payment'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    private subscription: SubscriptionProvider,
    private loader: LoadingController,
    private inappbrowser: InappbrowserProvider,
    private events: Events,
    private device: Device,
    private storage: Storage,
    private alertController: AlertController,
    private menuController: MenuController,
    private network: NetworkProvider,
    private modalController: ModalController
  ) {
    this.menuController.swipeEnable(false);
    this.storage.get("status").then(val => {
      if (val != null) {
        this.showCard = val;
        this.storage.get("user").then(user => {
          if (user != null) {

            this.user = user;
            this.loaded = Promise.resolve(true);
          }
        });
      }
    });

  }

  ionViewWillEnter() {
    console.log(this.loaded, ' will enter')
    this.storage.get("expiry_date").then(expiryDate => {
      this.storage.get("status").then(status => {
        if (!expiryDate) {
          expiryDate = new Date();
          // Change to 1 day
          expiryDate.setDate(expiryDate.getDate() + 1);

          this.storage.set("expiry_date", expiryDate);
          this.storage.set("status", "notshared");
        }
        let today = new Date();
        const expireTime = new Date(expiryDate).getTime()
        // check if user's free time has expired
        this.hasExpired = today.getTime() > expireTime

        this.showCard = status || 'notshared';

        this.canGoBack = !this.hasExpired;

        if (this.canGoBack) this.pageTitle = 'Activation'
        console.log(this.canGoBack, this.hasExpired, expiryDate)
      })

    })
  }

  ionViewWillLeave() {
    this.menuController.swipeEnable(true);
    this.events.unsubscribe('browser_closed')
  }

  openPaywithcardInfo = () => {
    const modal = this.modalController.create(PaywithCardPage);
    modal.present();
  }

  async checkIfUserHasSubscribed() {

    let loader = this.loader.create({
      content: "Loading..."
    });
    loader.present();

    let device_id = this.device.uuid;

    this.subscription.checkIfUserHasSubscribed(device_id).then(resp => {
      resp.subscribe(
        (response: any) => {
          loader.dismiss();
          this.storage.set("subscribed", true);
          this.storage.set(
            "expiry_date",
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          );
          this.events.publish('user_subscribed')
          this.navCtrl.setRoot(HomePage, null, {
            animate: true,
            animation: "transition-ios",
            direction: "back"
          });
        },
        (err: any) => {
          loader.dismiss();
          this.alertController
            .create({
              title: "Payment Error",
              message: "Payment was incomplete."
            })
            .present();
        }
      );
    });
  }

  share() {
    this.socialSharing
      .share(
        `Check out Simbi, I use it to prepare for ${config.version_name}. Join me at`,
        `Simbibot`,
        ``,
        `https://learn.simbibot.com`
      )
      .then(() => {
        let date = new Date();
        //Remember to return to 2days.
        date.setDate(date.getDate() + 2);
        console.log('new expire date ', date);
        this.storage.set("expiry_date", date);
        this.storage.set("status", "shared");
        this.navCtrl.setRoot(HomePage, null, {
          animation: "transition-ios",
          animate: true,
          direction: "back"
        });
      });
  }

  subscribe() {
    console.log(this.network.isOffline())
    if (this.network.isOffline()) return;

    let loader = this.loader.create({
      content: "Loading..."
    });
    loader.present();
    this.subscription.subscribeForExam().then((response: any) => {
      response.subscribe(res => {
        console.log(res);
        loader.dismiss();
        this.events.subscribe("browser_closed", () => {
          this.checkIfUserHasSubscribed();
        });
        this.inappbrowser.openBrowser(res.payment_url);
      });
    });
  }
}
