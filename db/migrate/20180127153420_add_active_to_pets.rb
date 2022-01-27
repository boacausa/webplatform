# frozen_string_literal: true

class AddActiveToPets < ActiveRecord::Migration[5.1]
  def change
    add_column(:pets, :active, :boolean)
  end
end
