import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {
  
  constructor(private cd: ChangeDetectorRef) { }

  trips =[
    { "name": "Trip 1", "id": 1, "selected": false, "addedCal": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { "name": "Trip 2", "id": 2, "selected": false, "addedCal": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { "name": "Trip 3", "id": 3, "selected": false, "addedCal": false, "description": "Sed ut perspiciatis unde omnis iste natus error sit vol?" },
    { "name": "Trip 4", "id": 4, "selected": false, "addedCal": false, "description": "On the other hand, we denounce with righteous indignati pains to avoid worse pains." },
    { "name": "Trip 5", "id": 5, "selected": false, "addedCal": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit dui, a pretium elit lobortis pretium." }
  ];
  
  calendarTrips = [

  ];

userLoadedTrips=[
];

  ngOnInit() {

    var isEventOverDiv = function (x) {
      var external_events = $('#external-events');
      var offset = external_events.offset();
      offset.right = external_events.width() + offset.left;

      if (x >= offset.left &&
        x <= offset.right) { return true; }
      return false;

    }

    let angularthis = this;
    $('#calendar1').fullCalendar(
    {
        events: [
    {
      title  : 'userloadedEvent-Trial',
      start  : '2019-02-12'
    }
  ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      // now: new Date('2014-09-01'),  // expliciting setting today date
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      dragRevertDuration: 0,
      eventLimit: true, // allow "more" link when too many events
      
      drop: function (date, jsEvent, ui) {
        console.log("date:",date);
        angularthis.userLoadedTrips.push({
          "date":date,
          "jsEvent":jsEvent,
          "ui":ui
        })
        console.log(angularthis.userLoadedTrips);
        //event drop fist time
        let evId =+this.id.split(",")[1];
        console.log('calendar 1 Drop');
        $(this).attr("hidden", true);
        angularthis.trips[evId]['addedCal'] = true;
        angularthis.calendarTrips.push(angularthis.trips[evId])
        //console.log(angularthis.calendarTrips);
      },

      eventDragStop: function (event, jsEvent, ui, view) {
        if (isEventOverDiv(jsEvent.clientX)) {
          console.log('calendar 1 remove');
          let evId = +event.elementS.id.split(",")[1];
          $('#calendar1').fullCalendar('removeEvents', event._id);
          var el = event.element;
          el.attr("hidden", false);
          angularthis.trips[evId]['addedCal'] = false; 
          angularthis.cd.detectChanges();        
          angularthis.calendarTrips = angularthis.calendarTrips.filter(item => item.id !== angularthis.trips[evId].id);
          //console.log(angularthis.calendarTrips)
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
    });

    $(document).ready(function () {
      $('#external-events .fc-event').each(function () {
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
    });
  }
  
}
