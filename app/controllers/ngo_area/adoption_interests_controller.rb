class NgoArea::AdoptionInterestsController < NgoAreaController
  def index
    @adoption_interests = AdoptionInterest.by_ngo_user(current_user).order(created_at: :desc)
  end

  def mark_notification_as_read
    AdoptionInterestNotification.find(params[:notification_id]).update_attributes!(read: true)

    redirect_to ngo_area_adoption_interests_path
  end
end
