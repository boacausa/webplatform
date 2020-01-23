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
  scope :by_name_or_description, lambda { |name_or_description|
    where(
      'pets.name ILIKE ? OR pets.description ILIKE ?',
      "%#{name_or_description}%",
      "%#{name_or_description}%"
    )
  }
  scope :by_city, ->(city) { includes(:ngo).where(ngos: { city: city }) }
  scope :by_ngo_id, ->(ngo_id) { where(ngo_id: ngo_id) }

  def days_ago
    created_at
    #TODO convert to text
  end

  def sex_text
    Pet::SEX[sex.to_sym]
  end
end
