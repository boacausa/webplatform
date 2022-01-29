# frozen_string_literal: true

module NgoArea::NgoAreaHelper
  def adoption_interest_notification(user)
    AdoptionInterestNotification
      .joins(adoption_interest: [:user, :pet])
      .includes(adoption_interest: [:user, :pet])
      .where(user: user, read: false)
  end
end
