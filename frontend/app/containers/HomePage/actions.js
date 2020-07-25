/*
 *
 * HomePage actions
 *
 */

import { GET_CITY, GET_CITY_FAILURE, GET_CITY_SUCCESS } from './constants';

export function getCity() {
  return {
    type: GET_CITY,
  };
}
export function getCitySucess(data) {
  return {
    type: GET_CITY_SUCCESS,
    payload: data,
  };
}
export function getCityFailure(err) {
  return {
    type: GET_CITY_FAILURE,
    payload: err,
  };
}
