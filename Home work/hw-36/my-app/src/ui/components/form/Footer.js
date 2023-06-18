import React from "react";
import {items} from "../../../engine/core/form/formSlice"
import {useDispatch, useSelector} from "react-redux";
import Button from "./Button";
import {clearValueTodo} from "../../../engine/core/form/thunk"

export default function Footer() {
    const itemsList = useSelector(items);
    const dispatch = useDispatch()
    const ClearValue = () => {
        dispatch(clearValueTodo())
    }

    return (
        <footer>
            <h3>У вас: ({itemsList.length}) записей </h3>
            <Button onClick={ClearValue} text="Clear"/>
        </footer>
    )
}