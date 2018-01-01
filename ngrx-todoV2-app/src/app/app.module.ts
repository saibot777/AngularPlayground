import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {NgRedux, DevToolsExtension, NgReduxModule} from '@angular-redux/store';
import {combine, IInitalState, INITIAL_STATE} from './store/models/initialState';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IInitalState>
  ) {
      let enhancers = [devTools.enhancer()];
      ngRedux.configureStore(combine, INITIAL_STATE, [], enhancers)
  }
}
