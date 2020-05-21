import FormValidation from "./FormValidation";

describe('FormValidation', () => {
    describe('requiredFields', () => {
        describe('when fields are not set', () => {
            it('returns errors', () => {
                const fields = {
                    email: null,
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

        describe('when password is right', () => {
            it('returns errors for password', () => {
                let formValidation = new FormValidation();
                formValidation.password("123456789", "123456789")
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
});
