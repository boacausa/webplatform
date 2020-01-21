import { types } from '../actions/adoptionFilters';

const adoptionFiltersReducerDefaultState = {
  sex: '',
  description: '',
  city: '',
  ngo_id: ''
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
    case types.SET_CITY_FILTER:
      return {
        ...state,
        city: action.city
      };
    case types.SET_NGO_ID_FILTER:
      return {
        ...state,
        ngo_id: action.ngo_id
      };
    default:
      return state;
  }
};
