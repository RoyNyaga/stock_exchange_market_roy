class Symboling < ApplicationRecord
  belongs_to :wallet
  validates :name, presence: true
end
