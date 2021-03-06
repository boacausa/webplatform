import RailsApi from './railsApi';
import {setSuccessDialogMessage} from "../actions/dialogMessage";
import {store} from "../configureStore";

class UserSettingsApi {
    async updateUser(params) {
        await RailsApi.post(`../v1/users/update`, params)
            .then(_response => {
                store.dispatch(setSuccessDialogMessage())
            });
    }
}

export default new UserSettingsApi;
