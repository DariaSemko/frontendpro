import React from "react";
import TodoItem from "../components/TodoItem";
import {useSelector} from "react-redux";
import {items} from "../../engine/core/form/formSlice";

function ItemsList() {
    const itemsList = useSelector(items);

    return (
        <div>
            {itemsList.map(item => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    id={item.id}
                />
            ))}
        </div>
    );
}

export default ItemsList;
