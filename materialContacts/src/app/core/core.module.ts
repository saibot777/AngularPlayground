import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from "../shared/material/material.module";
import {FormsModule} from "@angular/forms";
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {FlexboxComponent} from "../components/flexbox/flexbox.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoreRoutingModule
  ],
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ]
})
export class CoreModule { }
