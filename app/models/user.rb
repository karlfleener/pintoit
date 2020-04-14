# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  age             :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :age, :password_digest, presence: true
  validates :age, numericality: { greater_than: 9 }
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :boards,
    foreign_key: :creator_id,
    class_name: :Board

  has_many :pins,
    foreign_key: :creator_id,
    class_name: :Pin

  has_many :followers,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :user_follows,
    foreign_key: :followed_id,
    class_name: :Follow

  has_many :board_follows,
    through: :followed_id,
    source: :board_followed

def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

end
