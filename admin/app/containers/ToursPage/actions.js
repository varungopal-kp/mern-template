/*
 *
 * Tours actions
 *
 */

import { GET_LIST, GET_LIST_ERROR, GET_LIST_SUCCESS } from './constants';

export function getList() {
  return {
    type: GET_LIST,
  };
}
export function getListSuccess(data) {
  return {
    type: GET_LIST_SUCCESS,
    payload: data,
  };
}
export function getListError(error) {
  return {
    type: GET_LIST_ERROR,
    payload: error,
  };
}
