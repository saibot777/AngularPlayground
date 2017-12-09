import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './services/data.service';
import {GeolocationService} from './services/geolocation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataService,
    GeolocationService
  ]
})
export class CoreModule { }
