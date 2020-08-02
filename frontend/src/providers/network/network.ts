import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Network } from "@ionic-native/network";
import { Platform } from "ionic-angular";

@Injectable()
export class NetworkProvider {
  onDevice: boolean;
  connected: boolean = true;

  constructor(private network: Network, private platform: Platform) {
    this.onDevice = this.platform.is("cordova");
  }

  // ---- if there isn't any connection
  noConnection() {
    return this.network.type === "none";
  }

  // ------ if device is offline ---
  isOffline(): boolean {
    if (this.onDevice && this.network.type) {
      return this.network.type == "none";
    } else {
      return !navigator.onLine;
    }
  }
}
