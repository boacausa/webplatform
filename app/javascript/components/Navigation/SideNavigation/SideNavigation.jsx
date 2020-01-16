import React from 'react';
import styles from './SideNavigation.sass';
import Backdrop from "../../Backdrop/Backdrop";
import LineDivisor from "../../LineDivisor/LineDivisor";
import {NavLink} from "react-router-dom";
import {redirectToLogOut, redirectToNgoArea} from "../../../utils/ServerLinks";

const sideNavigation = (props) => {
    let attachedClasses = [styles.SideNavigation, styles.Close];

    if (props.visible) {
        attachedClasses = [styles.SideNavigation, styles.Open];
    }

    function ngoAreaLink() {
        if (props.user.group === "admin" || props.user.group === "ngo") {
            return <a onClick={() => redirectToNgoArea()} className={styles.link}>Área da ONG</a>
        }
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
                {/* TODO: this need to be visible if user is not logged in */}
                <div className={styles.linksBox}>
                    <NavLink exact className={styles.link} activeClassName={styles.linkActive} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/ongs">ONGs</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/adocao">Adoção</NavLink>
                </div>
                <LineDivisor />
                <div className={styles.linksBox}>
                    <a className={styles.link}>Configurações</a>
                    {ngoAreaLink()}
                </div>
                <LineDivisor />
                <div className={styles.linksBox}>
                    <a onClick={() => redirectToLogOut()} className={styles.link}>Sair</a>
                </div>
            </div>
        </div>
    );
};

export default sideNavigation;
