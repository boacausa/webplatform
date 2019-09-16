# TODO: add specs
class NgoResponseAttributes
  attr_reader :ngo

  def initialize(ngo)
    @ngo = ngo
  end

  def attributes
    ngo.attributes.merge(
      logo_path: logo_path(ngo),
      fantasy_name_url: ngo.fantasy_name_url
    )
  end

  private

  # TODO: this should have it's own class and maybe returned by the model
  def logo_path(ngo)
    if ngo.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(ngo.image, only_path: true)
    else
      ActionController::Base.helpers.image_path('image_not_found.png')
    end
  end
end
