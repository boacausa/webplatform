import { types } from '../actions/dialogMessage';

const dialogMessageReducerDefaultState = {
  type: null,
  message: null,
  error: null,
};

export default (state = dialogMessageReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_ERROR_DIALOG_MESSAGE:
      return {
        ...state,
        message: action.message,
        error: action.error,
        type: "ERROR",
      };
    case types.SET_SUCCESS_DIALOG_MESSAGE:
      return {
        ...state,
        message: action.message,
        type: "SUCCESS",
      };
    case types.CLEAN_DIALOG_MESSAGE:
      return {
        ...state,
        ...dialogMessageReducerDefaultState,
      };
    default:
      return state;
  }
};
