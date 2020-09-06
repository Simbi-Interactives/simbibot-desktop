import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ModalCmp, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { EditStudentPage } from '../editstudent/editstudent';

/**
 * Generated class for the CreatestudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createstudent',
  templateUrl: 'createstudent.html',
})
export class CreatestudentPage {
  createStudentForm: FormGroup;
  bulkuploadfile: File;
  users: any = [];
  loaded: Promise<boolean>;
  page = 1;

  uploading = false;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private desktopProvider: DesktopProvider, private toastCtrl: ToastController) {
    this.createStudentForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    });
  }

  ionViewDidLoad() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.desktopProvider.fetchStudents(this.page).subscribe((response: any) => {
      this.users = response;
      this.loaded = Promise.resolve(true);
    }, (err: any) => {
      console.log(err);
    });
  }

  submit() {
    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loader.present();

    this.desktopProvider.createStudent(this.createStudentForm.value).subscribe((resp: any) => {
      loader.dismiss();
      this.createStudentForm.reset();
      this.alertCtrl.create({
        title: 'Success',
        message: 'Student Created succesfully',
        buttons: [{
          text: 'ok',
          handler: () => {
            this.fetchUsers();
          }
        }]
      }).present();

    }, (err: any) => {
      loader.dismiss();
      this.alertCtrl.create({
        title: 'Error',
        message: err.error.message || 'An error occured',
        buttons: ['ok']
      }).present();
    })
  }

  selectFile(event) {
    console.log(event);
    this.bulkuploadfile = event.target.files[0];
  }

  uploadStudent() {
    this.uploading = true;
    this.desktopProvider.bulkUploadStudent(this.bulkuploadfile).subscribe((response: any) => {
      this.uploading = false;
      this.fetchUsers();

      this.toastCtrl.create({
        message: 'Bulk upload completed successfully',
        duration: 1000,
      }).present();

    }, (err: any) => {

      this.uploading = false;
      this.toastCtrl.create({
        message: 'An error occured',
        duration: 1000,
      }).present();

    });
  }

  editStudentDetails(user) {
    console.log('edit ', user);
    let editModal = this.modalCtrl.create(EditStudentPage, { user })
  
    editModal.present();

    editModal.onDidDismiss(data =>{
      console.log('data ', data)
      if(data.refresh === true) {
        this.fetchUsers();
      }
    })
  }

  pageChange(p) {
    this.page = p;
    this.fetchUsers();
  }
}
