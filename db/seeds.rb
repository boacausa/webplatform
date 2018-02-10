puts 'Creating or recreating pets'

Pet.delete_all

7.times do
  Pet.create!(
    name: Faker::Name.first_name,
    age: Random.rand(10),
    description: Faker::Lorem.sentence,
    sex: 'f',
    image: File.new("public/templates/pets/#{Random.rand(6)}.png"),
    active: true
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
  date_start: Faker::Date.backward(1000),
  image: File.new("public/templates/ngo/amigobicho.png"),
  active: true
)

Ngo.create!(
  social_name: 'Outra ONG',
  fantasy_name: 'ONG Teste',
  phone_number1: Faker::PhoneNumber.phone_number,
  phone_number2: Faker::PhoneNumber.phone_number,
  email: Faker::Internet.email,
  site: Faker::Internet.url,
  cnpj: CNPJ.generate,
  date_start: Faker::Date.backward(1000),
  image: File.new("public/templates/ngo/amigobicho.png"),
  active: true
)
