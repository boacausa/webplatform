class User < ApplicationRecord
  include PhoneFormat

  enum group: [:admin, :ngo]

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook, :google_oauth2]

  has_and_belongs_to_many :ngos

  def self.from_omniauth(auth)
    user = User.find_or_create_by(email: auth.info['email'])
    user.name = auth.info['name']
    user.password = Devise.friendly_token[0, 20]

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
