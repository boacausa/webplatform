require 'rails_helper'

describe RegisterAdoptionInterest do
  let(:user) { FactoryBot.create(:user) }
  let(:pet) { FactoryBot.create(:pet) }

  subject { described_class.new }

  describe "#save!" do
    it "creates a AdoptionInterest record" do
      expect { subject.save!(user.email, pet.id) }.to change { User.count }

      expect(AdoptionInterest.where(user_id: user.id, pet_id: pet.id).count).to eq(1)
    end

    context "when user does not exists" do
      it "raises an error" do
        expect { subject.save!("undefined@email", pet.id) }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
