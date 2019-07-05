import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/users/users.service'
import {NotifierService} from 'angular-notifier';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  oldPassword: String;
  password: String;
  newPasswordConfirmation: String;
  constructor(private usersservice:UserService,private notifier: NotifierService) { }

  ngOnInit() {
  }

    changePassword() {

    let body = {
        "password": this.password,
    }
    if(this.password!=this.newPasswordConfirmation){
this.notifier.notify('error', 'the 2 passwords are not the same !');
    }
    else{this.usersservice.changepass(body)}

  }

}