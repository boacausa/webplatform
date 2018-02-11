class User < ApplicationRecord
  include PhoneFormat

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def phone=(text)
    super(only_numbers text)
  end
end
