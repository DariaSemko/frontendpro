import React from "react";

export default class Button extends React.Component {
    render() {
        const {text} = this.props
        return (
            <button className="btn">{text}</button>
        )
    }
}