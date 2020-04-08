# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  has_many :board_pins,
    foreign_key: :pin_id,
    class_name: :BoardPin

  has_many :boards,
    through: :board_pins,
    source: :board
end
