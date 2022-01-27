# frozen_string_literal: true

require "rails_helper"

describe PhoneFormat do
  subject { OrdinaryClass.new }

  describe "#only_numbers" do
    it "returns only numbers" do
      expect(subject.only_numbers("(12)34-56")).to(eq("123456"))
    end
  end

  describe "#mask" do
    it "returns masked phone number" do
      expect(subject.mask("123456789")).to(eq("(12) 345-6789"))
    end
  end
end

class OrdinaryClass
  include PhoneFormat
end
