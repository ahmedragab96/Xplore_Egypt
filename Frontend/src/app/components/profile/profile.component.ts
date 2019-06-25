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
  posts:any;
  reviews:any;
  constructor(private service:UserService , private router:ActivatedRoute) { }


  getUser(){
    this.service.GetUserByID().subscribe((res) => {
      this.userDetails = res;
      console.log(res);
      this.userDetails['results'][0]['DoB']=this.userDetails['results'][0]['DoB'].substr(0,10);
    });
  }

  getPosts(){
    this.service.GetUserPosts().subscribe((res) => {
      this.posts = res;
      console.log("posts",this.posts);
      for(var i=0;i<this.posts.length;i++){
        this.posts[i]['date']=this.posts[i]['date'].substr(0,10);
      }
    });
  }

  getReviews(){
    this.service.GetUserReviews().subscribe((res) => {
      this.reviews = res;
      console.log("reviews",this.reviews);
      for(var i=0;i<this.reviews.length;i++){
        this.reviews[i]['date']=this.reviews[i]['date'].substr(0,10);
      }
    });
  }

  ngOnInit() {
    this.id =parseInt(this.router.snapshot.paramMap.get('id'))
    this.getUser();
    this.getPosts();
    this.getReviews();
    // console.log(this.userDetails)
  }

}
