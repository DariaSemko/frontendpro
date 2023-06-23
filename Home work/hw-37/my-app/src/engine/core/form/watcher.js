import {takeEvery} from "redux-saga/effects"
import {todosAsyncAction} from "./asyncAction";
import {callGetTodosWorker} from "./workers/getTodo";
import {callAddTodosWorker} from "./workers/addTodo";
export function* todosWatcher () {
    yield takeEvery (todosAsyncAction.getTodosAsync.type, callGetTodosWorker)
    yield takeEvery (todosAsyncAction.addTodosAsync.type, callAddTodosWorker)
}