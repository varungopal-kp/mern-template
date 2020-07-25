/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_CITY_SUCCESS } from './constants';

export const initialState = fromJS({
  cities: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY_SUCCESS:
      return state.set('cities', action.payload.cities);

    default:
      return state;
  }
}

export default homePageReducer;
