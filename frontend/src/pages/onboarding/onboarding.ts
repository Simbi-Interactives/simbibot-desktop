import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { OfflineProvider } from "../../providers/offline/offline";
import { DesktopProvider } from "../../providers/desktop/desktop";

@IonicPage()
@Component({
  selector: "page-onboarding",
  templateUrl: "onboarding.html"
})
export class OnboardingPage {
  topic: any;
  subject: any;
  loaded: Promise<boolean>;
  questions: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewController: ViewController,
    private offlineProvider: OfflineProvider,
    private desktopProvider: DesktopProvider
  ) {
    this.topic = this.navParams.get("topic");
    this.subject = this.navParams.get("subject");
    this.fetchQuestion(this.topic.id);
  }

  ionViewDidLoad() {}

  fetchQuestion(topic_id) {
    this.desktopProvider.fetchQuestionsForEvaluation(topic_id).subscribe((response: any) => {
      this.questions = response;
      this.loaded = Promise.resolve(true);
    });
  }

  takeTest(test_type) {
    this.viewController.dismiss({
      take_test: true,
      questions: this.questions,
      test_type: test_type
    });
  }
}
