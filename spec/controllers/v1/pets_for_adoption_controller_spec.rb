require 'rails_helper'

describe V1::PetsForAdoptionController do
  describe 'GET index' do
    before do
      get :index
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST register_interest' do
    before do
      post :register_interest, params: { user_email: "someone@email.com", pet_id: 321 }
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end

    it 'calls RegisterAdoptionInterest behaviour' do
      expect_any_instance_of(::RegisterAdoptionInterest).to receive(:save!).with("someone@email.com", "321")

      post :register_interest, params: { user_email: "someone@email.com", pet_id: 321 }
    end
  end
end
