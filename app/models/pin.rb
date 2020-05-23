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
  validates :title, :creator_id, presence: true
  validate :ensure_image

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

    belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board

  has_many :board_pins,
    foreign_key: :pin_id,
    class_name: :BoardPin

  has_many :boards,
    through: :board_pins,
    source: :board

  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << "An image is required to create a Pin."
    end
  end

end
