class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_raven_context
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :last_name, :phone, :email, :password])
  end

  private

  def set_raven_context
    Raven.user_context(user_id: current_user.id)
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
