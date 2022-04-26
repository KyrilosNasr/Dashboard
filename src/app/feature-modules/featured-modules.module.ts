import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedModulesRoutingModule } from './featured-modules-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { IconsComponent } from './icons/components/icons/icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    ProfileComponent,
    IconsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule, 
    DashboardModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    FeaturedModulesRoutingModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    DashboardModule
  ]

})
export class FeaturedModulesModule { }
