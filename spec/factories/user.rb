FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    group nil

    trait(:admin_privileges) { group :admin }
    trait(:ngo_privileges) { group :ngo }
  end
end