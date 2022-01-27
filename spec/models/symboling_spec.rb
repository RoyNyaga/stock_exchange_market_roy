require 'rails_helper'

RSpec.describe Symboling, type: :model do

  context "When creating with valid fields" do 
    it "symboling should get created" do 
      expect(create(:symboling)).to be_valid
    end
  end

  context "during validation" do 
    let(:symboling) { build(:symboling) }
    context "when Name is blank" do 
      it "User email can't be blank" do
        symboling.name = ""
        symboling.valid?
        expect(symboling.errors.full_messages).to include("Name can't be blank") 
      end
    end 

    context "when symboling already exist for the same wallet" do 
      it "It should not get created" do 
        symboling_2 = create(:symboling)
        symboling.name = symboling_2.name 
        symboling.wallet_id = symboling_2.wallet_id
        symboling.save
        expect(symboling.errors.full_messages).to include("Name : Symbole name already Exist in this wallet")
      end
    end
  end 
end 