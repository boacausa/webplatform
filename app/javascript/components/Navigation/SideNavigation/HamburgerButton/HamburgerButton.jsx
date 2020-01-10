import React from 'react';
import classes from './HamburgerButton.sass';

const hamburgerButton = (props) => (
    <div className={classes.HamburgerButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default hamburgerButton;
