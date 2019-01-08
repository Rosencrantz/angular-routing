import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisisesComponent } from './manage-crisises/manage-crisises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisisesComponent,
        ManageHeroesComponent
    ]
})
export class AdminModule { }