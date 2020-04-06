class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.string :followed_type, null: false

      t.index :follower_id
      t.index :followed_id
      t.timestamps
    end
  end
end
