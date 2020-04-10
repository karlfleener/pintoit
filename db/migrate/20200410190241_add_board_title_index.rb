class AddBoardTitleIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :boards, :title
  end
end
