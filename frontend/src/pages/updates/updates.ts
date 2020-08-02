import { Component } from "@angular/core";
import { config } from "../../config";
import { Storage } from "@ionic/storage";

import { UpdatesProvider } from '../../providers/updates/updates'
import { OfflineProvider } from '../../providers/offline/offline'
import { NetworkProvider } from '../../providers/network/network'
import { NavController } from "ionic-angular";

import { SubscriptionPage } from '../subscription/subscription'

@Component({
    selector: "page-updates",
    templateUrl: "updates.html"
})
export class UpdatesPage {
    config: any;
    downloading: boolean = false
    currentProgress: number = 0;
    totalProgress: number = 0;
    progressText: string = ''
    downloadsLeft: number = 0;
    subjects: any = null;
    updating: boolean = false
    updated: boolean = false
    finishedDownloads = 0
    finishedUpdates = 0;
    progress = 0;
    totalMap = 0
    error = false;
    hasSubscribed: any = false

    constructor(private nav: NavController, private updatesProvider: UpdatesProvider, private offlineProvider: OfflineProvider, private networkProvider: NetworkProvider, private storage: Storage) {
        this.config = config;
    }

    ionViewWillEnter() {
        this.storage.get('subscribed').then(val => {
            this.hasSubscribed = val
            console.log('is subscribed ', val)
        })
    }

    goToSubscriptionPage() {
        this.nav.setRoot(SubscriptionPage);
    }

    updateDatabase = async (response: any) => {

        if (response.status == 'success') {
            const { data } = response
            for (const tableName in data) {
                const table = data[tableName]

                if (table.length != 0) {

                    await this.offlineProvider.updateTable(tableName, table).then(value => {
                        console.log('finished  updating ', table)
                    }).catch(error => {
                        console.log(error)
                        this.downloading = false;
                        this.updating = false;
                    })
                }
                this.updating = false;
                this.updated = true;
                this.storage.set('last_updated_time', new Date().toISOString())
            }
        }

    }

    getProgress(event) {

        switch (event.type) {
            case 0:
                this.totalProgress = 0;
                this.progressText = `Downloaded ${this.totalProgress}% of ${100}%.`;
                this.downloadsLeft += 1;
                console.log('new download: ', this.downloadsLeft)
                return;
            case 3:
                /**
                 * table download is in progress, total table size is not
                 * in the total map opbject, add it and update the table's progess
                 * in the progress object
                 */
                if (this.totalMap === 0) {
                    this.totalMap = event.total
                }
                this.progress = event.loaded;

                // calculate the percentage done and update the dom
                let percentDone = Math.round(100 * this.progress / this.totalMap);
                return this.progressText = `Downloading updates...`;

            case 4:
                /**
                 * a download has completed
                 * subtract one from the nubmer of downloads left and if it is zero
                 * set downloading to false
                 */
                this.downloadsLeft -= 1;
                this.finishedDownloads += 1
                if (this.downloadsLeft === 0) {
                    this.downloading = false
                    this.updating = true;
                }

                return this.updateDatabase(event.body)

            default:
                this.progressText = `download started`;
                this.totalProgress = 0;
                return
        }




    }

    handleError(error) {

        this.updating = false;
        this.downloading = false
        this.updated = false;
        this.error = true
    };

    handleResponse(response) {

        this.downloading = false
        this.updating = true;
        this.updateDatabase(response)
    }

    downloadUpdates = async () => {
        // console.log('online: ', navigator.onLine, this.networkProvider.noConnection())
        if (this.networkProvider.isOffline()) return;
        this.error = false;

        if (this.downloading) return;
        this.downloading = true
        this.progressText = `Downloading updates...`;

        const last_updated_time = await this.storage.get('last_updated_time')
        console.log(last_updated_time)

        await this.updatesProvider.downloadUpdates(last_updated_time, this.handleResponse.bind(this), this.handleError.bind(this))
            .then(
                (response: any) => {
                    response.subscribe(res => {
                    })
                }
            ).catch(error => console.log('error: ', error))
    }
}
