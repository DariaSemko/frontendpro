import React from "react";

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {useDispatch} from "react-redux";
import {onAddTodo} from "../../engine/core/form/thunk"

function TodoForm() {
    const dispatch = useDispatch();
    const onAdd = (event) => {
        dispatch(onAddTodo(event))
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
