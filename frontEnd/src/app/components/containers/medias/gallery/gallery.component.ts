import { Component, OnChanges, Input } from '@angular/core';
import { GalleryService } from '../../../../services/gallery.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
  visibleImages: any[] = [];
  serviceImages: any[] = [];
  eventImages: any[] = [];
  newMemberImages: any[] = [];
  images: any[];
  
  constructor(
    private galleryService: GalleryService
  ) {

    this.getImages();

    this.galleryService.getGalleryAll().subscribe(
      data => {        
        //console.log("Gallery: "+JSON.stringify(data));          
        
        data.slice(0).forEach(image => {
          //let url = environment.hurBaseUrl + '/public/uploads/' + image.imageUrl;
          //image.url = url;
          this.visibleImages.push(image);
        });       

        console.log("Gallery visibleImages: "+JSON.stringify(this.visibleImages));

        this.getServiceImages();
        this.getEventImages();
        this.getNewMemberImages();          
      },
      err => {
        console.log("Gallery Error");
      }
    );
  }

  getServiceImages(){
    this.visibleImages.slice(0).forEach(image => {
      if(image.category === "test1"){
        let url = environment.hurBaseUrl + '/public/uploads/' + image.imageUrl;
        console.log("test1 url: "+url);
        image.url = url;
        this.serviceImages.push(image);
        console.log("this.serviceImages: "+JSON.stringify(this.serviceImages));
      }       
    });   
    return this.serviceImages;
  }

  getEventImages(){
    this.visibleImages.slice(0).forEach(image => {
      if(image.category === "test2"){
        console.log("test2 imageUrl: "+JSON.stringify(image.imageUrl));
        //this.eventImages.push(image);
      }       
    });   
    return this.eventImages;
  }

  getNewMemberImages(){
    this.visibleImages.slice(0).forEach(image => {
      if(image.category === "test3"){
        console.log("test3 imageUrl: "+JSON.stringify(image.imageUrl));
        //this.newMemberImages.push(image);
      }       
    });   
    return this.newMemberImages;
  }

  getImages(){
    this.galleryService.getImages().subscribe(
      data => {
        console.log('getImages data: '+JSON.stringify(data));        
      }
    )
  }  

  ngOnChanges() {
   
  }

}
