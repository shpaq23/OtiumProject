import {User} from '../../api/services/authorization.service';

export interface UserState {
  user: User;
  error: string;
  success: boolean;
}
export const initialUserState: UserState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
  success: false
};
