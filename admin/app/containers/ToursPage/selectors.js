import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tours state domain
 */

const selectToursDomain = state => state.tours || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tours
 */

const makeSelectTours = () =>
  createSelector(
    selectToursDomain,
    substate => substate,
  );

export default makeSelectTours;
export { selectToursDomain };
