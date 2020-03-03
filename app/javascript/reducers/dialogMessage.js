import { types } from '../actions/dialogMessage';

const dialogMessageReducerDefaultState = {
  type: null,
  message: null
};

export default (state = dialogMessageReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_ERROR_DIALOG_MESSAGE:
      return {
        ...state,
        message: action.message,
        type: "ERROR",
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
