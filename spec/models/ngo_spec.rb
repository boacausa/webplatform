require 'rails_helper'

describe Ngo do
  let(:ngo1) { create(:ngo) }
  let(:ngo2) { create(:ngo) }

  let(:user) do
    user = create(:user)
    user.ngos = [ngo1]
    user
  end

  describe '.from_user' do
    context 'when user is not admin' do
      it 'returns just one ngo' do
        expect(described_class.from_user(user)).to eq([ngo1])
      end
    end

    context 'when user is admin' do
      it 'returns all ngos' do
        user.group = :admin
        user.save

        expect(described_class.from_user(user)).to match([ngo1, ngo2])
      end
    end
  end
end
