import {Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent},
];
