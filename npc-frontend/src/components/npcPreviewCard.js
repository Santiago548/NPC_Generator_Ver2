import React from "react";

const NpcPreviewCard = ({ npc, deleteNpc, getNpcFullCard }) => (
  <div>
    <fieldset>
      <button onClick={() => deleteNpc(npc.id)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div>
        <div>
          {npc.firstName} {npc.lastName}
          <br />
          The {npc.title} {npc.npcClass}
        </div>
        <br />
        HEALTH: <span>{npc.health + npc.con * 6} HP</span>
        <br />
        ARMOR:{" "}
        <span>
          {npc.armor.split(" ").slice(0, 1) +
            " " +
            "AC:" +
            " " +
            (parseInt(npc.armor.split(" ").slice(1)) + npc.dex)}
        </span>
        <br />
      </div>
      <div className="navlink"></div>
      <br />
      <button onClick={() => getNpcFullCard(npc.id)}>Get Full Card</button>
    </fieldset>
  </div>
);

export default NpcPreviewCard;
