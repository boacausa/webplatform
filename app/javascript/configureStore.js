import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import adoptionFiltersReducer from './reducers/adoptionFilters'

const appReducerDefaultState = {
  user: { email: null, group: null },
  ngos: [],
  pets: []
};

function appReducer(state = appReducerDefaultState, action) {
  switch (action.type) {
    case "GET_NGOS_SUCCESS":
      return { ...state, ngos: action.json.ngos };
    case "GET_NGO_SUCCESS":
      return { ...state, ngo: action.json.ngo };
    case "GET_ADOPTION_SUCCESS":
      return { ...state, pets: action.json.pets };
    case "GET_NGO_CITIES_SUCCESS":
      return { ...state, cities: action.json.cities };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: appReducer,
  adoptionFilters: adoptionFiltersReducer
});

export default function configureStore(user) {
  const preloadedState = { app: { ...appReducerDefaultState, user } };

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
