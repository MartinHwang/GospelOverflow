import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: Http
  ) { }

  getTaskAll(){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(environment.hurBaseUrl + '/tasks', options).map(res => res.json());
  }

  getDailyTaskAll(category: string){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(environment.hurBaseUrl + '/tasks/'+`${category}`, options).map(res => res.json());
  }

  getWeeklyTaskAll(category: string){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(environment.hurBaseUrl + '/tasks/'+`${category}`, options).map(res => res.json());
  }

  getMonthlyTaskAll(category: string){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(environment.hurBaseUrl + '/tasks/'+`${category}`, options).map(res => res.json());
  }

  addTask(task: Task){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.post(environment.hurBaseUrl + '/tasks/register', task, options).map(res => res.json());
  }
}
