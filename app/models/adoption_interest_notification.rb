class AdoptionInterestNotification < ApplicationRecord
  belongs_to :user
  belongs_to :adoption_interest
end
