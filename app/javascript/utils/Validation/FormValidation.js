class FormValidation {
    constructor() {
        this.errors = {};
    }

    requiredFields(requiredFieldNames, fields) {
        requiredFieldNames.map((inputName) => {
            const fieldValue = fields[inputName];
            if (!fieldValue || fieldValue.trim() === '') {
                this.appendError(inputName, "Este campo é obrigatório")
            }
        })
    }

    email(email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.appendError('email', "E-mail inválido")
        }
    }

    password(password, passwordConfirmation) {
        if (password !== passwordConfirmation) {
            this.appendError('password')
            this.appendError('passwordConfirmation', "Senhas não conferem")
        } else if (password.length < 6) {
            this.appendError('password')
            this.appendError('passwordConfirmation', "Senha muito curta (mínimo 6 caracteres)")
        }
    }

    appendError(key, message = null) {
        let newError = {};
        newError[key] = message;
        this.errors = {...this.errors, ...newError}
    }
}


export default FormValidation;
