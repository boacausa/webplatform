FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    last_name { Faker::Name.last_name }
    cpf { CPF.generate }
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    group { nil }

    trait(:admin_privileges) do
      group { :admin }
    end

    trait(:ngo_privileges) do
      group { :ngo }
    end
  end
end
