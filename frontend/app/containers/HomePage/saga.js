import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  getCityFailure,
  getCitySucess,
  getTourSucess,
  getTourFailure,
  getMapSucess,
  getMapFailure,
  postContactSucess,
  postContactFailure,
} from './actions';
import { GET_CITY, GET_TOUR, GET_MAP, POST_CONTACT } from './constants';

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

export function* getTourCall() {
  try {
    const repos = yield axios
      .post(`${apiURL}`, {
        query: `
        {
          tours{
            name
            image
            description
            price
            star
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
    yield put(getTourSucess(repos));
  } catch (err) {
    yield put(getTourFailure(err));
  }
}

export function* getMapCall({ payload }) {
  const params = JSON.stringify(JSON.stringify(payload));
  try {
    const repos = yield axios
      .post(`${apiURL}`, {
        query: `
        {
          tours(params:${params}){
            name
            image
            description
            price
            star
            lat
            lon
            city{
              name
            }
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
    yield put(getMapSucess(repos));
  } catch (err) {
    yield put(getMapFailure(err));
  }
}

export function* postContactCall({ payload }) {
  const formData = payload;
  try {
    const repos = yield axios
      .post(`${apiURL}`, {
        query: `
       
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
    yield put(postContactSucess(repos));
  } catch (err) {
    yield put(postContactFailure(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(GET_CITY, getCityCall);
  yield takeLatest(GET_TOUR, getTourCall);
  yield takeLatest(GET_MAP, getMapCall);
  yield takeLatest(POST_CONTACT, postContactCall);
}
