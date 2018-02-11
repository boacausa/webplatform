class ChangePhoneTypeInNgos < ActiveRecord::Migration[5.1]
  def change
    change_column :ngos, :phone_number1, :string
    change_column :ngos, :phone_number2, :string
  end
end
