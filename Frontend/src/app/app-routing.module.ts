import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { TripPlannerComponent } from './trip-planner/trip-planner.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'planner', component: TripPlannerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingMOdule {}
