require 'rails_helper'

describe User do
  describe '#ngo_privileges?' do
    it 'returns false if default group' do
      expect(subject.ngo_privileges?).to be_falsey
    end

    it 'returns true if admin group' do
      admin_user = create(:user, :admin_privileges)
      expect(admin_user.ngo_privileges?).to be_truthy
    end
    it 'returns true if ngo group' do
      ngo_user = create(:user, :ngo_privileges)
      expect(ngo_user.ngo_privileges?).to be_truthy
    end
  end
end
