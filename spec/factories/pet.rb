FactoryBot.define do
  factory :pet do
    name { Faker::Name.name }
  end
end