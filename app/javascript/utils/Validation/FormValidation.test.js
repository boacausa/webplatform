import FormValidation from "./FormValidation";

describe('FormValidation', () => {
    describe('requiredFields', () => {
        describe('when fields are not set', () => {
            it('returns errors', () => {
                const fields = {
                    email: undefined,
                    password: ''
                }

                let formValidation = new FormValidation();
                formValidation.requiredFields(['email', 'password'], fields)
                expect(formValidation.errors).toEqual({
                    "email": "Este campo é obrigatório",
                    "password": "Este campo é obrigatório"
                })
            })
        })

        describe('when one field is set', () => {
            it('returns errors', () => {
                const fields = {
                    email: null,
                    password: '123'
                }

                let formValidation = new FormValidation();
                formValidation.requiredFields(['email', 'password'], fields)
                expect(formValidation.errors).toEqual({
                    "email": "Este campo é obrigatório"
                })
            })
        })
    })

    describe('email', () => {
        describe('when email is valid', () => {
            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.email('someone@gmail.com')
                expect(formValidation.errors).toEqual({})
            })
        })

        describe('when email is not valid', () => {
            it('returns errors for email', () => {
                let formValidation = new FormValidation();
                formValidation.email('abc')
                expect(formValidation.errors).toEqual({"email": "E-mail inválido"})
            })
        })
    })

    describe('password', () => {
        describe('when password does not match', () => {
            it('returns errors for password', () => {
                let formValidation = new FormValidation();
                formValidation.password("aaaaaaa", "bbbbbbb")
                expect(formValidation.errors).toEqual({"password": null, "passwordConfirmation": "Senhas não conferem"})
            })
        })

        describe('when password is too small', () => {
            it('returns errors for password', () => {
                let formValidation = new FormValidation();
                formValidation.password("1", "1")
                expect(formValidation.errors).toEqual({"password": null, "passwordConfirmation": "Senha muito curta (mínimo 6 caracteres)"})
            })
        })

        describe('when password is null', () => {
            it('does not return errors for password', () => {
                let formValidation = new FormValidation();
                formValidation.password(null, null)
                expect(formValidation.errors).toEqual({})
            })
        })

        describe('when password is right', () => {
            it('does not return errors for password', () => {
                let formValidation = new FormValidation();
                formValidation.password("123456", "123456")
                expect(formValidation.errors).toEqual({})
            })
        })
    })

    describe('multiple validations', () => {
        let formValidation = new FormValidation();

        describe('when validating password and required fields', () => {
            it('returns errors for password', () => {
                const fields = {
                    email: null,
                    password: ''
                }

                formValidation.password("", "abc")
                formValidation.requiredFields(['email', 'password'], fields)

                expect(formValidation.errors).toEqual({
                    "email": "Este campo é obrigatório",
                    "password": "Este campo é obrigatório",
                    "passwordConfirmation": "Senhas não conferem"
                })
            })
        })
    })

    describe('phone', () => {
        describe('when phone is valid', () => {
            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.phone('(11) 98888-8888')
                expect(formValidation.errors).toEqual({})
            })

            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.phone('21 98888-8888')
                expect(formValidation.errors).toEqual({})
            })

            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.phone('5511988888888')
                expect(formValidation.errors).toEqual({})
            })

            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.phone('9999-9999')
                expect(formValidation.errors).toEqual({})
            })

            it('does not return error', () => {
                let formValidation = new FormValidation();
                formValidation.phone('+55 (11) 98888-8888')
                expect(formValidation.errors).toEqual({})
            })
        })

        describe('when phone is not valid', () => {
            it('returns errors for phone', () => {
                let formValidation = new FormValidation();
                formValidation.phone('123')
                expect(formValidation.errors).toEqual({"phone": "Número de telefone inválido"})
            })
        })
    });
});
