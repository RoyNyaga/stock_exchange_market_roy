class Wallet < ApplicationRecord
  has_many :symbolings, dependent: :destroy
  validates :name, presence: true
end
