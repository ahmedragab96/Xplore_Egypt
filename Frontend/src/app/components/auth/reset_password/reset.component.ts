
import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import {NgForm} from '@angular/forms';
@Component ({
    templateUrl : './reset.component.html',
    styleUrls : ['./reset.component.css'],
})

export class ResetComponent {
  constructor(private notifier: NotifierService) {}
  sendMail(form:NgForm){
    console.log(form.value.mail);
  }
  
}
