class V1::NgosController < ApplicationController
  def index
    render json: {
      ngos: Ngo.actived
    }.to_json
  end
end
