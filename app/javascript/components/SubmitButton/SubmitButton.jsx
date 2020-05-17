import React from 'react';
import classes from './SubmitButton.sass';
import cx from "classnames";

const SubmitButton = (props) => {
    const buttonClass = props.isDisabled ? classes.SubmitButtonDisable : classes.SubmitButton;

    return (
        <button
            onClick={props.clicked}
            className={cx(buttonClass, props.classStyleModifier)}
        >{props.title}</button>
    );
};

export default SubmitButton;
