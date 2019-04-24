import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    console.log(form.value);
  }

}
