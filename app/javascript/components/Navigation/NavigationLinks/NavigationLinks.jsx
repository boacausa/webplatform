import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationLinks = (props) => {
    function navLink(title, to, exact = false) {
        return (
            <NavLink
                exact={exact}
                className={props.styles.link}
                activeClassName={props.styles.linkActive} to={to}>
                {title}
            </NavLink>
        )
    }

    return (
        <div className={props.styles.linksBox}>
            {navLink('Home', '/', true)}
            {navLink('NGOs', '/ongs')}
            {navLink('Adoção', '/adocao')}
        </div>
    )
};

export default NavigationLinks;
