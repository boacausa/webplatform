class Ngo < ApplicationRecord
  attr_accessor :logo_path
  before_save :set_fantasy_name_url

  include PhoneFormat

  has_and_belongs_to_many :users
  has_one_attached :image

  validates :fantasy_name, presence: true
  validates :zipcode, presence: true
  validates :address_number, presence: true
  validates :address, presence: true
  validates :neighborhood, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :description, presence: true

  scope :active, -> { where(active: true) }

  def self.from_user(user)
    if user.admin?
      self.all
    else
      self.joins(:users).where(users: { id: user.id })
    end
  end

  def phone_number1=(text)
    super(only_numbers text)
  end

  def phone_number2=(text)
    super(only_numbers text)
  end

  def phone_number1
    mask(super)
  end

  def phone_number2
    mask(super)
  end

  def bank_account?
    bank.present? && account.present? && agency.present?
  end

  private

  def set_fantasy_name_url
    self.fantasy_name_url = fantasy_name.parameterize
  end
end
