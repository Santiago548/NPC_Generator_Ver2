import React from 'react';

const NpcCard = ({ npc, deleteNpc }) =>

  <div>
      <button
        type="character-button"
        onClick={() => deleteCharacter(character.id)}
      >
        <span aria-hidden="true">&times;</span>
        <div>
            <h3>{npc.name}</h3>
            <br />
        </div>
      </button>
  </div>


export default NpcCard;