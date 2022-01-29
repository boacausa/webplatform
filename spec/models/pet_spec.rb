# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Pet) do
  describe "#sex_text" do
    it "returns female" do
      pet = create(:pet, sex: :f)
      expect(pet.sex_text).to(eq("Fêmea"))
    end

    it "returns male" do
      pet = create(:pet, sex: :m)
      expect(pet.sex_text).to(eq("Macho"))
    end
  end
end
