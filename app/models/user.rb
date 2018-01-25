class User < ApplicationRecord
  # TODO add address

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def phone=(text)
    super(text.gsub(/[^\d]/, ''))
  end
end
