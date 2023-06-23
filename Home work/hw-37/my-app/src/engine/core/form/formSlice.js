import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
        name: "form",
        initialState: {
            items: [],
        },
        reducers: {
            add:{
                //prepare: (payload, meta) => ({ payload, meta }),
                reducer: (state, action) => {
                    state.items = action.payload;
                }
            },
            clearItems: () => {
                return {
                    items: []
                }
            }
        }
    }
)
export const todosSelectors = {
    items: (state) => state.form.items,
    length: (state) => state.form.items.length,
}

export const todosActions = formSlice.actions;
export default formSlice.reducer;
