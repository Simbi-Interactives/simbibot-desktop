import { Component } from "@angular/core";
import {
    IonicPage,
    AlertController,
    NavController,
    Events,
    NavParams,
    Loading,
    LoadingController,
    ViewController

} from "ionic-angular";
import { SubscriptionProvider } from "../../providers/subscription/subscription";
import { Storage } from "@ionic/storage";
import { Device } from "@ionic-native/device";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DesktopProvider } from "../../providers/desktop/desktop";

@IonicPage()
@Component({
    selector: "page-editstudent",
    templateUrl: "editstudent.html"
})
export class EditStudentPage {
    isLoading: boolean = false
    userData: any;
    editStudentForm: FormGroup

    constructor(private storage: Storage,
        private viewController: ViewController,
        private loadingCtrl: LoadingController,
        private desktopProvider: DesktopProvider,
        private alertController: AlertController,
        private navParams: NavParams,
        private formBuilder: FormBuilder,

    ) {
        this.userData = this.navParams.get('user')
        
        this.editStudentForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.minLength(3)]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
        })
    }
    
    ionViewDidLoad() {
        console.log('form ', this.editStudentForm.controls)
        this.editStudentForm.controls.email.setValue(this.userData.email)
        this.editStudentForm.controls.firstname.setValue(this.userData.firstname)
        this.editStudentForm.controls.lastname.setValue(this.userData.lastname)
    }


    submit() {
        let loader = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loader.present();

        this.desktopProvider.editStudent(this.userData.id, this.editStudentForm.value).subscribe((resp: any) => {
            console.log('resp ', resp)
            loader.dismiss();
            this.editStudentForm.reset();
            this.alertController.create({
                title: 'Success',
                message: 'Student updated succesfully',
                buttons: [{
                    text: 'ok',
                    handler: () => {
                        this.viewController.dismiss({refresh: true});
                    }
                }]
            }).present();

        }, (err: any) => {
            loader.dismiss();
                this.alertController.create({
                title: 'Error',
                message: err.error.message || 'An error occured',
                buttons: ['ok']
            }).present();
        })
    }
}
