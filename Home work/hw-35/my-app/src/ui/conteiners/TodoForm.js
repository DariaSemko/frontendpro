import React from "react";

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {useDispatch} from "react-redux";

function TodoForm() {
    const dispatch = useDispatch();
    const onAdd = (event) => {
        event.preventDefault()
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        dispatch({type: "form/add", id: Math.random(), text: text})
        input.value = ''
    }
    return (
        <form
            className="form"
            onSubmit={onAdd}
        >
            <Input/>
            <Button text="Отправить"/>
        </form>
    );
}

export default TodoForm;
