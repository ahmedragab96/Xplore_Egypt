import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelsService } from '../../../../../services/hotels/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor(
    public hotelService: HotelsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    console.log(form.value);
    this.hotelService.addHotel(form.value);
    this.router.navigate(['admin/database/hotels']);
  }

}
