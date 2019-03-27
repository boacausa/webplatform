puts 'Deleting old registers'

Pet.delete_all
Ngo.delete_all
User.delete_all

puts 'Creating NGOs'

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

puts 'Creating Users'

User.create!(
  email: 'admin@boacausa.com',
  password: '123456789',
  group: :admin,
)

ngo_user = User.create!(
  email: 'ngo@boacausa.com',
  password: '123456789',
  group: :ngo
)

User.create!(
  email: 'user@boacausa.com',
  password: '123456789',
)

ngo_user.ngos << Ngo.first

puts 'Creating Pets'

ngo_ids = Ngo.all.pluck(:id)
7.times do
  Pet.create!(
      name: Faker::Name.first_name,
      age: Random.rand(10),
      description: Faker::Lorem.sentence,
      sex: 'f',
      image: File.new("public/templates/pets/#{Random.rand(6)}.png"),
      active: true,
      ngo_id: ngo_ids.sample
  )
end
