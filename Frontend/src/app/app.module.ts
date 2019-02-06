import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { LoginComponent } from ".//components/login/login.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingMOdule } from "./routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMOdule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
