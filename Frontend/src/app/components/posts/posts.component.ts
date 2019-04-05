import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts/posts.service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  today= new Date();
  jstoday = '';
  constructor(private service:PostsService) { 
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  posts: any;
  newPost={
  };
  
  getPostsFromService(){
    this.service.GetAllPosts().subscribe((res) => {
      this.posts = res;
      console.log(res);
    });
  }

  // onPost(form: PostForm){
  //   console.log(PostForm.value)
  //   newPost['title']=form.value.title;
  //   newPost['body']=form.value.body;
  //   newPost['date']=this.jstoday;
  //   this.service.savePost(this.newPost);
  // }
  onPost(){}


  ngOnInit() {
    console.log(this.jstoday)
    this.getPostsFromService();

  }

}
