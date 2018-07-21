require 'rails_helper'

describe NgoArea::PetsController do
  login_user(:ngo_privileges)

  subject { create(:pet) }

  describe 'GET #index' do
    before do
      get :index
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #new' do
    before do
      get :new
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #create' do
    before do
      get :create, params: { pet: attributes_for(:pet) }
    end

    it 'returns 302 code status' do
      expect(response).to have_http_status(:found)
    end

    it 'redirects to index' do
      expect(response).to redirect_to(action: :index)
    end
  end

  describe 'GET #edit' do
    before do
      get :edit, params: { id: subject.id }
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #update' do
    before do
      get :update, params: { id: subject.id, pet: attributes_for(:pet) }
    end

    it 'returns 302 code status' do
      expect(response).to have_http_status(:found)
    end

    it 'redirects to index' do
      expect(response).to redirect_to(action: :index)
    end
  end
end
