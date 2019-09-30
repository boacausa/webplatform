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

  def cities
    # TODO: test
    render json: {
      cities: ListNgos.new.all.map { |ngo| ngo['city'] && { id: ngo['city'], name: ngo['city'] } }.uniq.compact
    }.to_json
  end
end

