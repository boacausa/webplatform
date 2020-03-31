import React from "react"
import classes from './UserSettings.sass'
import SecondLevelNavigation from "../../components/Navigation/SecondLevelNavigation/SecondLevelNavigation";

const UserSettings = () => {
    return (
        <div className={classes.UserSettings}>
            <SecondLevelNavigation>
                <p className={classes.configurationMenu}>Configurações</p>
                <span className={classes.configurationMenuSelected} />
            </SecondLevelNavigation>
        </div>
    );
};

export default UserSettings;
