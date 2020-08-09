/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import { LOGIN_SUCCESS } from './constants';

export const initialState = fromJS({
  login: false,
});

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return state.set('login', action.payload);
    }
  });

export default loginReducer;
