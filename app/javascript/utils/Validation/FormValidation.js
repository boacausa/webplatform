const PHONE_REGEX_VALIDATION = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
const EMAIL_REGEX_VALIDATION = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
        if (!(EMAIL_REGEX_VALIDATION.test(email))) {
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

    phone(phone) {
        if (!(PHONE_REGEX_VALIDATION.test(phone))) {
            this.appendError('phone', "Número de telefone inválido")
        }
    }

    appendError(key, message = null) {
        let newError = {};
        newError[key] = message;
        this.errors = {...this.errors, ...newError}
    }
}


export default FormValidation;
