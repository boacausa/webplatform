import React from 'react';
import classes from './SecondLevelNavigation.sass';

const SecondLevelNavigation = (props) => {
    return <div className={classes.SecondLevelNavigation}>
        {props.children}
    </div>
};

export default SecondLevelNavigation;
