import {Component} from '@angular/core';
import { AuthServices } from '../auth.services';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component ({
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent {
    isLoading = false ;

    constructor(private notifier: NotifierService,public authService: AuthServices) {}

    onlogin(form: NgForm) {
        console.log(form.value);
        this.authService.login(form.value.username , form.value.pass);
    }
}
