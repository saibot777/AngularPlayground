import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {NgRedux, DevToolsExtension, NgReduxModule} from '@angular-redux/store';
import {combine, IInital_State, INITIAL_STATE} from './store/models/initialState';
import {HttpModule} from '@angular/http';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IInital_State>
  ) {
      let enhancers = [devTools.enhancer()];
      ngRedux.configureStore(combine, INITIAL_STATE, [], enhancers)
  }
}
