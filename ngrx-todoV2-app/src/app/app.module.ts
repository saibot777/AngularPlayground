import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {NgRedux, DevToolsExtension, NgReduxModule} from '@angular-redux/store';
import {combine, IInital_State, INITIAL_STATE} from './store/models/initialState';
import {HttpModule} from '@angular/http';
import {HttpEpicsService} from './store/epics/http.epic';
import {createEpicMiddleware} from 'redux-observable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [HttpEpicsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private devTools: DevToolsExtension,
    private httpEpicsService: HttpEpicsService,
    private ngRedux: NgRedux<IInital_State>
  ) {
      let enhancers = [devTools.enhancer()];
      ngRedux.configureStore(combine, INITIAL_STATE, [
        createEpicMiddleware(this.httpEpicsService.createTodo)
      ], enhancers)
  }
}
