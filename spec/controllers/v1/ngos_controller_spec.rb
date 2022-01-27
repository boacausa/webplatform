# frozen_string_literal: true

require "rails_helper"

describe V1::NgosController do
  let(:ngo) { create(:ngo) }

  describe "GET index" do
    before do
      get :index
    end

    it "returns 200 code status" do
      expect(response).to(have_http_status(:ok))
    end
  end

  describe "GET show" do
    context "when using the ngo id" do
      before do
        get :show, params: { id: ngo.id }
      end

      it "returns 200 code status" do
        expect(response).to(have_http_status(:ok))
      end

      it "returns ngo json" do
        expect(JSON.parse(response.body)["ngo"]).to(include("id" => ngo.id))
      end
    end

    context "when using the ngo fantasy name URL" do
      before do
        get :show, params: { id: ngo.fantasy_name_url }
      end

      it "returns 200 code status" do
        expect(response).to(have_http_status(:ok))
      end

      it "returns ngo json" do
        expect(JSON.parse(response.body)["ngo"]).to(include("id" => ngo.id))
      end
    end

    context "when using a invalid fantasy name or id" do
      before do
        get :show, params: { id: Faker::Lorem.word }
      end

      it "returns 404 code status" do
        expect(response).to(have_http_status(:not_found))
      end

      it "returns json with error" do
        expect(JSON.parse(response.body)).to(eq({ "error" => "User not found" }))
      end
    end
  end

  describe "GET cities" do
    before do
      ngo # creates ngo
      get :cities
    end

    it "returns 200 code status" do
      expect(response).to(have_http_status(:ok))
    end

    it "returns ngo cities" do
      expect(JSON.parse(response.body)["cities"]).to(include({ "id" => ngo.city, "name" => ngo.city }))
    end
  end
end
