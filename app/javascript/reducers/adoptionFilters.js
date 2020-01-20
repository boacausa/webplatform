import { types } from '../actions/adoptionFilters';

const adoptionFiltersReducerDefaultState = {
  sex: '',
  description: ''
};

export default (state = adoptionFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_SEX_FILTER:
      return {
        ...state,
        sex: action.sex
      };
    case types.SET_DESCRIPTION_FILTER:
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
};
