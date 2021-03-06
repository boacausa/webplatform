import React from 'react';
import styles from './Navigation.sass';
import UserMenu from "./UserMenu/UserMenu";
import OutsideComponentHandler from "../OutsideComponentHandler";
import HamburgerButton from "./SideNavigation/HamburgerButton/HamburgerButton";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import userNoPictureImage from './../../images/user_no_picture.svg';
import moreButtonImage from './../../images/more.svg';

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
            <img src={userNoPictureImage} alt="Foto do usuário" className={styles.userPicture} />
            <button className={styles.moreButton} onClick={() => this.toggleMoreButtonHandler()}>
                <img src={moreButtonImage} alt="More button" className={styles.moreIcon} />
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
                <NavigationLinks styles={styles} />
                <div className={styles.buttonBox}>
                    {this.props.user.email ? this.userButtons() : this.loginButton()}
                </div>
                <HamburgerButton clicked={this.props.toggleDrawerButton} />
            </nav>
        );
    };
}

export default Navigation;
