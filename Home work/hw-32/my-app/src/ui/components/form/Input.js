import React from "react";

export default function Input (props) {
        const {text, handleText} = props
        return <input type="text" className="form__input" value={text} onChange={handleText} />
}
