# frozen_string_literal: true

require "rails_helper"

describe StringValidation do
  describe ".only_numbers" do
    it "returns true if the string contains only numbers" do
      expect(StringValidation.only_numbers?("124")).to(be_truthy)
      expect(StringValidation.only_numbers?("12234324234234")).to(be_truthy)
      expect(StringValidation.only_numbers?("0")).to(be_truthy)
    end

    it "returns false if the string contains letters" do
      expect(StringValidation.only_numbers?("12a4")).to(be_falsey)
      expect(StringValidation.only_numbers?("asdhuasd")).to(be_falsey)
      expect(StringValidation.only_numbers?("sada83dhad-asd")).to(be_falsey)
    end
  end
end
