require 'rails_helper'

describe AdoptionInterest, type: :model do
  describe '.by_ngo_user' do
    let(:ngo_1) { FactoryBot.create(:ngo) }
    let(:ngo_2) { FactoryBot.create(:ngo) }
    let(:pet_1) { FactoryBot.create(:pet, ngo: ngo_1) }
    let(:pet_2) { FactoryBot.create(:pet, ngo: ngo_2) }
    let(:user) { FactoryBot.create(:user) }
    let!(:adoption_interest_1) { FactoryBot.create(:adoption_interest, user: user, pet: pet_1) }
    let!(:adoption_interest_2) { FactoryBot.create(:adoption_interest, user: user, pet: pet_2) }

    let(:ngo_user) do
      ngo_user = FactoryBot.create(:user, :ngo_privileges)
      ngo_user.ngos << [ngo_1]

      ngo_user
    end

    it 'returns adoption interest from associated ngo' do
      expect(described_class.by_ngo_user(ngo_user)).to contain_exactly(adoption_interest_1)
    end

    context 'when user is admin' do
      let(:ngo_user) { FactoryBot.create(:user, :admin_privileges) }

      it 'returns all adoption interests' do
        expect(described_class.by_ngo_user(ngo_user)).to contain_exactly(adoption_interest_1, adoption_interest_2)
      end
    end
  end
end
