import { Component } from "@angular/core";
import { NavController, Events } from "ionic-angular";
import { config } from "../../config";
import { InappbrowserProvider } from "../../providers/inappbrowser/inappbrowser";
@Component({
  selector: "page-syllabus",
  templateUrl: "syllabus.html"
})
export class SyllabusPage {
  config: any;
  subjects: any[] = [{ name: "Mathematics", color: "#00DBAA", id: 1, image_url: "https://chat.simbibot.com/storage/subjects/icons/nay5afGwSz1F3PXRUIQU9VpCuuTSt9CGrUwmHbtb.png", doc: "https://drive.google.com/file/d/19NXhh9_30nBQZK1l8Z9x9AjEgp6EWTuK/view" },
  { name: "english", color: "#A560E8", id: 2, image_url: "https://chat.simbibot.com/storage/subjects/icons/CLc9iN4pCbuTAJ2ctQ93LyVyNbrDzOqoL0G08iHU.png", doc: "https://drive.google.com/open?id=1OC6rHR_u5qBBLPQdUTVmLqpIBflHDBY4" },
  { name: "biology", color: "#7AC70C", id: 3, image_url: "https://chat.simbibot.com/storage/subjects/icons/owTawhblrS3eeP96dPKoeEly5BWGoFUMzVwPtOyS.png", doc: "https://drive.google.com/open?id=1llMooY50z7kq5Trj5KT1pQIH1uiASZBk" },
  { name: "physics", color: "#E53B3B", id: 4, image_url: "https://chat.simbibot.com/storage/subjects/icons/o6UNSDFqMJNsHS3f3nQBLuvldUWjzR9zTrXLzgHF.png", doc: "https://drive.google.com/file/d/1I-JH_NpJlFjI50LPqv_y2ofmFXVa6-kA/view?usp=sharing" },
  { name: "chemistry", color: "#04A8FF", id: 5, image_url: "https://chat.simbibot.com/storage/subjects/icons/PqnO8HZgICktVYHlYU9LZeIgDxeCE899wxP9HY6a.png", doc: "https://drive.google.com/open?id=1QeWiBWIhahBXJbmDmDr2yfIuASAEnQ9l" },
  { name: "economics", color: "#F7C72E", id: 6, image_url: "https://chat.simbibot.com/storage/subjects/icons/Ia9HuZOl9TMlTLoxD4nzEb3LY4B1AU1drao3dVew.png", doc: "https://drive.google.com/open?id=1X2Qhp27_TYB1sAyrPp3rkcGf3dHs-iJo" },
  { name: "agriculture", color: "#F7C72E", id: 7, image_url: "https://chat.simbibot.com/storage/subjects/icons/3hc53l1zS5Y6bB1Dxtntc1CT4ONhmsVmrszeTtop.png", doc: "https://drive.google.com/open?id=1X319J3erRoqifjDNXrrM-lPTmSHF0-Ue" },
  { name: "geography", color: "#FF6377", id: 8, image_url: "https://chat.simbibot.com/storage/subjects/icons/UhpurdN0JAxqsiocUdUzMdsJTsdKjTE1yikmuTGC.png", doc: "https://drive.google.com/open?id=1FAij1xwsyFEXFIqjtPvOxjU26SI3cZta" },
  { name: "CRS", color: "#A560E8", id: 9, image_url: "https://chat.simbibot.com/storage/subjects/icons/Grx0oPrs6lIjLNhvUXhd6GS694uMW5ZGsRjQoXRy.png", doc: "https://drive.google.com/open?id=1leeUZds6Q0fGA8jd52rg9snU6LOhSdki" },
  { name: "government", color: "#E53B3B", id: 10, image_url: "https://chat.simbibot.com/storage/subjects/icons/VN4UJQrHeCr0Qeehybfsx370xYWk4c8AduaWyFzw.png", doc: "https://drive.google.com/open?id=1P9xKX0Iuxe33wl-gn41Wq1U6oy7_1-Wr" },
  { name: "commerce", color: "#7AC70C", id: 12, image_url: "https://chat.simbibot.com/storage/subjects/icons/ZCLzm1uf8X3H4oNhS34cyGVZ5DQOLDiu2w1ncUc1.png", doc: "https://drive.google.com/open?id=1vjMtbBwVOdfGRxIPnmBXKNSu70fhLcZY" },
  { name: "account", color: "#F7C72E", id: 13, image_url: "https://chat.simbibot.com/storage/subjects/icons/bKdKFjs1YLa6Te3m0Xn1bqrBI8cQKDIuNPEOK529.png", doc: "https://drive.google.com/open?id=18AJYv1RwU3u0sq2MCNqv_GPMy8_TcPyw" },
  { name: "literature", color: "#FF6377", id: 14, image_url: "https://chat.simbibot.com/storage/subjects/icons/FHzNoIxMCdxRNZpJzbfGybRQmOyA9bRjtyTby4Pv.png", doc: "https://drive.google.com/open?id=1CueSMrRZfVreXUlGKRJ20cyBmB2duTPO" },
  { name: "Civic Education", color: "#FFA500", id: 21, image_url: "https://chat.simbibot.com/storage/subjects/icons/3hc53l1zS5Y6bB1Dxtntc1CT4ONhmsVmrszeTtop.png", doc: "https://drive.google.com/open?id=192oQ32ldVn0K2eKZVyB5Rbs-m2P-ygT1" }]

  constructor(
    public navCtrl: NavController,
    private inappbrowser: InappbrowserProvider,
    public events: Events
  ) {
    this.config = config;

  }

  openSyllabus(subject) {
    console.log('open ', subject);
    if (subject.doc) {
      this.inappbrowser.openBrowser(subject.doc)
    }
  }
  ionViewDidLoad() {
    this.events.publish("play_bg_audio");
  }
}
