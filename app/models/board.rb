# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
  validates :title, :creator_id, presence: true
  validates :title, uniqueness: { scope: :creator_id }

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  has_many :pins,
    foreign_key: :board_id,
    class_name: :Pin

  has_many :board_pins,
    foreign_key: :board_id,
    class_name: :BoardPin

  has_many :pins, 
  through: :board_pins,
  source: :pin

  has_many :follows,
    foreign_key: :followed_id,
    class_name: :Follow
end
