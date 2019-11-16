class AdoptionInterest < ApplicationRecord
  belongs_to :user
  belongs_to :pet

  scope :by_ngo_user, -> (user) do
    if user.admin?
      self.all
    else
      self.joins(:pet).where(pets: { ngo: user.ngos })
    end
  end
end
