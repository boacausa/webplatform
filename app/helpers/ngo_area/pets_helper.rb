module NgoArea::PetsHelper
  def ngo_options(user)
    Ngo.from_user(user).pluck(:fantasy_name, :id)
  end

  def ngo_selected_id(ngo)
    if ngo.present?
      ngo.id
    end
  end
end
