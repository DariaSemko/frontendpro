import React from "react";
import '../../main.css';

import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm (props) {
    const {handleAdd, handleText, text, disabledSubmit} = props
        return (
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input text={text}
                       handleText={handleText} />
                <Button text="Отправить" disabledSubmit={disabledSubmit}/>
            </form>
        );
}

export default TodoForm;
