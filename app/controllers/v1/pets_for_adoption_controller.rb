class V1::PetsForAdoptionController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    pets = Pet.active
    pets = pets.by_sex(params[:sex]) if params[:sex].present?
    pets = pets.by_name_or_description(params[:name_or_description]) if params[:name_or_description].present?
    pets = pets.by_city(params[:city]) if params[:city].present?
    pets = pets.by_ngo_id(params[:ngo_id]) if params[:ngo_id].present?

    render json: {
      pets: ListPets.new.all(pets, params[:user_email])
    }.to_json
  end

  def register_interest
    response = { success: "Finished with success" }
    status = :ok

    begin
      ::RegisterAdoptionInterest.new.save!(register_interest_params[:user_email], register_interest_params[:pet_id])
    rescue ActiveRecord::RecordNotFound
      response = { error: "User not found" }
      status = :not_found
    end

    render json: response.to_json, status: status
  end

  private

  def register_interest_params
    params.require(:register_interest).permit(:user_email, :pet_id)
  end
end
