class Pet < ApplicationRecord
  include Paperclip::Glue

  SEX = {
    f: 'Fêmea',
    m: 'Macho'
  }.freeze

  has_attached_file :image, styles: { medium: '320x320#', thumb: '100x100>' }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  scope :actived, -> { where(active: true) }

  def days_ago
    created_at
    #TODO convert to text
  end

  def sex_text
    Pet::SEX[sex.to_sym]
  end
end
