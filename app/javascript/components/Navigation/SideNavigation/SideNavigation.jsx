import React from 'react';
import styles from './SideNavigation.sass';
import Backdrop from "../../Backdrop/Backdrop";
import LineDivisor from "../../LineDivisor/LineDivisor";

const sideNavigation = (props) => {
    let attachedClasses = [styles.SideNavigation, styles.Close];

    if (props.visible) {
        attachedClasses = [styles.SideNavigation, styles.Open];
    }

    return (
        <div>
            <Backdrop show={props.visible} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.userProperties}>
                    <span className={styles.userPicture} />
                    <p>{props.user.email}</p>
                </div>
                <LineDivisor />
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
