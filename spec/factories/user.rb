FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { Faker::Internet.password }

    trait(:admin_privileges) { group :admin }
    trait(:ngo_privileges) { group :ngo }
  end
end