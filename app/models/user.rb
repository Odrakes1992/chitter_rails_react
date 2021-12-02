class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments

  validates :email, uniqueness:true
  validates :first_name, :last_name, :email, :password, :username, presence: true 
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }



end
