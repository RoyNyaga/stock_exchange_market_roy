FactoryBot.define do
  factory :symboling do
    wallet
    name { Faker::Name.name }
  end
end