class V1::PetsForAdoptionController < ApplicationController
  def index
    render json: {
      pets: ListPets.new.all
    }.to_json
  end

  def register_interest
    ::RegisterAdoptionInterest.new.save!(params[:user_email], params[:pet_id])

    render json: {}, status: :ok
  end
end


class RegisterAdoptionInterest
  def save!(user_email, pet_id)
    puts "#{user_email} #{pet_id}"
    # TODO
  end
end
