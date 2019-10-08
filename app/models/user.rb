class User < ApplicationRecord
  include PhoneFormat

  enum group: [:admin, :ngo]

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook, :google_oauth2]

  has_and_belongs_to_many :ngos
  has_many :adoption_interests

  validates :name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :cpf, presence: true

  def self.from_omniauth(auth)
    user = User.find_by(email: auth.info.email)

    unless user
      user = User.create(
        name: auth.info.name,
        email: auth.info.email,
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
