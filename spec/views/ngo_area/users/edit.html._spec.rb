# frozen_string_literal: true

require "rails_helper"

describe "ngo_area/users/edit.html.erb", type: :feature do
  let(:user) { create(:user) }

  context "when user does not have a group" do
    login_user_capybara(:admin_privileges)

    it "does not select a group on the form" do
      visit edit_ngo_area_user_path(user)

      expect(page).to(have_select("user_group", selected: nil))
    end
  end
end
