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
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  posts: any;
  newPost={
  };
  
  getPostsFromService(){
    this.service.GetAll().subscribe((res) => {
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
  onPost(f){
    console.log(f.value)
    this.newPost['title']=f.value.title;
    this.newPost['body']=f.value.body;
    this.newPost['date']=this.jstoday;
    this.service.savePost(this.newPost);
  }


  ngOnInit() {
    console.log(this.jstoday)
    this.getPostsFromService();
    // this.service.GetAll();

  }

}
