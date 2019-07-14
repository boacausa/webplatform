import {
  FETCH_NGOS_REQUEST,
  FETCH_NGOS_SUCCESS,
  FETCH_NGOS_FAILURE
} from '../actions/ngos';

const initialState = {
  items: [],
  isFetching: false,
  isFetched: false,
  isFailed: false
};

const ngos = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_NGOS_REQUEST:
      return {
        ...state,
        items: [],
        isFetching: true,
        isFetched: false,
        isFailed: false
      };
    case FETCH_NGOS_SUCCESS:
      return {
        ...state,
        items: payload.items,
        isFetching: false,
        isFetched: true,
        isFailed: false
      };
    case FETCH_NGOS_FAILURE:
      return {
        ...state,
        items: [],
        isFetching: false,
        isFetched: false,
        isFailed: true
      };
    default:
      return state;
  }
}

export default ngos;
