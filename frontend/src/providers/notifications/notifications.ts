import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { first } from "rxjs/operators";
import { config } from "../../config";
import { Device } from "@ionic-native/device";

@Injectable()
export class NotificationsProvider {
  url = "https://learn.simbibot.com/api/inbox_messages";
  constructor(
    public http: HttpClient,
    public storage: Storage,
    private device: Device
  ) { }


  public async getNotifications() {
    return this.http.get(
      `${this.url}`
    );
  }

  public async getNextPage(url: string) {
    return this.http.get(
      `${url}`
    );
  }

}
