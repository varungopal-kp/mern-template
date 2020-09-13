import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { loginSucess, loginError } from './actions';
import { LOGIN } from './constants';

const apiURL = `${process.env.BASE_URL}`;

export function* loginCall({ payload }) {
  try {
    const repos = yield axios.post(`${apiURL}/login`, { credentials: payload });
    
    if (repos.data) {
      localStorage.setItem('_token', repos.data.token);
      localStorage.setItem('user', repos.data.user._id);
    }
    yield put(loginSucess(repos.data));
    
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* Saga() {
  yield takeLatest(LOGIN, loginCall);
}
