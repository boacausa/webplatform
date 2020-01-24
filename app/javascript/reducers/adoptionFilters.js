import { types } from '../actions/adoptionFilters';

const adoptionFiltersReducerDefaultState = {
  city: '',
  ngoId: '',
  sex: '',
  nameOrDescription: ''
};

export default (state = adoptionFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_CITY_FILTER:
      return {
        ...state,
        city: action.city
      };
    case types.SET_NGO_ID_FILTER:
      return {
        ...state,
        ngoId: action.ngoId
      };
    case types.SET_SEX_FILTER:
      return {
        ...state,
        sex: action.sex
      };
    case types.SET_NAME_OR_DESCRIPTION_FILTER:
      return {
        ...state,
        nameOrDescription: action.nameOrDescription
      };
    default:
      return state;
  }
};
