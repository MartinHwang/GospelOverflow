import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery.component';
import { GalleryService } from '../../../../../services/gallery.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
  }

}
