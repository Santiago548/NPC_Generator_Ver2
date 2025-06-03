import React from "react";
import STR from "../assets/images/strlogo.png";
import DEX from "../assets/images/dexlogo.png";
import CON from "../assets/images/conlogo.png";
import INT from "../assets/images/intlogo.png";
import WIS from "../assets/images/wislogo.png";
import CHA from "../assets/images/chalogo.png";
import Armor from "../assets/images/shield.png";
import Health from "../assets/images/heart.png";

// Create a mapping of stat names to their respective imported images
const statImages = {
  str: STR,
  dex: DEX,
  con: CON,
  int: INT,
  wis: WIS,
  cha: CHA,
};

const NpcFullCard = ({ npc, deleteNpc }) => (
  <div className="npc-card">
    <button className="delete-button" onClick={() => deleteNpc(npc.id)}>
      <span aria-hidden="true">DELETE</span>
    </button>
    <div className="npc-details">
      <h3 className="npc-name">{npc.firstName} {npc.lastName}</h3>
      <p className="npc-info">The {npc.alignment}<br />{npc.race} {npc.npcClass} {npc.title}</p>

      <fieldset className="traits">
        <legend>Traits:</legend>
        <p>{npc.trait}</p>
        <p>Quirk 1: {npc.quirk1}</p>
        <p>Quirk 2: {npc.quirk2}</p>
        <p>Physical Trait: {npc.notablePhysicalFeature}</p>
      </fieldset>

      <div className="armor-health-container">
        <div className="icon-stat-container">
          <img src={Health} alt="Health" />
          <span className="icon-stat-value">
            <span className="icon-stat-number">{npc.health + npc.con * 6}</span>
            <span className="icon-stat-label">HP</span>
          </span>
        </div>
        <div className="icon-stat-container">
          <img src={Armor} alt="Armor" />
          <span className="icon-stat-value">
            <span className="icon-stat-number">{parseInt(npc.armor.split(" ").slice(1)) + npc.dex}</span>
            <span className="icon-stat-label">AC</span>
          </span>
        </div>
      </div>

      <div className="stat-container">
        {["str", "dex", "con", "int", "wis", "cha"].map(stat => (
          <div key={stat} className={`stat-container-item ${stat}Container`}>
            <img className={`${stat}Image`} src={statImages[stat]} alt={`${stat} stat`} />
            <span className={`${stat}Stat`}>
              +{npc[stat]} | {10 + npc[stat] * 2}
            </span>
          </div>
        ))}
      </div>

      <fieldset className="weapons">
        <legend>WEAPONS:</legend>
        <p>Melee: {npc.melee}</p>
        <p>Ranged: {npc.ranged}</p>
      </fieldset>

      <fieldset className="background">
        <legend>BACKGROUND:</legend>
        <p>{npc.background}</p>
      </fieldset>
    </div>
  </div>
);

export default NpcFullCard;
