import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private router:ActivatedRoute) { }

  ngOnInit() {
  
  }
  book(){
    // var cx = '010207221007117448908:quimk_k6jty';
    // var gcse = document.createElement('script');
    // gcse.type = 'text/javascript';
    // gcse.async = true;
    // gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(gcse, s);
    var cx = '010207221007117448908:suxic_nlyoe';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

}
