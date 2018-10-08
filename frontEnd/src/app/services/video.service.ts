import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: Http
  ) { }

  getVideoAll(){
    return this.http.get(environment.hurBaseUrl + '/videos').map(res => res.json());
  }

  addVideo(video: Video){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.post(environment.hurBaseUrl + '/videos/register', video, options).map(res => res.json());
  }

  updateVideo(video: Video){
    let myHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.put(environment.hurBaseUrl + '/videos/'+`${video._id}`, video, options).map(res => res.json());
  }

  deleteVideo(video: Video){
    return this.http.delete(environment.hurBaseUrl + '/videos/'+`${video._id}`).map(res => res.json());
  }
}
