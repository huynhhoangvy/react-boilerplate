import { call, put, takeLatest } from "redux-saga/effects";
import * as contants from "../../utils/constants";
import { getDataSuccess, getDataError } from "../actions/actionCreators";

export function* userSaga() {
  yield takeLatest(contants.GET_DATA_REQUEST, getDataWorker);
}

function* getDataWorker(action) {
  try {
    const response = yield call(getData, action);
    const data = yield response.json();
    if (response.status === 200) {
      yield put(getDataSuccess(data));
    } else {
      yield put(getDataError(data));
    }
  } catch (err) {
    yield put(getDataError(err));
  }
}

const getData = async () => {
  const url = `https://randomuser.me/api`;
  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    return await fetch(url, settings);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
