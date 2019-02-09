import {Component} from '@angular/core';
import { AuthServices } from '../auth.services';
import { NgForm } from '@angular/forms';


@Component ({
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent {
    isLoading = false ;

    constructor(public authService: AuthServices) {}

    onlogin(form: NgForm) {
        console.log(form.value);
        this.authService.login(form.value.username , form.value.pass);
    }
}
