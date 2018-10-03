class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted? sign_in_and_redirect @user, :event => :authentication
    else
      redirect_to new_user_registration_url
    end
  end

  def google_oauth2
    @user = User.from_omniauth(request.env['omniauth.auth'])
    @user.save

    if @user.persisted?
      flash[:notice] = 'Login efetuado com sucesso'
      sign_in_and_redirect @user, event: :authentication
    else
      session['devise.google_data'] = request.env['omniauth.auth'].except(:extra) # Removing extra as it can overflow some session stores
      redirect_to new_user_registration_url, alert: @user.errors.full_messages.join("\n")
    end
  end

  def failure
    flash[:notice] = 'Algum problema ocorreu realizar login'
    redirect_to new_session_path(resource_name)
  end
end
