import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { RegisterComponent } from './../components/auth/register/register.component';
import { TripPlannerComponent } from './../components/trip-planner/trip-planner.component';
import { HomeComponent } from './../components/home/home.component';
import { TripsComponent } from './../components/trips/trips.component';
import { AuthGuard } from '../components/auth/auth.guard';
import { AdminComponent } from './../components/AdminSection/admin/admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'planner', component: TripPlannerComponent , canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})


export class AppRoutingMOdule {}
