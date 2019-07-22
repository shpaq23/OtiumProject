import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {spinnerReducer} from './spinner.reducers';
import {userReducer} from './user.reducers';

export const appReducers: ActionReducerMap<AppState> = {
  spinner: spinnerReducer,
  loggedUser: userReducer
};
