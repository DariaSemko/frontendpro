import React from "react";
import {items} from "../../../engine/core/form/formSlice"
import {useSelector} from "react-redux";

export default function Footer () {
        const itemsList = useSelector(items);
        return <h3>Всего: {itemsList.length} </h3>
}