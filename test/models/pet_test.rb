require "test_helper"

describe Pet do
  let(:pet) { Pet.new }

  it "must be valid" do
    value(pet).must_be :valid?
  end
end
