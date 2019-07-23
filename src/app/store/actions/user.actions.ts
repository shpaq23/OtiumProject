import {Action} from '@ngrx/store';
import {User} from '../../api/services/authorization.service';
import {LoginForm} from '../../user/form/form.component';

export enum UserActionsTypes {
  LoginUser = '[User] Login User',
  LoginUserSuccess = '[User] Login User Success',
  LoginUserFail = '[User] Login User Fail',

  LogoutUser = '[User] Logout User',
  LogoutUserSuccess = '[User] Logout User Success',
  LogoutUserFail = '[User] Logout User Fail'
}
export class LoginUser implements Action {
  public readonly type = UserActionsTypes.LoginUser;
  constructor(public payload: LoginForm) {}
}
export class LoginUserSuccess implements Action {
  public readonly type = UserActionsTypes.LoginUserSuccess;
  constructor(public payload: User) {}
}
export class LoginUserFail implements Action {
  public readonly type = UserActionsTypes.LoginUserFail;
  constructor(public payload: string) {}
}
export class LogoutUser implements Action {
  public readonly type = UserActionsTypes.LogoutUser;
}
export class LogoutUserSuccess implements Action {
  public readonly type = UserActionsTypes.LogoutUserSuccess;
}
export class LogoutUserFail implements Action {
  public readonly type = UserActionsTypes.LogoutUserFail;
  constructor(public payload: string) {}
}
export type UserActions = LoginUser | LoginUserSuccess | LoginUserFail
  | LogoutUser | LogoutUserSuccess | LogoutUserFail;
