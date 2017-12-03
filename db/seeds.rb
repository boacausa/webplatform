puts 'Creating or recreating pets'

Pet.delete_all

7.times do
  Pet.create!(
    name: Faker::Name.first_name,
    age: Random.rand(10),
    description: Faker::Lorem.sentence,
    sex: 'female',
    image: File.new(
      Rails.root.join('public', 'templates', 'pets', "#{Random.rand(6)}.png"),
      'r'
    )
  )
end

puts 'Create an ngo'

Ngo.delete_all

Ngo.create!(
  social_name: 'Amigo Bicho Nome Social',
  fantasy_name: 'Amigo Bicho',
  phone_number1: Faker::PhoneNumber.phone_number,
  phone_number2: Faker::PhoneNumber.phone_number,
  email: Faker::Internet.email,
  site: Faker::Internet.url,
  cnpj: CNPJ.generate,
  date_start: Faker::Date.backward(1000)
)
