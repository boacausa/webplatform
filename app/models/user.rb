class User < ApplicationRecord
  include PhoneFormat

  enum group: [:admin, :ngo]

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook, :google_oauth2]

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first

    unless user
        user = User.create(name: data['name'],
           email: data['email'],
           password: Devise.friendly_token[0,20]
        )
    end
    user
  end

  def phone=(text)
    super(only_numbers text)
  end

  def phone
    mask(super)
  end

  def ngo_privileges?
    admin? || ngo?
  end
end
