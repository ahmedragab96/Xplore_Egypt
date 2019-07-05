import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/users/users.service'
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
	id:any;
  image:any;
	old_userDetails:any;
  constructor(private service:UserService , private router:ActivatedRoute) { }
  getUser(){
    this.service.GetUserByID().subscribe((res) => {
      this.old_userDetails = res;
      console.log(res);
    });
  }

  updateUser(user){
    console.log(user)
    this.service.updateUser(user);
  }

  editAvatar(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.service.updateAvatar(file);
  }

  submitForm(f){
    this.updateUser(f.value)
  }
  ngOnInit() {
  	this.id =parseInt(this.router.snapshot.paramMap.get('id'))
    this.getUser();
  }

}
