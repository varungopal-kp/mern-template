/*
 *
 * Login actions
 *
 */

import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './constants';

export function login(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}
export function loginSucess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}
