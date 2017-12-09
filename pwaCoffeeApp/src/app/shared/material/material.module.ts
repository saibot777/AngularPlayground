import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule { }
