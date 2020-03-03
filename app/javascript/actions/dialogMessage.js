export const types = {
  SET_ERROR_DIALOG_MESSAGE: 'DIALOG_MESSAGE/SET_ERROR_DIALOG_MESSAGE',
  CLEAN_DIALOG_MESSAGE: 'DIALOG_MESSAGE/CLEAN_DIALOG_MESSAGE',
};

export const setErrorDialogMessage = (message) => ({
    type: types.SET_ERROR_DIALOG_MESSAGE,
    message,
});

export const cleanDialogMessage = () => ({
  type: types.CLEAN_DIALOG_MESSAGE,
  message: null,
});
