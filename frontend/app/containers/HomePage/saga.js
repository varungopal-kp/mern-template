import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getCitySucess, getCityFailure } from './actions';
import { GET_CITY } from './constants';

const apiURL = `${process.env.API_BASE_URL}`;

export function* getCityCall() {
  try {
    const repos = yield axios
      .post(`${apiURL}`, {
        query: `
        {
          cities{
             _id
             name
            }
        }
        `,
      })

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
    yield put(getCitySucess(repos));
  } catch (err) {
    yield put(getCityFailure(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(GET_CITY, getCityCall);
}
