class Symboling < ApplicationRecord
  belongs_to :wallet
  validates :name, presence: true, uniqueness: { scope: :wallet_id, message: ": Symbole name already Exist in this wallet"}
end
