class V1::NgosController < ApplicationController
  def index
    render json: {
      ngos: ListNgos.new.all
    }.to_json
  end

  def show
    render json: {
        ngo: Ngo.last
    }.to_json
  end
end

