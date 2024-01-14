import { put, takeEvery } from "redux-saga/effects";

import { addTodoSuccess, addTodoLoading } from "../actions/todo.action";

export function* todoAddSaga() {
  try {
    yield put(
      addTodoSuccess({
        name: "aman",
        description: "Hi i am aman rana form himachal perdesh",
      })
    );
  } catch (error) {}
}

export function* todoWatcher() {
  yield takeEvery(addTodoLoading, todoAddSaga);
}
