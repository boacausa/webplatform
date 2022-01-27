# frozen_string_literal: true

class User < ApplicationRecord
  include PhoneFormat

  enum group: [:admin, :ngo]

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, omniauth_providers: [:facebook, :google_oauth2]

  has_and_belongs_to_many :ngos
  has_many :adoption_interests

  validates :name, presence: true
  validates :last_name, presence: true
  # TODO: add email validation back. it is currently messing up tests and seeds
  # validates :email, presence: true, email: true
  # TODO: Consider remove because of LGPD
  # is blocking sign up. Do we really need CPF?
  # validates :cpf, presence: true, cpf: true

  def self.from_omniauth(auth)
    user = User.find_by(email: auth.info.email)

    unless user
      user = User.create(
        name: auth.info.name,
        email: auth.info.email,
        password: Devise.friendly_token[0, 20]
      )
    end

    user
  end

  def phone=(text)
    super(only_numbers(text))
  end

  def phone
    mask(super)
  end

  def ngo_privileges?
    admin? || ngo?
  end
end
