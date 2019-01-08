
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
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
