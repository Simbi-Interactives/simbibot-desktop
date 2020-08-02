import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ThemeableBrowser,
  ThemeableBrowserOptions,
  ThemeableBrowserObject
}
  from "@ionic-native/themeable-browser";
import { Events } from 'ionic-angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';


@Injectable()
export class InappbrowserProvider {

  constructor(private themeableBrowser: ThemeableBrowser, private spinnerDialog: SpinnerDialog, private events: Events) {
  }

  options: ThemeableBrowserOptions = {
    hidden: false,
    statusbar: {
      color: "#36BFE9"
    },
    toolbar: {
      height: 60,
      color: "#36BFE9"
    },
    title: {
      color: "ffffff",
      showPageTitle: true,
    },
    backButton: {
      wwwImage: "",
      imagePressed: "back_pressed",
      align: "left",
      event: "backPressed"
    },
    forwardButton: {
      wwwImage: "",
      imagePressed: "forward_pressed",
      align: "left",
      event: "forwardPressed"
    },
    closeButton: {
      wwwImage: "assets/imgs/left-arrow.png",
      imagePressed: "close_pressed",
      align: "left",
      event: "closePressed"
    },
    customButtons: [
      {
        image: "share",
        imagePressed: "share_pressed",
        align: "right",
        event: "sharePressed"
      }
    ],
    backButtonCanClose: true
  };
  openBrowser(url) {
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', this.options);
    browser.on('loadstart').subscribe(event => {
      console.log('browser loading ', browser)
      this.spinnerDialog.show();
      console.log(event);

      let url: string = event.url;
      console.log(event)
      let startWith = url.includes('simbibot');

      if (startWith == true) {
        // this.spinnerDialog.hide();
        // return browser.close();
      }
    })
    browser.on('loadstop').subscribe(event => {
      console.log('browser loaded ', event)
      this.spinnerDialog.hide();
      browser.show();
    });
    browser.on('exit').subscribe(event => {
      console.log('browser closed ', event)
      this.events.publish('browser_closed');
    })
  }

}
