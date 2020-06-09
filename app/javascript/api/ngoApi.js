import RailsApi from './railsApi';

class NgoApi {
    async fetchNgo(id) {
        return await RailsApi.get(`../../v1/ngo/${id}.json`)
    }
}

export default new NgoApi;
