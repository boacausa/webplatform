# frozen_string_literal: true

class NgoAreaController < ApplicationController
  before_action :authenticate_user!
  before_action :check_user_privileges

  layout "ngo_area"

  private

  def check_user_privileges
    head(:not_found) unless current_user.ngo_privileges?
  end
end
