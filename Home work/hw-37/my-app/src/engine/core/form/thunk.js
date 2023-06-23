import {todosActions} from "./formSlice";

export const onAddTodo = (event) => {
    return (dispatch, getState) => {
        event.preventDefault()
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const items = getState().form.items;
        const newItems = [
            ...items,
            {id: Math.random(), text}
        ];
        dispatch({type: "form/add", payload:newItems})
        localStorage.setItem('items', JSON.stringify(newItems));
        input.value = ''
    }
}

export const clearValueTodo = () => {
    return (dispatch) => {
        dispatch(todosActions.clearItems())
    }
}