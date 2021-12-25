require 'rails_helper'

RSpec.describe Comment, type: :model do
  # test "the truth" do
  #   assert true
  # end

  subject {described_class.new}


  it "is valid with a message" do 
    subject.content = "Life is like an ocean"
  end 

  describe "Associations" do 
    it { should belong_to(:user)}
    it { should belong_to(:post)}
  end 


end
