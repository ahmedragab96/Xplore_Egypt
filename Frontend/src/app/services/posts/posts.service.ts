import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {AuthServices} from '../../components/auth/auth.services';
import {NotifierService} from 'angular-notifier'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient ,private service: AuthServices,private notifier: NotifierService) { }

  GetAllPosts() {
    return this.http.get('http://localhost:3000/posts/getall');
  }

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
    }
    else{
      this.notifier.notify('error', "please login to post in the forum ");
    }
    body['upVoting'] = 0;
    body['downVoting'] = 0;
    console.log(body);
    return this.http.post('http://localhost:3000/posts/postapost', body).subscribe(data => {
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
        return this.http.put('http://localhost:3000/posts/updatepost', body).subscribe(data => {
      console.log('POST Request is successful ', data);
      this.notifier.notify('success', 'Your react is added to the post !');
    },
      error => { console.log('Error', error);
      this.notifier.notify('error', error.statusText); });


  }

}
