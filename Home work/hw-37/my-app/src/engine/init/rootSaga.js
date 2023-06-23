import {all, call} from "redux-saga/effects"
import {todosWatcher} from "../core/form/watcher";
export function* rootSaga() {
    yield all([
        call(todosWatcher)
    ])
}