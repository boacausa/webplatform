class AddNgoToPets < ActiveRecord::Migration[5.2]
  def change
    add_reference :pets, :ngo, foreign_key: true
  end
end
