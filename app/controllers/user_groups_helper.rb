# frozen_string_literal: true

module UserGroupsHelper
  def user_groups_for_select
    User.groups.keys.map { |group| [group.titleize, group] }
  end
end
