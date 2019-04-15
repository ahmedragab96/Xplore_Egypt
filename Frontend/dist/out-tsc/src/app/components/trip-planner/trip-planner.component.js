import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { TripPlannerService } from '../../services/trip-planner/trip-planner.service';
var TripPlannerComponent = /** @class */ (function () {
    function TripPlannerComponent(cd, service) {
        this.cd = cd;
        this.service = service;
        this.calendarTrips = [];
        this.trial = [];
    }
    // usertrips:string="{'title':'trip1', 'start':'2019-02-18'}";
    // jsontrips=JSON.parse(this.usertrips);
    TripPlannerComponent.prototype.save = function () {
        console.log(this.calendarTrips);
        //this.m=JSON.stringify(this.calendarTrips);
        //console.log(this.m)
        //var jsonObj = $.parseJSON('[' + this.m + ']');
        //console.log(jsonObj)
        this.service.savePlannedTrips(this.calendarTrips);
    };
    TripPlannerComponent.prototype.loadTrips = function () {
        var _this = this;
        this.service.loadPlannedTrips().subscribe(function (res) {
            _this.loadedTrips = res;
            _this.trial = _this.loadedTrips.plan;
            console.log(_this.trial);
        });
        var isEventOverDiv = function (x) {
            var external_events = $('#external-events');
            var offset = external_events.offset();
            offset.right = external_events.width() + offset.left;
            if (x >= offset.left &&
                x <= offset.right) {
                return true;
            }
            return false;
        };
        //Full Calendar customization 
        var angularthis = this;
        setTimeout(function () {
            $('#calendar1').fullCalendar({
                events: _this.trial,
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
                droppable: true,
                dragRevertDuration: 0,
                eventLimit: true,
                drop: function (date, jsEvent, ui) {
                    //event drop fist time
                    console.log(date._d);
                    var evId = +this.id.split(",")[1];
                    console.log('calendar 1 Drop');
                    $(this).attr("hidden", true);
                    angularthis.trips[evId]['addedCal'] = true;
                    angularthis.trips[evId]['start'] = date._d;
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
                    angularthis.calendarTrips.push(angularthis.trips[evId]);
                },
                eventDragStop: function (event, jsEvent, ui, view) {
                    if (isEventOverDiv(jsEvent.clientX)) {
                        console.log('calendar 1 remove');
                        var evId_1 = +event.elementS.id.split(",")[1];
                        $('#calendar1').fullCalendar('removeEvents', event._id);
                        var el = event.element;
                        el.attr("hidden", false);
                        angularthis.trips[evId_1]['addedCal'] = 0;
                        angularthis.cd.detectChanges();
                        angularthis.calendarTrips = angularthis.calendarTrips.filter(function (item) { return item.id !== angularthis.trips[evId_1].id; });
                    }
                },
            });
        }, 1000);
    };
    TripPlannerComponent.prototype.getTripsFromService = function () {
        var _this = this;
        this.service.GetAllTrips().subscribe(function (res) {
            _this.trips = res;
            console.log(res);
            setTimeout(function () {
                $('#external-events .fc-event').each(function () {
                    console.log($(this));
                    console.log(this);
                    // store data so the calendar knows to render an event upon drop
                    $(this).data('event', {
                        element: $(this),
                        elementS: this,
                        title: $.trim($(this).text()),
                        stick: true // maintain when user navigates (see docs on the renderEvent method)
                    });
                    // make the event draggable using jQuery UI
                    $(this).draggable({
                        zIndex: 999,
                        revert: true,
                        revertDuration: 0 //  original position after the drag
                    });
                });
            }, 1);
        });
    };
    TripPlannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting all trips
        this.getTripsFromService();
        this.loadTrips();
        setTimeout(function () { console.log(_this.loadedTrips); }, 100000);
        // check if it's droppable on calendar area
        $(document).ready(function () {
        });
    };
    TripPlannerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trip-planner',
            templateUrl: './trip-planner.component.html',
            styleUrls: ['./trip-planner.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, TripPlannerService])
    ], TripPlannerComponent);
    return TripPlannerComponent;
}());
export { TripPlannerComponent };
//# sourceMappingURL=trip-planner.component.js.map