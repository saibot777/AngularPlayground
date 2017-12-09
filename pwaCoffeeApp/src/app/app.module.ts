import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

import 'hammerjs';
import {CoreModule} from './core/core.module';

import {routes} from './app.routes';

import { DataService } from './core/services/data.service';
import { GeolocationService } from './core/services/geolocation.service';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    CoreModule
  ],
  providers: [
    DataService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
