class AddAddressToNgos < ActiveRecord::Migration[5.1]
  def change
    add_column :ngos, :address, :string
    add_column :ngos, :neighborhood, :string
    add_column :ngos, :city, :string
    add_column :ngos, :state, :string
  end
end
