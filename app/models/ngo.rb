class Ngo < ApplicationRecord
  include Paperclip::Glue
  include PhoneFormat

  has_and_belongs_to_many :users

  has_attached_file :image, styles: { medium: '320x320#', thumb: '100x100>' }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :fantasy_name, presence: true

  scope :actived, -> { where(active: true) }
  scope :find_by_fantasy_name, ->(name) { where('replace(lower(fantasy_name), \' \', \'\') = ?', name) }

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

  def fantasy_name_url
    return unless fantasy_name.present?

    fantasy_name.downcase.gsub(/\s+/, '')
  end
end
