import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    console.log(form.value);
  }

}
