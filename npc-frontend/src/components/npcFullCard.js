import React from "react";
import STR from "../assets/images/strlogo.png"
import DEX from "../assets/images/dexlogo.png"
import CON from "../assets/images/conlogo.png"
import INT from "../assets/images/intlogo.png"
import WIS from "../assets/images/wislogo.png"
import CHA from "../assets/images/chalogo.png"
import Armor from "../assets/images/shield.png"

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
        ARMOR:
        <span>
              {npc.armor.split(" ").slice(0, 1)}
              <br />
              Armor Class: <br />
          <div className="armorContainer">
            <img className="armorImage" src={Armor} alt="armorImage" />
            <div className="armorStat">
            {(parseInt(npc.armor.split(" ").slice(1)) + npc.dex)}
            </div>
          </div>
        </span>
        <br />
        <div>
          <div className="statContainer">
            <div className="strContainer">
              <img className="strImage" src={STR} alt="strContainer" />
              <div className="strStat">
                +{npc.str} /  {(10 + npc.str * 2)}
              </div>
            </div>
            <div className="dexContainer">
              <img className="dexImage" src={DEX} alt="dexContainer" />
              <div className="dexStat">
                +{npc.dex} /  {(10 + npc.dex * 2)}
              </div>
            </div>
            <div className="conContainer">
              <img className="conImage" src={CON} alt="conContainer" />
              <div className="conStat">
                +{npc.con} /  {(10 + npc.con * 2)}
              </div>
            </div>
            <div className="intContainer">
              <img className="intImage" src={INT} alt="intContainer" />
              <div className="intStat">
                +{npc.int} /  {(10 + npc.int * 2)}
              </div>
            </div>
            <div className="wisContainer">
              <img className="wisImage" src={WIS} alt="wisContainer" />
              <div className="wisStat">
                +{npc.wis} /  {(10 + npc.wis * 2)}
              </div>
            </div>
            <div className="chaContainer">
              <img className="chaImage" src={CHA} alt="chaContainer" />
              <div className="chaStat">
                +{npc.cha} /  {(10 + npc.cha * 2)}
              </div>
            </div>
          </div>
        </div>
        <fieldset>
          <legend>WEAPONS:</legend>
          Melee: {npc.melee} <br />
          Ranged: {npc.ranged}
        </fieldset>
        <br />
      </div>
      <fieldset>
        <legend>Background:</legend>
        {npc.background}
      </fieldset>
      <br />

    </fieldset>
  </div>
);

export default NpcFullCard