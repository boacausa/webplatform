import React from 'react';
import {NavLink} from "react-router-dom";
import * as RoutePaths from "../../../utils/RoutePaths";

const NavigationLinks = (props) => {
    function navLink(title, to, exact = false) {
        return (
            <NavLink
                exact={exact}
                className={props.styles.link}
                onClick={props.onClick}
                activeClassName={props.styles.linkActive} to={to}>
                {title}
            </NavLink>
        )
    }

    return (
        <div className={props.styles.linksBox}>
            {navLink('Início', RoutePaths.HOME_PATH, true)}
            {navLink('ONGs', RoutePaths.NGO_LIST_PATH)}
            {navLink('Adoção', RoutePaths.ADOPTION_LIST_PATH)}
        </div>
    )
};

export default NavigationLinks;
