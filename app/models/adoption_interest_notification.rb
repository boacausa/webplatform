# frozen_string_literal: true

class AdoptionInterestNotification < ApplicationRecord
  belongs_to :user
  belongs_to :adoption_interest
end
