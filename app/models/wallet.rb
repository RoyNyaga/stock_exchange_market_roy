class Wallet < ApplicationRecord
  has_many :symbolings, dependent: :destroy
  has_many :notifications, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
