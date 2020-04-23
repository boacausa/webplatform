import React, { useState, useEffect } from "react"
import classes from './UserSettings.sass'
import SecondLevelNavigation from "../../components/Navigation/SecondLevelNavigation/SecondLevelNavigation";
import TextInputWithLabel from "../../components/TextInputWithLabel/TextInputWithLabel";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const UserSettings = (props) => {
    const [userSettings, setUserSettings] = useState({
        name: '',
        email: '',
        phone: '',
        password: '**********',
        passwordConfirmation: '**********'
    });

    useEffect(() => {
        const user = props.user;

        const userData = {
            name: user.name,
            email: user.email,
            phone: user.phone,
        };

        setUserSettings(userData)

        return () => {
            // cleanup
        };
    }, []);


    return (
        <div className={classes.UserSettings}>
            <SecondLevelNavigation>
                <p className={classes.configurationMenu}>Configurações</p>
                <span className={classes.configurationMenuSelected} />
            </SecondLevelNavigation>

            <div className={classes.formBox}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>Configurações do usuário</h1>
                </div>

                <div className={classes.formInputs}>
                    <div>
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Nome Completo"
                            value={userSettings.name}
                         />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Email"
                            value={userSettings.email}
                        />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Telefone"
                            value={userSettings.phone}
                        />
                    </div>
                    <div>
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Senha"
                            value={userSettings.password}
                        />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Confirmação de senha"
                            value={userSettings.passwordConfirmation}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: state => state.app.user
});

export default connect(mapStateToProps, null)(UserSettings);
