# frozen_string_literal: true

class NotifyAdoptionInterest < ApplicationJob
  queue_as :default

  def perform(adoption_interest)
    users = User.admin + adoption_interest.pet.ngo.users
    users.uniq.each do |user|
      AdoptionInterestNotification.create(user: user, adoption_interest: adoption_interest)
    end
  end
end
