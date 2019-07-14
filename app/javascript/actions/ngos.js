export const FETCH_NGOS_REQUEST = 'FETCH_NGOS_REQUEST';
export const FETCH_NGOS_SUCCESS = 'FETCH_NGOS_SUCCESS';
export const FETCH_NGOS_FAILURE = 'FETCH_NGOS_FAILURE';

const fetchNgosRequest = () => ({
  type: FETCH_NGOS_REQUEST
});

const fetchNgosSuccess = items => ({
  type: FETCH_NGOS_SUCCESS,
  payload: { items }
});

const fetchNgosFailure = () => ({
  type: FETCH_NGOS_FAILURE
});

export const fetchNgos = () => dispatch => {
    dispatch(fetchNgosRequest);

    return (
      fetch('/v1/ngos.json')
        .then(response => response.json())
        .then(json => dispatch(fetchNgosSuccess(json.ngos)))
        .catch(() => fetchNgosFailure())
    );
}
