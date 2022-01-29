# frozen_string_literal: true

class ChangeCnpjTypeInNgos < ActiveRecord::Migration[5.0]
  def change
    change_column(:ngos, :cnpj, :bigint)
  end
end
