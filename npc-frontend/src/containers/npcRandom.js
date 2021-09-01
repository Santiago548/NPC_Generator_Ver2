import React, { Component } from 'react'
import { addNpc } from '../actions/npcs'
import { connect } from 'react-redux'
import RaceArray from '../components/RaceArray'
import NpcClassArray from '../components/NpcClassArray'
import TraitArray from '../components/TraitArray'

class NpcRandom extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            race: "",
            sex: "",
            alignment: "",
            health: "",
            armor: "",
            melee: "",
            ranged: "",
            str: "",
            dex: "",
            con: "",
            int: "",
            wis: "",
            cha: "",
            npcClass: "",
            trait: "",
            background: ""
        }
    }

    handleClick = event => {
        event.preventDefault()
        
        const LastNameArray = ["Atwater", "Agassi", "Apatow", "Akagawa", "Averescu", "Arrington", "Agrippa", "Aiken", "Albertson", "Alexander", "Amado", "Anders", "Ashsorrow", "Humblecut", "Ashbluff", "Marblemaw", "Armas", "Akka", "Aoki", "Aldrich", "Apak", "Alinsky", "Desai", "Darby", "Draper", "Dwyer", "Dixon", "Danton", "Desmith", "Ditka", "Dominguez", "Decker", "Dobermann", "Dunlop", "Dumont", "Dandridge", "Diamond", "Dobra", "Dukas", "Agnello", "Alterio", "Bidbury", "Botkin", "Benoit", "Biddercombe", "Baldwin", "Bennett", "Bourland", "Boadle", "Bender", "Best", "Bobshaw", "Bersa", "Belt", "Bourn", "Barke", "Beebe", "Banu", "Bozzelli", "Bogaerts", "Blanks", "Evert", "Eastwood", "Elway", "Eslinger", "Ellerbrock", "Eno", "Endo", "Etter", "Ebersol", "Everson", "Esapa", "Ekker", "Escobar", "Eggleston", "Ermine", "Erickson", "Keller", "Kessler", "Kobayashi", "Klecko", "Kicklighter", "Kidder", "Kershaw", "Kaminsky", "Kirby", "Keene", "Kenny", "Keogh", "Kipps", "Kendrick", "Kuang", "Fairchild", "October", "Vespertine", "Fellowes", "Omen", "Willow", "Gannon", "Presto", "Windward", "Grell", "Powers", "Wixx", "Halliwell", "Quellings", "Xanthos", "Hightower", "Quill", "Xenides", "Idlewind", "Rast", "Chamillet", "Bougaitelet", "Hallowswift", "Coldsprinter", "Winddane", "Yarrow", "Illfate", "Riddle", "Yew", "Jacaranda", "Yearwood", "Yellen", "Yaeger", "Yankovich", "Yamaguchi", "Yarborough", "${firstName}ngblood", "Yanetta", "Yadao", "Winchell", "Winters", "Walsh", "Whalen", "Watson", "Wooster", "Woodson", "Winthrop", "Wall", "Sacredpelt", "Rapidclaw", "Hazerider", "Shadegrove", "Wight", "Webb", "Woodard", "Wixx", "Wong", "Whesker", "Yale", "Yasumoto", "Yates", "${firstName}nger", "Yoakum", "York", "Rigby", "Zaba", "Surrett", "Swiatek", "Sloane", "Stapleton", "Seibert", "Stroud", "Strode", "Stockton", "Scardino", "Spacek", "Spieth", "Stitchen", "Stiner", "Soria", "Saxon", "Shields", "Stelly", "Steele", "Chanassard", "Ronchessac", "Boneflare", "Monsterbelly", "Truthbelly", "Sacredmore", "Malfoy", "Moses", "Moody", "Morozov", "Mason", "Metcalf", "McGillicutty", "Montero", "Molinari", "Marsh", "Moffett", "McCabe", "Manus", "Malenko", "Mullinax", "Morrissey", "Mantooth", "Mintz", "Groves-Chestnut", "Cheever-Waters", "Bartleby-Everson", "Acoff-Sereno", "Sloane-Hooper", "Coffey-Macklin", "Sisko-Sinclair", "Lichter-Seibert", "Zubarry-Devlin", "Dabney-Aparo", "Glick-Wilcox", "Winchell-Ojeda"]
        const raceArray = RaceArray.RaceArray
        const sexArray = ["Male", "Female", "Non-Binary"]
        console.log(sexArray)
        const alignmentArray = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
        const healthArray = [10, 15, 20, 25, 30]
        const armorArray = ["Padded 11", "Leather 11", "Studded-Leather 12", "Hide 12", "Chain-Shirt 13", "Scale-Mail 14", "Spiked-Armor 14", "Breatplate 14", "Halfplate 15", "Ring-Mail 14", "Chain-Mail 16", "Splint 17","Plate 18"]
        const meleeArray = ["Battle Axe [1d8 Slashing]", "Club [1d4 Bludgeoning]", "Dagger [1d4 piercing]", "Greataxe [1d12 Slashing]", "Great Club [1d8 Bludgeoning]", "Hand Axe [1d6 Slashing]", "Long Sword [1d8 Slashing]", "Quarterstaff [1d6 Bludgeoning]", "Rapier [1d8 Piercing]", "Scimitar [1d6 Slashing]", "Short Sword [1d6 Slashing]"]
        const rangeArray = ["Blowgun [1 Piercing Range (25/100)]", "Light Crossbow [1D8 Piercing Range(80/320)]", "Dart [1D4 Piercing Range(20/60)]", "Shortbow [1D6 piercing Range(80/320)]", "Sling [1D4 piercing Range(30/120) ]", "Hand Crossbow [1D6 Piercing Range(30/120)]", "Heavy Crossbow [1D10 piercing Range(100/400)]", "Longbow [1D8 piercing Range(150/600)]"]
        // const strArray = [1, 2, 3, 4, 5, 6]
        // const dexArray = [1, 2, 3, 4, 5, 6]
        // const intArray = [1, 2, 3, 4, 5, 6]
        // const conArray = [1, 2, 3, 4, 5, 6]
        // const wisArray = [1, 2, 3, 4, 5, 6]
        // const chaArray = [1, 2, 3, 4, 5, 6]
        const npcClassArray = NpcClassArray.NpcClassArray
        const traitArray = TraitArray.TraitArray
        
        // const backgroundArray = [
            


        const randomLastname = LastNameArray[Math.floor(Math.random() * LastNameArray.length)]
        const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
        console.log(randomRace)
        const randomSex = sexArray[Math.floor(Math.random() * sexArray.length)]
        const randomAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)]
        const randomHealth = healthArray[Math.floor(Math.random() * healthArray.length)]
        const randomArmor = armorArray[Math.floor(Math.random() * armorArray.length)]
        const randomMelee = meleeArray[Math.floor(Math.random() * meleeArray.length)]
        const randomRanged = rangeArray[Math.floor(Math.random() * rangeArray.length)]
        // const randomStr = strArray[Math.floor(Math.random() * strArray.length)]
        // const randomDex = dexArray[Math.floor(Math.random() * dexArray.length)]
        // const randomCon = conArray[Math.floor(Math.random() * conArray.length)]
        // const randomInt = intArray[Math.floor(Math.random() * intArray.length)]
        // const randomWis = wisArray[Math.floor(Math.random() * wisArray.length)]
        // const randomCha = chaArray[Math.floor(Math.random() * chaArray.length)]
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

            const fighterTitleArray = ["Veteran", "Warrior", "Swordsman", "Sword Master", "Hero", "Swashbuckler", "Myrmidon", "Champion", "Hero", "Superhero", "Lord", "Lord, 10th", "Mercenary", "Soldier", "Sellsword", "Gladiator", "Conqueror", "Dominator"]
            const wizardTitleArray = [ "Hedge Wizard", "Apprentice", "Scholar", "Journeymage", "Curate", "Scrollmaster", "Sage", "Visionary", "Chronicler", "Loremaster"]
            const sorcererTitleArray = [ "Cantrap", "Magician", "Metamage", "Karmabender", "Spelltwister", "Magus", "Wildblood", "Spellslinger", "Sanguiner", "High Magus"]
            const warlockTitleArray = [ "Neophyte", "Invoker", "Caller", "Hexer", "Niximancer", "Witch", "Thaumaturgist", "Haunt", "Dreadbirther", "Chained One"]
            const clericTitleArray = [ "Aspirant", "Acolyte", "Adept", "Missionary", "Apostle", "Preacher", "Priest", "Abbot", "Bishop", "High Priest"]	
            const rogueTitleArray = [ "Footpad", "Pickpocket", "Rutterkin", "Robber", "Viper", "Trickster", "Burglar", "Spy", "Creeper", "Adder", "Apprentice", "Pilferer", "Cutpurse", "Master Pilferer", "Sharper", "Thief", "Master Thief", "Disciple", "Initiate", "Killer", "Murderer", "Slayer", "Cutthroat", "Dacoit", "Thug", "Executioner", "Assassin", "Senior Assassin", "Prime Assassin", "Guildmaster of Assassins", "Chief Assassin", "Expert Assassin", "Apprentice", "Swashbuckler"]
            const druidTitleArray = [ "Initiate", "Devotee", "Beastling", "Dreamer", "Shifter", "Herald", "Grovelurker", "Shaper", "Springwalker", "Elder Druid"]
            const monkTitleArray = [ "Novice", "Grand Master of East Winds", "Grand Master of Winter", "Grand Master of Summer", "Grand Master of Spring", "Grand Master of Flower", "Grand Master of Autumn", "Grand Master of South Winds", "Grand Master of West Winds", "Grand Master of North Winds", "Grand Master of Dragons", "Grand Master", "Master", "Immaculate"]
            const paladinTitleArray = [ "Gallant", "Squire", "Oathbound", "Keeper", "Sentinel", "Protector", "Inquisitor", "Bulwark", "Justiciar", "Legend"]
            const rangerTitleArray = [ "Runner", "Ranger Lord, 11th", "Scout", "Courser", "Ranger Lord", "Ranger", "Tracker", "Guide", "Ranger Knight", "Wanderer", "Wildling", "Hunter", "Sojourner", "Wayfarer", "Preserver", "Strider", "Naturekin", "Treewarden", "Pathfinder"]
            const bardTitleArray = [ "Crier", "Accompanist", "Storyteller", "Rhymer", "Poet", "Singer", "Minstrel", "Balladeer", "Songsmith", "Troubadour"]
            const artificerTitleArray = [ "Alchemist", "Armorer", "Artillerist", "Battle Smith"]
            const barbarianTitleArray = [ "Thug", "Brute", "Mauler", "Aggressor", "Plunderer", "Bloodrager", "Slaughterer", "Rampager", "Bloodletter", "Destroyer"]


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
        const backgroundArray = [
          `${firstName} was a demon hunter on the desert planet Derach. ${firstName} fought alongside their small battalion and this group was revered for their efficiency and kept to themselves. One day a strange rift opened and pulled the group apart banishing each of the soldiers to different corners of the universe. ${firstName} only goal once reaching a strange green planet was to find a way to portal back to the demon’s world and find their companions. Unfortunately C was captured by the planets inhabitants and forced into slavery.`,
          `${firstName} served as a squire to the Ranger son of a local lord, a minor political figure. Two years ago he moved to the city, to study magic and indulge in debauchery, and released ${firstName} from their service (and their salary). ${firstName} heard that Bordertown has uses for someone with skill of arms, and so ${firstName} hopped onto the first coach available.`,
          `${firstName}'ve always wanted to be an adventurer. ${firstName} sat on their pappy's lap as he told and retold the tales of their uncle Algar Spiderspear, and their great uncle Kenway Fireheart, and their great great aunt Thea Earthforger. ${firstName} didn't understand that those was meant to be cautionary tales, and that there's a reason ${firstName} don't have any cousins.`,
          `${firstName} never really liked the family dye business. As the first born ${firstName} was always expected to take over. After lamenting one night drunkenly at the tavern ${firstName} met a gnome who promised to help. On returning home their family did not recognize ${firstName} and their ${firstName}nger sibling was set to inherit. ${firstName} drove ${firstName} off their land to homelessness. ${firstName} never saw the gnome again.`,
          `${firstName} was a normal farmer, nothing special about ${firstName}. Over the years, their farm started losing money and ${firstName} had to let more and more of their staff go until it was just ${firstName} left. One day when ${firstName} was at the local inn drinking their problems away and adventurer walks through and buy the entire inn several rounds of drinks from his large sack of golden coins. Since that day ${firstName} have sold their farm and used the money to buy some basic adventuring supplies and head out to build their fortune.`,
          `${firstName} was a squire for the local knight and Lord of their province. One day while cleaning his library ${firstName} come across and gold handle behind some dusty books. As ${firstName} turned the handle it felt as if their brain was opening like a door. When ${firstName} turned the handle back a a dusty grimore fell into their hands and ${firstName} heard a voice inside their head, ${firstName} decided to name the voice Greg.`,
          `${firstName} grew up as a milk maid, over the course of their child hood ${firstName} realised that ${firstName} had a special connection with all animals and nature. One day on their way back from town bandits jumped out from the side of the road and attacked ${firstName}. Startled, ${firstName} this their hands out towards them and magic shot out from their finger tips. The next day ${firstName} packed their things and headed out to learn more about what ${firstName} had just done and how to control it.`,
          `${firstName}'s father was a miner, their mother and innkeeper, ${firstName} spent their childhood poking the ashes in the fireplace waiting for something to happen. One day a halfling fell down their chimney and talk ${firstName} into hiding him in their room, his only name that he gave ${firstName} was Miro, but he taught ${firstName} many thing over a few nights, once he felt 'it' had blown over he packed his things and invited ${firstName} to join him. He trained ${firstName} to be a master thief and became almost a second father to ${firstName} over the course of 2 years. Until one day he set ${firstName} up, and ran away with the treasure leaving ${firstName} to rot in the king's jail.`,
          `${firstName} always had anger problems, then again most sailors do, theirs was a bit different though. One day ${firstName} was fishing off the side of their ship when ${firstName} caught something very heavy on their line. When ${firstName} finally reeled it in ${firstName} found a gold ring, but the gold was almost blood red, and in ${firstName} hand it felt like it had almost no weight. ${firstName}'s crew members wanted to see the ring, but ${firstName} only saw it as normal gold, ${firstName} saw it for something much more incredible. When they tried to take it from ${firstName} ${firstName} flew into a rage beating them senseless until ${firstName} jumped into a rowboat and made their way back to shore. ${firstName} knows that they will probably come after them, but none of that matters, ${firstName} knows that they must go to the mountains. ${firstName} just doesn't know where or what a mountain is.`,
          `${firstName} grew up on a small farm. Their family was poor, but ${firstName} managed. ${firstName} idolized their older brother as a child, even though he wasn’t always nice to ${firstName} in return. Then one day their brother was conscripted into the army, and ${firstName} haven’t heard from him since - none of the money he promised to send home, not even a letter. ${firstName} have finally come of age theirself and set out to find him, or at least find out what happened to him.`,
          `When ${firstName} was a teenager, ${firstName} stopped by a fortune teller’s stall at a festival, just out of idle curiosity. The fortune teller performed her rites and examined ${firstName}, and promptly burst out laughing. She refunded their money and refused to tell ${firstName} what she had seen. All she told ${firstName} was, “Good luck!”`,
          `${firstName} was a middle-aged craftsman/woman with a successful business, several children, and a happy life. One day ${firstName} came home to discover their spouse was cheating on ${firstName}. Newly divorced, ${firstName} had a bit of a mid-life crisis and spent all of their savings on a [book of magic/set of shiny armor/fencing lessons/musical instrument/etc]. Gosh darn it, ${firstName} want to have an adventure!`,
          `${firstName} parents are scholars, historians specifically, and ${firstName}'ve been raised on countless trips to archaeological digs, libraries, and lectures with them. ${firstName} may or may not have taken to the studies as much as ${firstName}'d like, but when the restless need to spread their wings and get away from home took hold, ${firstName} was excited to request that ${firstName} document all the things ${firstName} discover on their adventures and bring them home to share.`,
          `${firstName} was the oldest child of a prosperous peasant. ${firstName} had a life of beer, bread and barn dances to look forward to. Then, ${firstName} went into the big town on a religious pilgrimage, and was knocked out and press-ganged into the army. Turns out, ${firstName} loved it and never looked back. Their dad had other kids. Too bad the Goblin Wars are over now and their lord disbanded his army.`,
          `${firstName} was a slave, on a big estate. One day, a charismatic leader got the slaves to rise in rebellion. ${firstName}'re pretty sure there are others who didn't end up crucified, but ${firstName}'ve never met any of them. Here in the city, nobody has any idea the rebellion even happened.`,
          `${firstName} was a village priest. Births, deaths, rites of passage. Holy cow, was it boring. ${firstName} renounced their vows and moved on. ${firstName}'ve never suffered from this: the gods have never wrought revenge upon ${firstName}. ${firstName} get the feeling they don't care, or they're not there. Some of the things ${firstName} learned (healing, counseling) have proved pretty useful.`,
          `${firstName} was a wealthy playboy, the son of a rich merchant. He got murdered; ${firstName} lost what was left gambling. Turns out ${firstName}'re pretty good in a fight. ${firstName} still have expensive tastes.`,
          `${firstName} was trained as a courtesan. ${firstName} got blamed for breaking up a marriage among nobles. Some of them still like ${firstName}; others want ${firstName} dead. Sometimes, it's hard to tell.`,
          `${firstName} was conscripted to join the army, but it was a sham. ${firstName} and a couple others was lured into an ambush by bandits. Though outnumbered, their group managed to fend them off. Unfortunately, only ${firstName} survived the ordeal and managed to escape before the bandits got any more reinforcements, though not without taking a valuable item the bandits was after. Now ${firstName}'re on the run hoping to lure the bandits away from home.`,
          `${firstName} is transported to another plane of existence where everything and everyone from their past life has occurred just the same, except ${firstName}. In this plane ${firstName} died early in life/never been born/had rose as a crime lord that went missing as his reign fell/whatever else ${firstName} can up with.`,
          `Their family has been guarding an ancient artifact for generations that has been said to hold immense power. It is stolen under their watch but ${firstName} track it down JUST as it is about to be used for evil. It's a dud. Now ${firstName} journey around to find the real artifact that their family should've been guarding/ find the reason why ${firstName}'ve been given such a fool's errand to follow for so long.`,
          `A warlock finds out ${firstName}'re not the only user of their patron's magic. Others share the same pact ${firstName} made with it and now the patron desires them all to find each other and fight to the death. The winner shall be granted the true power the patron split between them/wish/ immortality/ whatever else.`,
          `Their mother carried their little body through the woods, with her dying breath she brought ${firstName} to the wise man of the forest and collapsed as soon as she told him their name. He raised ${firstName} in her stead until he died of ...`,
          `Despite being cheerful and righteous, ${firstName} can't remember anything before ${firstName}'re 25th birthday. Every time ${firstName} kill something evil, ${firstName} get a small memory back. Every quest returns to ${firstName} a piece of their former self...and the more ${firstName} see, the more ${firstName} suspect ${firstName} was not a good person.`,
          `On a mission to buy some new clothes ${firstName} was mistaken for an adventurer who had already orders some. ${firstName} was thus outfitted and always one to role with with what life throws at ${firstName} decided to run with it. Somewhere there is an underdressed adventurer looking for her clothes and wondering who stole her identity.`,
          `Their parents always said that reading would be the death of ${firstName}. Despite this ${firstName} taught theirself how to read behind their back. ${firstName} then discovered the will and testament of their real parents and realize ${firstName} are being raised by their uncle who controls all the family wealth. Fearful for their life and feeling betrayed ${firstName} abandon the household to make their own name and find out what really happened to their parents. Their uncle may or may not know that ${firstName} know about the deception.`,
          `Once, ${firstName} belonged into a wealthy and noble family, who unofficially ruled the city, due to their wealth and power. ${firstName} was enjoying their time in the sun and was proud of their family name, until ${firstName} discovered their father is a vampire, who works with evil necromancers and together turn civilians into monsters. Conflicted on their hatred, feelings of betrayal, sense of duty and love for their house, ${firstName} grabbed their dearest friends and hit the road, forsaking their family name and keeping the secrets of their family hidden.`,
          `${firstName} was raised by travelling merchants, going with them wherever ${firstName} went. As ${firstName} got older, ${firstName} started teaching ${firstName} the ways of the trade, and ${firstName} planned to travel and trade with them their whole life. One day, their caravan was attacked by bandits, who killed everyone, and would have killed ${firstName}, if ${firstName} didn't get away. Since then, ${firstName} abandoned their dream, and have been making a living out of adventures.`,
          `${firstName} was trained by a master of their skill, like many others, in an appropriate organisation. One day, ${firstName} set each of the students on a quest for retrieving a mythical item. The thing their character was supposed to find though, was simply a myth. When ${firstName} told the master the story, ${firstName} didn't believe ${firstName}, and expelled ${firstName} from the order.`,
          `Their parents was retired adventurers, who told ${firstName} their epic tales, and probably expected ${firstName} to follow their steps. When ${firstName} reached adulthood, ${firstName} set out to do even more epic deeds than them, despite having no training at all.`,
          `The first thing their remember is being rescued from rubble by a good-hearted noble, who then patched ${firstName} up and offered his help in trying to find who ${firstName} are. The only clue ${firstName} have are their class abilities (which are like muscle memory to ${firstName}), and the knowledge of whatever the collapsed building was.`,
          `${firstName} grew up as a normal city kid, and never really did anything interesting with their life. ${firstName} had a decent job and was going to get married soon, until the day ${firstName} got lost in the wilderness. That was years ago, and ${firstName} have never been able to find their way back to their hometown, because nobody seems to know about it.`,
          `${firstName} grew up with nothing, cheating and stealing where ${firstName} could. All ${firstName}’ve ever earned was a target on their back and bad reputation. Eventually ${firstName} found theirself on the run from the wrong kind of people. In a tavern ${firstName} met a wizard that promised a way out. With nowhere else to turn, ${firstName} reluctantly agreed. The wizard took ${firstName} to his study and performed a ritual to switch their face with the face of another person of similar build. Now ${firstName} go off into the world with a new identity and a chance to start over. Or so ${firstName} thought... (The face ${firstName} wear has it's history too).`,
          `${firstName} is the child of a single woman taken in by a traveling caravan of performers while pregnant. She never described their father to ${firstName}, and she changes the subject when ${firstName} ask. Those in the caravan are their substitute family. ${firstName} have several 'grandparents,' 'aunts,' 'uncles,' and 'cousins.' ${firstName} took part in the caravan's entertainment for coin, whether as a performer or someone behind the scenes. When ${firstName} felt the need, ${firstName} left the caravan of their own free will to pursue their journey. ${firstName} was given a special crest with the performers' symbol so ${firstName} would be welcomed back if ${firstName} returned.`,
          `${firstName} is an experiment, either made or modified for a reason ${firstName} cant even remember. with so many genetic changes and magical 'enhancements' that ${firstName} cant even count the amount of places where ${firstName}'re from. A lab rat from a man who seemed to want to do good, and claims to try to have done so but never told what he was doing specifically, never said what his end goal was and just kept going, and going and going. The doctor was put to death for his experiments. Whatever purpose ${firstName} had been made for is now lost to ${firstName}, as is just about everything ${firstName} used to know. ${firstName} don't know who ${firstName} was, assuming ${firstName} was anything other than this.`,
          `${firstName} fell into life threatening trouble one day exploring some ruins close to town. There ${firstName} found a strange altar with and old woman sitting behind it. She said she could help ${firstName} escape, if ${firstName} promise to serve her. ${firstName}'re pretty sure she's a god, but she won't tell ${firstName} her name, or what she's the god of. She shows up sometimes and points, and whatever she points at ${firstName} must somehow acquire and leave behind in certain ruins. Her tastes are getting kind of extravagant.`,
          `${firstName} was once the son of a wealthy merchant who traveled more than average compared to other merchants at the time. Their father would often take ${firstName} and their ${firstName}nger sister on some of his shorter journeys, exposing ${firstName} to a dangers of sailing across the seas. On one advantage their father's ship was attacked by pirates killing everyone on board. Because of the tragic death of their father ${firstName} desire revenge, and will do anything to kill them.`,
          `Their an anti-social person who lives a quiet life in a rural part of the kingdom. In their quiet life ${firstName} discovered a interest in ancient artifacts left over from the last civilization. Known most of their down time is sent studying these artifacts through reading ancient texts, and practicing their magic.`,
          `${firstName} sold vegetables from a street cart ${firstName} was still making payments on. A wild street chase broke out and one of the escapees upended their cart to delay some guards, shattering it badly. Reeling from the financial loss of their vegetables and blocked from setting up another shop by overzealous debt-collector harassment, ${firstName} left town with all ${firstName} had hoping to put their life back together.`,
          `${firstName} was once a wicked individual who took pleasure in the misery of others. ${firstName} was then struck by powerful cursed magic that turned their entire outlook on life around, so that ${firstName} now are a force for good who brings happiness to others. Their dark past still haunts ${firstName}, and sometimes their old friends try to call ${firstName} back.`,
          `${firstName} was a simple bed-and-breakfast inn owner. One of their guests left for a night of carousing and never returned. Among their left-behind possessions was an ornate locked box with no key. Hoping to find the owner or their organization, ${firstName} took the box to a local bush-wizard to get it identified. While ${firstName} was away, their inn was ransacked and burned to the ground. Word got around ${firstName} had the box and ${firstName} was being hunted, so ${firstName} fled in terror.`,
          `When ${firstName} was ${firstName}ng, ${firstName} found a diary that would message back to ${firstName} if ${firstName} wrote in it. It taught ${firstName} many mysterious skills and spells. One day, the diary told ${firstName} that it couldn't write to ${firstName} anymore, and it went silent. ${firstName} set off when ${firstName} got older to explore some of the places the diary mentioned and uncover the identity of their mysterious penpal.`,
          `When ${firstName} was ${firstName}ng, ${firstName} was polymorphed into a flying horse by a malfunctioning spell. Some explorers promised to help ${firstName}, and ${firstName} taken on many harrowing adventures. The help never came, as the explorers preferred a flying horse. Decades pass, ${firstName} was lost and sold many times. Eventually a kindly witch made ${firstName} whole again, picking up human life at the age ${firstName} was changed. (Can substitute for flying carpet if ${firstName} aren't a horse person.)`,
          `A lonely child found a ring of wishing. ${firstName} wished for their imaginary friend, ${firstName}, to become real. The child soon became sick and died, and their parents blamed ${firstName} and ran ${firstName} out of town. Using the powers that the child imagined ${firstName} to have, ${firstName} have begun to search for a purpose.`,
          `${firstName} was born dumb to a wealthy family with an estate. Ashamed and not knowing what else to do with ${firstName}, their family used ${firstName} as a slave, setting ${firstName} to all the most awful and menial tasks. Not knowing any better, ${firstName} became strong with a smile. One evening, ${firstName} showed kindness to an old woman who turned out to be a fairy queen in disguise. She blessed ${firstName} with intelligence. Disgusted with the way ${firstName} was treated, ${firstName} left home, hoping to learn to read, study, and start life anew.`,
          `After their town was razed and everyone ${firstName} knew died, ${firstName} woke up in the middle of the ashes. Something, for some reason, kept ${firstName} alive, and a life of adventure might give ${firstName} the opportunity to find out what and why.`,
          `The bandits thought ${firstName} left nothing of value in their village, and maybe ${firstName} was right because that night ${firstName} lost their arm and way of life.`,
          `${firstName} grew up as the region's stereotype, a poor farmer with a passion for whittling. After inheriting the farm prospectors found gold in the river and ${firstName} sold the farm for more money than ${firstName} thought was in circulation. Unsure of how to spend money and unwilling to save it, ${firstName} purchased an abandoned adventurer's guild with plans to turn it into a wooden toy shop before finding it not quite as abandoned as ${firstName} thought.`,
          `${firstName} is a farmer who found a talking rock which only ${firstName} could hear, in the middle of their own farm. Everyone thinks ${firstName} lost their mind, which eventually leads to an unwanted embargo, and ${firstName} go bankrupt.`,
          `${firstName} lead a relatively normal life as a tailor in a small town until their infant daughter started showing signs of sorcerous abilities and was stolen in the night.`,
          `${firstName} was the student of the greatest bard in the land, until ${firstName} murdered him.`,
          `${firstName} was trapped in a cloud giant's castle for years living of of giant crumbs. Only recently was ${firstName} able to escape.`,
          `${firstName} was an orphan taken in by the local butcher. ${firstName} was a loner but loved their adoptive father. One day the village was attacked by bandits, who killed their adoptive father. ${firstName} got their revenge on the bandits but the brutality of their vengeance alienated ${firstName} even more from the rest of the village.`,
          `${firstName} grew up watching the pit fighters in the capital city, marveling at their strength and ability. ${firstName} spent years training on their own in both armed and hand fighting, with the ultimate goal of entering the pit and becoming a legend in their own right. As ${firstName} are about to enter for their first match, their opponent and the announcer come over to lay out the match, revealing all of the fights are pre-determined and set up so no one is really injured. ${firstName} walked away and now are trying to find their place in the world.`,
          `For their entire life up to now ${firstName} has watched others perform magic, they were few, but fantastical and filled their heart with wonder. Practice and study as they may, ${firstName} was never able to recreate even simple cantrips that the local wizard had tried to teach ${firstName}. Distraught, ${firstName} ran to the woods to a secret clearing to cry for a bit. That day something incredible happend, magic shot from ${firstName} fingertips, and shortly after a man in a suit and tie walked up from the edge of the clearing and set his briefcase down on a large flat rock that ${firstName} had never seen sitting there before. “It seems we have some paperwork to go over,” he said with a smile.`,
          `${firstName} met and joined a errant knight and his small court that traveled searching for riches and a new home for this lord and his barren town after the war. After years of service and being brought to be loyal to this cause, the knight died in his sleep all the sudden and his attendants looted the caravan and ran off, leaving ${firstName} to bury their teacher, pack what gear he had and was left behind and pick up the quest of Knighthood to this unknown lord as he was show.`,
          `${firstName} was a demon hunter on the desert planet Derach. and fought alongside their small battalion and this group was revered for their efficiency and kept to themselves. One day a strange rift opened and pulled the group apart banishing each of the soldiers to different corners of the universe. ${firstName} only goal once reaching a strange green planet was to find a way to portal back to the demon’s world and find their companions. Unfortunately C was captured by the planets inhabitants and forced into slavery.`,
          `${firstName} only remember the last 5-10 years of their live. Before that it is all blank. Their parents/caretakers/close ones tell ${firstName} that ${firstName} had a terrible accident and lost all memory after the accident. But then ${firstName} find written agreements of their adoption, detailing that ${firstName} was selected for an experimental form of adoption. This meant that their memory was wiped and their biological parents wiped out. ${firstName} have been engineered by wizards/scientists to be the perfect human. ${firstName} then find a note that the amnesia can be reversed if [plot hook] is done. A warning is written in big letters that reversing the amnesia spell might have unforeseen effects.`,
          `${firstName} spent most of their childhood and early adulthood as a farmer, the difficulty of their daily work offset by the amazing times ${firstName}'ve had with friends and family. One day, ${firstName} hit their head on a rock. When ${firstName} next awoke, ${firstName} was in leather armor, on a sailing ship as part of an adventuring party. An entire life of adventure, riches, and excitement unfolded, and as ${firstName} lay down for the last time, surrounded by their allies and loved ones, ${firstName} woke back up with a pain in their temple, 3 seconds after hitting their head. ${firstName} can't feel comfortable any more as a farmhand, ${firstName} need a blade in their hand and a bag of loot at their side.`,
          `${firstName}'re a wandering conman, appearing trustworthy as ${firstName} bend others around their finger, making theirself invaluable to them with the hard work and amazing success ${firstName} provide. Every time ${firstName} leave to fulfill their life's dream of finding a perfect spouse, ${firstName} leave behind a trail of heartbreak, impossible upkeep, and new businesses doomed to fail.`,
          `${firstName}'d probably say that ${firstName}'re about 605-615 now. The years go by in an instant. When ${firstName} was ${firstName}ng ${firstName} devoted their life to meditation. Recently, ${firstName} was visited by a boy, who ${firstName} began to talk with, and would do anything for. He lived, trained with ${firstName}, and eventually succumbed to age. ${firstName}, now unquestionably ancient, ${firstName} have no clue how to interact socially or succeed in anything else, but ${firstName} want to see what world the boy left behind for ${firstName}.`,
          `${firstName}'ve spent their entire life underground, in the same building. Every day, a music box played ${firstName} a lesson. ${firstName} learned languages, numbers, history, how to act properly in society, how to assassinate the high king. Now, the doors finally open and ${firstName} see the outside for the first time. It's time to use all that ${firstName}'ve learned.`,
          `${firstName}'ve always been able to talk to the trees. ${firstName} tell ${firstName} interesting things. How ${firstName} are, what ${firstName} feel, how those who pass through and around them respect or disrespect them. Recently, the trees have been quieter and quieter. ${firstName} need to find out why, for their sake... and theirs.`,
          `${firstName} was drunk. Their low marks in Thermo meant ${firstName} wouldn't be on the dean's roll this semester. Their parents was going to lynch ${firstName}. ${firstName} spend the night weeping, stumbling into a dark part of campus ${firstName} didn't recognize. ${firstName} made a deal. ${firstName} thought ${firstName} was going to intimidate their professor for ${firstName}. ${firstName} woke up in a hay bale, with no phone poles in sight. ${firstName} get a strange feeling that ${firstName} won't be graduating this year.`,
          `${firstName} was an orphan. Their parents died in a plague that went through when ${firstName} was small and, to care for ${firstName}, the town council apprenticed ${firstName} to the local gravedigger. For years ${firstName} served, learning the ins and outs of the physical and spiritual side of dealing with death. ${firstName} learned about their god, the patron of death, from the gravedigger, but his worship always seemed a bit hollow, a little too rote. One night ${firstName} picked up the sacred text he kept on the small shrine in their shared chambers and read it. ${firstName} became shocked and dismayed at the disparity between the soft platitudes their guardian parrots and the dire truths uncovered in their god's scriptures. That night the gravedigger, his home, their entire life burned to the ground as ${firstName} set off to become the god of death's most faithful servant ever.`,
          `Born to caravan guards, as a child ${firstName} traveled with merchants and learned to sort goods, haggle, fix wagons, spot danger, and cook meals on the road. ${firstName} met all sorts of interesting people who paid to be guarded by a convoy. Now that ${firstName} have come of age, ${firstName} want to explore some of places ${firstName} heard about.`,
          `${firstName} is the 11th child of 14 siblings. Instead of hanging around their cramped home, ${firstName} spent their waking hours in a nearby library, learning, sorting books, and doing sums for others for small fee ${firstName} brought home to their parents. ${firstName} have come of age and hope to write a book one day that will sell tens of thousands of copies.`,
          `${firstName} was raised in a dragon's den. One of their parents was a dragon's favorite and the dragon allowed their family to take up residence in his/her home. ${firstName}, and ${firstName} once ${firstName} was old enough, provided services such as greeting guests, expelling uninvited intruders, maintaining inventory, cleaning, and cooking fine meals. ${firstName} have fond memories of playing in a piles of gold, stirring a 2000 gallon stew pot, donning magic clothing and weapons, leafing through esoteric books of powerful magic to look at the pictures, and attempting to outwit their draconic landlord with whatever puzzles and games ${firstName} could think of. ${firstName} left on good terms at the same time the dragon's ${firstName}ngling left to establish its own territory, and ${firstName} hope to carve out a bit of the world for theirself as well.`,
          `${firstName} was raised in an abandoned necromancer's lab by intelligent skeletons and various other undead. ${firstName} ran a lot of errands, being tolerant of sunlight and unlikely to send the whole town fleeing for the hills. Their main mentor was a flamboyant skeleton with a hat of disguise and a penchant for long-winded but thrilling tales of ages past. Armed with ancient weapons, some minor alchemy materials, the lost necromancer's notes, and the skills their undead family taught ${firstName}, ${firstName} now walk the earth. ${firstName} are quite open-minded about creatures of the dark and undeath, but having seen the goodness ${firstName} are capable of, ${firstName} are intolerant of undead who would exist at the expense of others and visit cruelty on the living.`,
          `${firstName} was born into a clan that viewed those born with magical power as evil. During their coming of age ceremony their powers awakened and ${firstName} found theirself surrounded in arcane power. Fearful of ${firstName}, the clan leader cast ${firstName} out. Now ${firstName} roam as an exile from their clan trying to understand their powers.`,
          `Their birth was a summoning deep in the forest, and ${firstName} recall the face of their first parental figure was sheer disappointment. Summoned as a readymade adult, their memory of childhood is non-existent, and less helpful, their summoner teleported away the moment ${firstName} arrived nude on the mossy floor.`,
          `${firstName} don't remember their father at all, but their mother says that ${firstName} was the most handsome and talented bard in all the land. Each day ${firstName} wonder what adventures he must be on, as their village has nothing for ${firstName} but chickens to pluck and hogs to hang. With nothing but pitchfork and hoe in hand ${firstName} set out, determined to find their father, or at least bring back a story for the folks back home.`,
          `Their father was a blacksmith, but he's not truly their father. Their mother cheated on him years ago and he knows it. Whether it's true or not ${firstName}'ll never know. He hates ${firstName} for it nonetheless. He did the bare minimum a father needed to do until ${firstName} was old enough then kicked ${firstName} out despite their mother's plea's. ${firstName} stole the greataxe(or preferred weapon) he was withholding until the customer paid and left their old life behind.`,
          `${firstName} was orphaned at the church of (insert God of Strength, War, Valor here) where ${firstName} was raised from a ${firstName}ng age to become a fierce warrior for their God.`,
          `When ${firstName} was ${firstName}ng, ${firstName} had a thing for fire. It was pretty, destructive, and alluring. One night as their family slept ${firstName} was playing with it and accidentally set the family home ablaze. Their mother awoke to the inferno and using every once of power she had saved ${firstName} from the blaze before succumbing and burning up right in front of their eyes. It was the most beautiful thing ${firstName} ever saw, and if only the world understood, then maybe ${firstName} wouldn't be so afraid of fire.`,
          `Mistress tells ${firstName} that ${firstName} used to be a great Paladin. A sworn warrior of good, bringing justice and light to a terrible land. Then ${firstName} came to her and Mistress may be the strongest enchantress there is, maybe stronger. Now ${firstName} are Mistress's defender, a (insert Warforged, Golem here).`,
          `${firstName} is ... was a member of the city watch. Now, ${firstName} suppose that ${firstName}'ve likely lost that position. Just like their father, ${firstName} was signed up and joined their ranks at quite a ${firstName}ng age. ${firstName} was far too low of a rank to call their job fulfilling or exciting, but ${firstName} didn't really mind it all that much. After work ${firstName}'d spend about half a day's pay drowning their boredom in booze. ${firstName}'ve always had a love for a good brew, but ${firstName} never thought it much of a problem. Until recently. It seems one night ${firstName} decided to go on a week long binge. What few memories ${firstName} have are too fuzzy and disorienting to make any sense of. How ${firstName}'re alive, ${firstName} don't know. During their blackout, ${firstName} seem to have somehow made it to somewhere ${firstName} don't even recognize. ${firstName}'re wearing equipment ${firstName} don't remember acquiring. ${firstName} accidentally set off a cantrip, despite the fact ${firstName}'ve never even seen magic at work, let alone use it. Some guy just told ${firstName} that ${firstName} asked him to get ${firstName} up so ${firstName} could go meet with someone about a new job. ${firstName} decide that ${firstName} need to figure out what happened and that maybe ${firstName} really do have a drinking problem.`,
          `${firstName} grew up alone in a rather large and well kept house, no parents that ${firstName} can remember, or relatives ${firstName} visited, but food would always appear out of nowhere in the pantry, as did gold in the sofa and water in the well. One day, ${firstName} woke up on the ground, the house having completely disappeared from existence. In its place, a note remained, reading 'Stay Strong!' Of course, ${firstName} began adventuring from there.`,
          `${firstName} narrowly escaped their home city after a nasty plague was set upon it. The man who helped ${firstName} escape was a high nobleman, and ${firstName} later heard that he was culled along with much of the city. That city was their home, ${firstName} loved it, and now it is all but gone.`,
          `${firstName} was a member of minor nobility that got wiped out by a conspiracy, so ${firstName} fled to a monastery. But then ${firstName} got kicked out for tricky one of the priest(ess)es into breaking their vows of chastity.`,
          `${firstName} was part of a desert caravan that ran out of water. But a vision appeared leading to an unknown oasis ... and commanding ${firstName} to go to the city of (Plot starts here).`,
          `${firstName} was raised by a lovely mother and a father that turned out to be a true polymorphic gorilla. As a result, some of their beliefs and habits are a bit ape-ish.`,
          `${firstName} was born in a tribe of nomadic people. In their ${firstName}ng age ${firstName} and their parents got captured in a raid and sold as slaves. Their family got lucky because ${firstName} have been sold to a noble. His castle was in a cold region with hard winters. He was a brutal leader but fair to everybody who did as he told. ${firstName} learned the etiquette of the royal court and got along very well. As ${firstName} became an adult he gave ${firstName} to another lord to become a soldier. Their kingdom was at war. On the way to their new owner their caravan got raided by their enemy. ${firstName} somehow escaped. A few days later ${firstName} found out that their former lord has been attacked and everyone including their parents was murdered. ${firstName} left the kingdom and never came back till today.`,
          `Born an orphan, ${firstName} was adopted by a wealthy family at a ${firstName}ng age to be raised as help. (How the family treated ${firstName} growing up is up to the player.) Shortly after their 18th birthday the entire estate is burned to the ground and ${firstName} are the only known survivor. ${firstName} are suspect and wanted by the local, kingdom for questioning and crimes against the family. Can ${firstName} clear their name before the kingdom picks ${firstName} up, are ${firstName} to blame for the fire, or are ${firstName} innocent and wrongly accused? Will ${firstName} be able to find the villain in time?`,
          `A retired member of the army, ${firstName} have been jaded by war, seen far more than any one person aught to see in a hundred life times. After settling down and manning an inn for some years, ${firstName}'ve gotten the itch for adventure, and now ready to strike out on their own and see the good in the world.`,
          `Given up as sacrifice at a ${firstName}ng age by a small village to insure their harvest, ${firstName} was picked up by a band of traveling performers. Growing up with them ${firstName} traveled the country side. Upon reaching adulthood, their adopted parents told ${firstName} the truth of where ${firstName} came from. Do ${firstName} venture off for revenge? Do ${firstName} forgive and forget?`,
          `Sold into slavery at ${firstName}ng age, ${firstName} where set free by traveling adventures early in their teen years. Since then ${firstName} have always dreamed of becoming one theirself. Not wanting to waste away their life tending to home and hearth ${firstName}'ve set out for the call of the wild.`,
          `Daughter of a diplomat, ${firstName} traveled the world's capitals with their father. ${firstName} grew bored of the stuffy and bureaucratic business and roamed the foreign streets and markets. It is here ${firstName} fell in with a dashing rogue who stole their heart and taught ${firstName} the secrets of his world over one glorious summer. ${firstName} resolved to embark on a career of their own choosing, not their father's.`,
          `A radiant portal spits ${firstName} out. The last words ${firstName} remembers were 'Penance'. Aasimar know who Reynar is, but won't disclose it even under torture.`,
          `Raised by pirates ${firstName} raided the wrong temple and ${firstName} was the sole surviver.`,
          `Raised by ogres they always threatened to eat ${firstName} growing up. ${firstName} payed them tribute and grew above the goblin ranks. Eventually ${firstName} made their bid for freedom by poisoning all their dinners. ${firstName} is a legend amongst the goblins and ogres.`,
          `${firstName} had a normal childhood in the city. Schooling, family, friends, playing on the large stone walls...but all that was taken away in an instant when 200 hollow-core Warforged self destructed... leveling the city ${firstName} once called home. Their master and her apprentice long dead ${firstName} hunt down the last of their demented toys to honor their loss and make the burn marks on their back hurt a little less.`,
          `Taken in by a pack of traveling Werewolves ${firstName} was given a silver necklace and acted as their cover. ${firstName} outed them in a city and ${firstName} was finally liberated. Their daughter still hunts ${firstName}... waiting to find ${firstName} alone.`,
          `As an orphan ${firstName} was taken in by a sweet, old, good-natured necromancer. ${firstName} fetched goods from the nearby city, helped dig up parts, played with his creations... ${firstName} left on good terms and ${firstName} have no fear of the undead.`,
          `${firstName}'s heart opens a portal to the Nine Hells... according to the prophecy.`,
          `Their family is known amongst all Dragonborn...and loved for their ancestors deeds. Which was promised in blood oath to never be disclosed to ${firstName}.`,
          `${firstName} grew up seeing visions of battle in their dreams. Horrible, cruel visions of a war far away. ${firstName} share a soul with a Warforged on another continent...and ${firstName} are seeking each other out.`,
          `${firstName} was raised by giant eagles. ${firstName} learned to flush out prey and perform menial tasks in service to their sky lords. Eventually ${firstName} got too heavy to carry and ${firstName} all abandoned ${firstName}...all except their rookmate Kyla. She was the runt, left to die, and always keeps an eye out for ${firstName}.`,
          `Raised by dwarves in a mountain hold it's no wonder ${firstName} have such a surly disposition. ${firstName} know the runes for entry into most dwarf fortresses and can drink ale with the best of them. Switch this background to 'Halfling' and 'farm' if PC is a dwarf.`,
          `Raised in a lighthouse on a lone island ${firstName} would danger the rocks to salvage whatever ${firstName} could from the unfortunate ships scuttled on the rocks. This made ${firstName} a strong swimmer. Be it pirate or merchant their family name is well known and appreciated for the work ${firstName} do.`,
          `${firstName} was forced to murder their family when ${firstName} became vampires. The town didn't believe ${firstName} and now ${firstName} is on the run. Rumor is one of their family survived their gruesome attack...`,
          ]
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
