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
  active: true,
  city: Faker::Address.city,
  state: Faker::Address.state,
  zipcode: Faker::Address.zip_code,
  address_number: Faker::Address.building_number,
  address: Faker::Address.street_address,
  neighborhood: Faker::Address.community,
)

Ngo.last.image.attach(io: File.open("public/images/ngo/amigobicho.png"), filename: 'amigobicho.png')

Ngo.create!(
  social_name: 'Outra ONG',
  fantasy_name: 'ONG Teste',
  phone_number1: Faker::PhoneNumber.phone_number,
  phone_number2: Faker::PhoneNumber.phone_number,
  email: Faker::Internet.email,
  site: Faker::Internet.url,
  cnpj: CNPJ.generate,
  date_start: Faker::Date.backward(1000),
  active: true
)

Ngo.last.image.attach(io: File.open("public/images/ngo/amigobicho.png"), filename: 'amigobicho.png')

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
  pet = Pet.create!(
      name: Faker::Name.first_name,
      age: Random.rand(10),
      description: Faker::Lorem.paragraph_by_chars([100, 50, 200, 300, 500].sample),
      sex: ['f', 'm'].sample,
      active: true,
      ngo_id: ngo_ids.sample
  )

  random_image_number = Random.rand(6)

  pet.image.attach(io: File.open("public/images/pets/#{random_image_number}.png"), filename: "#{random_image_number}.png")
  pet.save
end

