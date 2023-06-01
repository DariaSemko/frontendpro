import React from "react";
import cx from "classnames";

export default function Button (props) {
        const { text, customClass, onClick, disabledSubmit } = props;
        const className = cx(
            'form__btn',
            {
                [customClass]: customClass,
            }
        )
        return (
            <button className={className} onClick={onClick} disabled={disabledSubmit}>{text}</button>
        )
}
