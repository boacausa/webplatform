import React from "react"
import classes from './NewUser.sass'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import UserForm from "../UserForm/UserForm";
import UserSettingsApi from "../../api/userSettingsApi";

const NewUser = ({user}) => {
    const saveUser = () => {
        UserSettingsApi.updateUser(userSettingsParam);
    }

    return (
        <div className={classes.NewUser}>
            <UserForm
                user={user}
                title='Criar novo usuário'
                saveUser={saveUser}
            />
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    user: state => state.app.user
});

export default connect(mapStateToProps, null)(NewUser);
