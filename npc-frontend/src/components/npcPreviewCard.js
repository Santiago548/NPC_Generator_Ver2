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
      </div>
      <button onClick={() => getNpcFullCard(npc.id)}>
        <span aria-hidden="true">Full Stat Card</span>
      </button>
    </fieldset>
  </div>
);

export default NpcPreviewCard;
