import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPageDomain = state => state.get('loginPage', initialState);

const makeSelectLoading = () =>
  createSelector(
    selectPageDomain,
    state => state.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectPageDomain,
    state => state.get('error'),
  );

const makeSelectPage = () =>
  createSelector(
    selectPageDomain,
    substate => substate.toJS(),
  );

export default makeSelectPage;
export { selectPageDomain, makeSelectLoading, makeSelectError, makeSelectPage };
