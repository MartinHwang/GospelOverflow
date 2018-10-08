import { Injectable } from '@angular/core';

// ===== Using Http =====
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// =======================

// ===== Using HttpClient =====
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ============================

import { Router } from '@angular/router';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';

// BehaviorSubject Test
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private title = new BehaviorSubject<string>('User Profile');
  cast = this.title.asObservable();

  user: User;

  selectedUser: User = {
    _id: '',
    name: '',
    username: '',
    email: '',
    password: '',
    createdDate: ''
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth' : 'True' })};

  constructor(
    private http: Http,
    private httpc: HttpClient,
    private router: Router
  ) { }

  editTitle(newTitle){
    this.title.next(newTitle);
  }

  // ========== Http Methods

  singIn(user){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    return this.http.post(environment.hurBaseUrl + '/users/login', user, {headers: myHeaders}).map(res => res.json());
  }  

  // contact(user){
  //   // let myHeaders = new Headers();
  //   // myHeaders.append('Content-Type', 'application/json');
  //   return this.http.post(environment.hurBaseUrl + '/users/login', user);
  // }


  // 1. import { HttpClient, HttpHeaders } from '@angular/common/http';
  // getUserAll(){
  //   return this.http.get(environment.hurBaseUrl + '/users');
  // }
 
  // 2. import { Http, Headers } from '@angular/http';
  getUserAll(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(environment.hurBaseUrl + '/users', {headers: myHeaders}).map(res => res.json());
  }


  // getUserAll():Observable<User[]>{
  //   return this.http.get<User[]>(environment.hurBaseUrl + '/users');
  // }

  // case 1
  // addUser(user: User){
  //   return this.httpc.post(environment.hurBaseUrl + '/users/register', user, this.noAuthHeader);
  // }

  // case 2
  addUser(user){
    return this.httpc.post(environment.hurBaseUrl + '/users/register', user, this.noAuthHeader);
  }

  // getUserProfile(){
  //   // let myHeaders = new Headers();
  //   // myHeaders.append('Content-Type', 'application/json');
  //   // return this.http.get(environment.hurBaseUrl + '/users/userProfile', {headers: myHeaders}).map(res => res.json());

  //   return this.httpc.get(environment.hurBaseUrl + '/users/userProfile');
  // }

  //=========== Helper Methods

  // logout(){
  //   this.router.navigate(['/main']);
  // }
}

