import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class SessionProvider {
  constructor(private storage: Storage) { }

  public newUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  public getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user;
  }


  public checkUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if(user != null || user != undefined) {
      return true;
    } else {
      return false;
    }
  }
}
