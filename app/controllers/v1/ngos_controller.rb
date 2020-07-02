class V1::NgosController < ApplicationController
  def index
    render json: {
      ngos: ListNgos.new.all
    }.to_json
  end

  def show
    if StringValidation.only_numbers?(params[:id])
      ngo = Ngo.find(params[:id])
    else
      ngo = Ngo.find_by(fantasy_name_url: params[:id])
    end

    response = { error: "User not found" }
    status = :not_found

    if ngo.present?
      response = { ngo: NgoResponseAttributes.new(ngo).attributes }
      status = :ok
    end

    render json: response.to_json, status: status
  end

  def cities
    render json: {
      cities: ListNgos.new.all.map { |ngo| ngo['city'] && { id: ngo['city'], name: ngo['city'] } }.uniq.compact
    }.to_json
  end
end

