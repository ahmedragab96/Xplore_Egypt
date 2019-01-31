import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent
  ],
  imports: [
    BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
