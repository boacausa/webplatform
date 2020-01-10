import React from 'react';
// import Logo from '../../Logo/Logo';
// import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideNavigation.sass';
import Backdrop from "../../Backdrop/Backdrop";
// import Aux from '../../../hoc/Aux/Aux';

const sideNavigation = (props) => {
    let attachedClasses = [classes.SideNavigation, classes.Close];

    if (props.visible) {
        attachedClasses = [classes.SideNavigation, classes.Open];
    }

    return (
        <div>
            <Backdrop show={props.visible} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                {/*<div className={classes.Logo}>*/}
                {/*    <Logo />*/}
                {/*</div>*/}
                {/*<nav>*/}
                {/*    <NavigationItems />*/}
                {/*</nav>*/}
            </div>
        </div>
    );
};

export default sideNavigation;
