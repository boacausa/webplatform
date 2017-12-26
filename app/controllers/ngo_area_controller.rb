class NgoAreaController < ApplicationController
  before_action :authenticate_user!

  layout 'ngo_area'
end
