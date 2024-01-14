import { all, fork } from "redux-saga/effects";
import { todoWatcher } from "./todo.saga";

function* rootSaga() {
  yield all([fork(todoWatcher)]);
}

export default rootSaga;
