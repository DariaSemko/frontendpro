import React from "react";
import Button from "./form/Button";
import useStyle from "../../useStyle";

export default function TodoItem(props) {
    const {text, handleRemove, id, handleChange, saveChange, showEdit} = props;
    const classes = useStyle();
    const onClick = () => {
        handleRemove(id);
    }
    const change = () => {
        handleChange(id)
    }

    const save = (event) => {
        saveChange(id, event)
    }

    return (
        <div className={classes.todo_item}>
            {showEdit ?
                <input type="text" name="text" className={classes.itemSave} defaultValue={text}/> :
                <div className={classes.todo_item__description}>{text}</div>
            }
            {showEdit ?
                <Button text='Cохранить' onClick={save}/> :
                <Button text='Редактировать' onClick={change}/>
            }
            <Button
                text="Удалить"
                onClick={onClick}
                customClass={classes.todo_item__delete}
            />
        </div>
    )
}