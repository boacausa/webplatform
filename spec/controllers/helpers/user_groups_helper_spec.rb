require 'rails_helper'

describe UserGroupsHelper, type: :helper do
  describe '#user_groups_for_select' do
    it 'returns user groups with an empty one' do
      expect(helper.user_groups_for_select).to include(['Admin', 'admin'])
      expect(helper.user_groups_for_select).to include(['Nenhum', nil])
    end
  end
end