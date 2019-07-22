import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from '../state/user.state';

const getUserFeatureState = createFeatureSelector<UserState>('loggedUser');

export const getLoggedUser = createSelector(
  getUserFeatureState,
  state => state.user
);
export const getError = createSelector(
  getUserFeatureState,
  state => state.error
);
