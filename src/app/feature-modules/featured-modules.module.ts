import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedModulesRoutingModule } from './featured-modules-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { IconsComponent } from './icons/components/icons/icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [

    ProfileComponent,
    IconsComponent
  ],
  imports: [
    DashboardModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FeaturedModulesRoutingModule
  ],
  exports: [
    DashboardModule
  ]

})
export class FeaturedModulesModule { }
