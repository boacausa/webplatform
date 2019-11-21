require 'rails_helper'

describe 'adoption_interests/index.html.erb', type: :feature do
  describe 'permissions' do
    let!(:ngo_1) { create(:ngo) }
    let!(:ngo_2) { create(:ngo) }
    let!(:pet_1) { create(:pet, ngo: ngo_1) }
    let!(:pet_2) { create(:pet, ngo: ngo_2) }
    let!(:public_user_1) { create(:user) }
    let!(:public_user_2) { create(:user) }
    let!(:adoption_interest_1) { create(:adoption_interest, user: public_user_1, pet: pet_1) }
    let!(:adoption_interest_2) { create(:adoption_interest, user: public_user_2, pet: pet_2) }

    context 'when user has ngo privileges' do
      let!(:current_user) do
        ngo_user = create(:user, :ngo_privileges)
        ngo_user.ngos << ngo_1

        ngo_user
      end

      before do
        login_as(current_user, scope: :user)
      end

      it 'shows adoption requests from ngo 1 pets' do
        visit ngo_area_adoption_interests_path

        expect(page).to have_link(nil, href: edit_ngo_area_pet_path(pet_1))
      end

      it 'does not show adoption requests from ngo 2 pets' do
        visit ngo_area_adoption_interests_path

        expect(page).not_to have_link(nil, href: edit_ngo_area_pet_path(pet_2))
      end
    end

    context 'when user has admin privileges' do
      let!(:current_user) { create(:user, :admin_privileges) }

      before do
        login_as(current_user, scope: :user)
      end

      it 'shows show adoption from all ngos' do
        visit ngo_area_adoption_interests_path

        expect(page).to have_link(nil, href: edit_ngo_area_pet_path(pet_1))
        expect(page).to have_link(nil, href: edit_ngo_area_pet_path(pet_2))
      end
    end
  end
end
