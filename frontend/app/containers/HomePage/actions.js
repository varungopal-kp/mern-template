/*
 *
 * HomePage actions
 *
 */

import {
  GET_CITY,
  GET_CITY_FAILURE,
  GET_CITY_SUCCESS,
  GET_TOUR_SUCCESS,
  GET_TOUR_FAILURE,
  GET_TOUR,
  GET_MAP,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE,
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAILURE,
} from './constants';

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

export function getTour() {
  return {
    type: GET_TOUR,
  };
}
export function getTourSucess(data) {
  return {
    type: GET_TOUR_SUCCESS,
    payload: data,
  };
}
export function getTourFailure(err) {
  return {
    type: GET_TOUR_FAILURE,
    payload: err,
  };
}

export function getMap(params) {
  return {
    type: GET_MAP,
    payload: params,
  };
}
export function getMapSucess(data) {
  return {
    type: GET_MAP_SUCCESS,
    payload: data,
  };
}
export function getMapFailure(err) {
  return {
    type: GET_MAP_FAILURE,
    payload: err,
  };
}
export function postContact(params) {
  return {
    type: POST_CONTACT,
    payload: params,
  };
}
export function postContactSucess(data) {
  return {
    type: POST_CONTACT_SUCCESS,
    payload: data,
  };
}
export function postContactFailure(err) {
  return {
    type: POST_CONTACT_FAILURE,
    payload: err,
  };
}
