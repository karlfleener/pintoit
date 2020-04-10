class ChangeBoardUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :boards, column: :title, unique: true
  end
end
