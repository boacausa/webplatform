class AdoptionInterest < ApplicationRecord
  belongs_to :user
  belongs_to :pet
  has_many :adoption_interest_notifications, dependent: :destroy

  scope :by_ngo_user, -> (user) do
    if user.admin?
      self.all
    else
      self.joins(:pet).where(pets: { ngo: user.ngos })
    end
  end

  after_create :notify_user

  private

  def notify_user
    NotifyAdoptionInterest.perform_later(self)
  end
end
