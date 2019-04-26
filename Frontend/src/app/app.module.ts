import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgDragDropModule } from 'ng-drag-drop';
import { MatInputModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatIconModule,
         MatTableModule,
         MatPaginatorModule,
         MatCardModule,
         MatSelectModule,
         MatOptionModule,
 } from '@angular/material';

 import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

 import {
  MatButtonToggleModule,
} from '@angular/material/button-toggle';

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
import {RestaurantsService} from './services/restaurants/restaurants.service';
import {HotelsService} from './services/hotels/hotels.service';
import {PostsService} from './services/posts/posts.service';
import {UserService} from './services/users/users.service';
import {RecommendaionService} from './services/recommendation/recommendaion.service'
import {ReviewsService} from './services/reviews/reviews.service'


import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AuthInterceptor } from './components/auth/auth-interceptor';
// new
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { TripsComponent } from './components/trips/trips.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// pipes
import { FilterPipe } from './pipes/custom-pipes.pipe';
import { RemoveFilterPipe } from './pipes/custom-pipes.pipe';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';
import { AdminComponent } from './components/AdminSection/admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewComponent } from './components/review/review.component';
import { UsersComponent } from './components/AdminSection/DataBase/users/users.component';
import { HotelsCRUDComponent } from './components/AdminSection/DataBase/hotels/hotels.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2175496632489213')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1045766967034-6ido510bi9s5nnlu914004hlmusi55b7.apps.googleusercontent.com')
          },
          {
            id: LinkedInLoginProvider.PROVIDER_ID,
            provider: new LinkedInLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
          },
      ]
  );
  return config;
}

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
    FilterPipe,
    RemoveFilterPipe,
    AdminComponent,
    TripDetailsComponent,
    RestaurantsComponent,
    HotelsComponent,
    HotelDetailsComponent,
    RestaurantDetailsComponent,
    PostsComponent,
    ReviewComponent,
    UsersComponent,
    HotelsCRUDComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingMOdule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    NgxPaginationModule,
    SocialLoginModule,
    ChartsModule,
    AngularFontAwesomeModule,
    NgbModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    ],
  providers: [TripPlannerService, RestaurantsService, HotelsService, PostsService, UserService,
    FilterPipe,RecommendaionService,ReviewsService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
