import React from "react";
import Li from "./li";

export default class List extends React.Component {
    render() {
        return (
            <ul className="headerList">
                <Li text="Головна" />
                <Li text="Інфо" />
                <Li text="Допомога" />
                <Li text="Блог" />
                <input type="search" placeholder="пошук"/>
            </ul>
        )
    }
}