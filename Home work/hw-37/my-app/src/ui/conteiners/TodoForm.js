import React from "react";

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {useDispatch,} from "react-redux";
import {onAddTodo} from "../../engine/core/form/thunk"
import {useEffect} from "react";
import {todosActions} from "../../engine/core/form/formSlice";
import {todosAsyncAction} from "../../engine/core/form/asyncAction";

function TodoForm() {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(todosAsyncAction.getTodosAsync());
        },
        []
    )
    const onAdd = (event) => {
        event.preventDefault()
        const input = event.target.getElementsByClassName('form__input')[0];
        dispatch(todosAsyncAction.addTodosAsync(input.value))
        input.value = ""
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
