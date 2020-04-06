class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :description
      t.integer :creator_id, null: false

      t.index :title, unique: true
      t.timestamps
    end
  end
end
