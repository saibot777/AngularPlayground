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
import {UserService} from "../core/services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: '', component: ContactManagerComponent,
    children: [
      { path: ':id', component: MainContentComponent  },
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
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactManagerComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent,
    NotesComponent
  ]
})
export class ContactManagerModule { }
