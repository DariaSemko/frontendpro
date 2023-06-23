import {todosActions} from "../formSlice";
import {put, call} from "redux-saga/effects"

export function* callGetTodosWorker() {
    const response = yield call(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    })
    yield put(todosActions.add(response));
}