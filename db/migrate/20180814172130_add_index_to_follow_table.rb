class AddIndexToFollowTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :user_id
    add_column :follows, :followee_id, :integer, null: false
    add_column :follows, :follower_id, :integer, null: false
    add_index :follows, [:followee_id, :follower_id], unique: true
  end
end
