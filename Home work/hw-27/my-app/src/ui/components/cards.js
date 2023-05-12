import React from "react";
import Button from "./button";

export default class Cards extends React.Component {
    render() {
        const {src, text} = this.props
        return (
            <div className="card">
                <img src={src}/>
                <p>{text}</p>
                <Button text="Купити"/>
            </div>
        )
    }
}