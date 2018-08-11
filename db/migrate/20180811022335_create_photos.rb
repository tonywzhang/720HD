class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :title , null: false, default: "Untitled"
      t.text :description
      t.string :location

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
