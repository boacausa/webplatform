# frozen_string_literal: true

class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column(:users, :name, :string)
    add_column(:users, :cpf, :string)
    add_column(:users, :phone, :string)
    add_column(:users, :temporary_home, :boolean)
    add_column(:users, :image, :string)
  end
end
