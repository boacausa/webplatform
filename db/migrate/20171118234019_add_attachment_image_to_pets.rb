class AddAttachmentImageToPets < ActiveRecord::Migration[5.0]
  def self.up
    change_table :pets do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :pets, :image
  end
end
