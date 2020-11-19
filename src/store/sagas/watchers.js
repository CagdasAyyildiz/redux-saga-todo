import { takeEvery } from 'redux-saga/effects';
import { fetchTodosSaga } from './workers';
import actions from '../actions/actions';

export function* watcher() {
    yield takeEvery(actions.FETCH_TODOS_START,fetchTodosSaga);
  /*  yield takeEvery(actions.ADD_TODO_START,addTodoSaga);
    yield takeEvery(actions.REMOVE_TODO_START,removeTodoSaga);
    yield takeEvery(actions.COMPLETE_TODO_START,completeTodoSaga);*/
}