import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {TripPlannerService} from '../../services/trip-planner/trip-planner.service';
declare var $: any;

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef , private service:TripPlannerService) { }
  calendarTrips = [

  ];
  // trial for saving user trips
      //   trial=[
      //   {title  : 'trip1',
      //    start  : '2019-02-12'},
      //   {title  : 'trip2',
      //    start  : '2019-02-15'}

      // ];

trips:any
loadedTrips:any
trial=[];
  // usertrips:string="{'title':'trip1', 'start':'2019-02-18'}";
  // jsontrips=JSON.parse(this.usertrips);
  save(){
    console.log(this.calendarTrips);
    //this.m=JSON.stringify(this.calendarTrips);
    //console.log(this.m)
    //var jsonObj = $.parseJSON('[' + this.m + ']');
    //console.log(jsonObj)
    this.service.savePlannedTrips(this.calendarTrips);
  }
  loadTrips(){

     this.service.loadPlannedTrips().subscribe((res) => {
      this.loadedTrips= res;
      this.trial=this.loadedTrips.plan;
     console.log(this.trial);
    });
         var isEventOverDiv = function (x) {
      var external_events = $('#external-events');
      var offset = external_events.offset();
      offset.right = external_events.width() + offset.left;
      if (x >= offset.left &&
        x <= offset.right) { return true; }
      return false;
    }
    //Full Calendar customization 
    let angularthis = this;
   setTimeout(() => { $('#calendar1').fullCalendar(
    { // saving events  
      events:this.trial,
  //       events: [
  //   {
  //     title  : this.trial[0].title,
  //     start  : this.trial[0].start,
  //   }
  // ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      // now: new Date('2014-09-01'),  // expliciting setting today date
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      dragRevertDuration:0,
      eventLimit: true, // allow "more" link when too many events
      
      drop: function (date, jsEvent, ui) {
        //event drop fist time
        console.log(date._d)
        let evId =+this.id.split(",")[1];
        console.log('calendar 1 Drop');
        $(this).attr("hidden", true);
        angularthis.trips[evId]['addedCal'] = true;
        angularthis.trips[evId]['start']=date._d;
        // deleting unnecessary data
        delete angularthis.trips[evId].description;
        delete angularthis.trips[evId].price;
        delete angularthis.trips[evId].duration;
        delete angularthis.trips[evId].imageURL;
        delete angularthis.trips[evId].selected;
        delete angularthis.trips[evId].addedCal;
        delete angularthis.trips[evId].region;
        delete angularthis.trips[evId].id;
        //pushing to calendar trips
        angularthis.calendarTrips.push(angularthis.trips[evId])
      },

      eventDragStop: function (event, jsEvent, ui, view) {
        if (isEventOverDiv(jsEvent.clientX)) {
          console.log('calendar 1 remove');
          let evId = +event.elementS.id.split(",")[1];
          $('#calendar1').fullCalendar('removeEvents', event._id);
          var el = event.element;
          el.attr("hidden", false);
          angularthis.trips[evId]['addedCal'] = 0; 
          angularthis.cd.detectChanges();        
          angularthis.calendarTrips = angularthis.calendarTrips.filter(item => item.id !== angularthis.trips[evId].id);
        }
      },
     /* eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
        // event change it location
        // console.log(angularthis.trips[+event.elementS.id.split(",")[1]])
        console.log(new Date(event.start._d));
        console.log(new Date(event.end == null ? null: event.end._d));
      },
      eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
        // event change it's time duration
        // console.log(angularthis.trips[+event.elementS.id.split(",")[1]])
        // console.log(event);
        console.log(new Date(event.start._d));
        console.log(new Date(event.end == null ? null: event.end._d));
      },*/
    });},1000)
    

  }

getTripsFromService(){
      this.service.GetAllTrips().subscribe((res) => {
        this.trips = res;
        console.log(res);

        setTimeout(() => {
          $('#external-events .fc-event').each(function(){
            console.log($(this));
            console.log(this);
            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
              element: $(this),
              elementS: this,
              title: $.trim($(this).text()), // use the element's text as the event title
              stick: true // maintain when user navigates (see docs on the renderEvent method)
            });
    
            // make the event draggable using jQuery UI
            $(this).draggable({
              zIndex: 999,
              revert: true, // will cause the event to go back to its
              revertDuration: 0 //  original position after the drag
            });
          });
        }, 1);

      });
    }

    

  ngOnInit() {
    // getting all trips
      this.getTripsFromService();
    this.loadTrips();
     setTimeout(() => {console.log(this.loadedTrips);},100000);

   // check if it's droppable on calendar area

    $(document).ready(function(){
    });
    
  }
  
}
