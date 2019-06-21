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

# TODO: extract to a class
# TODO: add specs
class ListNgos
  def all
    ngos = Ngo.actived
    add_extra_fields(ngos)
  end

  private

  def add_extra_fields(ngos)
    ngos.map do |ngo|
      ngo.attributes.merge(
        logo_path: logo_path(ngo),
        fantasy_name_url: ngo.fantasy_name_url
      )
    end
  end

  # TODO: this should have it's own class and maybe returned by the model
  def logo_path(ngo)
    if ngo.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(ngo.image, only_path: true)
    else
      ActionController::Base.helpers.image_path('image_not_found.png')
    end
  end
end
