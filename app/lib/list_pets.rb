# TODO: add specs
class ListPets
  def all
    pets = Pet.actived
    add_extra_fields(pets)
  end

  private

  def add_extra_fields(pets)
    pets.map do |pet|
      pet.attributes.merge(
        ngo: NgoResponseAttributes.new(pet.ngo).attributes
      )
    end
  end
end
