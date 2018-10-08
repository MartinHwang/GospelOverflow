import { Component, OnInit } from '@angular/core';
import { Video } from '../../../../models/video';
import { VideoService } from '../../../../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  providers: [VideoService]
})
export class VideosComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;

  private hideNewVideo: boolean = true;

  constructor(
    private videoService:VideoService
  ) { }

  ngOnInit() {
    this.refreshVideoList();
  }

  refreshVideoList(){
    this.videoService.getVideoAll().subscribe(
      data => {
        this.videos = data;
      }
    );
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }

  onSubmitNewVideo(video: Video){
    this.videoService.addVideo(video).subscribe(
      data => {
        //this.videos.push(data);
        this.refreshVideoList();
        this.hideNewVideo = true;
        this.selectedVideo = data;
        console.log('Add successfully!');
      },
      err => {
        console.log('Failed to add video!');
      }
    );
  }

  onUpdateVideoEvent(video: any){
    this.videoService.updateVideo(video).subscribe(
      data => {
        video = data;
        this.selectedVideo = null;
      },
      err => {
        console.log('Failed to update video!');
      }
    );
  }

  onDeleteVideoEvent(video: any){
    this.videoService.deleteVideo(video).subscribe(
      data => {
        video = data;
        this.selectedVideo = null;
        this.refreshVideoList();
      },
      err => {
        console.log('Failed to delete video!');
      }
    );
  }

  newVideo(){
    this.hideNewVideo = false;
  }

  

}
