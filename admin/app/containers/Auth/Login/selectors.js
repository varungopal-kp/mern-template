import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.loginPage || initialState;

const makeSelectPageState = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.toJS(),
  );
const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

export default makeSelectLogin;
export { selectLoginDomain, makeSelectPageState };
