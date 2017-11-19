class AddDescriptionToPets < ActiveRecord::Migration[5.0]
  def change
    add_column :pets, :description, :string
  end
end
