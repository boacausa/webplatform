module NgoArea::NgoAreaHelper
  def adoption_interest_notification(user)
    AdoptionInterestNotification.where(user: user, read: false)
  end
end
