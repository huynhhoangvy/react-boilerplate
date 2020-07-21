import * as userSaga from './user';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...Object.values(userSaga)
  ].map(fork));
}
