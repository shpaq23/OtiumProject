import {Injectable} from '@angular/core';
import {AuthorizationService} from '../../api/services/authorization.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {LoginUser, LoginUserFail, LoginUserSuccess, LogoutUserFail, LogoutUserSuccess, UserActionsTypes} from '../actions/user.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {HideSpinner, ShowSpinner} from '../actions/spinner.actions';

@Injectable()
export class UserEffects {
  constructor(private authorizationService: AuthorizationService,
              private actions$: Actions) {}
  @Effect()
  loginUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUser),
    tap( () => new ShowSpinner()),
    map((action: LoginUser) => action.payload),
    mergeMap(payload =>
      this.authorizationService.login(payload).pipe(
        map(user => (new LoginUserSuccess(user))),
        catchError(err => of(new LoginUserFail(err))),
        tap(() => new HideSpinner())
      )));
  @Effect()
  logoutUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LogoutUser),
    tap(() => new ShowSpinner()),
    mergeMap(() => this.authorizationService.logout().pipe(
      map(() => (new LogoutUserSuccess())),
      catchError(err => of(new LogoutUserFail(err))),
      tap(() => new HideSpinner())
    )));
}
