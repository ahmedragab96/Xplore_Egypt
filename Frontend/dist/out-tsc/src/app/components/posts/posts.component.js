import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { formatDate } from '@angular/common';
var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
        this.today = new Date();
        this.jstoday = '';
        this.newPost = {};
        this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    }
    PostsComponent.prototype.getPostsFromService = function () {
        var _this = this;
        this.service.GetAllPosts().subscribe(function (res) {
            _this.posts = res;
        });
    };
    // onPost(form: PostForm){
    //   console.log(PostForm.value)
    //   newPost['title']=form.value.title;
    //   newPost['body']=form.value.body;
    //   newPost['date']=this.jstoday;
    //   this.service.savePost(this.newPost);
    // }
    PostsComponent.prototype.onPost = function (f) {
        this.newPost['title'] = f.value.title;
        this.newPost['body'] = f.value.body;
        this.newPost['date'] = this.jstoday;
        this.service.savePost(this.newPost);
    };
    PostsComponent.prototype.ngOnInit = function () {
        this.getPostsFromService();
    };
    PostsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map