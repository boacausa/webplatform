# frozen_string_literal: true

class CreateNgosUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table(:ngos, :users) do |t|
      t.index(:ngo_id)
      t.index(:user_id)
    end
  end
end
