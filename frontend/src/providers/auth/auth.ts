import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "../../config";
import { Device } from "@ionic-native/device";

@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient, private device: Device) {}

  checkEmail(email) {
    const device_id = this.device.uuid;
    return this.http.post(`${config.base_url}auth/validate-email?source=mobile&device_id=${device_id}`, {
      email: email
    });
  }

  verifyActivation(body) {
    return this.http.post(`${config.base_url}schools-management/schools/check-activation-key`, body); 
  }

  login(email, password) {
    const device_id = this.device.uuid;
    return this.http.post(`${config.base_url}auth/login?source=mobile&device_id=${device_id}`, {
      email: email,
      password: password
    });
  }

  loginAsAdmin(body) {
    return this.http.post(`${config.base_url}schools-management/schools/login`, body);
  }

  signup(body) {
    return this.http.post(`${config.base_url}schools-management/schools/new`, body);
  }

  public submitUserProgress(user_id, body) {
    return this.http.post(`${config.base_url}user/${user_id}/progress`, body);
  }

  public updateUserTrack(user_id, topic_id) {
    return this.http.get(`${config.base_url}user/${user_id}/track/${topic_id}`);
  }
}
