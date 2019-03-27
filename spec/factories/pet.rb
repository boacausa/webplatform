FactoryBot.define do
  factory :pet do
    name { Faker::Name.name }
    sex { Pet::SEX.to_a.sample }
    ngo { FactoryBot.create(:ngo) }
  end
end
