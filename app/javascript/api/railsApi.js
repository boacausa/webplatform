import { store } from '../configureStore';
import {setErrorDialogMessage} from "../actions/dialogMessage";

const axios = require('axios');

class RailsApi {
    handleError = (error) => {
        store.dispatch(setErrorDialogMessage({error}))
    }

    get(path, params = {}) {
        return axios.get(path, { params })
            .catch((error) => {
                this.handleError(error)
            });
    };
}

export default new RailsApi;
