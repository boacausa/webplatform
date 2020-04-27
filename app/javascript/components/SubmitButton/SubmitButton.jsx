import React from 'react';
import classes from './SubmitButton.sass';
import cx from "classnames";

const SubmitButton = (props) => {
    const buttonClass = props.userRegisteredInterest ? classes.SubmitButtonDisable : classes.SubmitButton;

    return (
        <button
            onClick={props.clicked}
            className={cx(buttonClass, props.classStyleModifier)}
            disabled={props.userRegisteredInterest}
        >{props.title}</button>
    );
};

export default SubmitButton;
