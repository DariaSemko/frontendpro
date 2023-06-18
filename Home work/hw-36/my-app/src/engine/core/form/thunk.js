import {clearItems} from "./formSlice";

export const onAddTodo = (event) => {
    return (dispatch) => {
        event.preventDefault()
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        dispatch({type: "form/add", id: Math.random(), text: text})
        input.value = ''
    }
}

export const clearValueTodo = () => {
    return (dispatch) => {
        dispatch(clearItems())
    }
}