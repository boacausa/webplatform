# frozen_string_literal: true

FactoryBot.define do
  factory :ngo do
    fantasy_name { Faker::Name.name }
    zipcode { Faker::Address.zip_code }
    description { Faker::Lorem.paragraph }
    address_number { Faker::Address.building_number }
    address { Faker::Address.street_name }
    neighborhood { Faker::Address.community }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    active { true }
  end
end
