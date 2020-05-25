export const types = {
    SET_ERROR_DIALOG_MESSAGE: 'DIALOG_MESSAGE/SET_ERROR_DIALOG_MESSAGE',
    SET_SUCCESS_DIALOG_MESSAGE: 'DIALOG_MESSAGE/SET_SUCCESS_DIALOG_MESSAGE',
    CLEAN_DIALOG_MESSAGE: 'DIALOG_MESSAGE/CLEAN_DIALOG_MESSAGE',
};

const DEFAULT_ERROR_MESSAGE = "Oops! Algo deu errado, por favor tente novamente.";
const DEFAULT_SUCCESS_MESSAGE = "Operação realizada com sucesso!";

export const setErrorDialogMessage = (error, message = DEFAULT_ERROR_MESSAGE) => ({
    type: types.SET_ERROR_DIALOG_MESSAGE,
    message,
    error,
});

export const setSuccessDialogMessage = (error, message = DEFAULT_SUCCESS_MESSAGE) => ({
    type: types.SET_SUCCESS_DIALOG_MESSAGE,
    message,
    error: null,
});

export const cleanDialogMessage = () => ({
    type: types.CLEAN_DIALOG_MESSAGE,
    message: null,
    error: null,
});
