# frozen_string_literal: true

FactoryBot.define do
  factory :adoption_interest_notification do
    user
    adoption_interest
    read { false }
  end
end
