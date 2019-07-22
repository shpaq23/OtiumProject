import {initialUserState, UserState} from '../state/user.state';
import {UserActions, UserActionsTypes} from '../actions/user.actions';

export function userReducer(state = initialUserState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionsTypes.LoginUserSuccess:
      return {
        ... state,
        user: action.payload,
        error: ''
      };
    case UserActionsTypes.LoginUserFail:
      return  {
        ... state,
        error: ''
      };
    case UserActionsTypes.LogoutUserSuccess:
      return {
        ... state,
        user: null,
        error: ''
      };
    case UserActionsTypes.LogoutUserFail:
      return {
        ... state,
        error: action.payload
      };
    default:
      return state;
  }
}
