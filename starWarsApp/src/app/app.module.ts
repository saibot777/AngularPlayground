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
import {HttpModule} from '@angular/http';

const routes: Routes = [
  { path: 'characters', component: TabsComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: ':side', component: ListComponent }
      ]
  },
  { path: 'new-character', component: CharacterFormComponent },
  { path: '**', redirectTo: '/characters' }
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
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
