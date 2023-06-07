import React from "react";
import "../pages/contacts.js"
import Link from "./link";
import useStyle from "../../useStyle";
export default function Header() {
    const classes = useStyle();
    return (
        <header className={classes.header}>
            <h1>ToDoList</h1>
            <ul className={classes.nav}>
                <li><Link type="nav" to="/">Головна</Link></li>
                <li><Link type="nav" to="/contacts">Контакти</Link></li>
                <li><Link type="nav" to="/about">Про мене</Link></li>
            </ul>
        </header>
    )
}