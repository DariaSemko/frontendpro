import React from "react";
import Button from "./form/Button";

export default class TodoItem extends React.Component {
    render() {
        const { text, handleRemove, id, handleChange, saveChange, showEdit} = this.props;
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
            <div className="todo-item">
                {showEdit?
                    <input type="text" name="text" className="itemSave" defaultValue={text}/>:
                    <div className="todo-item__description">{text}</div>
                }
                {showEdit?
                    <Button text='Cохранить' onClick={save}/>:
                    <Button text='Редактировать' onClick={change}/>
                }
                <Button
                    text="Удалить"
                    onClick={onClick}
                    customClass="todo-item__delete"
                />
            </div>
        )
    }
}
