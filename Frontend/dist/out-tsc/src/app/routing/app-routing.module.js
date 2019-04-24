import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { RegisterComponent } from './../components/auth/register/register.component';
import { TripPlannerComponent } from './../components/trip-planner/trip-planner.component';
import { HomeComponent } from './../components/home/home.component';
import { TripsComponent } from './../components/trips/trips.component';
import { AuthGuard } from '../components/auth/auth.guard';
import { AdminComponent } from './../components/AdminSection/admin/admin.component';
import { TripDetailsComponent } from './../components/trip-details/trip-details.component';
import { RestaurantsComponent } from '../components/restaurants/restaurants.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import { RestaurantDetailsComponent } from '../components/restaurant-details/restaurant-details.component';
import { HotelDetailsComponent } from '../components/hotel-details/hotel-details.component';
import { PostsComponent } from '../components/posts/posts.component';
import { UsersComponent } from '../components/AdminSection/DataBase/users/users.component';
import { HotelsCRUDComponent } from '../components/AdminSection/DataBase/hotels/hotels.component';
var routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'planner', component: TripPlannerComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'trips', component: TripsComponent },
    { path: 'trips/:id', component: TripDetailsComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailsComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'hotels/:id', component: HotelDetailsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/database/users', component: UsersComponent },
    { path: 'admin/database/hotels', component: HotelsCRUDComponent },
    { path: 'posts', component: PostsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingMOdule = /** @class */ (function () {
    function AppRoutingMOdule() {
    }
    AppRoutingMOdule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: [AuthGuard]
        })
    ], AppRoutingMOdule);
    return AppRoutingMOdule;
}());
export { AppRoutingMOdule };
//# sourceMappingURL=app-routing.module.js.map