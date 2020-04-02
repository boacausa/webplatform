import React from "react";
import classes from "./TextInputWithLabel.sass";
import cx from "classnames";

const TextInputWithLabel = (props) => {
    return <div className={cx(classes.TextInputWithLabel, props.className)}>
        <p className={classes.label}>{props.label}</p>
        <input
            className={classes.input}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </div>;
};

export default TextInputWithLabel;
