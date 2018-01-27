class AddActiveToNgos < ActiveRecord::Migration[5.1]
  def change
    add_column :ngos, :active, :boolean
  end
end
