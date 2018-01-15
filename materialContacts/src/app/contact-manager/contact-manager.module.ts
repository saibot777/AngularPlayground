import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactManagerComponent } from './contact-manager.component';
import {MaterialModule} from "../shared/material/material.module";
import {MainContentComponent} from "./main-content/main-content.component";
import {SidenavComponent} from "../shared/components/sidenav/sidenav.component";
import {ToolbarComponent} from "../shared/components/toolbar/toolbar.component";

const routes: Routes = [
  {
    path: '', component: ContactManagerComponent,
    children: [
      { path: '', component: MainContentComponent  }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  providers: [

  ],
  declarations: [
    ContactManagerComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent
  ]
})
export class ContactManagerModule { }
