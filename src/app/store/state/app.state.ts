import {UserState} from './user.state';
import {SpinnerState} from './spinner.state';

export interface AppState {
  spinner: SpinnerState;
  loggedUser: UserState;
}
