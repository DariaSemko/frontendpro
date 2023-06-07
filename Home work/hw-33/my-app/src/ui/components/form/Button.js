import React from "react";
import cx from "classnames";
import useStyle from "../../../useStyle";

export default function Button (props) {
        const classes = useStyle();
        const { text, customClass, onClick } = props;
        const className = cx(
            classes.form__btn,
            {
                [customClass]: customClass,
            }
        )
        return (
            <button className={className} onClick={onClick}>{text}</button>
        )
}
