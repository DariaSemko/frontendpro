import React from "react";
import useStyle from "../../../useStyle";

export default function Input(props) {
    const {text, handleText, meta} = props
    const classes = useStyle(props);
    return (
        <>
            <input type="text" className={classes.form__input} value={text} onChange={handleText}/>
            {meta.error ? <span className={classes.error}>{meta.error}</span> : ""}
        </>
    )
}