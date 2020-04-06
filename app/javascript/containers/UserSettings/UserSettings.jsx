import React from "react"
import classes from './UserSettings.sass'
import SecondLevelNavigation from "../../components/Navigation/SecondLevelNavigation/SecondLevelNavigation";
import TextInputWithLabel from "../../components/TextInputWithLabel/TextInputWithLabel";

const UserSettings = () => {
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
                        <TextInputWithLabel className={classes.textInput} label="Nome Completo" />
                        <TextInputWithLabel className={classes.textInput} label="Email" />
                        <TextInputWithLabel className={classes.textInput} label="Telefone" />
                    </div>
                    <div>
                        <TextInputWithLabel className={classes.textInput} label="Senha" />
                        <TextInputWithLabel className={classes.textInput} label="Confirmação de senha" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
