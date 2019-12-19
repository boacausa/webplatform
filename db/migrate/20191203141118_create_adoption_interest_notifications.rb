class CreateAdoptionInterestNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :adoption_interest_notifications do |t|
      t.references :user, foreign_key: true
      t.references :adoption_interest, foreign_key: true
      t.boolean :read, default: false, null: false

      t.timestamps
    end
  end
end
