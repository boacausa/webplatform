class NotifyAdoptionInterest < ApplicationJob
  queue_as :default

  def perform(adoption_interest)
    adoption_interest.pet.ngo.users.each do |user|
      AdoptionInterestNotification.create(user: user, adoption_interest: adoption_interest)
    end
  end
end
