class AddFieldsToNgos < ActiveRecord::Migration[5.1]
  def change
    add_column :ngos, :transparency_portal, :string

    # bank account
    add_column :ngos, :bank, :string
    add_column :ngos, :agency, :string
    add_column :ngos, :operation, :string
    add_column :ngos, :account, :string
    add_column :ngos, :titular, :string

    # address
    add_column :ngos, :zipcode, :string
    add_column :ngos, :address_number, :string
  end
end
