import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {UserModule} from './user/user.module';
import {spinnerReducer} from './store/reducers/spinner.reducers';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('spinner', spinnerReducer),
    StoreDevtoolsModule.instrument({
      name: 'Otium Project',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
