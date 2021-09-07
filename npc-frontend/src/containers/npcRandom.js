import React, { Component } from 'react'
import { addNpc } from '../actions/npcs'
import { connect } from 'react-redux'
import RaceArray from '../assets/RaceArray'
import NpcClassArray from '../assets/NpcClassArray'
import TraitArray from '../assets/TraitArray'
import LastNameArray from '../assets/LastNameArray'
import RangedWeaponsArray from '../assets/RangedWeaponsArray'
import MeleeWeaponsArray from '../assets/MeleeWeaponsArray'
import BackgroundArray from '../assets/BackgroundArray'
import ArmorArray from '../assets/ArmorArray'
import { FighterTitleArray,
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
        BarbarianTitleArray } from '../assets/TitleArray'

class NpcRandom extends Component {

    

    handleClick = event => {
        event.preventDefault()
        
        const lastNameArray = LastNameArray.LastNameArray
        const raceArray = RaceArray.RaceArray
        const sexArray = ["Male", "Female", "Non-Binary"]
        const alignmentArray = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
        const healthArray = [10, 15, 20, 25, 30]
        const armorArray = ArmorArray.ArmorArray
        const meleeArray = MeleeWeaponsArray.MeleeWeaponsArraydsfa
        const rangeArray = RangedWeaponsArray.RangedWeaponsArray
        const npcClassArray = NpcClassArray.NpcClassArray
        const traitArray = TraitArray.TraitArray
        

        const randomLastname = lastNameArray[Math.floor(Math.random() * lastNameArray.length)]
        const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
        console.log(randomRace)
        const randomSex = sexArray[Math.floor(Math.random() * sexArray.length)]
        const randomAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)]
        const randomHealth = healthArray[Math.floor(Math.random() * healthArray.length)]
        const randomArmor = armorArray[Math.floor(Math.random() * armorArray.length)]
        const randomMelee = meleeArray[Math.floor(Math.random() * meleeArray.length)]
        const randomRanged = rangeArray[Math.floor(Math.random() * rangeArray.length)]
        const randomNpcClass = npcClassArray[Math.floor(Math.random() * npcClassArray.length)]
        const randomTrait = traitArray[Math.floor(Math.random() * traitArray.length)]
        // const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
        const randomFirstNameFunction = () => {

            const maleNameArray = ["Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]
            const femaleNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Stitle","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha"]
            const nonBinaryNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Stitle","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha","Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]

            if (randomSex === "Male") {
             return maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
            } else if (randomSex === "Female") {
              return femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
            } else {
             return nonBinaryNameArray[Math.floor(Math.random() * nonBinaryNameArray.length)]
            }
        }

        const randomTitleFunction = () => {

            const fighterTitleArray = FighterTitleArray.FighterTitleArray
            const wizardTitleArray = WizardTitleArray.WizardTitleArray
            const sorcererTitleArray = SorcererTitleArray.SorcererTitleArray
            const warlockTitleArray = WarlockTitleArray.WarlockTitleArray
            const clericTitleArray = ClericTitleArray.ClericTitleArray
            const rogueTitleArray = RogueTitleArray.RogueTitleArray
            const druidTitleArray = DruidTitleArray.DruidTitleArray
            const monkTitleArray = MonkTitleArray.MonkTitleArray
            const paladinTitleArray = PaladinTitleArray.PaladinTitleArray
            const rangerTitleArray = RangerTitleArray.RangerTitleArray
            const bardTitleArray = BardTitleArray.BardTitleArray
            const artificerTitleArray = ArtificerTitleArray.ArtificerTitleArray
            const barbarianTitleArray = BarbarianTitleArray.BarbarianTitleArray

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
                  return dexArray[Math.floor(Math.random() * dexArray.length)+ 2]       
                } else if (randomRace === "Halfling") {
                  return dexArray[Math.floor(Math.random() * dexArray.length)+ 2]
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
                  return dexArray[Math.floor(Math.random() * dexArray.length)+ 2]           
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
                  return conArray[Math.floor(Math.random() * conArray.length) + 2 ]
                } else if (randomRace === "half-Orc") {
                  return conArray[Math.floor(Math.random() * conArray.length) + 1]
                }
          }
      
          const randomWisFunction = () => {
      
              const wisArray = [1, 2, 3]
      
              if (randomRace === "Dwarf") {
                  return wisArray[Math.floor(Math.random() * wisArray.length)]
                 } else if (randomRace === "Dragonborn") {
                   return  wisArray[Math.floor(Math.random() * wisArray.length)]
                 } else if (randomRace === "Elf") {
                  return  wisArray[Math.floor(Math.random() * wisArray.length)]
                } else if (randomRace === "Gnome") {
                  return wisArray[Math.floor(Math.random() * wisArray.length)]
                } else if (randomRace === "Half-Elf") {
                  return  wisArray[Math.floor(Math.random() * wisArray.length)]
                } else if (randomRace === "Halfling") {
                  return  wisArray[Math.floor(Math.random() * wisArray.length)]
                } else if (randomRace === "Human") {
                  return  wisArray[Math.floor(Math.random() * wisArray.length) + 1]
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
        const backgroundArray = BackgroundArray.BackgroundArray

        const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
        const background = randomBackground

        const npcToAdd = {
            firstName: this.state.firstName + firstName,
            lastName: this.state.lastName + lastName,
            title: this.state.title + title,
            race: this.state.race + race,
            sex: this.state.sex + sex,
            alignment: this.state.alignment + alignment,
            health: this.state.health + health,
            armor: this.state.armor + armor,
            melee: this.state.melee + melee,
            ranged: this.state.ranged + ranged,
            str: this.state.str + str,
            dex: this.state.dex + dex,
            con: this.state.con + con,
            int: this.state.int + int,
            wis: this.state.wis + wis,
            cha: this.state.cha + cha,
            npcClass: this.state.npcClass + npcClass,
            trait: this.state.trait + trait,
            background: this.state.background + background
        }
        this.props.addNpc(npcToAdd)
    }

    render() {
        return (
            <div>
                <fieldset >
                    <form onSubmit={this.handleClick} >
                        <button type="submit">Random <b>NPC</b></button>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default connect(null, { addNpc })(NpcRandom)



              
//                 str dex con int wis cha
// "Half-Elf",+1 to two other skills   2


//                 str dex con int wis cha
// "Warforged"             2   plus one to any ability score
