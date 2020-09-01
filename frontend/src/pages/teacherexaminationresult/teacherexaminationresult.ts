import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { Chart } from "chart.js";
import { StudentresultsPage } from '../studentresults/studentresults';
import { saveAs } from 'file-saver'

@IonicPage()
@Component({
  selector: 'page-teacherexaminationresult',
  templateUrl: 'teacherexaminationresult.html',
})
export class TeacherexaminationresultPage {
  exams: any;
  examsLoaded: Promise<boolean>;

  data: any;

  currentExam = '';

  aggregates: any;
  aggregatesLoaded: Promise<boolean>;
  canDownloadExport: boolean;
  downloadLink: any;

  private lineChart: Chart;
  @ViewChild('lineChart') lineCanvas: ElementRef;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loader: LoadingController,
    public navParams: NavParams,
    private desktopProvider: DesktopProvider
  ) { }

  ionViewDidLoad() {
    this.fetchExams();
  }

  fetchExams() {
    this.desktopProvider.fetchSuperExam().subscribe((response: any) => {
      this.exams = response;
      this.examsLoaded = Promise.resolve(true);
      this.currentExam = this.exams[0].name;
      this.fetchExamChartScores(this.exams[0]);
    });
  }


  fetchExamChartScores(exam) {
    this.desktopProvider.fetchExaminationForChartScores(exam.id).subscribe((response: any) => {
      this.currentExam = exam.name;
      this.fetchExamAggregates(exam.id);
      this.data = response;
      let labels = this.data.map((val) => {
        return val.name
      });

      let values = this.data.map((val) => {
        return val.score
      });

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Chart of subject taken in this exam',
            data: values
          }]
        }
      })

    })
  }

  fetchExamAggregates(exam_id) {
    this.desktopProvider.fetchExaminationAgg(exam_id).subscribe((response: any) => {
      this.aggregates = response;
      this.aggregatesLoaded = Promise.resolve(true);
    });
  }

  viewPerformances(aggregate) {
    console.log('user_id ', aggregate)
    this.navCtrl.push(StudentresultsPage, {
      user: aggregate.id // should be user_id but it is returned as null and then the value is attached to the *id* property
    });
  }

  exportResult() {
    const loader = this.loader.create();
    loader.present()
      .then(_ => {
        this.desktopProvider.exportExamResults()
          .subscribe((res: any) => {            
            saveAs(res, 'exam.csv')
            loader.dismiss();            
          }, (err) => {
            loader.dismiss();
          })
      })
  }
}
