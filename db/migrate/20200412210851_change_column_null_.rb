class ChangeColumnNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pins, :description, true
  end
end
