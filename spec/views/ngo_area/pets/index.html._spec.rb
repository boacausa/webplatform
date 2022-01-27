# frozen_string_literal: true

require "rails_helper"

describe "ngo_area/pets/index.html.erb", type: :feature do
  describe "permissions" do
    let!(:ngo_1) { create(:ngo) }
    let!(:ngo_2) { create(:ngo) }
    let!(:pet_1) { create(:pet, ngo: ngo_1) }
    let!(:pet_2) { create(:pet, ngo: ngo_2) }

    context "when user has ngo privileges" do
      let!(:current_user) do
        user = create(:user, :ngo_privileges)
        user.ngos << ngo_1

        user
      end

      before do
        login_as(current_user, scope: :user)
      end

      it "shows pets from his ngo" do
        visit ngo_area_pets_path

        expect(page).to(have_link(nil, href: edit_ngo_area_pet_path(pet_1)))
      end

      it "does not show pets from other ngos" do
        visit ngo_area_pets_path

        expect(page).not_to(have_link(nil, href: edit_ngo_area_pet_path(pet_2)))
      end
    end

    context "when user has admin privileges" do
      let!(:current_user) { create(:user, :admin_privileges) }

      before do
        login_as(current_user, scope: :user)
      end

      it "shows pets from all ngos" do
        visit ngo_area_pets_path

        expect(page).to(have_link(nil, href: edit_ngo_area_pet_path(pet_1)))
        expect(page).to(have_link(nil, href: edit_ngo_area_pet_path(pet_2)))
      end
    end
  end
end
