import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ngos from './reducers/ngos';

const initialState = {
  things: [],
  ngo: {}
};

function thingsReducer(state = {}, action) {
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
        return { ...action.json.things };
    default:
        return state;
  }
}

function ngoReducer(state = {}, action) {
  switch (action.type) {
      case "GET_NGO_SUCCESS":
          return { ...action.json.ngo };
      default:
          return state;
  }
}

const rootReducer = combineReducers({
  ngos,
  things: thingsReducer,
  ngo: ngoReducer
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
  );

  return store;
}
