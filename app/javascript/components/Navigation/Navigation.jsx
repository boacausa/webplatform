import React from 'react';
import styles from './Navigation.sass';

const Navigation = () => {
    return <nav className={styles.Navigation}>
        <h1 className={styles.title}>Boa Causa</h1>
        <div className={styles.links}>
            <a>Home</a>
            <a>ONGs</a>
            <a className={styles.linkActive}>Adote</a>
        </div>
    </nav>;
};

export default Navigation;
