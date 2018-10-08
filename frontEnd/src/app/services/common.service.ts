import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Event } from '../models/event';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  today: Date;
  selectedFile = null;

  constructor(
    private http: Http,
    private httpc: HttpClient
  ) {
    this.today = new Date();  
    this.getTodayDate();
  }

  getTodayDate(){
    const day = this.today.getDate();
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    console.log("Today: "+`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }

  getContactAll(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(environment.hurBaseUrl + '/contacts', {headers: myHeaders}).map(res => res.json());
  }

  addContact(contact){
    return this.http.post(environment.hurBaseUrl + '/contacts/register', contact)
      .map( res => res.json());
  }

  // ======= Case 1 =======
  // uploadFile(form){  
  //   console.log("form: "+JSON.stringify(form));
  //   // let myHeaders = new Headers();
  //   // myHeaders.append('Content-Type', 'application/json');      
  //   // return this.http.post(environment.hurBaseUrl + '/files/upload', form, {headers: myHeaders}).map(res => res.json());
  //   return this.http.post(environment.hurBaseUrl + '/files/upload', form);       
  // } 

  // ======= Case 2 =======
  uploadFile(category: string, description: string, fileToUpload: File){    

    console.log("CommonService category: "+category); 
    console.log("CommonService description: "+description); 

    const headers = new Headers({'enctype': 'multipart/form-data'});
    // headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    
    const formData: FormData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('imageUrl', fileToUpload, fileToUpload.name);
    return this.http.post(environment.hurBaseUrl + '/files/upload', formData, options);       
  }

  downloadFile(imageName: string){
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type','application/json');
    // return this.http.get(environment.hurBaseUrl + '/files/'+`${imageName}`,{headers:myHeaders}).map(res => res.json());

    var body = {filename: imageName};
    
    return this.httpc.post(environment.hurBaseUrl + '/files/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  // ========== Case 3 (Firebase)  ==========
  // uploadFile(){   
  //   // const fd = new FormData();
  //   // fd.append( 'image', this.selectedFile, this.selectedFile.name );
  //   this.httpc.post(environment.hurBaseUrl + '/files/upload', this.selectedFile, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).subscribe( event => {
  //     if(event.type === HttpEventType.UploadProgress){
  //       console.log('Upload Progress: '+ Math.round( event.loaded / event.total * 100) + '%');
  //     } else if (event.type === HttpEventType.Response){
  //       console.log(event);
  //     }      
  //   });
  // } 

  getEventAll(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(environment.hurBaseUrl + '/events', {headers: myHeaders}).map(res => res.json());
  }

  getEvent(event: Event){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(environment.hurBaseUrl + '/events/' +`${event._id}`, options).map(res => res.json());
  }

  addEvent(event: Event){
    console.log("commonService event : "+JSON.stringify(event));
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.post(environment.hurBaseUrl + '/events/register', event, options).map(res => res.json());
  }

  updateEvent(event: Event){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.put(environment.hurBaseUrl + '/events/' +`${event._id}`, event, options).map(res => res.json());
  }

  deleteEvent(event: Event){
    return this.http.delete(environment.hurBaseUrl + '/events/' +`${event._id}`).map(res => res.json());
  }




}
