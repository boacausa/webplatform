class User < ApplicationRecord
  include PhoneFormat

  enum group: [:admin, :ngo]

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  def phone=(text)
    super(only_numbers text)
  end
end
