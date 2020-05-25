import { store } from '../configureStore';
import {cleanDialogMessage, setErrorDialogMessage} from "../actions/dialogMessage";

const axios = require('axios');

class RailsApi {
    handleError = (error) => {
        store.dispatch(cleanDialogMessage())
        store.dispatch(setErrorDialogMessage({error}))
    }

    get(path, params = {}) {
        return axios.get(path, { params })
            .catch((error) => {
                this.handleError(error)
            });
    };

    post(path, params = {}) {
        return axios.post(path, params)
            .catch((error) => {
                this.handleError(error)
            });
    };
}

export default new RailsApi;
