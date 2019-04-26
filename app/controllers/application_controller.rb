class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_raven_context, :set_locale
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :last_name, :phone, :email, :password])
  end

  private

  def set_locale
    I18n.locale = 'pt-BR'
  end

  def set_raven_context
    return unless Rails.env.production?

    if user_signed_in?
      Raven.user_context(user_id: current_user.id)
    end

    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
