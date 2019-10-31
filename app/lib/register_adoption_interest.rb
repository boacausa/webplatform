class RegisterAdoptionInterest
  def save!(user_email, pet_id)
    user = User.find_by!(email: user_email)
    AdoptionInterest.first_or_create!(user_id: user.id, pet_id: pet_id)
  end
end
