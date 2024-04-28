import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { RecipeModel } from "../models/recipe.model";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class LoggingService {

  url!:'http://localhost:3000/'
 
  status: string = ''
  recipes!: RecipeModel[]
  constructor(private http:HttpClient){

  }
  private dataSubject = new Subject<RecipeModel[]>();
  data$: Observable<RecipeModel[]> = this.dataSubject.asObservable();
 
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
