class CreateSymbolings < ActiveRecord::Migration[6.1]
  def change
    create_table :symbolings do |t|
      t.references :wallet, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
