module PhoneFormat
  def only_numbers(phone)
    phone.gsub(/[^\d]/, '')
  end
end