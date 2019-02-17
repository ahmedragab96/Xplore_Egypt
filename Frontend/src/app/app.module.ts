import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { LoginComponent } from './/components/auth/login/login.component';
import { RegisterComponent } from './/components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingMOdule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import {TripPlannerService} from './services/trip-planner/trip-planner.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptor } from './components/auth/auth-interceptor';
//new
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { TripsComponent } from './components/trips/trips.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';

//pipes
import { FilterPipe } from './pipes/custom-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    TripsComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingMOdule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    NgxPaginationModule
    ],
  providers: [TripPlannerService,
    FilterPipe,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
