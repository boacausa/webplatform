class Pet < ApplicationRecord
  belongs_to :ngo
  has_many :adoption_interests, dependent: :destroy

  SEX = {
    f: 'Fêmea',
    m: 'Macho'
  }.freeze

  has_one_attached :image

  validates :name, :sex, :ngo, presence: true

  scope :active, -> { where(active: true) }
  scope :by_sex, ->(sex) { where(sex: sex) }
  scope :by_description, ->(description) { where('description LIKE ?', "%#{description}%") }

  def days_ago
    created_at
    #TODO convert to text
  end

  def sex_text
    Pet::SEX[sex.to_sym]
  end
end
