class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :creator_id, null: false

      t.index :title
      t.index :creator_id
      t.timestamps
    end
  end
end
