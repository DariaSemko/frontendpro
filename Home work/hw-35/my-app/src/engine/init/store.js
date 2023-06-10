import {configureStore} from "@reduxjs/toolkit"
import form from "../core/form/formSlice"

export const store = configureStore({
    reducer: {
        form: form
    }
})
