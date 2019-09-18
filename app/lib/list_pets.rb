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
        logo_path: logo_path(pet),
        ngo: NgoResponseAttributes.new(pet.ngo).attributes
      )
    end
  end

  # TODO: extract this to a class
  def logo_path(pet)
    if pet.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(pet.image, only_path: true)
    else
      ActionController::Base.helpers.image_path('image_not_found.png')
    end
  end
end
