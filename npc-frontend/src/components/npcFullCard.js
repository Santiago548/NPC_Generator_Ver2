import React from "react";

const NpcFullCard = ({ npc, deleteNpc }) => (
  <div>
    <fieldset>
      <button type="character-button" onClick={() => deleteNpc(npc.id)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div>
        <div>
          {npc.firstName} {npc.lastName}
          <br />
          The {npc.title} {npc.npcClass}
        </div>
        <div>
            {npc.str}
            {npc.dex}
            {npc.con}
            {npc.wis}
            {npc.cha}
        </div>
        <br />
      </div>
    </fieldset>
  </div>
);

export default NpcFullCard;
