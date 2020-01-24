require 'rails_helper'

describe NgosController do
  describe 'GET #index' do
    before do
      get :index
    end

    it 'returns 200 code status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #show' do
    context 'when using the ngo id' do
      before do
        ngo = create(:ngo)
        get :show, params: { id: ngo.id }
      end

      it 'returns 200 code status' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders show template' do
        expect(response).to render_template(:show)
      end
    end

    context 'when using the ngo fantasy name URL' do
      before do
        ngo = create(:ngo)
        get :show, params: { id: ngo.fantasy_name_url }
      end

      it 'returns 200 code status' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders index template' do
        expect(response).to render_template(:show)
      end
    end


    context 'when using a invalid fantasy name or id' do
      before do
        get :show, params: { id: Faker::Lorem.word }
      end

      it 'returns 200 code status' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders index template' do
        expect(response).to render_template('errors/not_found_page')
      end
    end
  end
end
