class CreateNgos < ActiveRecord::Migration[5.0]
  def change
    create_table :ngos do |t|
      t.string :social_name
      t.string :fantasy_name
      t.integer :phone_number1
      t.integer :phone_number2
      t.string :email
      t.string :site
      t.integer :cnpj
      t.string :activity
      t.date :date_start

      t.timestamps
    end
  end
end
