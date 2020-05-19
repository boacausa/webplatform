import React from "react";
import classes from "./TextInputWithLabel.sass";
import cx from "classnames";

const errorMessage = (error) => {
    return <span className={classes.textError}>{error.message}</span>
}

const inputErrorClass = (error) => {
    if (error) {
        return classes.inputError;
    }
}

const TextInputWithLabel = (props) => {
    const {error, label} = props;

    return <div className={cx(classes.TextInputWithLabel, props.className)}>
        <p className={classes.label}>{label}</p>
        <input
            className={cx(classes.input, inputErrorClass(error))}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            type={props.type}
        />
        {error && errorMessage(error)}
    </div>;
};

export default TextInputWithLabel;
