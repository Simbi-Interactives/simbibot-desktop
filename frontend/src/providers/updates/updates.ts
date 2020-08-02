import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { first, map, catchError, retry } from "rxjs/operators";
import { config } from "../../config";
import { Device } from "@ionic-native/device";



@Injectable()
export class UpdatesProvider {
    url = "https://learn.simbibot.com/api/app_updates?last_updated_time=";
    constructor(
        public http: HttpClient,
        public storage: Storage,
        private device: Device
    ) {

    }

    public async downloadUpdates(lastUpdateTime, progressMessage, handleError) {

        const req = new HttpRequest('get', `${this.url}${lastUpdateTime}`, null, { reportProgress: true })
        // return this.http.request(req).pipe(map(event => progressMessage(event)), retry(3), catchError(handleError))
        return this.http.get(`${this.url}${lastUpdateTime}`, { reportProgress: true }).map(progressMessage, handleError)
    }

    /*
    public async downloadSubjects(progressMessage) {

        const req = new HttpRequest('get', `${this.url}/subjects.json`, null, { reportProgress: true })
        return this.http.get(`${this.url}/subjects.json`, { reportProgress: true })
        // return this.http.request(req).pipe(map(event => progressMessage(event)))
    }

    public async downloadSuperExams(progressMessage) {
        const req = new HttpRequest('get', `${this.url}/super_exams.json`, null, { reportProgress: true })
        return this.http.request(req).pipe(map(event => progressMessage(event, 'super_exams')))
    }

    public async downloadTopics(progressMessage) {
        const req = new HttpRequest('get', `${this.url}/topics.json`, null, { reportProgress: true })
        return this.http.request(req).pipe(map(event => progressMessage(event, 'topics')))
    }

    public async downloadOptions(progressMessage) {
        const req = new HttpRequest('get', `${this.url}/options.json`, null, { reportProgress: true })
        return this.http.request(req).pipe(map(event => progressMessage(event, 'options')))
    }

    public async downloadQuestions(progressMessage) {
        const req = new HttpRequest('get', `${this.url}/questions.json`, null, { reportProgress: true })
        return this.http.request(req).pipe(map(event => progressMessage(event, 'questions')))
    }
    */

}