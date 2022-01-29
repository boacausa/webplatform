# frozen_string_literal: true

# TODO: add specs
class PetResponseAttributes
  attr_reader :pet

  def initialize(pet)
    @pet = pet
  end

  def attributes
    pet.attributes.merge(
      ngo: NgoResponseAttributes.new(pet.ngo).attributes
    )
  end
end
