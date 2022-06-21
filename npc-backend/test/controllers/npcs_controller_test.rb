require "test_helper"

class NpcsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @npc = npcs(:one)
  end

  test "should get index" do
    get npcs_url, as: :json
    assert_response :success
  end

  test "should create npc" do
    assert_difference('Npc.count') do
      post npcs_url, params: { npc: { alignment: @npc.alignment, armor: @npc.armor, cha: @npc.cha, con: @npc.con, dex: @npc.dex, firstName: @npc.firstName, health: @npc.health, lastName: @npc.lastName, melee: @npc.melee, npcClass: @npc.npcClass, race: @npc.race, ranged: @npc.ranged, sex: @npc.sex, str: @npc.str, title: @npc.title, trait: @npc.trait, wis: @npc.wis } }, as: :json
    end

    assert_response 201
  end

  test "should show npc" do
    get npc_url(@npc), as: :json
    assert_response :success
  end

  test "should update npc" do
    patch npc_url(@npc), params: { npc: { alignment: @npc.alignment, armor: @npc.armor, cha: @npc.cha, con: @npc.con, dex: @npc.dex, firstName: @npc.firstName, health: @npc.health, lastName: @npc.lastName, melee: @npc.melee, npcClass: @npc.npcClass, race: @npc.race, ranged: @npc.ranged, sex: @npc.sex, str: @npc.str, title: @npc.title, trait: @npc.trait, wis: @npc.wis } }, as: :json
    assert_response 200
  end

  test "should destroy npc" do
    assert_difference('Npc.count', -1) do
      delete npc_url(@npc), as: :json
    end

    assert_response 204
  end
end
