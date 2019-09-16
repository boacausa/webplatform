class V1::PetsForAdoptionController < ApplicationController
  def index
    render json: {
      pets: ListPets.new.all
    }.to_json
  end
end
