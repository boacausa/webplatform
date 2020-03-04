export const types = {
    SET_ERROR_DIALOG_MESSAGE: 'DIALOG_MESSAGE/SET_ERROR_DIALOG_MESSAGE',
    CLEAN_DIALOG_MESSAGE: 'DIALOG_MESSAGE/CLEAN_DIALOG_MESSAGE',
};

const DEFAULT_ERROR_MESSAGE = "Oops! Algo deu errado, por favor tente novamente.";

export const setErrorDialogMessage = (error, message = DEFAULT_ERROR_MESSAGE) => ({
    type: types.SET_ERROR_DIALOG_MESSAGE,
    message,
    error,
});

export const cleanDialogMessage = () => ({
    type: types.CLEAN_DIALOG_MESSAGE,
    message: null,
});
