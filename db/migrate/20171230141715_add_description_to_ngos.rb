# frozen_string_literal: true

class AddDescriptionToNgos < ActiveRecord::Migration[5.1]
  def change
    add_column(:ngos, :description, :text)
  end
end
