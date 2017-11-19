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
