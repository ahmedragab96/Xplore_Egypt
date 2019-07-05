
import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import {NgForm} from '@angular/forms';
import {MailService} from'../../../services/mail/mail.service';

@Component ({
    templateUrl : './reset.component.html',
    styleUrls : ['./reset.component.css'],
})

export class ResetComponent {
  constructor(private notifier: NotifierService,private mailService:MailService) {}
  sendMail(form:NgForm){
    console.log(form.value.mail);
  }
  
}
