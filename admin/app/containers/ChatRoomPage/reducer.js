/*
 *
 * Tours reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import { GET_LIST_SUCCESS } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  list: [],
});

/* eslint-disable default-case, no-param-reassign */
const chatRoomPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_LIST_SUCCESS:
        return state.set('list', action.payload.chats);
      default:
        return state;
    }
  });

export default chatRoomPageReducer;
