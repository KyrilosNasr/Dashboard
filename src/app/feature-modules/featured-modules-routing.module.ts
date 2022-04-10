import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { IconsComponent } from './icons/components/icons/icons.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'icons', component: IconsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedModulesRoutingModule { }
