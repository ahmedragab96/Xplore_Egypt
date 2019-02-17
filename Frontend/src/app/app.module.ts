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
// new
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('Your-Facebook-app-id')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('Your-Google-Client-Id')
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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMOdule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    SocialLoginModule
    ],
  providers: [TripPlannerService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
