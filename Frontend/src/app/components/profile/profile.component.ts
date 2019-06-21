import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/users/users.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:any;
  id:any;
  constructor(private service:UserService , private router:ActivatedRoute) { }


  getUser(){
    this.service.GetUserByID().subscribe((res) => {
      this.userDetails = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.id =parseInt(this.router.snapshot.paramMap.get('id'))
    this.getUser();
    console.log(this.userDetails)
  }

}
