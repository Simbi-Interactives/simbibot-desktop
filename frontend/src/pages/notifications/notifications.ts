import { Component, ViewChild, } from "@angular/core";
import { InfiniteScroll } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { config } from "../../config";
import { NotificationsProvider } from '../../providers/notifications/notifications'
import { InappbrowserProvider } from "../../providers/inappbrowser/inappbrowser";


@Component({
    selector: "page-notifications",
    templateUrl: "notifications.html"
})

export class NotificationsPage {
    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

    config: any;
    notifications: any[] = []
    loaded: boolean = false;
    response: any = null;

    constructor(
        private notifier: NotificationsProvider,
        private storage: Storage,
        private inappbrowser: InappbrowserProvider, ) {
        this.config = config;
    }

    ionViewDidLoad = async () => {
        const notifications = await this.storage.get('notifications')
        if (notifications) {
            this.loaded = true;
            this.notifications = notifications
        }

        this.notifier.getNotifications().then(response => {
            response.subscribe((resp: any) => {
                console.log('notifications ', resp.data)
                this.loaded = true;
                this.notifications = resp.data.data;
                this.storage.set('notifications', this.notifications)
                this.response = resp.data;
            })

        })
    }

    openNotification(notification) {
        if (notification.url) {
            this.inappbrowser.openBrowser(notification.url);
        }
    }

    loadData(event) {

        if (this.response && this.response.next_page_url) {
            this.notifier.getNextPage(this.response.next_page_url).then(response => {
                response.subscribe((resp: any) => {

                    this.loaded = true;
                    this.notifications = this.notifications.concat(resp.data.data)
                    this.response = resp.data;
                    this.storage.set('notifications', this.notifications)
                    event.complete();
                }, (error: any) => {
                    console.log('error ', error);
                    event.complete();
                })
            })
        } else {
            event.complete();
        }


    }

}
