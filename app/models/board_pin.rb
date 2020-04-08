# == Schema Information
#
# Table name: board_pins
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardPin < ApplicationRecord
  belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board

  belongs_to :pin,
    foreign_key: :pin_id,
    class_name: :Pin
end
