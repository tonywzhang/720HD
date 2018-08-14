class AddIndexToTable < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:user_id, :photo_id], unique: true
  end
end
