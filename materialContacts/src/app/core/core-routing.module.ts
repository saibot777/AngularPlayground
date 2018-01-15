import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {FlexboxComponent} from "../components/flexbox/flexbox.component";

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flex', component: FlexboxComponent },
  { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
