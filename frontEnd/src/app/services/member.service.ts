import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Member } from '../models/member';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Member[];

  selectedMember: Member = {
    _id: '',
    firstName: '',
    lastName: '',
    gender: '',
    birth: '',   
    email: '',
    phone: '',
    cellphone: '',
    postalCode: '',
    address: '',
    job: '',
    workplace: '',
    position: '',
    serviceDept: '',
    serviceGroup: '',
    comment: '',
    createdDate: '',
    modifiedDate: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth' : 'True' })};

  constructor(
    private http: Http,
    private httpc: HttpClient
  ) { }

  getMemberAll(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    return this.http.get(environment.hurBaseUrl + '/members', {headers:myHeaders}).map(res => res.json());
  }

  // For dashboard
  getThreeMembers(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    return this.http.get(environment.hurBaseUrl + '/members/getThree', {headers:myHeaders}).map(res => res.json());
  }

  // getMember(_id: string){
  //   let myHeaders = new Headers();
  //   myHeaders.append('Content-Type','application/json');
  //   return this.http.get(environment.hurBaseUrl + '/members/'+`${_id}`, {headers:myHeaders}).map(res => res.json());
  // }

  getMember(email: string){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    return this.http.get(environment.hurBaseUrl + '/members/'+`${email}`, {headers:myHeaders}).map(res => res.json());
  }

  // === Using Form control
  // addMember(member){
  //   let myHeaders = new Headers();
  //   myHeaders.append('Content-Type','application/json');
  //   return this.http.post(environment.hurBaseUrl + '/members/register', member, {headers:myHeaders}).map(res => res.json());
  // }

  addMember(member: Member){
    //console.log("mService member : "+JSON.stringify(member));
    return this.httpc.post(environment.hurBaseUrl + '/members/register', member, this.noAuthHeader);
  }

  editMember(member: Member){
    //console.log("MemberService editMember._id: "+JSON.stringify(member._id));
    return this.httpc.put(environment.hurBaseUrl + '/members/'+`${member._id}`, member, this.noAuthHeader);
  }

  deleteMember(id: string){
    console.log("mService id : "+id);
    return this.httpc.delete(environment.hurBaseUrl + '/members/'+`${id}`, this.noAuthHeader);
  }
}
