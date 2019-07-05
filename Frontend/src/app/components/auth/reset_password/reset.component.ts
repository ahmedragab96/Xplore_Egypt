
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MailService} from'../../../services/mail/mail.service';

@Component ({
    templateUrl : './reset.component.html',
    styleUrls : ['./reset.component.css'],
})

export class ResetComponent {
  constructor(private mailService:MailService) {}
  sendMail(form:NgForm){
    this.mailService.resetPassword(form.value.mail);
  }
  
}
