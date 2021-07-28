import React, { Component } from 'react'
import { addNpc } from '../actions/characters'
import { connect } from 'react-redux'

class RandomNpc extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            firstname: "",
            lastname: "",
            title: "",
            race: "",
            sex: "",
            alignment: "",
            melee: "",
            ranged: "",
            health: "",
            armor: "",
            str: "",
            dex: "",
            con: "",
            wis: "",
            cha: "",
            npcClass: "",
            trait: ""
        }
    }

    handleClick = event => {
        event.preventDefault()
        
        
        const raceArray = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Human", "Tiefling", "Goliath", "Firbolg", "Goblin", "Orc", "Tabaxi", "Warforged"]
        const sexArray = ["Male", "Female", "Non-Binary"]
        const alignmentArray = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
        const healthArray = ["10", "15", "20", "25", "30"]
        const armorArray = ["Padded 11", "Leather 11", "Studded-Leather 12", "Hide 12", "Chain-Shirt 13", "Scale-Mail 14", "Spiked-Armor 14", "Breatplate 14", "Halfplate 15", "Ring-Mail 14", "Chain-Mail 16", "Splint 17","Plate 18"]
        const meleeArray = ["Battle Axe [1d8 Slashing]", "Club [1d4 Bludgeoning]", "Dagger [1d4 piercing]", "Greataxe [1d12 Slashing]", "Great Club [1d8 Bludgeoning]", "Hand Axe [1d6 Slashing]", "Long Sword [1d8 Slashing]", "Quarterstaff [1d6 Bludgeoning]", "Rapier [1d8 Piercing]", "Scimitar [1d6 Slashing]", "Short Sword [1d6 Slashing]"]
        const rangeArray = ["Blowgun [1 Piercing Range (25/100)]", "Light Crossbow [1D8 Piercing Range(80/320)]", "Dart [1D4 Piercing Range(20/60)]", "Shortbow [1D6 piercing Range(80/320)]", "Sling [1D4 piercing Range(30/120) ]", "Hand Crossbow [1D6 Piercing Range(30/120)]", "Heavy Crossbow [1D10 piercing Range(100/400)]", "Longbow [1D8 piercing Range(150/600)]"]
        const strArray = ["1", "2", "3", "4" ,"5", "6"]
        const dexArray = ["1", "2", "3", "4" ,"5", "6"]
        const conArray = ["1", "2", "3", "4" ,"5", "6"]
        const wisArray = ["1", "2", "3", "4" ,"5", "6"]
        const chaArray = ["1", "2", "3", "4" ,"5", "6"]
        const npcClassArray = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk","Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"]
        const traitArray = ["Honest", "Brave", "Compassionate", "Leader", "Courageous", "Unselfish", "Loyal", "Hard-working", "Independent", "Selfish", "Responsible", "Considerate", "Self-confident", "Humble", "Poor", "Rich", "Strong", "Tall", "Dark", "Light", "Handsome", "Pretty", "Ugly", "Messy", "Gentle", "Wild", "Joyful", "Busy", "Patriotic", "Neat", "Popular", "Successful", "Short", "Prim", "Proper", "Dainty", "Able", "Fighter", "Tireless", "Plain", "Expert", "Imaginative", "Conceited", "Mischievous", "Demanding", "Thoughtful", "Keen", "Happy", "Disagreeable", "Simple", "Fancy", "Plain", "Excited", "Studious", "Inventive", "Creative", "Thrilling", "Intelligent", "Proud", "Fun-loving", "Daring", "Bright", "Serious", "Funny", "Humorous", "Sad", "Lazy", "Dreamer", "Helpful", "Simple-minded", "Friendly", "Adventurous", "Timid", "Shy", "Pitiful", "Cooperative", "Lovable", "Ambitious", "Quiet", "Curious", "Reserved", "Pleasing", "Bossy", "Witty", "Energetic", "Cheerful", "Smart", "Impulsive", "Humorous", "Sad", "Lazy", "Dreamer", "Helpful"]


        const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
        const randomSex = sexArray[Math.floor(Math.random() * sexArray.length)]
        const randomAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)]
        const randomHealth = healthArray[Math.floor(Math.random() * healthArray.length)]
        const randomArmor = armorArray[Math.floor(Math.random() * armorArray.length)]
        const randomMelee = meleeArray[Math.floor(Math.random() * meleeArray.length)]
        const randomRanged = rangeArray[Math.floor(Math.random() * rangeArray.length)]
        const randomStr = strArray[Math.floor(Math.random() * strArray.length)]
        const randomDex = dexArray[Math.floor(Math.random() * dexArray.length)]
        const randomCon = conArray[Math.floor(Math.random() * conArray.length)]
        const randomWis = wisArray[Math.floor(Math.random() * wisArray.length)]
        const randomCha = chaArray[Math.floor(Math.random() * chaArray.length)]
        const randomNpcClass = npcClassArray[Math.floor(Math.random() * npcClassArray.length)]
        const randomTrait = traitArray[Math.floor(Math.random() * traitArray.length)]
        
        const randomFirstNameFunction = () => {

            const maleNameArray = ["Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]
            const femaleNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Stitle","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha"]
            const nonBinaryNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Stitle","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha","Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]

            if (randomSex == "Male") {
             return maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
            } else if (randomSex == "Female") {
              return femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
            } else {
             return nonBinaryNameArray[Math.floor(Math.random() * nonBinaryNameArray.length)]
            }
        }
        

        const firstname = randomFirstnamefunction()
        const lastname = randomLastname
        const title = randomTitle
        const race = randomRace
        const sex = randomSex
        const alignment = randomAlignment
        const melee = randomMelee
        const ranged = randomRanged
        const health = randomHealth
        const armor = randomArmor
        const str = randomStr
        const dex = randomDex
        const con = randomCon
        const wis = randomWis
        const cha = randomCha
        const npcClass = randomNpcClass
        const trait = randomTrait

        const characterToAdd = {
            firstname: this.state.firstname + firstname,
            lastname: this.state.lastname + lastname,
            title: this.state.title + title,
            race: this.state.race + race,
            sex: this.state.sex + sex,
            alignment: this.state.alignment + alignment,
            melee: this.state.melee + melee,
            ranged: this.state.ranged + ranged,
            health: this.state.health + health,
            armor: this.state.armor + armor,
            str: this.state.str + str,
            dex: this.state.dex + dex,
            con: this.state.con + con,
            wis: this.state.wis + wis,
            cha: this.state.cha + cha,
            npcClass: this.state.npcClass + npcClass,
            trait: this.state.trait + trait
        }
        this.props.addNpc(characterToAdd)
    }

    render() {
        return (
            <div>
                <fieldset className='random-form'>
                    <form onSubmit={this.handleClick} >
                        <button type="submit" className='random-button'>Random <b>NPC</b></button>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default connect(null, { addNpc })(RandomNpc)
         