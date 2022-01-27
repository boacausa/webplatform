# frozen_string_literal: true

class AddFantasyNameUrlToNgos < ActiveRecord::Migration[5.2]
  def change
    add_column(:ngos, :fantasy_name_url, :string)
  end
end
