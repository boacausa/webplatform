require 'rails_helper'

describe V1::PetsForAdoptionController do
  describe 'GET #index' do
    before do
      get :index
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
