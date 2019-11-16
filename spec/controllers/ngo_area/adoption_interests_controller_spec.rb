require 'rails_helper'

describe NgoArea::AdoptionInterestsController do
  login_user(:ngo_privileges)

  describe 'GET #index' do
    before do
      get :index
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
