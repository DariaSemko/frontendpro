import {put, call} from "redux-saga/effects"

export function* callAddTodosWorker(action) {
        const text = action.payload;
        const currentItems = yield call(() => {
                return JSON.parse(localStorage.getItem('items')) || [];
        })
        const newItems = [
                ...currentItems,
                {id: Math.random(), text: text}
        ]
        yield put({type: "form/add", payload: newItems})
        localStorage.setItem('items', JSON.stringify(newItems));
}