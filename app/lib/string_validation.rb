class StringValidation
  def self.only_numbers?(string)
    string.scan(/\D/).empty?
  end
end