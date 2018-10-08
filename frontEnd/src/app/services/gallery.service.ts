import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  // visibleImages = [];
  // serviceImages: any[] = [];
  // eventImages: any[] = [];
  // newMemberImages: any[] = [];

  files: Gallery[];

  constructor(
    private http: Http,
    private httpc: HttpClient
  ) { }

  // getImages(){
  //   this.visibleImages = IMAGES.slice(0); 
  //   return this.visibleImages = IMAGES.slice(0);
  // }

  // getImage(id: number){
  //   return IMAGES.slice(0).find(image => image.id == id);
  // }

  // getServiceImages(){
  //   IMAGES.slice(0).forEach(image => {
  //     if(image.category === "service"){
  //       this.serviceImages.push(image);
  //     }       
  //   });   
  //   return this.serviceImages;
  // }

  // getEventImages(){
  //   IMAGES.slice(0).forEach(image => {
  //     if(image.category === "event"){
  //       this.eventImages.push(image);
  //     }       
  //   });   
  //   return this.eventImages;
  // }

  // getNewMemberImages(){
  //   IMAGES.slice(0).forEach(image => {
  //     if(image.category === "newMember"){
  //       this.newMemberImages.push(image);
  //     }       
  //   });   
  //   return this.newMemberImages;
  // }

  getGalleryAll(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'image/jpg');
    return this.http.get(environment.hurBaseUrl + '/files', {headers:myHeaders}).map(res => res.json());     
  }

  // Getting Images for Gallery
  getImages(){
    //return this.http.get(environment.hurBaseUrl + '/files/downloads').map(res => res.json());

    return this.httpc.get(environment.hurBaseUrl + '/files/downloads', {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

 
  
}

// const IMAGES = [
//   { "id": 1, "category": "service", "caption":"view from a service1", "url": "assets/img/s_01.jpeg"},
//   { "id": 2, "category": "service", "caption":"view from a service2", "url": "assets/img/s_02.jpeg"},
//   { "id": 3, "category": "service", "caption":"view from a service3", "url": "assets/img/s_03.jpeg"},
//   { "id": 4, "category": "service", "caption":"view from a service4", "url": "assets/img/s_04.jpeg"},
//   { "id": 5, "category": "service", "caption":"view from a service5", "url": "assets/img/s_05.jpeg"},
//   { "id": 6, "category": "event", "caption":"view from a event1", "url": "assets/img/e_01.jpeg"},
//   { "id": 7, "category": "event", "caption":"view from a event2", "url": "assets/img/e_02.jpeg"},
//   { "id": 8, "category": "event", "caption":"view from a event3", "url": "assets/img/e_03.jpeg"},
//   { "id": 9, "category": "event", "caption":"view from a event4", "url": "assets/img/e_04.jpeg"},
//   { "id": 10, "category": "event", "caption":"view from a event5", "url": "assets/img/e_05.jpeg"},
//   { "id": 11, "category": "newMember", "caption":"view from a newMember1", "url": "assets/img/m_01.jpeg"},
//   { "id": 12, "category": "newMember", "caption":"view from a newMember2", "url": "assets/img/m_02.jpeg"},
//   { "id": 13, "category": "newMember", "caption":"view from a newMember3", "url": "assets/img/m_03.jpeg"},
//   { "id": 14, "category": "newMember", "caption":"view from a newMember4", "url": "assets/img/m_04.jpeg"},
//   { "id": 15, "category": "newMember", "caption":"view from a newMember5", "url": "assets/img/m_05.jpeg"}
// ]