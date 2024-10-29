import React, { Component } from 'react'
import { addNpc } from '../actions/npcs'
import { connect } from 'react-redux'
import RaceArray from '../assets/RaceArray'
import NpcClassArray from '../assets/NpcClassArray'
import TraitArray from '../assets/TraitArray'
import LastNameArray from '../assets/LastNameArray'
import RangedWeaponsArray from '../assets/RangedWeaponsArray'
import MeleeWeaponsArray from '../assets/MeleeWeaponsArray'
// // import BackgroundArray from '../assets/BackgroundArray'
import ArmorArray from '../assets/ArmorArray'
import QuirkArray from '../assets/QuirkArray'
import PhysicalTraitArray from '../assets/PhysicalTraitArray'
import RandomButton from '../assets/images/randomButton.png'
import {
  FighterTitleArray,
  WizardTitleArray,
  SorcererTitleArray,
  WarlockTitleArray,
  ClericTitleArray,
  RogueTitleArray,
  DruidTitleArray,
  MonkTitleArray,
  PaladinTitleArray,
  RangerTitleArray,
  BardTitleArray,
  ArtificerTitleArray,
  BarbarianTitleArray
} from '../assets/TitleArray'

class NpcRandom extends Component {



  handleClick = event => {
    event.preventDefault()

    const lastNameArray = LastNameArray.LastNameArray
    const raceArray = RaceArray.RaceArray
    const sexArray = ["Male", "Female", "Non-Binary"]
    const alignmentArray = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
    const healthArray = [10, 15, 20, 25, 30]
    const armorArray = ArmorArray.ArmorArray
    const meleeArray = MeleeWeaponsArray.MeleeWeaponsArray
    const rangeArray = RangedWeaponsArray.RangedWeaponsArray
    const npcClassArray = NpcClassArray.NpcClassArray
    const traitArray = TraitArray.TraitArray
    const quirk1Array = QuirkArray.QuirkArray
    const quirk2Array = QuirkArray.QuirkArray
    const physicalTraitArray = PhysicalTraitArray.PhysicalTraitArray


    const randomLastname = lastNameArray[Math.floor(Math.random() * lastNameArray.length)]
    const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
    const randomSex = sexArray[Math.floor(Math.random() * sexArray.length)]
    const randomAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)]
    const randomHealth = healthArray[Math.floor(Math.random() * healthArray.length)]
    const randomArmor = armorArray[Math.floor(Math.random() * armorArray.length)]
    const randomMelee = meleeArray[Math.floor(Math.random() * meleeArray.length)]
    const randomRanged = rangeArray[Math.floor(Math.random() * rangeArray.length)]
    const randomNpcClass = npcClassArray[Math.floor(Math.random() * npcClassArray.length)]
    const randomTrait = traitArray[Math.floor(Math.random() * traitArray.length)]
    const randomQuirk1 = quirk1Array[Math.floor(Math.random() * quirk1Array.length)]
    const randomQuirk2 = quirk2Array[Math.floor(Math.random() * quirk2Array.length)]
    const randomPhysicalTrait = physicalTraitArray[Math.floor(Math.random() * physicalTraitArray.length)]
    // const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
    const randomFirstNameFunction = () => {

      const maleNameArray = ["Lydan", "Syrin", "Ptorik", "Joz", "Varog", "Gethrod", "Hezra", "Feron", "Ophni", "Colborn", "Fintis", "Gatlin", "Jinto", "Hagalbar", "Krinn", "Lenox", "Revvyn", "Hodus", "Dimian", "Paskel", "Kontas", "Weston", "Azamarr", "Jather", "Tekren", "Jareth", "Adon", "Zaden", "Eune", "Graff", "Tez", "Jessop", "Gunnar", "Pike", "Domnhar", "Baske", "Jerrick", "Mavrek", "Riordan", "Wulfe", "Straus", "Tyvrik", "Henndar", "Favroe", "Whit", "Jaris", "Renham", "Kagran", "Lassrin", "Vadim", "Arlo", "Quintis", "Vale", "Caelan", "Yorjan", "Khron", "Ishmael", "Jakrin", "Fangar", "Roux", "Baxar", "Hawke", "Gatlen", "Barak", "Nazim", "Kadric", "Paquin", "Kent", "Moki", "Rankar", "Lothe", "Ryven", "Clawsen", "Pakker", "Embre", "Cassian", "Verssek", "Dagfinn", "Ebraheim", "Nesso", "Eldermar", "Rivik", "Rourke", "Barton", "Hemm", "Sarkin", "Blaiz", "Talon", "Agro", "Zagaroth", "Turrek", "Esdel", "Lustros", "Zenner", "Baashar", "Dagrod", "Gentar", "Feston"]
      const femaleNameArray = ["Syrana", "Resha", "Varin", "Wren", "Yuni", "Talis", "Kessa", "Magaltie", "Aeris", "Desmina", "Krynna", "Asralyn", "Herra", "Pret", "Kory", "Afia", "Tessel", "Rhiannon", "Zara", "Jesi", "Belen", "Rei", "Ciscra", "Temy", "Renalee", "Estyn", "Maarika", "Lynorr", "Tiv", "Annihya", "Semet", "Tamrin", "Antia", "Reslyn", "Basak", "Vixra", "Pekka", "Xavia", "Beatha", "Yarri", "Liris", "Sonali", "Razra", "Soko", "Maeve", "Everen", "Yelina", "Morwena", "Hagar", "Palra", "Elysa", "Stitle", "Ketra", "Lynx", "Agama", "Thesra", "Tezani", "Ralia", "Esmee", "Heron", "Naima", "Rydna", "Sparrow", "Baakshi", "Ibera", "Phlox", "Dessa", "Braithe", "Taewen", "Larke", "Silene", "Phressa", "Esther", "Anika", "Rasy", "Harper", "Indie", "Vita", "Drusila", "Minha", "Surane", "Lassona", "Merula", "Kye", "Jonna", "Lyla", "Zet", "Orett", "Naphtalia", "Turi", "Rhays", "Shike", "Hartie", "Beela", "Leska", "Vemery", "Lunex", "Fidess", "Tisette", "Partha"]
      const nonBinaryNameArray = ["Syrana", "Resha", "Varin", "Wren", "Yuni", "Talis", "Kessa", "Magaltie", "Aeris", "Desmina", "Krynna", "Asralyn", "Herra", "Pret", "Kory", "Afia", "Tessel", "Rhiannon", "Zara", "Jesi", "Belen", "Rei", "Ciscra", "Temy", "Renalee", "Estyn", "Maarika", "Lynorr", "Tiv", "Annihya", "Semet", "Tamrin", "Antia", "Reslyn", "Basak", "Vixra", "Pekka", "Xavia", "Beatha", "Yarri", "Liris", "Sonali", "Razra", "Soko", "Maeve", "Everen", "Yelina", "Morwena", "Hagar", "Palra", "Elysa", "Stitle", "Ketra", "Lynx", "Agama", "Thesra", "Tezani", "Ralia", "Esmee", "Heron", "Naima", "Rydna", "Sparrow", "Baakshi", "Ibera", "Phlox", "Dessa", "Braithe", "Taewen", "Larke", "Silene", "Phressa", "Esther", "Anika", "Rasy", "Harper", "Indie", "Vita", "Drusila", "Minha", "Surane", "Lassona", "Merula", "Kye", "Jonna", "Lyla", "Zet", "Orett", "Naphtalia", "Turi", "Rhays", "Shike", "Hartie", "Beela", "Leska", "Vemery", "Lunex", "Fidess", "Tisette", "Partha", "Lydan", "Syrin", "Ptorik", "Joz", "Varog", "Gethrod", "Hezra", "Feron", "Ophni", "Colborn", "Fintis", "Gatlin", "Jinto", "Hagalbar", "Krinn", "Lenox", "Revvyn", "Hodus", "Dimian", "Paskel", "Kontas", "Weston", "Azamarr", "Jather", "Tekren", "Jareth", "Adon", "Zaden", "Eune", "Graff", "Tez", "Jessop", "Gunnar", "Pike", "Domnhar", "Baske", "Jerrick", "Mavrek", "Riordan", "Wulfe", "Straus", "Tyvrik", "Henndar", "Favroe", "Whit", "Jaris", "Renham", "Kagran", "Lassrin", "Vadim", "Arlo", "Quintis", "Vale", "Caelan", "Yorjan", "Khron", "Ishmael", "Jakrin", "Fangar", "Roux", "Baxar", "Hawke", "Gatlen", "Barak", "Nazim", "Kadric", "Paquin", "Kent", "Moki", "Rankar", "Lothe", "Ryven", "Clawsen", "Pakker", "Embre", "Cassian", "Verssek", "Dagfinn", "Ebraheim", "Nesso", "Eldermar", "Rivik", "Rourke", "Barton", "Hemm", "Sarkin", "Blaiz", "Talon", "Agro", "Zagaroth", "Turrek", "Esdel", "Lustros", "Zenner", "Baashar", "Dagrod", "Gentar", "Feston"]

      if (randomSex === "Male") {
        return maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
      } else if (randomSex === "Female") {
        return femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
      } else {
        return nonBinaryNameArray[Math.floor(Math.random() * nonBinaryNameArray.length)]
      }
    }

    const randomTitleFunction = () => {

      const fighterTitleArray = FighterTitleArray
      const wizardTitleArray = WizardTitleArray
      const sorcererTitleArray = SorcererTitleArray
      const warlockTitleArray = WarlockTitleArray
      const clericTitleArray = ClericTitleArray
      const rogueTitleArray = RogueTitleArray
      const druidTitleArray = DruidTitleArray
      const monkTitleArray = MonkTitleArray
      const paladinTitleArray = PaladinTitleArray
      const rangerTitleArray = RangerTitleArray
      const bardTitleArray = BardTitleArray
      const artificerTitleArray = ArtificerTitleArray
      const barbarianTitleArray = BarbarianTitleArray

      if (randomNpcClass === "Fighter") {
        return fighterTitleArray[Math.floor(Math.random() * fighterTitleArray.length)]
      } else if (randomNpcClass === "Wizard") {
        return wizardTitleArray[Math.floor(Math.random() * wizardTitleArray.length)]
      } else if (randomNpcClass === "Sorcerer") {
        return sorcererTitleArray[Math.floor(Math.random() * sorcererTitleArray.length)]
      } else if (randomNpcClass === "Warlock") {
        return warlockTitleArray[Math.floor(Math.random() * warlockTitleArray.length)]
      } else if (randomNpcClass === "Cleric") {
        return clericTitleArray[Math.floor(Math.random() * clericTitleArray.length)]
      } else if (randomNpcClass === "Rogue") {
        return rogueTitleArray[Math.floor(Math.random() * rogueTitleArray.length)]
      } else if (randomNpcClass === "Druid") {
        return druidTitleArray[Math.floor(Math.random() * druidTitleArray.length)]
      } else if (randomNpcClass === "Monk") {
        return monkTitleArray[Math.floor(Math.random() * monkTitleArray.length)]
      } else if (randomNpcClass === "Paladin") {
        return paladinTitleArray[Math.floor(Math.random() * paladinTitleArray.length)]
      } else if (randomNpcClass === "Ranger") {
        return rangerTitleArray[Math.floor(Math.random() * rangerTitleArray.length)]
      } else if (randomNpcClass === "Bard") {
        return bardTitleArray[Math.floor(Math.random() * bardTitleArray.length)]
      } else if (randomNpcClass === "Artificer") {
        return artificerTitleArray[Math.floor(Math.random() * artificerTitleArray.length)]
      } else {
        return barbarianTitleArray[Math.floor(Math.random() * barbarianTitleArray.length)]
      }
    }

    const randomStrFunction = () => {

      const strArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Dragonborn") {
        return strArray[Math.floor(Math.random() * strArray.length) + 2]
      } else if (randomRace === "Elf") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Gnome") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Half-Elf") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Halfling") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Human") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Tiefling") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Goliath") {
        return strArray[Math.floor(Math.random() * strArray.length) + 2]
      } else if (randomRace === "Firbolg") {
        return strArray[Math.floor(Math.random() * strArray.length) + 1]
      } else if (randomRace === "Goblin") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Orc") {
        return strArray[Math.floor(Math.random() * strArray.length) + 2]
      } else if (randomRace === "Tabaxi") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "Warfoged") {
        return strArray[Math.floor(Math.random() * strArray.length)]
      } else if (randomRace === "half-Orc") {
        return strArray[Math.floor(Math.random() * strArray.length) + 2]
      }
    }


    const randomDexFunction = () => {

      const dexArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Dragonborn") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Elf") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Gnome") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Half-Elf") {
        return dexArray[Math.floor(Math.random() * dexArray.length) + 2]
      } else if (randomRace === "Halfling") {
        return dexArray[Math.floor(Math.random() * dexArray.length) + 2]
      } else if (randomRace === "Human") {
        return dexArray[Math.floor(Math.random() * dexArray.length) + 1]
      } else if (randomRace === "Tiefling") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Goliath") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Firbolg") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Goblin") {
        return dexArray[Math.floor(Math.random() * dexArray.length) + 2]
      } else if (randomRace === "Orc") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "Tabaxi") {
        return dexArray[Math.floor(Math.random() * dexArray.length) + 2]
      } else if (randomRace === "Warfoged") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      } else if (randomRace === "half-Orc") {
        return dexArray[Math.floor(Math.random() * dexArray.length)]
      }
    }

    const randomConFunction = () => {

      const conArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return conArray[Math.floor(Math.random() * conArray.length) + 2]
      } else if (randomRace === "Dragonborn") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Elf") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Gnome") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Half-Elf") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Halfling") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Human") {
        return conArray[Math.floor(Math.random() * conArray.length) + 1]
      } else if (randomRace === "Tiefling") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Goliath") {
        return conArray[Math.floor(Math.random() * conArray.length) + 1]
      } else if (randomRace === "Firbolg") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Goblin") {
        return conArray[Math.floor(Math.random() * conArray.length) + 1]
      } else if (randomRace === "Orc") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Tabaxi") {
        return conArray[Math.floor(Math.random() * conArray.length)]
      } else if (randomRace === "Warfoged") {
        return conArray[Math.floor(Math.random() * conArray.length) + 2]
      } else if (randomRace === "half-Orc") {
        return conArray[Math.floor(Math.random() * conArray.length) + 1]
      }
    }

    const randomWisFunction = () => {

      const wisArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Dragonborn") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Elf") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Gnome") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Half-Elf") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Halfling") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Human") {
        return wisArray[Math.floor(Math.random() * wisArray.length) + 1]
      } else if (randomRace === "Tiefling") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Goliath") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Firbolg") {
        return wisArray[Math.floor(Math.random() * wisArray.length) + 2]
      } else if (randomRace === "Goblin") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Orc") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Tabaxi") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "Warfoged") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      } else if (randomRace === "half-Orc") {
        return wisArray[Math.floor(Math.random() * wisArray.length)]
      }
    }
    const randomIntFunction = () => {

      const intArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Dragonborn") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Elf") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Gnome") {
        return intArray[Math.floor(Math.random() * intArray.length) + 2]
      } else if (randomRace === "Half-Elf") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Halfling") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Human") {
        return intArray[Math.floor(Math.random() * intArray.length) + 1]
      } else if (randomRace === "Tiefling") {
        return intArray[Math.floor(Math.random() * intArray.length) + 1]
      } else if (randomRace === "Goliath") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Firbolg") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Goblin") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Orc") {
        return intArray[Math.floor(Math.random() * intArray.length) - 2]
      } else if (randomRace === "Tabaxi") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "Warfoged") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      } else if (randomRace === "half-Orc") {
        return intArray[Math.floor(Math.random() * intArray.length)]
      }
    }
    const randomChaFunction = () => {

      const chaArray = [1, 2, 3]

      if (randomRace === "Dwarf") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Dragonborn") {
        return chaArray[Math.floor(Math.random() * chaArray.length) + 1]
      } else if (randomRace === "Elf") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Gnome") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Half-Elf") {
        return chaArray[Math.floor(Math.random() * chaArray.length) + 1]
      } else if (randomRace === "Halfling") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Human") {
        return chaArray[Math.floor(Math.random() * chaArray.length) + 1]
      } else if (randomRace === "Tiefling") {
        return chaArray[Math.floor(Math.random() * chaArray.length) + 2]
      } else if (randomRace === "Goliath") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Firbolg") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Goblin") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Orc") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "Tabaxi") {
        return chaArray[Math.floor(Math.random() * chaArray.length) + 1]
      } else if (randomRace === "Warfoged") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      } else if (randomRace === "half-Orc") {
        return chaArray[Math.floor(Math.random() * chaArray.length)]
      }
    }



    const firstName = randomFirstNameFunction()
    const lastName = randomLastname
    const title = randomTitleFunction()
    const race = randomRace
    const sex = randomSex
    const alignment = randomAlignment
    const health = randomHealth
    const armor = randomArmor
    const melee = randomMelee
    const ranged = randomRanged
    const str = randomStrFunction()
    const dex = randomDexFunction()
    const con = randomConFunction()
    const int = randomIntFunction()
    const wis = randomWisFunction()
    const cha = randomChaFunction()
    const npcClass = randomNpcClass
    const trait = randomTrait
    const backgroundArray = [
      `${firstName} was a demon hunter on the desert planet Derach. ${firstName} fought alongside their small battalion, a group revered for their efficiency and tendency to keep to themselves. One day, a strange rift opened and pulled the group apart, banishing each soldier to different corners of the universe. Once reaching a strange green planet, ${firstName}'s only goal was to find a way to portal back to the demon’s world and reunite with their companions. Unfortunately, ${firstName} was captured by the planet's inhabitants and forced into slavery.`,
      `${firstName} served as a squire to the ranger son of a local lord, a minor political figure. Two years ago, he moved to the city to study magic and indulge in debauchery, releasing ${firstName} from their service (and their salary). ${firstName} heard that Bordertown has uses for someone with skills in arms, so ${firstName} hopped onto the first coach available.`,
      `${firstName} has always wanted to be an adventurer. ${firstName} sat on their pappy's lap as he told and retold the tales of their uncle Algar Spiderspear, their great uncle Kenway Fireheart, and their great-great aunt Thea Earthforger. ${firstName} didn't understand that those tales were meant to be cautionary, and that there’s a reason ${firstName} doesn’t have any cousins.`,
      `${firstName} never really liked the family dye business. As the firstborn, ${firstName} was always expected to take over. After lamenting one night drunkenly at the tavern, ${firstName} met a gnome who promised to help. Upon returning home, their family did not recognize ${firstName}, and their younger sibling was set to inherit. ${firstName} drove ${firstName} off their land into homelessness. ${firstName} never saw the gnome again.`,
      `${firstName} was a normal farmer; there was nothing special about ${firstName}. Over the years, their farm started losing money, and ${firstName} had to let more and more of their staff go until it was just ${firstName} left. One day, while ${firstName} was at the local inn drinking their problems away, an adventurer walked through and bought the entire inn several rounds of drinks from his large sack of gold coins. Since that day, ${firstName} sold their farm, used the money to buy some basic adventuring supplies, and headed out to build their fortune.`,
      `${firstName} was a squire for the local knight and lord of their province. One day, while cleaning his library, ${firstName} came across a gold handle hidden behind some dusty books. As ${firstName} turned the handle, it felt as if their brain was opening like a door. When ${firstName} turned the handle back, a dusty grimoire fell into their hands, and ${firstName} heard a voice inside their head. ${firstName} decided to name the voice Greg.`,
      `${firstName} grew up as a milkmaid. Over the course of their childhood, ${firstName} realized that ${firstName} had a special connection with all animals and nature. One day, on their way back from town, bandits jumped out from the side of the road and attacked ${firstName}. Startled, ${firstName} thrust their hands out toward them, and magic shot out from their fingertips. The next day, ${firstName} packed their things and headed out to learn more about what ${firstName} had just done and how to control it.`,
      `${firstName}'s father was a miner, and their mother was an innkeeper. ${firstName} spent their childhood poking the ashes in the fireplace, waiting for something to happen. One day, a halfling fell down their chimney and asked ${firstName} to hide him in their room. The only name he gave ${firstName} was Miro, but he taught ${firstName} many things over a few nights. Once he felt 'it' had blown over, he packed his things and invited ${firstName} to join him. He trained ${firstName} to be a master thief and became almost a second father to ${firstName} over the course of two years. Until one day, he set ${firstName} up and ran away with the treasure, leaving ${firstName} to rot in the king's jail.`,
      `${firstName} always had anger problems; then again, most sailors do. ${firstName}'s were a bit different, though. One day, ${firstName} was fishing off the side of their ship when ${firstName} caught something very heavy on their line. When ${firstName} finally reeled it in, they found a gold ring, but the gold was almost blood-red, and in ${firstName}'s hand, it felt like it had almost no weight. ${firstName}'s crew members wanted to see the ring, but ${firstName} only saw it as normal gold; ${firstName} saw it as something much more incredible. When they tried to take it from ${firstName}, ${firstName} flew into a rage, beating them senseless until ${firstName} jumped into a rowboat and made their way back to shore. ${firstName} knows that they will probably come after them, but none of that matters. ${firstName} knows that they must go to the mountains. ${firstName} just doesn't know where or what a mountain is.`,
      `${firstName} grew up on a small farm. Their family was poor, but ${firstName} managed. ${firstName} idolized their older brother as a child, even though he wasn’t always nice to ${firstName} in return. Then one day, their brother was conscripted into the army, and ${firstName} hasn’t heard from him since—none of the money he promised to send home, not even a letter. ${firstName} has finally come of age and set out to find him, or at least discover what happened to him.`,
      `When ${firstName} was a teenager, ${firstName} stopped by a fortune teller’s stall at a festival, just out of idle curiosity. The fortune teller performed her rites and examined ${firstName}, then promptly burst out laughing. She refunded their money and refused to tell ${firstName} what she had seen. All she told ${firstName} was, “Good luck!”`,
      `${firstName} was a middle-aged craftsman/craftswoman with a successful business, several children, and a happy life. One day, ${firstName} came home to discover that their spouse was cheating on them. Newly divorced, ${firstName} had a bit of a mid-life crisis and spent all of their savings on a [book of magic/set of shiny armor/fencing lessons/musical instrument/etc.]. Gosh darn it, ${firstName} wanted to have an adventure!`,
      `${firstName}'s parents are scholars—historians, specifically—and ${firstName} was raised on countless trips to archaeological digs, libraries, and lectures with them. ${firstName} may or may not have taken to the studies as much as ${firstName} would have liked, but when the restless need to spread their wings and get away from home took hold, ${firstName} was excited to request that ${firstName} document all the things ${firstName} discovered on their adventures and bring them home to share.`,
      `${firstName} was the oldest child of a prosperous peasant. ${firstName} had a life of beer, bread, and barn dances to look forward to. Then, ${firstName} went into the big town on a religious pilgrimage and was knocked out and press-ganged into the army. Turns out, ${firstName} loved it and never looked back. Their dad had other kids. Too bad the Goblin Wars are over now and their lord disbanded his army.`,
      `${firstName} was a slave on a big estate. One day, a charismatic leader got the slaves to rise in rebellion. ${firstName} is pretty sure there are others who didn't end up crucified, but ${firstName} has never met any of them. Here in the city, nobody has any idea that the rebellion even happened.`,
      `${firstName} was a village priest, presiding over births, deaths, and rites of passage. Holy cow, was it boring! ${firstName} renounced their vows and moved on. ${firstName} has never suffered for this: the gods have never wrought revenge upon ${firstName}. ${firstName} gets the feeling they don't care, or they're not there. Some of the things ${firstName} learned (healing, counseling) have proved pretty useful.`,
      `${firstName} was a wealthy playboy, the son of a rich merchant. He got murdered; ${firstName} lost what was left gambling. Turns out, ${firstName} is pretty good in a fight. ${firstName} still has expensive tastes.`,
      `${firstName} was trained as a courtesan. ${firstName} got blamed for breaking up a marriage among nobles. Some of them still like ${firstName}; others want ${firstName} dead. Sometimes, it's hard to tell.`,
      `${firstName} was conscripted to join the army, but it was a sham. ${firstName} and a couple of others were lured into an ambush by bandits. Though outnumbered, their group managed to fend them off. Unfortunately, only ${firstName} survived the ordeal and managed to escape before the bandits got any more reinforcements, though not without taking a valuable item that the bandits held dear—a ring that grants the wearer protective powers. Now, ${firstName} is on the run from the bandits while trying to figure out how to use the ring and put it to good use against them.`,
      `${firstName} grew up as a normal city kid and never really did anything interesting with their life. ${firstName} had a decent job and was about to get married soon, until the day ${firstName} got lost in the wilderness. That was years ago, and ${firstName} has never been able to find their way back to their hometown because nobody seems to know about it.`,
`${firstName} grew up with nothing, cheating and stealing wherever ${firstName} could. All ${firstName} has ever earned was a target on their back and a bad reputation. Eventually, ${firstName} found themself on the run from the wrong kind of people. In a tavern, ${firstName} met a wizard who promised a way out. With nowhere else to turn, ${firstName} reluctantly agreed. The wizard took ${firstName} to his study and performed a ritual to switch their face with the face of another person of similar build. Now ${firstName} goes off into the world with a new identity and a chance to start over. Or so ${firstName} thought... (The face ${firstName} wears has its own history too).`,
`${firstName} is the child of a single woman taken in by a traveling caravan of performers while pregnant. She never described their father to ${firstName}, and she changes the subject when ${firstName} asks. Those in the caravan are their substitute family. ${firstName} has several 'grandparents,' 'aunts,' 'uncles,' and 'cousins.' ${firstName} took part in the caravan's entertainment for coin, whether as a performer or someone behind the scenes. When ${firstName} felt the need, ${firstName} left the caravan of their own free will to pursue their journey. ${firstName} was given a special crest with the performers' symbol so ${firstName} would be welcomed back if ${firstName} returned.`,
`${firstName} is an experiment, either made or modified for a reason ${firstName} can’t even remember, with so many genetic changes and magical 'enhancements' that ${firstName} can’t even count the number of places where ${firstName} is from. A lab rat from a man who seemed to want to do good, and claims to have tried to do so but never specified what he was doing, never revealed what his end goal was, and just kept going and going. The doctor was put to death for his experiments. Whatever purpose ${firstName} was made for is now lost to ${firstName}, as is just about everything ${firstName} used to know. ${firstName} doesn't know who ${firstName} was, assuming ${firstName} was anything other than this.`,
`${firstName} fell into life-threatening trouble one day while exploring some ruins close to town. There, ${firstName} found a strange altar with an old woman sitting behind it. She said she could help ${firstName} escape if ${firstName} promised to serve her. ${firstName} is pretty sure she's a god, but she won't tell ${firstName} her name or what she's the god of. She shows up sometimes and points, and whatever she points at, ${firstName} must somehow acquire and leave behind in certain ruins. Her tastes are getting kind of extravagant.`,
`${firstName} was once the son of a wealthy merchant who traveled more than average compared to other merchants at the time. Their father would often take ${firstName} and their younger sister on some of his shorter journeys, exposing ${firstName} to the dangers of sailing across the seas. One time, their father's ship was attacked by pirates, killing everyone on board. Because of the tragic death of their father, ${firstName} desires revenge and will do anything to kill them.`,
`They're an anti-social person who lives a quiet life in a rural part of the kingdom. In their quiet life, ${firstName} discovered an interest in ancient artifacts left over from the last civilization. Most of their downtime is spent studying these artifacts by reading ancient texts and practicing their magic.`,
`${firstName} sold vegetables from a street cart that they were still making payments on. A wild street chase broke out, and one of the escapees upended their cart to delay some guards, shattering it badly. Reeling from the financial loss of their vegetables and blocked from setting up another shop by overzealous debt-collector harassment, ${firstName} left town with everything they had, hoping to put their life back together.`,
`${firstName} was once a wicked individual who took pleasure in the misery of others. ${firstName} was then struck by powerful cursed magic that turned their entire outlook on life around, so that now ${firstName} is a force for good who brings happiness to others. Their dark past still haunts ${firstName}, and sometimes their old friends try to call ${firstName} back.`,
`${firstName} was a simple bed-and-breakfast inn owner. One of their guests left for a night of carousing and never returned. Among their left-behind possessions was an ornate locked box with no key. Hoping to find the owner or their organization, ${firstName} took the box to a local bush-wizard to get it identified. While ${firstName} was away, their inn was ransacked and burned to the ground. Word got around that ${firstName} had the box, and ${firstName} was being hunted, so ${firstName} fled in terror.`,
`When ${firstName} was young, ${firstName} found a diary that would message back to ${firstName} if ${firstName} wrote in it. It taught ${firstName} many mysterious skills and spells. One day, the diary told ${firstName} that it couldn't write to ${firstName} anymore, and it went silent. ${firstName} set off when ${firstName} got older to explore some of the places the diary mentioned and uncover the identity of their mysterious pen pal.`,
`When ${firstName} was young, ${firstName} was polymorphed into a flying horse by a malfunctioning spell. Some explorers promised to help ${firstName}, and ${firstName} took on many harrowing adventures. The help never came, as the explorers preferred a flying horse. Decades passed, ${firstName} was lost and sold many times. Eventually, a kindly witch made ${firstName} whole again, picking up human life at the age ${firstName} was changed. (Can be substituted for a flying carpet if ${firstName} isn't a horse person.)`,
`A lonely child found a ring of wishing. ${firstName} wished for their imaginary friend, ${firstName}, to become real. The child soon became sick and died, and their parents blamed ${firstName} and ran ${firstName} out of town. Using the powers that the child imagined ${firstName} to have, ${firstName} has begun to search for a purpose.`,
`${firstName} was born mute to a wealthy family with an estate. Ashamed and not knowing what else to do with ${firstName}, their family used ${firstName} as a servant, assigning ${firstName} to all the most awful and menial tasks. Not knowing any better, ${firstName} became strong with a smile. One evening, ${firstName} showed kindness to an old woman who turned out to be a fairy queen in disguise. She blessed ${firstName} with intelligence. Disgusted with the way ${firstName} was treated, ${firstName} left home, hoping to learn to read, study, and start life anew.`,
`After their town was razed and everyone ${firstName} knew died, ${firstName} woke up in the middle of the ashes. Something, for some reason, kept ${firstName} alive, and a life of adventure might give ${firstName} the opportunity to find out what and why.`,
`The bandits thought ${firstName} left nothing of value in their village, and maybe ${firstName} was right, because that night ${firstName} lost their arm and their way of life.`,
`${firstName} grew up as the region's stereotype, a poor farmer with a passion for whittling. After inheriting the farm, prospectors found gold in the river, and ${firstName} sold the farm for more money than ${firstName} thought was in circulation. Unsure of how to spend money and unwilling to save it, ${firstName} purchased an abandoned adventurer's guild with plans to turn it into a wooden toy shop, only to find it wasn't quite as abandoned as ${firstName} thought.`,
`${firstName} is a farmer who found a talking rock that only ${firstName} could hear in the middle of their own farm. Everyone thinks ${firstName} lost their mind, which eventually leads to an unwanted embargo, and ${firstName} goes bankrupt.`,
`${firstName} led a relatively normal life as a tailor in a small town until their infant daughter started showing signs of sorcerous abilities and was stolen in the night.`,
`${firstName} was the student of the greatest bard in the land until ${firstName} murdered him.`,
`${firstName} was trapped in a cloud giant's castle for years, living off giant crumbs. Only recently was ${firstName} able to escape.`,
`${firstName} was an orphan taken in by the local butcher. ${firstName} was a loner but loved their adoptive father. One day, the village was attacked by bandits, who killed their adoptive father. ${firstName} got their revenge on the bandits, but the brutality of their vengeance alienated ${firstName} even more from the rest of the village.`,
`${firstName} grew up watching the pit fighters in the capital city, marveling at their strength. eventually their parent fell into harsh debt under one of the crime lords forcing ${firstName} to fight in the pits for the crimelord turning there passion into their prison. trying to raise enough money to escape.`,
`${firstName} was orphaned at the church of (insert God of Strength, War, Valor here), where ${firstName} was raised from a ${firstName}ng age to become a fierce warrior for their God.`,
      `When ${firstName} was ${firstName}ng, ${firstName} had a fascination with fire. It was pretty, destructive, and alluring. One night, as their family slept, ${firstName} was playing with it and accidentally set the family home ablaze. Their mother awoke to the inferno and, using every ounce of power she had, saved ${firstName} from the blaze before succumbing and burning right in front of their eyes. It was the most beautiful thing ${firstName} ever saw, and if only the world understood, then maybe ${firstName} wouldn't be so afraid of fire.`,
      `Mistress tells ${firstName} that ${firstName} used to be a great Paladin, a sworn warrior of good, bringing justice and light to a terrible land. Then ${firstName} came to her, and while Mistress may be the strongest enchantress there is, maybe stronger, now ${firstName} is Mistress's defender, a (insert Warforged, Golem here).`,
      `${firstName} is ... was a member of the city watch. Now, ${firstName} supposes that ${firstName}'ve likely lost that position. Just like their father, ${firstName} signed up and joined their ranks at quite a ${firstName}ng age. ${firstName} was far too low of a rank to call their job fulfilling or exciting, but ${firstName} didn't really mind it all that much. After work, ${firstName}'d spend about half a day's pay drowning their boredom in booze. ${firstName}'ve always had a love for a good brew, but ${firstName} never thought it much of a problem—until recently. It seems one night, ${firstName} decided to go on a week-long binge. What few memories ${firstName} have are too fuzzy and disorienting to make any sense of. How ${firstName}'re alive, ${firstName} don't know. During their blackout, ${firstName} seemed to have somehow made it to a place ${firstName} doesn't even recognize. ${firstName} is wearing equipment ${firstName} don't remember acquiring. ${firstName} accidentally set off a cantrip, despite the fact that ${firstName}'ve never even seen magic at work, let alone use it. Some guy just told ${firstName} that ${firstName} asked him to get ${firstName} up so ${firstName} could go meet with someone about a new job. ${firstName} decides that ${firstName} needs to figure out what happened and that maybe ${firstName} really does have a drinking problem.`,
      `${firstName} grew up alone in a rather large and well-kept house, with no parents that ${firstName} can remember or relatives ${firstName} visited, but food would always appear out of nowhere in the pantry, as did gold on the sofa and water in the well. One day, ${firstName} woke up on the ground, the house having completely disappeared from existence. In its place, a note remained, reading 'Stay Strong!' Of course, ${firstName} began adventuring from there.`,
      `${firstName} narrowly escaped their home city after a nasty plague was set upon it. The man who helped ${firstName} escape was a high nobleman, and ${firstName} later heard that he was culled along with much of the city. That city was their home; ${firstName} loved it, and now it is all but gone.`,
      `${firstName} was a member of minor nobility that got wiped out by a conspiracy, so ${firstName} fled to a monastery. But then ${firstName} got kicked out for tricking one of the priest(ess)es into breaking their vows of chastity.`,
      `${firstName} was part of a desert caravan that ran out of water. But a vision appeared, leading to an unknown oasis ... and commanding ${firstName} to go to the city of (Plot starts here).`,
      `${firstName} was raised by a lovely mother and a father who turned out to be a true polymorphic gorilla. As a result, some of their beliefs and habits are a bit ape-ish.`,
      `${firstName} was born into a tribe of nomadic people. In their ${firstName}ng age, ${firstName} and their parents were captured in a raid and sold as slaves. Their family got lucky because ${firstName} was sold to a noble. His castle was in a cold region with harsh winters. He was a brutal leader but fair to everybody who did as he told. ${firstName} learned the etiquette of the royal court and got along very well. As ${firstName} became an adult, he gave ${firstName} to another lord to become a soldier. Their kingdom was at war. On the way to their new owner, their caravan was raided by their enemy. ${firstName} somehow escaped. A few days later, ${firstName} found out that their former lord had been attacked and everyone, including their parents, was murdered. ${firstName} left the kingdom and never returned until today.`,
      `Born an orphan, ${firstName} was adopted by a wealthy family at a ${firstName}ng age to be raised as help. (How the family treated ${firstName} growing up is up to the player.) Shortly after their 18th birthday, the entire estate was burned to the ground, and ${firstName} is the only known survivor. ${firstName} are suspected and wanted by the local kingdom for questioning and crimes against the family. Can ${firstName} clear their name before the kingdom picks ${firstName} up? Are ${firstName} to blame for the fire, or are ${firstName} innocent and wrongly accused? Will ${firstName} be able to find the villain in time?`,
      `A retired member of the army, ${firstName} has been jaded by war and has seen far more than any one person ought to see in a hundred lifetimes. After settling down and running an inn for some years, ${firstName}'ve gotten the itch for adventure and are now ready to strike out on their own and see the good in the world.`,
      `Given up as a sacrifice at a ${firstName}ng age by a small village to ensure their harvest, ${firstName} was picked up by a band of traveling performers. Growing up with them, ${firstName} traveled the countryside. Upon reaching adulthood, their adopted parents told ${firstName} the truth of where ${firstName} came from. Do ${firstName} venture off for revenge? Do ${firstName} forgive and forget?`,
      `Sold into slavery at a young age, ${firstName} was set free by traveling adventurers early in their teen years. Since then, ${firstName} has always dreamed of becoming one themselves. Not wanting to waste away their life tending to home and hearth, ${firstName} set out for the call of the wild.`,
      `Daughter of a diplomat, ${firstName} traveled the world's capitals with their father. ${firstName} grew bored of the stuffy and bureaucratic business and roamed the foreign streets and markets. It is here ${firstName} fell in with a dashing rogue who stole their heart and taught ${firstName} the secrets of his world over one glorious summer. ${firstName} resolved to embark on a career of their own choosing, not their father's.`,
      `A radiant portal spits ${firstName} out. The last words ${firstName} remembers were 'Penance.' Aasimar know who Reynar is, but won't disclose it even under torture.`,
      `Raised by pirates, ${firstName} raided the wrong temple and was the sole survivor.`,
      `Raised by ogres, they always threatened to eat ${firstName} growing up. ${firstName} paid them tribute and rose above the goblin ranks. Eventually, ${firstName} made their bid for freedom by poisoning all their dinners. ${firstName} is a legend among the goblins and ogres.`,
      `${firstName} had a normal childhood in the city—schooling, family, friends, and playing on the large stone walls—but all that was taken away in an instant when 200 hollow-core Warforged self-destructed, leveling the city ${firstName} once called home. Their master and her apprentice long dead, ${firstName} hunts down the last of their demented toys to honor their loss and make the burn marks on their back hurt a little less.`,
      `Taken in by a pack of traveling werewolves, ${firstName} was given a silver necklace and acted as their cover. ${firstName} outed them in a city, and ${firstName} was finally liberated. Their daughter still hunts ${firstName}... waiting to find ${firstName} alone.`,
      `As an orphan, ${firstName} was taken in by a sweet, old, good-natured necromancer. ${firstName} fetched goods from the nearby city, helped dig up parts, and played with his creations. ${firstName} left on good terms, and ${firstName} has no fear of the undead.`,
      `${firstName}'s heart opens a portal to the Nine Hells... according to the prophecy.`,
      `Their family is known among all Dragonborn and loved for their ancestors' deeds, which were promised in blood oath to never be disclosed to ${firstName}.`,
      `${firstName} grew up seeing visions of battle in their dreams—horrible battles filled with monstrous demons and terrifyingly large devils slaughtering mortals by the hundreds. Soon after ${firstName} turned 18, the visions continued, only this time, it was their family dying. ${firstName} swore they would never allow this to happen and fled home, vowing to find their destiny.`,
      `${firstName} grew up in a small village, where ${firstName} learned the ways of herbalism from their grandmother. After her passing, ${firstName} decided to travel the world, seeking to learn more about the medicinal properties of plants and perhaps find a way to revive her spirit.`,
      `${firstName} was once a court jester, known for their sharp wit and clever pranks. When a rival lord assassinated their king, ${firstName} took it upon themselves to seek revenge, using their skills in deception to infiltrate the enemy’s court.`,
      `${firstName} was raised by a pack of wolves after being abandoned as a child. They learned to communicate with animals and navigate the wilderness, embracing their primal instincts while seeking acceptance in a world that shunned them.`,
      `${firstName} was a street urchin who survived by thievery and cunning. After being caught stealing from the wrong person, ${firstName} was taken in by a thieves' guild and trained in the art of stealth and subterfuge, with dreams of one day becoming the guild master.`,
      `${firstName} spent their formative years in a monastery, where they learned the art of meditation and combat. After a catastrophic betrayal by the order, ${firstName} left to seek answers, hoping to restore their faith in the divine.`,
      `${firstName} was once a respected scholar in a grand library. When dark forces sought to steal ancient texts, ${firstName} took it upon themselves to protect the knowledge, escaping with a forbidden tome that now drives their pursuit of arcane power.`,
      `${firstName} was born into a family of famed artisans, crafting magical items for nobles. When a jealous rival sabotaged their workshop, ${firstName} vowed to reclaim their family’s legacy and create the most legendary items known to history.`,
      `${firstName} spent years as a gladiator, fighting for fame and fortune in the arena. After a narrow escape from a rigged fight, ${firstName} now roams the land, seeking glory through adventure instead of bloodshed.`,
      `${firstName} was a sailor on a pirate ship, living for the thrill of adventure on the high seas. After a mutiny left them marooned on a deserted island, ${firstName} swore to find the crew and take back the ship.`,
      `${firstName} was a scholar obsessed with the stars, studying astrology and celestial events. One fateful night, a comet crashed nearby, imbuing ${firstName} with strange powers. Now, ${firstName} searches for answers to their newfound abilities.`,
      `${firstName} was raised in a noble household, but after their family fell from grace due to a scandal, ${firstName} now wanders the realm, seeking to restore their family’s honor and reclaim their rightful place in society.`,
      `${firstName} was born under a rare celestial event that granted them unique powers. As a result, ${firstName} was shunned by their community and now travels in search of others like them, hoping to find acceptance.`,
      `${firstName} was an apprentice to a renowned blacksmith, learning the trade in hopes of crafting legendary weapons. After a rival blacksmith sabotaged their work, ${firstName} set out to prove their worth and create a masterpiece.`,
      `${firstName} grew up in a traveling circus, performing tricks and stunts. When the circus disbanded, ${firstName} continued the performance on the road, using their talents to entertain and gather information.`,
      `${firstName} was once a respected guard in the city watch, but after being framed for a crime they didn’t commit, ${firstName} became a fugitive, seeking to clear their name while navigating the criminal underworld.`,
      `${firstName} grew up in a remote mountain village, where they learned the ways of the earth and sky. When a blight struck their homeland, ${firstName} ventured out into the world, determined to find a cure and restore their home.`,
      `${firstName} was once a member of a secret society dedicated to preserving ancient knowledge. After a betrayal led to the society’s downfall, ${firstName} now seeks to uncover hidden truths and restore what was lost.`,
      `${firstName} was the only survivor of a village destroyed by marauding bandits. With a burning desire for revenge, ${firstName} now hunts those responsible, honing their skills in combat along the way.`,
      `${firstName} was trained in the arcane arts by a reclusive wizard. After the wizard vanished under mysterious circumstances, ${firstName} took it upon themselves to uncover the truth and master the magic they were taught.`,
      `${firstName} was a former noble who renounced their title to pursue a life of adventure. Now, they seek to help those in need, using their resources and charm to make a difference in the world.`,
      `${firstName} was a child prodigy, mastering music at an early age. After a tragic event silenced their family’s voices, ${firstName} now wanders, seeking inspiration to reclaim their joy through song.`,
      `${firstName} was raised in an isolated community of rangers, where they learned the art of tracking and survival. After a catastrophic event left their home in ruins, ${firstName} now seeks to preserve the wilderness and protect the land.`,
      `${firstName} was once a feared bounty hunter, known for their ruthless efficiency. After a job went wrong, ${firstName} now seeks redemption, helping others to atone for their past misdeeds.`,
      `${firstName} was a librarian in a forgotten temple, charged with guarding sacred texts. When an ancient evil was released, ${firstName} escaped with a powerful artifact and now seeks allies to prevent its resurgence.`,
      `${firstName} was a street performer who dazzled crowds with their magical tricks. After a powerful noble accused them of fraud, ${firstName} became a fugitive, using their skills to survive in a world that has turned against them.`,
      `${firstName} was raised in the slums, learning to fend for themselves at a young age. After discovering a hidden talent for magic, ${firstName} now strives to escape their past and make a name for themselves.`,
      `${firstName} was once a loyal knight serving a cruel lord. After witnessing atrocities committed in the name of loyalty, ${firstName} abandoned their oath and now fights for the oppressed.`,
      `${firstName} was an emissary for their tribe, tasked with negotiating peace treaties with neighboring factions. When a rival tribe ambushed them, ${firstName} barely escaped and now seeks to unite their people against a common threat.`,
      `${firstName} was born with a unique gift of foresight. After visions of disaster led to their exile, ${firstName} now wanders, seeking to prevent the events foretold by their dreams.`,
      `${firstName} was a skilled artisan whose work was coveted by nobles. When a jealous rival sabotaged their business, ${firstName} took to the road, hoping to find inspiration and reclaim their lost honor.`,
      `${firstName} grew up in a coastal village known for its fishermen. After a great storm destroyed their home, ${firstName} vowed to uncover the mystery behind the storm and seek vengeance on the sea.`,
      `${firstName} was once a prominent member of a scholarly order, but after uncovering a conspiracy, they were forced to flee. Now, ${firstName} seeks to expose the truth and reclaim their place in the world of knowledge.`,
      `${firstName} was a member of a powerful thieves' guild, but after a heist went awry, they were marked for death. ${firstName} now lives in the shadows, navigating the world of crime while searching for allies to help them take down the guild.`,
      `${firstName} was born to a family of renowned monster hunters. After losing their parents to a deadly beast, ${firstName} now hunts the very creatures that took their family, seeking to rid the world of the same horrors.`,
      `${firstName} was raised in a cult that worshipped a dark deity. After realizing the truth, ${firstName} escaped and now seeks to atone for their past while fighting against the very forces they once revered.`,
      `${firstName} was a renowned artist, but their muse vanished under mysterious circumstances. ${firstName} now travels the world, searching for inspiration and uncovering the truth behind their lost creativity.`,
      `${firstName} grew up on the outskirts of a city, befriending outcasts and misfits. Together, they formed a small family, but when tragedy struck, ${firstName} left to find their place in a world that often rejected them.`,
      `${firstName} was a guardian of a sacred shrine, tasked with protecting its secrets. When a dark force threatened the shrine, ${firstName} took to the world, seeking allies to restore balance and protect their home.`,
      `${firstName} grew up learning the ancient art of runes from a family of skilled artisans. After their workshop was destroyed in a raid, ${firstName} now seeks to revive their craft while uncovering the truth behind the attackers.`,
      `${firstName} was a former assassin who turned to a life of heroism after a fateful encounter. With blood on their hands, ${firstName} now seeks redemption by helping those in need and fighting against injustice.`,
      `${firstName} was a scribe in a prestigious academy, where they uncovered a conspiracy among the faculty. After being forced to flee, ${firstName} now seeks to expose the truth while continuing their studies in secret.`,
      `${firstName} grew up among the nomadic tribes, learning to survive in harsh environments. When a great drought threatened their people, ${firstName} set out to find a new home and restore balance to the land.`,
      `${firstName} was a champion of a grand tournament, celebrated for their prowess in combat. After a tragic event marred their victory, ${firstName} now fights not for glory, but for the honor of those who fell.`,
      `${firstName} was once a member of the city watch, but after witnessing corruption at the highest levels, ${firstName} became a vigilante. Now, ${firstName} seeks to bring justice to those who cannot defend themselves.`,
      `${firstName} grew up in a family of mercenaries, learning the ways of combat from a young age. After their family was betrayed during a contract, ${firstName} now seeks revenge and a new purpose in life.`,
      `${firstName} was a performer in a traveling theater troupe, known for their dramatic flair. After a scandal forced the troupe to disband, ${firstName} now seeks to find new stories and breathe life into forgotten tales.`,
      `${firstName} was once a respected priest, but after uncovering dark secrets within their temple, ${firstName} was cast out. Now, ${firstName} wanders, seeking to right the wrongs committed in the name of faith.`,
      `${firstName} was a skilled cartographer who traveled the world mapping uncharted territories. After discovering a hidden city, ${firstName} now seeks to uncover its secrets and share its wonders with the world.`
];



    const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
    const background = randomBackground
    const quirk1 = randomQuirk1
    const quirk2 = randomQuirk2
    const physicalTrait = randomPhysicalTrait

    const npcToAdd = {
      firstName: firstName,
      lastName: lastName,
      title: title,
      race: race,
      sex: sex,
      alignment: alignment,
      health: health,
      armor: armor,
      melee: melee,
      ranged: ranged,
      str: str,
      dex: dex,
      con: con,
      int: int,
      wis: wis,
      cha: cha,
      npcClass: npcClass,
      trait: trait,
      background: background,
      quirk1: quirk1,
      quirk2: quirk2,
      notablePhysicalFeature: physicalTrait

    }
    this.props.addNpc(npcToAdd)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick} >
          <button type="submit" id="randomButton"><img src={RandomButton} id="randomButtonImage" alt="Random Button" /></button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addNpc })(NpcRandom)




//                 str dex con int wis cha
// "Half-Elf",+1 to two other skills   2


//                 str dex con int wis cha
// "Warforged"             2   plus one to any ability score
