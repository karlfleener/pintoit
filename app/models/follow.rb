# == Schema Information
#
# Table name: follows
#
#  id            :bigint           not null, primary key
#  follower_id   :integer          not null
#  followed_id   :integer          not null
#  followed_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Follow < ApplicationRecord
  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :user_followed,
    foreign_key: :followed_id,
    class_name: :User

  belongs_to :board_followed,
    foreign_key: :followed_id,
    class_name: :Board
end
