import React, { useState, useEffect } from "react"
import classes from './UserSettings.sass'
import SecondLevelNavigation from "../../components/Navigation/SecondLevelNavigation/SecondLevelNavigation";
import TextInputWithLabel from "../../components/TextInputWithLabel/TextInputWithLabel";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import changePictureImage from "../../images/user_settings_change_picture.svg";

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


    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedUserSettings = {
            ...userSettings
        };

        updatedUserSettings[inputIdentifier] = event.target.value;

        setUserSettings(updatedUserSettings)
    }

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

                <div className={classes.formTextInputs}>
                    <div>
                        <div className={classes.userPictureBox}>
                            <img src={changePictureImage} alt="Mudar imagem do usuário" className={classes.userPicture} />
                        </div>
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Nome Completo"
                            value={userSettings.name}
                            onChange={(event) => inputChangedHandler(event, 'name')}
                         />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Email"
                            value={userSettings.email}
                            onChange={(event) => inputChangedHandler(event, 'email')}
                        />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Telefone"
                            value={userSettings.phone}
                            onChange={(event) => inputChangedHandler(event, 'phone')}
                        />
                    </div>
                    <div>
                        {/* To align text fields below the image input */}
                        <div className={classes.userPictureBox} />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Senha"
                            value={userSettings.password}
                            onChange={(event) => inputChangedHandler(event, 'password')}
                        />
                        <TextInputWithLabel
                            className={classes.textInput}
                            label="Confirmação de senha"
                            value={userSettings.passwordConfirmation}
                            onChange={(event) => inputChangedHandler(event, 'passwordConfirmation')}
                        />
                    </div>
                </div>

                <div className={classes.submitBox}>
                    <SubmitButton
                        title='Salvar'
                        classStyleModifier={classes.submitButton}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: state => state.app.user
});

export default connect(mapStateToProps, null)(UserSettings);
