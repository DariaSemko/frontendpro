import {configureStore} from "@reduxjs/toolkit"
import form from "../core/form/formSlice"
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        form: form
    },
    middleware: [
        thunk
    ]
})
