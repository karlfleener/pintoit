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
end
