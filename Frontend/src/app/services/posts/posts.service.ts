import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {AuthServices} from '../../components/auth/auth.services';
import {NotifierService} from 'angular-notifier';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient ,private service: AuthServices,private notifier: NotifierService) { }

  URL: any = 'https://immense-cove-87813.herokuapp.com';

  GetAllPosts() {
    return this.http.get( this.URL + '/posts/getall');
  }

  GetAll() {
    return this.http.get( this.URL + '/posts/getusersforposts')
  };

  decodeToken() {

    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }

  savePost(newPost) {
    const body = newPost;
    if (this.service.getisAuth()) {
      body['userID'] = this.decodeToken();
    } else {
      this.notifier.notify('error', "please login to post in the forum ");
    }
    body['upVoting'] = 0;
    body['downVoting'] = 0;
    console.log(body);
    return this.http.post( this.URL + '/posts/postapost', body).subscribe(data => {
      console.log('POST Request is successful ', data);
      this.notifier.notify('success', 'Your Post is added to the Forum !');
    },
      error => { console.log('Error', error);
      this.notifier.notify('error', error.statusText); });

  }

  updatePost(updatedPost){
    const body = updatedPost;
        // body['userID'] = this.decodeToken();
    console.log(body);
        return this.http.put( this.URL + '/posts/updatepost', body).subscribe(data => {
      console.log('POST Request is successful ', data);
      this.notifier.notify('success', 'Your react is added to the post !');
    },
      error => { console.log('Error', error);
      this.notifier.notify('error', error.statusText); });
  }
}
