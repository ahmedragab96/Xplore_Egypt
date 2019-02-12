import {Component} from '@angular/core';
import { AuthServices } from '../auth.services';
import { NgForm } from '@angular/forms';


@Component ({
    templateUrl : './register.component.html',
    styleUrls : ['./register.component.css']
})

export class RegisterComponent {
    isLoading = false ;

    constructor(public authService: AuthServices) {}

    onregister(form: NgForm) {
        console.log(form.value);
        this.authService.register(form.value.fname , form.value.lname , form.value.email , form.value.password
            , form.value.DOB , form.value.gender , form.value.nationality );
    }
}
