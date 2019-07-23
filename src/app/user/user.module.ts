import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormComponent} from './form/form.component';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../store/effects/user.effects';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '../store/reducers/user.reducers';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('loggedUser', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserModule { }
