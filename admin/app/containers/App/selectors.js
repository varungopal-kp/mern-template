import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPageDomain = state => state.get('global', initialState);

const makeSelectPage = () =>
  createSelector(
    selectPageDomain,
    substate => substate.toJS(),
  );

export default makeSelectPage;
export { selectPageDomain, makeSelectPage };
