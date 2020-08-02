import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { first } from "rxjs/operators";
import { config } from "../../config";
import { Device } from "@ionic-native/device";

@Injectable()
export class SubscriptionProvider {
  url = "https://learn.simbibot.com/api/";
  constructor(
    public http: HttpClient,
    public storage: Storage,
    private device: Device
  ) { }

  public async checkIfFirstOpen() {

    let check = await this.storage.get("first_open");
    if (check == true) {
      return false;
    }

    if (check == null) {
      this.storage.set("first_open", true);
      return true;
    }
  }

  public async storeFirstDate(first_open_date) {
    let date = await this.storage.set("first_date", first_open_date);
    if (date) {
      return true;
    } else {
      return false;
    }
  }

  public async checkIfOneDayHasPassed() {
    let first_date: Date = await this.storage.get("first_date");

    let current_date = new Date();
    const seconds = 86400000;
    const diff = current_date.getTime() - first_date.getTime()
    console.log('diff: ', diff)
    console.log('time: ', seconds - diff);

    if (seconds < diff) {
      return true;
    } else {
      return false;
    }
  }

  public async CheckIfSubscribe() {

    const subscribed = await this.storage.get("subscribed");

    if (subscribed) {
      return true;
    } else {
      return false;
    }
  }

  public async checkIfUserHasSubscribed(device_id) {
    const user = await this.storage.get("user");
    return this.http.get(
      `${this.url}user/${user.id}/issubscribed?source=mobile&exam_id=${config.super_exam_id}&device_id=${device_id}`
    );
  }

  public async subscribeForExam() {
    let user = await this.storage.get("user");
    let body = {
      plan: "exam",
      exam_id: config.super_exam_id,
      user_id: user.id
    };
    return this.http.post(`${this.url}subscribe`, body);
  }

  public async confirmSubscription(txref) {
    let device_id = this.device.uuid;
    let user = await this.storage.get("user");
    return this.http.get(
      `${this.url}verify-payment?trxref=${txref}&source=mobile&device_id=${device_id}`
    );
  }
}
