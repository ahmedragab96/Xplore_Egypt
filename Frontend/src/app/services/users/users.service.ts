import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }

  GetAllUsers() {
    return this.http.get('http://localhost:3000/users/getall');
  }

  GetUserByID() {
    let id=this.decodeToken();
    return this.http.get('http://localhost:3000/users/getData?id=' + id);
  }

  updateUser(body){
    let id=this.decodeToken();
    return this.http.post('http://localhost:3000/users/edit/'+ id+"/",body).subscribe(data => {
      console.log('User Updated successfully ', data);
    },
      error => { console.log('Error', error); });
  }

   updateAvatar(image: File) {
    let id=this.decodeToken();
    const formData = new FormData();
    formData.append('avatar', image);
    return this.http.put('http://localhost:3000/users/editavatar/'+id+"/",formData).subscribe(data => {
      console.log('avatar Updated successfully ', data);
    },
      error => { console.log('Error', error); });
  }
  
  }
