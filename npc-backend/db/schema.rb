# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_163753) do

  create_table "npcs", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "title"
    t.string "race"
    t.string "sex"
    t.string "alignment"
    t.string "melee"
    t.string "ranged"
    t.integer "health"
    t.string "armor"
    t.integer "str"
    t.integer "dex"
    t.integer "con"
    t.integer "int"
    t.integer "wis"
    t.integer "cha"
    t.string "npcClass"
    t.string "trait"
    t.string "background"
    t.string "quirk1"
    t.string "quirk2"
    t.string "notablePhysicalFeature"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
