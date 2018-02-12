module PhoneFormat
  def only_numbers(phone)
    phone.gsub(/[^\d]/, '')
  end

  def mask(phone)
    phone.gsub!(/\D/, '')
    phone.gsub!(/^(\d{2})(\d)/, '(\1) \2')
    phone.gsub!(/(\d)(\d{4})$/, '\1-\2')
  end
end

