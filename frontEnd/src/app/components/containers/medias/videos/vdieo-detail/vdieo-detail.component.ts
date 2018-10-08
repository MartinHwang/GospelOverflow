import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vdieo-detail',
  templateUrl: './vdieo-detail.component.html',
  styleUrls: ['./vdieo-detail.component.scss'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VdieoDetailComponent implements OnInit {
  video: any;
  private editTitle: boolean = false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);    
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }

}
