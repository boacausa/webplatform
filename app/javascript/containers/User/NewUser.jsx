import React from "react"
import classes from './NewUser.sass'
import UserForm from "../UserForm/UserForm";
import UserSettingsApi from "../../api/userSettingsApi";

const NewUser = () => {
    const saveUser = (userData) => {
        // TODO: needs a create user
        UserSettingsApi.updateUser(userData);
    }

    return (
        <div className={classes.NewUser}>
            <UserForm
                title='Criar novo usuário'
                saveUser={saveUser}
            />
        </div>
    );
};

export default NewUser;
