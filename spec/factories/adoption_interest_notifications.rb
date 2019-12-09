FactoryBot.define do
  factory :adoption_interest_notification do
    user { nil }
    adoption_interest { nil }
    read { false }
  end
end
