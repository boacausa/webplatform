class NgoArea::AdoptionInterestsController < NgoAreaController
  def index
    @adoption_interests = AdoptionInterest.by_ngo_user(current_user)
  end
end
