/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CITY_SUCCESS,
  GET_TOUR_SUCCESS,
  GET_MAP_SUCCESS,
} from './constants';

export const initialState = fromJS({
  cities: [],
  tours: [],
  map: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY_SUCCESS:
      return state.set('cities', action.payload.cities);
    case GET_TOUR_SUCCESS:
      return state.set('tours', action.payload.tours);
    case GET_MAP_SUCCESS:
      return state.set('map', action.payload.tours);

    default:
      return state;
  }
}

export default homePageReducer;
