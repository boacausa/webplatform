require 'rails_helper'

describe V1::PetsForAdoptionController do
  let(:register_interest_params) {{ register_interest: { user_email: "someone@email.com", pet_id: 321 } }}

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
      allow_any_instance_of(::RegisterAdoptionInterest).to receive(:save!)
      post :register_interest, params: register_interest_params
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns success message' do
      expect(response.body).to eq("{\"success\":\"Finished with success\"}")
    end

    it 'calls RegisterAdoptionInterest behaviour' do
      expect_any_instance_of(::RegisterAdoptionInterest).to receive(:save!).with("someone@email.com", "321")

      post :register_interest, params: register_interest_params
    end

    context 'when RegisterAdoptionInterest raises record not found' do
      before do
        allow_any_instance_of(::RegisterAdoptionInterest).to receive(:save!).and_raise(ActiveRecord::RecordNotFound)
        post :register_interest, params: register_interest_params
      end

      it 'returns 404 code status' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns error message' do
        expect(response.body).to eq("{\"error\":\"User not found\"}")
      end
    end
  end
end
