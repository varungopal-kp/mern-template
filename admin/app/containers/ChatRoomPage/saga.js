import axios from 'axios';
import { defaultHeader } from 'helpers/apiHeader';
import { put, takeLatest } from 'redux-saga/effects';
import { getListError, getListSuccess } from './actions';
import { GET_LIST } from './constants';
const apiURL = `${process.env.API_BASE_URL}`;

export function* getListCall() {
  try {
    const repos = yield axios
      .post(
        `${apiURL}`,
        {
          query: `
        {
          chats{
             _id
             user             
             chats{
               user
               message
               time
             }
            }
        }
        `,
        },
        {
          headers: defaultHeader,
        },
      )

      .then(response => {
        if (response.data) {
          const { data } = response.data;
          return data;
        }
        return {};
      })

      .catch(error => {
        console.error(error);
      });
    yield put(getListSuccess(repos));
  } catch (err) {
    yield put(getListError(err));
  }
}

export default function* Saga() {
  yield takeLatest(GET_LIST, getListCall);
}
