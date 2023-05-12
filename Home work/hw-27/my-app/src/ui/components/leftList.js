import React from "react";
import Li from "./li";

export default class LeftList extends React.Component {
    render() {
        return (
            <ul className="leftList">
                <Li text="Новинки" />
                <Li text="Білизна" />
                <Li text="Одяг" />
                <Li text="Взуття" />
                <Li text="Аксесуари" />
                <Li text="Купальники" />
                <Li text="Розпродаж" />
            </ul>
        )
    }
}