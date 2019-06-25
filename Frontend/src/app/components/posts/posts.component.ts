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

  updatedPost={};
  
  getPostsFromService(){
    this.service.GetAll().subscribe((res) => {
      this.posts = res;
      // this.posts[0]['date']=this.posts[0]['date'].substr(0,10);
      // console.log(this.posts[0]['date'])
      console.log(res);
      for(var i=0;i<this.posts.length;i++){
        this.posts[i]['date']=this.posts[i]['date'].substr(0,10);
      }
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

  onreactUp(id,upvoting){
    this.updatedPost['postID']=id
    this.updatedPost['upVoting']=upvoting+1;
    this.service.updatePost(this.updatedPost);
  }

  onreactDown(id,downvoting){
    this.updatedPost['postID']=id
    this.updatedPost['downVoting']=downvoting+1;
    this.service.updatePost(this.updatedPost);
  }


  ngOnInit() {
    // console.log(this.jstoday)
    this.getPostsFromService();
    // this.service.GetAll();

  }

}
