class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.text :name
      t.text :breed
      t.text :color
      t.date :dob
      t.text :image
      t.text :behaviour
      t.boolean :desexed
      t.date :kennel_cough
      t.date :flea
      t.date :worm
      t.integer :owner_id

      t.timestamps
    end
  end
end
