# frozen_string_literal: true

class ListPets
  def all(pets, user_email)
    add_extra_fields(pets, user_email)
  end

  private

  def add_extra_fields(pets, user_email)
    user_pet_interest = user_pet_interest(pets)

    pets.map do |pet|
      pet.attributes.merge(
        logo_path: logo_path(pet),
        ngo: NgoResponseAttributes.new(pet.ngo).attributes,
        description_truncated: pet.description&.truncate(200),
        user_registered_interest: user_pet_interest.include?([user_email, pet.id])
      )
    end
  end

  def user_pet_interest(pets)
    @list_user_pet ||= AdoptionInterest.joins(:user).where(pet_id: pets).pluck(:email, :pet_id)
  end

  # TODO: extract this to a class
  def logo_path(pet)
    if pet.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(pet.image, only_path: true)
    else
      ActionController::Base.helpers.image_path("image_not_found.png")
    end
  end
end
