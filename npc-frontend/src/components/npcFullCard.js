import React from "react";

const NpcFullCard = ({ npc, deleteNpc }) => (
  <div>
    <fieldset>
      <button onClick={() => deleteNpc(npc.id)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div>
        <div>
          <h3>
            {npc.firstName} {npc.lastName}
          </h3>
          <br />
          The {npc.alignment} 
          < br />
          {npc.race} {npc.npcClass} {npc.title}
        </div>
        <br />
        <fieldset className='traits'>
        Traits: {npc.trait}<br />
        Quirk 1: {npc.quirk1}<br />
        Quirk 2:{npc.quirk2}<br />
        Physical Trait: {npc.notablePhysicalFeature}
        </fieldset>
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
        <div>
          STR: | DEX: | CON: | INT: | WIS: | CHA:
          <div>
            +{npc.str} /  {(10 + npc.str * 2)} ||
            +{npc.dex} /  {(10 + npc.dex * 2)} ||
            +{npc.con} /  {(10 + npc.con * 2)} ||
            +{npc.int} /  {(10 + npc.int * 2)} ||
            +{npc.wis} /  {(10 + npc.wis * 2)} ||
            +{npc.cha} /  {(10 + npc.cha * 2)} ||
          </div>
        </div>
        Melee: {npc.melee} <br />
        Ranged: {npc.ranged}
        <br />
      </div>
      Background:
      <fieldset>{npc.background}</fieldset>
      <br />
      
    </fieldset>
  </div>
);

export default NpcFullCard