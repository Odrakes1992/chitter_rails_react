#require "test_helper"
require "rails_helper"

# class PostTest < ActiveSupport::TestCase
#   # test "the truth" do
#   #   assert true
#   # end
# end


RSpec.describe Post, type: :model do


  subject {described_class.new}


  it "is valid with a message" do 
    subject.message = "Life is like an ocean"
  end 


end
