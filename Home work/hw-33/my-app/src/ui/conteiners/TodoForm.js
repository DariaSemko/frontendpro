import React from "react";
import "../../useStyle.js"

import {Form, Field} from "react-final-form"

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import useStyle from "../../useStyle";

function TodoForm (props) {
    const {handleAdd, handleText, text, validateValue} = props
    const classes = useStyle(props);
        return (
            <Form onSubmit={handleAdd}
                  validate={validateValue}
                  render={() => (
                      <form
                          className={classes.formStyle}
                          onSubmit={handleAdd}
                      >
                          <Field name="text"
                                 component={Input}
                                 text={text}
                                 handleText={handleText}
                          />
                          <Button text="Отправить"/>
                      </form>
                  )}
            />
        );
}

export default TodoForm;
