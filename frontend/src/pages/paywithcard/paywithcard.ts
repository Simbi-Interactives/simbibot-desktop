import { Component } from "@angular/core";
import {
    IonicPage,
    AlertController,
    NavController,
    Events

} from "ionic-angular";
import { SubscriptionProvider } from "../../providers/subscription/subscription";
import { Storage } from "@ionic/storage";
import { Device } from "@ionic-native/device";

@IonicPage()
@Component({
    selector: "page-paywithcard",
    templateUrl: "paywithcard.html"
})
export class PaywithCardPage {
    isLoading: boolean = false

    constructor(private storage: Storage,
        private subscription: SubscriptionProvider,
        private alertController: AlertController,
        private device: Device,
        private events: Events
    ) {

    }

    checkSubscriptionStatus() {
        const device_id = this.device.uuid;
        this.isLoading = true

        this.subscription.checkIfUserHasSubscribed(device_id).then(resp => {
            resp.subscribe(
                (response: any) => {
                    console.log('res: ', response)
                    this.isLoading = false
                    this.storage.set("subscribed", true);
                    this.storage.set(
                        "expiry_date",
                        new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                    );
                    this.events.publish('user_subscribed')
                    this.alertController
                        .create({
                            title: "Subscription status",
                            message: "You subscription is active."
                        })
                        .present();

                },
                (errorResponse: any) => {
                    this.isLoading = false
                    console.log('error: ', errorResponse)
                    this.storage.set("subscribed", false);
                    this.alertController
                        .create({
                            title: "Subscription status",
                            message: errorResponse.error.message
                        })
                        .present();
                }
            );
        });
    }

}
