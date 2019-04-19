import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.GetAllPosts = function () {
        return this.http.get("http://localhost:3000/posts/getall");
    };
    PostsService.prototype.decodeToken = function () {
        var token = localStorage.getItem("token");
        var payload = jwt_decode(token);
        console.log(payload);
        var userId = payload.userId;
        return userId;
    };
    PostsService.prototype.savePost = function (newPost) {
        var body = {};
        body["userID"] = this.decodeToken();
        console.log(body);
        return this.http.post("http://localhost:3000/posts/postapost", body).subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) { console.log("Error", error); });
    };
    PostsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostsService);
    return PostsService;
}());
export { PostsService };
//# sourceMappingURL=posts.service.js.map