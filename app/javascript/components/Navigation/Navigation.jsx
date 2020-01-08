import React from 'react';
import styles from './Navigation.sass';
import {NavLink} from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";
import OutsideComponentHandler from "../OutsideComponentHandler";

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

    userMenu = () => {
        return <OutsideComponentHandler
            onClickOutside={() => this.toggleMoreButtonHandler()}
        >
            <UserMenu user={this.props.user} />
        </OutsideComponentHandler>
    };

    userButtons = () => {
        return <div className={styles.userProperties}>
            <span className={styles.userPicture} />
            <button className={styles.moreButton} onClick={() => this.toggleMoreButtonHandler()}>
                <i className={styles.moreIcon} aria-hidden="true" />
            </button>
            {this.state.userMenuActive && this.userMenu()}
        </div>;
    };

    render() {
        return (
            <nav className={styles.Navigation}>
                <div className={styles.titleBox}>
                    <div className={styles.logoBox}>
                        {/* Temporary until we have a logo */}
                        <p style={{fontSize: "14px", paddingTop: "8px", paddingLeft: "4px", fontFamily: "Roboto", color: "grey"}}>Logo</p>
                    </div>
                    <h1 className={styles.title}>Boa Causa</h1>
                </div>
                <div className={styles.linksBox}>
                    <NavLink exact className={styles.link} activeClassName={styles.linkActive} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/ongs">ONGs</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.linkActive} to="/adocao">Adoção</NavLink>
                </div>
                <div className={styles.buttonBox}>
                    {this.props.user.email ? this.userButtons() : this.loginButton()}
                </div>
            </nav>
        );
    };
}

export default Navigation;
