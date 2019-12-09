require 'rails_helper'

describe NotifyAdoptionInterest do
  describe '#perform' do
    before do
      allow_any_instance_of(AdoptionInterest).to receive(:notify_user).and_return(nil)
    end

    it 'creates an adoption interest notification' do
      user1 = create(:user, :ngo_privileges)

      ngo1 = create(:ngo)
      ngo2 = create(:ngo)

      ngo_user1 = create(:user, :ngo_privileges)
      ngo_user2 = create(:user, :ngo_privileges)
      ngo_user3 = create(:user, :admin_privileges)
      ngo_user4 = create(:user, :admin_privileges)

      ngo_user1.ngos << ngo1
      ngo_user2.ngos << ngo1
      ngo_user3.ngos << ngo1
      ngo_user4.ngos << ngo2

      pet1 = create(:pet, ngo: ngo1)
      _pet2 = create(:pet, ngo: ngo2)

      adoption_interest = create(:adoption_interest, user: user1, pet: pet1)

      expect(AdoptionInterestNotification.where(user: [ngo_user1, ngo_user2, ngo_user3], adoption_interest: adoption_interest).count).to eq(0)
      expect { described_class.perform_now(adoption_interest) }.to change { AdoptionInterestNotification.count }.by(3)
      expect(AdoptionInterestNotification.where(user: ngo_user1, adoption_interest: adoption_interest).count).to eq(1)
      expect(AdoptionInterestNotification.where(user: ngo_user2, adoption_interest: adoption_interest).count).to eq(1)
      expect(AdoptionInterestNotification.where(user: ngo_user3, adoption_interest: adoption_interest).count).to eq(1)
    end
  end
end
