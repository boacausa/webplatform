# frozen_string_literal: true

require "rails_helper"

describe NgoArea::AdoptionInterestsController do
  login_user(:ngo_privileges)

  describe "GET #index" do
    before do
      get :index
    end

    it "returns 200 code status" do
      expect(response).to(have_http_status(:ok))
    end
  end

  describe "GET mark_notification_as_read" do
    context "when find the notification" do
      let(:notification) { FactoryBot.create(:adoption_interest_notification) }

      subject { get :mark_notification_as_read, params: { notification_id: notification.id } }

      it "redirects to adoption interest path" do
        expect(subject).to(redirect_to(action: :index))
      end

      it "change notification to read" do
        expect { subject }.to(change { notification.reload.read }.from(false).to(true))
      end
    end
  end
end
