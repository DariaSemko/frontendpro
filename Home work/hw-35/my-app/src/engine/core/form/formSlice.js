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

            }
        }
    }
)
export const items = state => state.form.items;
export const {
    add,
} = formSlice.actions

export default formSlice.reducer;
