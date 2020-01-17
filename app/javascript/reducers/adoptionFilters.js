import { types } from '../actions/adoptionFilters';

const adoptionFiltersReducerDefaultState = {
  sex: '',
};

export default (state = adoptionFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_SEX_FILTER:
      return {
        ...state,
        sex: action.sex
      };
    default:
      return state;
  }
};
