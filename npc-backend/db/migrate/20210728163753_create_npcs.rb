class CreateNpcs < ActiveRecord::Migration[6.1]
  def change
    create_table :npcs do |t|
      t.string :firstName
      t.string :lastName
      t.string :title
      t.string :race
      t.string :sex
      t.string :alignment
      t.string :melee
      t.string :ranged
      t.integer :health
      t.string :armor
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.string :npcClass
      t.string :trait
      t.string :background
      t.string :quirk1
      t.string :quirk2
      t.string :notablePhysicalFeature

      t.timestamps
    end
  end
end
