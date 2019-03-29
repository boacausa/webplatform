require 'rails_helper'

describe NgoArea::PetsHelper, type: :helper do
  let(:ngos) { create_list(:ngo, 3) }
  let(:user) do
    user = create(:user, :ngo_privileges)
    user.ngos << ngos.take(2)
    user
  end

  describe '#ngo_options' do
    it 'returns ngos from user' do
      expect(ngo_options(user)).to contain_exactly([ngos[0].fantasy_name, ngos[0].id], [ngos[1].fantasy_name, ngos[1].id])
    end
  end

  describe '#ngo_selected_id' do
    context 'when ngo is nil' do
      it 'returns nil' do
        expect(ngo_selected_id(nil)).to eq(nil)
      end
    end

    context 'when ngo is present' do
      it 'returns ngo id' do
        expect(ngo_selected_id(ngos.first)).to eq(ngos.first.id)
      end
    end
  end
end
