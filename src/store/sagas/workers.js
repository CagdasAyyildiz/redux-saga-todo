import { put,call  } from 'redux-saga/effects';
import actions from '../actions/actions';

const delay = time => new Promise(resolve => setTimeout(resolve, time));


export function* fetchTodosSaga() {
    const json_file = yield fetch("todos.json");
    const todos = yield json_file.json();
    yield call(delay,2000);
    yield put({type: actions.FETCH_TODOS_SUCCEED, todos: todos.todos});
}

