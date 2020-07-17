import React, {useEffect, useState} from "react";
import FormValidation from "../../utils/Validation/FormValidation";
import classes from "./UserForm.sass";
import TextInputWithLabel from "../../components/TextInputWithLabel/TextInputWithLabel";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const NO_PASSWORD = 'NO_PASSWORD';

// TODO: use this on UpdateUser

const initialUserData = {
    id: null,
    name: null,
    email: null,
    phone: null,
    password: null,
    passwordConfirmation: null,
}

const UserForm = ({user, title, saveUser}) => {
    const [userData, setUserData] = useState(initialUserData);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (user) {
            const initialUserData = {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                passwordConfirmation: user.password,
            };

            setUserData(initialUserData)
        }

        return () => {
            // cleanup
        };
    }, []);


    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedUserData = {
            ...userData
        };

        updatedUserData[inputIdentifier] = event.target.value;

        setUserData(updatedUserData)

        console.log({formErrors})

        if (Object.keys(formErrors).length > 0) {
            validateForm(updatedUserData);
        }
    }

    const validateForm = (userData) => {
        let formValidation = new FormValidation();

        formValidation.email(userData.email)
        formValidation.password(userData.password, userData.passwordConfirmation)
        formValidation.phone(userData.phone)
        formValidation.requiredFields(['name', 'email', 'phone', 'password'], userData)

        setFormErrors(formValidation.errors)

        return Object.keys(formValidation.errors).length === 0;
    }

    const submitHandler = () => {
        if (!validateForm(userData)) {
            return
        }

        let userDataParam = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
        };

        if (userData.password !== NO_PASSWORD) {
            userDataParam = {
                ...userDataParam,
                password: userData.password
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
                    value={userData.name}
                    error={formErrors['name']}
                    onChange={(event) => inputChangedHandler(event, 'name')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="E-mail"
                    value={userData.email}
                    error={formErrors['email']}
                    onChange={(event) => inputChangedHandler(event, 'email')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Telefone"
                    value={userData.phone}
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
                    value={userData.password}
                    type='password'
                    error={formErrors['password']}
                    onChange={(event) => inputChangedHandler(event, 'password')}
                />
                <TextInputWithLabel
                    className={classes.textInput}
                    label="Confirmação de senha"
                    value={userData.passwordConfirmation}
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
