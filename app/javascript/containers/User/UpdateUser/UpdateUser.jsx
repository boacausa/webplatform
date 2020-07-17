import React, { useState, useEffect } from "react"
import classes from './UpdateUser.sass';
import SecondLevelNavigation from "../../../components/Navigation/SecondLevelNavigation/SecondLevelNavigation";
import TextInputWithLabel from "../../../components/TextInputWithLabel/TextInputWithLabel";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
// import changePictureImage from "../../images/user_settings_change_picture.svg";
import UserApi from "../../../api/userApi";
import FormValidation from "../../../utils/Validation/FormValidation";

const NO_PASSWORD = 'NO_PASSWORD';

const UserData = (props) => {
    const [userData, setUserData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const user = props.user;

        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: NO_PASSWORD,
            passwordConfirmation: NO_PASSWORD,
        };

        setUserData(userData)

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

        UserApi.updateUser(userDataParam);
    }

    return (
        <div className={classes.UpdateUser}>
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
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: state => state.app.user
});

export default connect(mapStateToProps, null)(UserData);
