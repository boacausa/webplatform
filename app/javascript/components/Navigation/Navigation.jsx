import React from 'react';
import styles from './Navigation.sass';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <nav className={styles.Navigation}>
        <h1 className={styles.title}>Boa Causa</h1>
        <div className={styles.links}>
            <NavLink exact activeClassName={styles.linkActive} to="/">Home</NavLink>
            <NavLink activeClassName={styles.linkActive} to="/ongs">ONGs</NavLink>
            <NavLink activeClassName={styles.linkActive} to="/adocao">Adocão</NavLink>
        </div>
    </nav>;
};

export default Navigation;
