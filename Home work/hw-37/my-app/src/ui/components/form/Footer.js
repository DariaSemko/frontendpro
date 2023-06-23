import React from "react";
import {todosSelectors} from "../../../engine/core/form/formSlice"
import {useDispatch, useSelector} from "react-redux";
import Button from "./Button";
import {clearValueTodo} from "../../../engine/core/form/thunk"

export default function Footer() {
    const dispatch = useDispatch()
    const length = useSelector(todosSelectors.length);
    const ClearValue = () => {
        dispatch(clearValueTodo())
        localStorage.setItem('items', JSON.stringify([]));
    }

    return (
        <footer>
            <h3>У вас: {length} записей </h3>
            <Button onClick={ClearValue} text="Clear"/>
        </footer>
    )
}