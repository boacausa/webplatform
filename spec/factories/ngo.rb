FactoryBot.define do
  factory :ngo do
    fantasy_name { Faker::Name.name }
    zipcode { Faker::Address.zip_code }
    address_number { Faker::Address.building_number }
    address { Faker::Address.street_name }
    neighborhood { Faker::Address.community }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
  end
end
