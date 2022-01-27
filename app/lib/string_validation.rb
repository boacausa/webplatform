# frozen_string_literal: true

class StringValidation
  def self.only_numbers?(string)
    string.scan(/\D/).empty?
  end
end
