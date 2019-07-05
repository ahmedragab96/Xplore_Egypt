import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {NotifierService} from 'angular-notifier'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private notifier: NotifierService,private http: HttpClient) { }
  URL: any = 'https://immense-cove-87813.herokuapp.com';
  decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }

  GetAllUsers() {
    return this.http.get(this.URL + '/users/getall');
  }

  GetUserByID() {
    let id=this.decodeToken();
    return this.http.get(this.URL + '/users/getData?id=' + id);
  }

  GetUserofPost(id) {
    return this.http.get(this.URL + '/users/getData?id=' + id);
  }

  updateUser(body){
    let id=this.decodeToken();
    return this.http.post("http://localhost:3000" + '/users/edit/' + id + "/",body).subscribe(data => {
      console.log('User Updated successfully ', data);
      this.notifier.notify('success', 'your Profile is updated !');
    },
      error => { console.log('Error', error);
    this.notifier.notify('error', error);
  });
  }

   updateAvatar(image: File) {
    let id=this.decodeToken();
    const formData = new FormData();
    formData.append('avatar', image);
    return this.http.put('/users/editavatar/'+id+"/",formData).subscribe(data => {
      console.log('avatar Updated successfully ', data);
      this.notifier.notify('success', 'Your Profile Picture is successfully updated !');
    },
      error => { console.log('Error', error); });
  }

  GetUserPosts(){
    let id=this.decodeToken();
    return this.http.get('/posts/getuserposts?id=' + id);
  }


  GetUserReviews(){
    let id=this.decodeToken();
    return this.http.get('/reviews/getUserReviews/' + id);
  }
  
  changepass(body){
    let id=this.decodeToken();
    return this.http.put(this.URL + '/users/changepass/' + id,body).subscribe(data => {
      this.notifier.notify('success', 'Password is updated !');
    },
      error => { console.log('Error', error); 
      this.notifier.notify('error', error);});
  }
  }
