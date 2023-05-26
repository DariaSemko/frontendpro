import React from "react";
import "../pages/contacts.js"
import Link from "./link";
export default function Header() {
    return (
        <header className="header">
            <h1>ToDoList</h1>
            <ul className="nav">
                <li><Link type="nav" to="/">Головна</Link></li>
                <li><Link type="nav" to="/contacts">Контакти</Link></li>
                <li><Link type="nav" to="/about">Про мене</Link></li>
            </ul>
        </header>
    )
}