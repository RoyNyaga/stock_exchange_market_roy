class Notification < ApplicationRecord
  belongs_to :wallet

  def self.wallet_message(symboling_name, threshold)
    "The close price of #{symboling_name} is greater than #{threshold}"
  end
end
