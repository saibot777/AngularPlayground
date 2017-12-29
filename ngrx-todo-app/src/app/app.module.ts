import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

import { AppComponent } from './app.component';
import {IAppState, INITIAL_STATE} from './store';
import {rootReducer} from './core/store/reducer';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
