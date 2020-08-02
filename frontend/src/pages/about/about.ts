import { Component } from "@angular/core";
import { config } from "../../config";
import { SocialSharing } from "@ionic-native/social-sharing";


@Component({
    selector: "page-about",
    templateUrl: "about.html"
})
export class AboutPage {
    config: any;

    constructor(private socialSharing: SocialSharing) {
        this.config = config;
    }
    share() {
        this.socialSharing
            .share(
                `Check out Simbi, I use it to prepare for ${config.version_name}. Join me at`,
                `Simbibot`,
                ``,
                `https://learn.simbibot.com`
            )
            .then(() => {
                console.log('successfully shared')
            });
    }
}
