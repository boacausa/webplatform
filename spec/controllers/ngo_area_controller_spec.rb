# frozen_string_literal: true

require "rails_helper"

describe NgoAreaController, type: :controller do
  controller(NgoAreaController) do
    def index
      head(:ok)
    end
  end

  context "when user is logged in" do
    context "with privileges" do
      login_user(:ngo_privileges)

      before do
        get :index
      end

      it "access the action" do
        expect(response).to(have_http_status(:ok))
      end
    end

    context "without privileges" do
      login_user

      before do
        get :index
      end

      it "cannot access the action" do
        expect(response).to(have_http_status(:not_found))
      end
    end
  end

  context "when user is not logged in" do
    before do
      get :index
    end

    it "allows to access an action" do
      expect(response).to(have_http_status(:found))
    end
  end
end
