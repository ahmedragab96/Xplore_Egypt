import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { LoginComponent } from './/components/auth/login/login.component';
import { RegisterComponent } from './/components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingMOdule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMOdule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
