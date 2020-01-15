import React from 'react';
import styles from './SideNavigation.sass';
import Backdrop from "../../Backdrop/Backdrop";
import LineDivisor from "../../LineDivisor/LineDivisor";
import {NavLink} from "react-router-dom";

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
                <div className={styles.linksBox}>
                    <NavLink exact className={styles.link} activeClassName={styles.linkActive} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/ongs">ONGs</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/adocao">Adoção</NavLink>
                </div>
                <LineDivisor />
            </div>
        </div>
    );
};

export default sideNavigation;
