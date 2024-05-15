import { all } from "redux-saga/effects";
import { StudentWatcherSaga } from "./ComponentSaga/ComponentSaga";

function* rootSaga() {
  yield all([StudentWatcherSaga()]);
}
export default rootSaga;