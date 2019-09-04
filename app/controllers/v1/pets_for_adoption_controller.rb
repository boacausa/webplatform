class V1::PetsForAdoptionController < ApplicationController
  def index
    render json: {
      pets: Pet.actived
    }.to_json
  end
end
