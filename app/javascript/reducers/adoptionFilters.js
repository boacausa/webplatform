import { types } from '../actions/adoptionFilters';

const adoptionFiltersReducerDefaultState = {
  city: '',
  ngo_id: '',
  sex: '',
  description: ''
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
        ngo_id: action.ngo_id
      };
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
