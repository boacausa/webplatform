require 'rails_helper'

describe NgoArea::NgosController do
  login_user

  subject { create(:ngo) }

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
      get :create, params: { ngo: attributes_for(:ngo) }
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
      get :update, params: { id: subject.id, ngo: attributes_for(:ngo) }
    end

    it 'returns 302 code status' do
      expect(response).to have_http_status(:found)
    end

    it 'redirects to index' do
      expect(response).to redirect_to(action: :index)
    end
  end
end
