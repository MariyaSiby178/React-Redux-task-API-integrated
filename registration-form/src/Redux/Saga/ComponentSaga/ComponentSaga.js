import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../Type/Type";
import {
  deleteData,
  editData,
  getData,
  getId,
  postData,
} from "../../../Services/mockApi";
import {
  deleteDataFail,
  deleteDataSuc,
  editDataFail,
  editDataSuc,
  getDataFail,
  getDataSuc,
  getIdFail,
  getIdSuc,
  postDataFail,
  postDataSuc,
} from "../../Action/Action";

function* getApi() {
  console.log("saga");
  const res = yield call(getData);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getDataSuc(res.data));
    console.log(res.data);
  } else {
    yield put(getDataFail("Failed"));
  }
}

function* postApi({ payload }) {
  console.log("posting", payload);
  const res = yield call(postData, payload);
  // console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(postDataSuc(res.data));
    console.log(res.data);
  } else {
    yield put(postDataFail("Failed"));
  }
}

function* getIdData({ payload }) {
  console.log("getting id", payload);
  const res = yield call(getId, payload);
  // console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getIdSuc(res.data));
    console.log(res.data);
  } else {
    yield put(getIdFail("GetId Failed"));
  }
}

function* deleteApi({ payload }) {
  console.log("deleting", payload);
  const res = yield call(deleteData, payload);
  // console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(deleteDataSuc(payload, res.data));
    console.log(res.data);
  } else {
    yield put(deleteDataFail("Delete failed"));
  }
}

function* editApi({ payload }) {
  console.log("editing", payload);
  const res = yield call(editData, payload.data, payload.id);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(editDataSuc(res.data));
  } else {
    yield put(editDataFail("Edit failed"));
  }
}

export function* StudentWatcherSaga() {
  console.log("WatcherSaga");
  yield takeLatest(Type.GET_REQUEST, getApi);
  yield takeLatest(Type.POST_REQUEST, postApi);
  yield takeLatest(Type.GET_ID_REQUEST, getIdData);
  yield takeLatest(Type.DELETE_REQUEST, deleteApi);
  yield takeLatest(Type.PUT_REQUEST, editApi);
}
