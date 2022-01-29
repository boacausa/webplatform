# frozen_string_literal: true

# in process of being deprecated
class PetList
  def self.execute(user)
    if user.admin?
      Pet.all
    else
      Pet.where(ngo: user.ngos)
    end
  end
end
