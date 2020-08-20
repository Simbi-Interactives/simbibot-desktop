import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesktopProvider } from '../../providers/desktop/desktop';
import { Chart } from "chart.js";
import { StudentreportdetailsPage } from '../studentreportdetails/studentreportdetails';
import { StudentresultsPage } from '../studentresults/studentresults';

@IonicPage()
@Component({
  selector: 'page-teacherevaluationresult',
  templateUrl: 'teacherevaluationresult.html',
})
export class TeacherevaluationresultPage {  
  subjects: any;
  subjectLoaded: Promise<boolean>;

  currentSubject = '';

  data: any;
  aggregates: any;
  aggregatesLoaded: Promise<boolean>;
  private lineChart: Chart; 
  @ViewChild('lineChart') lineCanvas: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopProvider: DesktopProvider) {
  }

  ionViewDidLoad() {
    this.fetchSubject();
  }

  fetchSubject() {
    this.desktopProvider.fetchSubjects().subscribe((response: any) => {
      this.subjects = response;
      this.subjectLoaded = Promise.resolve(true);
      this.currentSubject  = this.subjects[0].name;
      this.fetchChartData(this.subjects[0]);
    })
  }

  fetchChartData(subject) {
    this.currentSubject = subject.name;
    this.desktopProvider.fetchEvaluationForChartScores(subject.id).subscribe((response: any) => {
      this.fetchSubjectStudentAgg(subject.id);
      this.data = response;
      let labels = this.data.map((val) => {
        return val.topic
      });

      let values = this.data.map((val) => {
        return val.score
      });

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Chart of topics taken in this subject',
            data: values
          }]
        }
      })
    })
  }

  fetchSubjectStudentAgg(subjectId) {
    this.desktopProvider.fetchEvaluationAgg(subjectId).subscribe((response: any) => {
      this.aggregates = response;
      this.aggregatesLoaded = Promise.resolve(true);
    }); 
  }

  viewPerfomances(evals) {
    console.log(evals);
    this.navCtrl.push(StudentresultsPage, {
      user: evals.uid
    });
  }
}
