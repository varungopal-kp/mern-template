/*
 *
 * ChatRoomPage actions
 *
 */

import {
  DELETE_CHAT,
  DELETE_CHAT_ERROR,
  GET_LIST,
  GET_LIST_ERROR,
  GET_LIST_SUCCESS,
} from './constants';

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

export function deleteChat(id) {
  return {
    type: DELETE_CHAT,
    payload: id,
  };
}
export function deleteChatSuccess(data) {
  return {
    type: GET_LIST,
  };
}
export function deleteChatError(error) {
  return {
    type: DELETE_CHAT_ERROR,
    payload: error,
  };
}
