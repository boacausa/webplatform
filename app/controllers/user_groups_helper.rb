module UserGroupsHelper
  def user_groups_for_select
    user_groups = User.groups.keys.map {|group| [group.titleize,group]}
    user_groups << ['Nenhum', nil]
  end
end