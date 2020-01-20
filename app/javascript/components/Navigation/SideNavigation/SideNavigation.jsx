import React from 'react';
import styles from './SideNavigation.sass';
import Backdrop from "../../Backdrop/Backdrop";
import LineDivisor from "../../LineDivisor/LineDivisor";
import {NavLink} from "react-router-dom";
import {redirectToLogOut, redirectToNgoArea} from "../../../utils/ServerLinks";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const sideNavigation = (props) => {
    let attachedClasses = [styles.SideNavigation, styles.Close];

    if (props.visible) {
        attachedClasses = [styles.SideNavigation, styles.Open];
    }

    function ngoAreaLink(user) {
        if (user.group === "admin" || user.group === "ngo") {
            return <a onClick={() => redirectToNgoArea()} className={styles.link}>Área da ONG</a>
        }
    }

    function userProperties(user) {
        if (user.email) {
            return <div>
                <div className={styles.userProperties}>
                    <span className={styles.userPicture} />
                    <p>{user.email}</p>
                </div>
                <LineDivisor />
            </div>
        }
    }

    function settings(user) {
        if (user.email) {
            return <div>
                <LineDivisor />
                <div className={styles.linksBox}>
                    <a className={styles.link}>Configurações</a>
                    {ngoAreaLink(user)}
                </div>
            </div>
        }
    }

    function loginLogout(user) {
        if (user.email) {
            return <div className={styles.linksBox}>
                <a onClick={() => redirectToLogOut()} className={styles.link}>Sair</a>
            </div>
        } else {
            return <div className={styles.linksBox}>
                <a href="/users/sign_in" className={styles.link}>Entrar</a>
            </div>
        }
    }

    return (
        <div>
            <Backdrop show={props.visible} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                {userProperties(props.user)}
                <NavigationLinks styles={styles} />
                {settings(props.user)}
                <LineDivisor />
                {loginLogout(props.user)}
            </div>
        </div>
    );
};

export default sideNavigation;
