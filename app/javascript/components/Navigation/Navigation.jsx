import React from 'react';
import styles from './Navigation.sass';
import {NavLink} from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";

class Navigation extends React.Component {
    state = {
        userMenuActive: false
    };

    loginButton = () => {
        return <a href="/users/sign_in" className={styles.loginButton}>Entrar</a>;
    };

    toggleMoreButtonHandler = () => {
        this.setState({userMenuActive: !this.state.userMenuActive});
    };

    userButtons = () => {
        return <div className={styles.userProperties}>
            <span className={styles.userPicture} />
            <button className={styles.moreButton} onClick={() => this.toggleMoreButtonHandler()}>
                <i className={styles.moreIcon} aria-hidden="true" />
            </button>
            {this.state.userMenuActive && <UserMenu />}
        </div>;
    };

    render() {
        return (
            <nav className={styles.Navigation}>
                <h1 className={styles.title}>Boa Causa</h1>
                <div className={styles.links}>
                    <NavLink exact className={styles.link} activeClassName={styles.linkActive} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/ongs">ONGs</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/adocao">Adoção</NavLink>
                </div>
                {this.props.userEmail ? this.userButtons() : this.loginButton()}
            </nav>
        );
    };
}

export default Navigation;
