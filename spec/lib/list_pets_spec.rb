# frozen_string_literal: true

require "rails_helper"

describe ListPets do
  let(:user_email) { nil }

  let(:pets) do
    pets = []
    pets << FactoryBot.create(:pet)
    pets << FactoryBot.create(:pet)

    pets
  end

  describe "#all" do
    it "returns an array with 2 registers" do
      expect(subject.all(pets, user_email).count).to(eq(2))
    end

    it "contains user_registered_interest attribute" do
      expect(subject.all(pets, user_email).first).to(include(
        user_registered_interest: false
      ))
    end

    context "when there is a user_email" do
      let(:user) { FactoryBot.create(:user) }
      let(:user_email) { user.email }

      let(:pets) do
        pet = FactoryBot.create(:pet)
        AdoptionInterest.create(pet_id: pet.id, user_id: user.id)

        [pet]
      end

      it "returns true for user_registered_interest attribute" do
        expect(subject.all(pets, user_email).first).to(include(
          user_registered_interest: true
        ))
      end
    end
  end
end
