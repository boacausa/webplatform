import React, {useEffect, useState} from "react";
import FormValidation from "../../utils/Validation/FormValidation";
import classes from "./UserForm.sass";
import TextInputWithLabel from "../../components/TextInputWithLabel/TextInputWithLabel";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const NO_PASSWORD = 'NO_PASSWORD';

// TODO: use this on UserSettings
// TODO: consider changing UserSettings to UpdateUser

const UserForm = ({user, title, saveUser}) => {
    const [userSettings, setUserSettings] = useState({});
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: NO_PASSWORD,
            passwordConfirmation: NO_PASSWORD,
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

        console.log({formErrors})

        if (Object.keys(formErrors).length > 0) {
            validateForm(updatedUserSettings);
        }
    }

    const validateForm = (userSettings) => {
        let formValidation = new FormValidation();

        formValidation.email(userSettings.email)
        formValidation.password(userSettings.password, userSettings.passwordConfirmation)
        formValidation.phone(userSettings.phone)
        formValidation.requiredFields(['name', 'email', 'phone', 'password'], userSettings)

        setFormErrors(formValidation.errors)

        return Object.keys(formValidation.errors).length === 0;
    }

    const submitHandler = () => {
        if (!validateForm(userSettings)) {
            return
        }

        let userSettingsParam = {
            id: userSettings.id,
            name: userSettings.name,
            email: userSettings.email,
            phone: userSettings.phone,
        };

        if (userSettings.password !== NO_PASSWORD) {
            userSettingsParam = {
                ...userSettingsParam,
                password: userSettings.password
            }
        }

        saveUser();
    }

    return <div className={classes.UserForm}>
        <div className={classes.titleBox}>
            <h1 className={classes.title}>{title}</h1>
        </div>

        <div className={classes.formTextInputs}>
            <div>
                {/*<div className={classes.userPictureBox}>*/}
                {/*    <img src={changePictureImage} alt="Mudar imagem do usuário" className={classes.userPicture} />*/}
                {/*</div>*/}
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Nome Completo"
                    value={userSettings.name}
                    error={formErrors['name']}
                    onChange={(event) => inputChangedHandler(event, 'name')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="E-mail"
                    value={userSettings.email}
                    error={formErrors['email']}
                    onChange={(event) => inputChangedHandler(event, 'email')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Telefone"
                    value={userSettings.phone}
                    error={formErrors['phone']}
                    onChange={(event) => inputChangedHandler(event, 'phone')}
                />
            </div>
            <div>
                {/* To align text fields below the image input */}
                {/*<div className={classes.userPictureBox} />*/}
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Senha"
                    value={userSettings.password}
                    type='password'
                    error={formErrors['password']}
                    onChange={(event) => inputChangedHandler(event, 'password')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Confirmação de senha"
                    value={userSettings.passwordConfirmation}
                    type='password'
                    error={formErrors['passwordConfirmation']}
                    onChange={(event) => inputChangedHandler(event, 'passwordConfirmation')}
                />
            </div>
        </div>

        <div className={classes.submitBox}>
            <SubmitButton
                title='Salvar'
                classStyleModifier={classes.submitButton}
                clicked={submitHandler}
                isDisabled={Object.keys(formErrors).length > 0}
            />
        </div>
    </div>
}

export default UserForm;
