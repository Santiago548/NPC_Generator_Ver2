import React from 'react';

const NpcPreviewCard = ({ npc, deleteNpc }) =>

  <div>
      <button
        type="character-button"
        onClick={() => deleteNpc(npc.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
        <div>
            <h3>{npc.firstName} {npc.lastName}</h3>
            <br />
        </div>
  </div>

export default NpcPreviewCard;