import {    put } from 'redux-saga/effects';
import actions from '../actions/actions';

export function* fetchTodosSaga() {
    const json_file = yield fetch("todos.json");
    const todos = yield json_file.json();
    console.log(todos)
    yield put({type: actions.FETCH_TODOS_SUCCEED, todos: todos})
}

