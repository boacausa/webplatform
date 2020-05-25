require 'rails_helper'

describe V1::UsersController do
  describe '#update' do
    it 'updates the user' do
      user = FactoryBot.create(:user, name: 'User 1')

      expect do
        post :update, params: { id: user.id, name: 'User 2' }
      end.to change { user.reload.name }.from('User 1').to('User 2')
    end

    it 'returns json with success' do
      user = FactoryBot.create(:user, name: 'User 1')
      post :update, params: { id: user.id, name: 'User 2' }

      expect(response.body).to eq("{\"success\":true}")
    end

    it 'returns status ok' do
      user = FactoryBot.create(:user, name: 'User 1')
      post :update, params: { id: user.id, name: 'User 2' }

      expect(response.status).to eq(200)
    end
  end
end
