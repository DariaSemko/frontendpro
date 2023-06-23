import {configureStore} from "@reduxjs/toolkit"
import form from "../core/form/formSlice"
import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk";
import {rootSaga} from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        form: form
    },
    middleware: [
        thunk,
        sagaMiddleware
    ]
})

sagaMiddleware.run (
    rootSaga
)
