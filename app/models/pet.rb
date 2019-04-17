class Pet < ApplicationRecord
  belongs_to :ngo

  SEX = {
    f: 'Fêmea',
    m: 'Macho'
  }.freeze

  has_one_attached :image
  
  validates :name, :sex, :ngo, presence: true

  scope :actived, -> { where(active: true) }

  def days_ago
    created_at
    #TODO convert to text
  end

  def sex_text
    Pet::SEX[sex.to_sym]
  end
end
