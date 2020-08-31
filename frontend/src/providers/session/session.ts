import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class SessionProvider {
  constructor(private storage: Storage) { }

  public newUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  public newAdmin(data) {
    localStorage.setItem('school_id', JSON.stringify(data.id));
    localStorage.setItem('user', JSON.stringify(data));
  }

  public getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  newActivationKey(data) {
    localStorage.setItem('activation_key', JSON.stringify(data));
  }

  getActivationKey() {
    // localStorage.removeItem('activation_key')
    return localStorage.getItem('activation_key');
  }

  isActivated() {
    let activation_key = JSON.parse(localStorage.getItem('activation_key'));
    console.log('key ', activation_key)
    if (activation_key || activation_key !== null || !this.hasExpired(activation_key)) {      
      console.log('activated ', activation_key)
      return true;
    } else {
      console.log('not activated ', activation_key)
      return false;
    }
  }

  hasExpired(activation_key) {
    //   create date objects for comparison
    if(!activation_key) return true;
       
    let today = new Date();
    let expiryTime = new Date(activation_key.expiry_date);

    return (today.getTime() > expiryTime.getTime())
  }

  public checkUser() {
    
    let user = JSON.parse(localStorage.getItem('user'));
    console.log('user ', user)

    if(user != null || user != undefined) {
      return true;
    } else {
      return false;
    }
  }
}
