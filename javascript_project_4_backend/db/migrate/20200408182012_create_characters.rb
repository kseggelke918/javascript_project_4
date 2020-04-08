class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.boolean :status
      t.string :location
      t.integer :house_id

      t.timestamps
    end
  end
end
