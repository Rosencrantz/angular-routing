
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeroesModule } from "./heroes/heroes.module";
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageCrisisesComponent } from './admin/manage-crisises/manage-crisises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent, AdminComponent, AdminDashboardComponent, ManageCrisisesComponent, ManageHeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
