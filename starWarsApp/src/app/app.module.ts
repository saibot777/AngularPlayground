import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {StarWarsService} from './star-wars.service';
import { CharacterFormComponent } from './character-form/character-form.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'new-character', component: CharacterFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CharacterFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
