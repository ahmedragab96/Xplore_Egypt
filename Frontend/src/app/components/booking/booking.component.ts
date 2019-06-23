import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookingService} from'../../services/booking/booking.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private route:ActivatedRoute, private BookService:BookingService) { }
  link:any='';
  title:any;
  ngOnInit() {
  this.title=this.route.snapshot.queryParamMap.get('q');
  this.BookService.GetBookings(this.title).subscribe((res) => {
    this.link = res["items"][0]['formattedUrl'];
    console.log(res);
     //window.location.href =res["items"][0]['formattedUrl'];
   
  });

  }
  
    
bookRoute(){
 
}

  // book(){
  //   var cx = '010207221007117448908:suxic_nlyoe';
  //   var gcse = document.createElement('script');
  //   gcse.type = 'text/javascript';
  //   gcse.async = true;
  //   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  //   var s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(gcse, s);
  // }

}
