require 'rails_helper'

RSpec.describe Wallet, type: :model do

  context "When creating with valid fields" do 
    let(:wallet) { build(:wallet) }
    it "wallet should get created" do 
      expect(wallet.save).to eq true
    end
  end

  context "During validation" do 
    let(:wallet) { build(:wallet) }
    context "when Name is blank" do 
      it "User email can't be blank" do
        wallet.name = ""
        wallet.valid?
        expect(wallet.errors.full_messages).to include("Name can't be blank") 
      end
    end 
  end 
end 