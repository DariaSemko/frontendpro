import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
        name: "form",
        initialState: {
            items: [],
        },
        reducers: {
            add: (state, action) => {
                return {
                    items: [
                        ...state.items,
                        {
                            id: action.id,
                            text: action.text,
                        },
                    ]
                }
            },
            clearItems: (state) => {
                return {
                    items: []
                }
            }
        }
    }
)
export const items = state => state.form.items;
export const {
    add,
    clearItems
} = formSlice.actions

export default formSlice.reducer;
