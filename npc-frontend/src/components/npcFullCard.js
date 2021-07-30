import React from "react";

const NpcFullCard = ({ npc, deleteNpc }) => (
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
        <ul>
            str:<li>{npc.str + "/" + (10 + (npc.str * 2))}</li>
            dex:<li>{npc.dex + "/" + (10 + (npc.dex * 2))}</li>
            com:<li>{npc.con + "/" + (10 + (npc.con * 2))}</li>
            wis:<li>{npc.wis + "/" + (10 + (npc.wis * 2))}</li>
            cha:<li>{npc.cha + "/" + (10 + (npc.cha * 2))}</li>
        </ul>
        <br />
      </div>
      <br />
    </fieldset>
  </div>
);

export default NpcFullCard;
