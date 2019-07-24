import {Injectable} from '@angular/core';
import {AuthorizationService} from '../../api/services/authorization.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {
  LoginUser,
  LoginUserFail,
  LoginUserSuccess,
  LogoutUserFail,
  LogoutUserSuccess,
  RegisterUser, RegisterUserFail, RegisterUserSuccess,
  UserActionsTypes
} from '../actions/user.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {HideSpinner, ShowSpinner} from '../actions/spinner.actions';
import {SpinnerState} from '../state/spinner.state';

@Injectable()
export class UserEffects {
  constructor(private authorizationService: AuthorizationService,
              private actions$: Actions,
              private spinnerStore: Store<SpinnerState>) {}
  @Effect()
  loginUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUser),
    tap( () => this.spinnerStore.dispatch(new ShowSpinner())),
    map((action: LoginUser) => action.payload),
    mergeMap(payload =>
      this.authorizationService.login(payload).pipe(
        map(user => (new LoginUserSuccess(user))),
        catchError(err => of(new LoginUserFail(err))),
        tap(() => this.spinnerStore.dispatch(new HideSpinner()))
      )));
  @Effect()
  logoutUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LogoutUser),
    tap(() => this.spinnerStore.dispatch(new ShowSpinner())),
    mergeMap(() => this.authorizationService.logout().pipe(
      map(() => (new LogoutUserSuccess())),
      catchError(err => of(new LogoutUserFail(err))),
      tap(() => this.spinnerStore.dispatch(new HideSpinner()))
    )));
  @Effect()
  registerUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.RegisterUser),
    tap(() => this.spinnerStore.dispatch(new ShowSpinner())),
    map((action: RegisterUser) => action.payload),
    mergeMap(payload =>
      this.authorizationService.register(payload).pipe(
        map(() => (new RegisterUserSuccess())),
        catchError(err => of(new RegisterUserFail(err))),
        tap(() => this.spinnerStore.dispatch(new HideSpinner()))
      )));
}
