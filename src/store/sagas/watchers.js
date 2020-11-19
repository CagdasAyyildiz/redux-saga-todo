import { takeEvery } from "redux-saga/effects";
import { fetchTodosSaga } from "./workers";
import actions from "../actions/actions";

export function* watcher() {
  yield takeEvery(actions.FETCH_TODOS_START, fetchTodosSaga);
}
