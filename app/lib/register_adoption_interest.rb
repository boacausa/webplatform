# frozen_string_literal: true

class RegisterAdoptionInterest
  def save!(user_email, pet_id)
    user = User.find_by!(email: user_email)
    AdoptionInterest.find_or_create_by!(user_id: user.id, pet_id: pet_id)
  end
end
