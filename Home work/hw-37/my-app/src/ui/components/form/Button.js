import React from "react";

export default function Button(props) {
    const {text, onClick} = props;

    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}
