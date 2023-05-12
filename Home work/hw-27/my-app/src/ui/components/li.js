import React from "react";

export default class Li extends React.Component {
    render() {
        const {text} = this.props
        return (
            <li><a href="">{text}</a></li>
        )
    }
}