import {User} from '../../api/services/authorization.service';

export interface UserState {
  user: User;
  error: string;
}
export const initialUserState: UserState = {
  user: null,
  error: '',
};
