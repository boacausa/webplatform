# frozen_string_literal: true

FactoryBot.define do
  factory :adoption_interest do
    user
    pet
  end
end
