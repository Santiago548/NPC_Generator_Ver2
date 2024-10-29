import React from "react";

export const NpcClasses = () => {
  return (
    <div>
      <h1>Classes</h1>
      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Barbarian</h2>
          <hr />
          <p>A fierce warrior of primitive background who can enter a battle rage</p>
          <p>
            <strong>Hit Die: </strong>d12
            <br />
            <strong>Primary Ability: </strong>Strength
            <br />
            <strong>Saves: </strong>Strength & Constitution
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Bard</h2>
          <hr />
          <p>An inspiring magician whose power echoes the music of creation</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Charisma
            <br />
            <strong>Saves: </strong>Dexterity & Charisma
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Cleric</h2>
          <hr />
          <p>A priestly champion who wields divine magic in service of a higher power</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Wisdom
            <br />
            <strong>Saves: </strong>Wisdom & Charisma
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Druid</h2>
          <hr />
          <p>A priest of the Old Faith, wielding the powers of nature and adopting animal forms</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Wisdom
            <br />
            <strong>Saves: </strong>Intelligence & Wisdom
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Fighter</h2>
          <hr />
          <p>A master of martial combat, skilled with a variety of weapons and armor</p>
          <p>
            <strong>Hit Die: </strong>d10
            <br />
            <strong>Primary Ability: </strong>Strength & Dexterity
            <br />
            <strong>Saves: </strong>Strength
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Monk</h2>
          <hr />
          <p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Dexterity & Wisdom
            <br />
            <strong>Saves: </strong>Strength & Dexterity
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Paladin</h2>
          <hr />
          <p>A holy warrior bound to a sacred oath</p>
          <p>
            <strong>Hit Die: </strong>d10
            <br />
            <strong>Primary Ability: </strong>Strength & Charisma
            <br />
            <strong>Saves: </strong>Wisdom & Charisma
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Ranger</h2>
          <hr />
          <p>A warrior who combats threats on the edges of civilization</p>
          <p>
            <strong>Hit Die: </strong>d10
            <br />
            <strong>Primary Ability: </strong>Dexterity & Wisdom
            <br />
            <strong>Saves: </strong>Strength & Dexterity
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Rogue</h2>
          <hr />
          <p>A scoundrel who uses stealth and trickery to overcome obstacles and enemies</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Dexterity
            <br />
            <strong>Saves: </strong>Dexterity & Intelligence
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Sorcerer</h2>
          <hr />
          <p>A spellcaster who draws on inherent magic from a gift or bloodline</p>
          <p>
            <strong>Hit Die: </strong>d6
            <br />
            <strong>Primary Ability: </strong>Charisma
            <br />
            <strong>Saves: </strong>Constitution & Charisma
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Warlock</h2>
          <hr />
          <p>A wielder of magic that is derived from a bargain with an extraplanar entity</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Charisma
            <br />
            <strong>Saves: </strong>Wisdom & Charisma
          </p>
        </fieldset>

        <fieldset className="classContainer">
          <h2>Wizard</h2>
          <hr />
          <p>A scholarly magic-user capable of manipulating the structures of reality</p>
          <p>
            <strong>Hit Die: </strong>d6
            <br />
            <strong>Primary Ability: </strong>Intelligence
            <br />
            <strong>Saves: </strong>Intelligence & Wisdom
          </p>
        </fieldset>
      </div>

      <div className="classesRow">
        <fieldset className="classContainer">
          <h2>Artificer</h2>
          <hr />
          <p>Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.</p>
          <p>
            <strong>Hit Die: </strong>d8
            <br />
            <strong>Primary Ability: </strong>Intelligence
            <br />
            <strong>Saves: </strong>Constitution & Intelligence
          </p>
        </fieldset>
      </div>
    </div>
  );
};
