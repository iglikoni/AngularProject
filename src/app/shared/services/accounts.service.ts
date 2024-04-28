import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService {

  status: string = ''
  getUrl: any;

  logStatusChange(status: string) {
    console.log('Status has changed to: ', status);
  }

  setStatus(status: string) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

}
