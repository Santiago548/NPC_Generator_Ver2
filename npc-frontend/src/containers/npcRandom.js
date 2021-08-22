import React, { Component } from 'react'
import { addNpc } from '../actions/npcs'
import { connect } from 'react-redux'


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
        
        const LastNameArray = ["Atwater", "Agassi", "Apatow", "Akagawa", "Averescu", "Arrington", "Agrippa", "Aiken", "Albertson", "Alexander", "Amado", "Anders", "Ashsorrow", "Humblecut", "Ashbluff", "Marblemaw", "Armas", "Akka", "Aoki", "Aldrich", "Apak", "Alinsky", "Desai", "Darby", "Draper", "Dwyer", "Dixon", "Danton", "Desmith", "Ditka", "Dominguez", "Decker", "Dobermann", "Dunlop", "Dumont", "Dandridge", "Diamond", "Dobra", "Dukas", "Agnello", "Alterio", "Bidbury", "Botkin", "Benoit", "Biddercombe", "Baldwin", "Bennett", "Bourland", "Boadle", "Bender", "Best", "Bobshaw", "Bersa", "Belt", "Bourn", "Barke", "Beebe", "Banu", "Bozzelli", "Bogaerts", "Blanks", "Evert", "Eastwood", "Elway", "Eslinger", "Ellerbrock", "Eno", "Endo", "Etter", "Ebersol", "Everson", "Esapa", "Ekker", "Escobar", "Eggleston", "Ermine", "Erickson", "Keller", "Kessler", "Kobayashi", "Klecko", "Kicklighter", "Kidder", "Kershaw", "Kaminsky", "Kirby", "Keene", "Kenny", "Keogh", "Kipps", "Kendrick", "Kuang", "Fairchild", "October", "Vespertine", "Fellowes", "Omen", "Willow", "Gannon", "Presto", "Windward", "Grell", "Powers", "Wixx", "Halliwell", "Quellings", "Xanthos", "Hightower", "Quill", "Xenides", "Idlewind", "Rast", "Chamillet", "Bougaitelet", "Hallowswift", "Coldsprinter", "Winddane", "Yarrow", "Illfate", "Riddle", "Yew", "Jacaranda", "Yearwood", "Yellen", "Yaeger", "Yankovich", "Yamaguchi", "Yarborough", "Theyngblood", "Yanetta", "Yadao", "Winchell", "Winters", "Walsh", "Whalen", "Watson", "Wooster", "Woodson", "Winthrop", "Wall", "Sacredpelt", "Rapidclaw", "Hazerider", "Shadegrove", "Wight", "Webb", "Woodard", "Wixx", "Wong", "Whesker", "Yale", "Yasumoto", "Yates", "Theynger", "Yoakum", "York", "Rigby", "Zaba", "Surrett", "Swiatek", "Sloane", "Stapleton", "Seibert", "Stroud", "Strode", "Stockton", "Scardino", "Spacek", "Spieth", "Stitchen", "Stiner", "Soria", "Saxon", "Shields", "Stelly", "Steele", "Chanassard", "Ronchessac", "Boneflare", "Monsterbelly", "Truthbelly", "Sacredmore", "Malfoy", "Moses", "Moody", "Morozov", "Mason", "Metcalf", "McGillicutty", "Montero", "Molinari", "Marsh", "Moffett", "McCabe", "Manus", "Malenko", "Mullinax", "Morrissey", "Mantooth", "Mintz", "Groves-Chestnut", "Cheever-Waters", "Bartleby-Everson", "Acoff-Sereno", "Sloane-Hooper", "Coffey-Macklin", "Sisko-Sinclair", "Lichter-Seibert", "Zubarry-Devlin", "Dabney-Aparo", "Glick-Wilcox", "Winchell-Ojeda"]
        const raceArray = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Human", "Tiefling", "Goliath", "Firbolg", "Goblin", "Orc", "Tabaxi", "Warforged"]
        const sexArray = ["Male", "Female", "Non-Binary"]
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
        const npcClassArray = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"]
        const traitArray = ["Honest", "Brave", "Compassionate", "Leader", "Courageous", "Unselfish", "Loyal", "Hard-working", "Independent", "Selfish", "Responsible", "Considerate", "Self-confident", "Humble", "Poor", "Rich", "Strong", "Tall", "Dark", "Light", "Handsome", "Pretty", "Ugly", "Messy", "Gentle", "Wild", "Joyful", "Busy", "Patriotic", "Neat", "Popular", "Successful", "Short", "Prim", "Proper", "Dainty", "Able", "Fighter", "Tireless", "Plain", "Expert", "Imaginative", "Conceited", "Mischievous", "Demanding", "Thoughtful", "Keen", "Happy", "Disagreeable", "Simple", "Fancy", "Plain", "Excited", "Studious", "Inventive", "Creative", "Thrilling", "Intelligent", "Proud", "Fun-loving", "Daring", "Bright", "Serious", "Funny", "Humorous", "Sad", "Lazy", "Dreamer", "Helpful", "Simple-minded", "Friendly", "Adventurous", "Timid", "Shy", "Pitiful", "Cooperative", "Lovable", "Ambitious", "Quiet", "Curious", "Reserved", "Pleasing", "Bossy", "Witty", "Energetic", "Cheerful", "Smart", "Impulsive", "Humorous", "Sad", "Lazy", "Dreamer", "Helpful"]
        const backgroundArray = [
            // `They served as a squire to the theynger son of a local lord, a minor political figure. Two years ago he moved to the city, to study magic and indulge in debauchery, and released they from their service (and their salary). They've heard that Bordertown has uses for someone with skill of arms, and so they've hopped onto the first coach available.`,
            // `They've always wanted to be an adventurer. They sat on their pappy's lap as he told and retold the tales of their uncle Algar Spiderspear, and their great uncle Kenway Fireheart, and their great great aunt Thea Earthforger. They didn't understand that those were meant to be cautionary tales, and that there's a reason they don't have any cousins.`,
            // `They never really liked the family dye business. As the first born they were always expected to take over. After lamenting one night drunkenly at the tavern they met a gnome who promised to help. On returning home their family did not recognize they and their theynger sibling was set to inherit. They drove they off their land to homelessness. They never saw the gnome again.`,
            // `They were a normal farmer, nothing special about they. Over the years, their farm started losing money and they had to let more and more of their staff go until it was just they left. One day when they are at the local inn drinking their problems away and adventurer walks through and buy the entire inn several rounds of drinks from his large sack of golden coins. Since that day they have sold their farm and used the money to buy some basic adventuring supplies and head out to build their fortune.`,
            // `They were a squire for the local knight and Lord of their province. One day while cleaning his library they come across and gold handle behind some dusty books. As they turned the handle it felt as if their brain was opening like a door. When they turned the handle back a a dusty grimore fell into their hands and they heard a voice inside their head, they decided to name the voice Greg.`,
            // `They grew up as a milk maid, over the course of their child hood they realised that they had a special connection with all animals and nature. One day on their way back from town bandits jumped out from the side of the road and attacked they. Startled, they this their hands out towards them and magic shot out from their finger tips. The next day they packed their things and headed out to learn more about what they had just done and how to control it.`,
            // `Their father was a miner, their mother and innkeeper, they spent their childhood poking the ashes in the fireplace waiting for something to happen. One day a halfling fell down their chimney and talk they into hiding him in their room, his only name that he gave they was Miro, but he taught they many thing over a few nights, once he felt 'it' had blown over he packed his things and invited they to join him. He trained they to be a master thief and became almost a second father to they over the course of 2 years. Until one day he set they up, and ran away with the treasure leaving they to rot in the king's jail.`,
            // `They always had anger problems, then again most sailors do, theirs were a bit different though. One day they were fishing off the side of their ship when they caught something very heavy on their line. When they finally reeled it in they found a gold ring, but the gold was almost blood red, and in they hand it felt like it had almost no weight. Their crew members wanted to see the ring, but they only saw it as normal gold, they saw it for something much more incredible. When they tried to take it from they they flew into a rage beating them senseless until they jumped into a rowboat and made their way back to shore. They know that they will probably come after they, but none of that matters, they know that they must go to the mountains. They just don't know where or what a mountain is.`,
            // `They grew up on a small farm. Their family was poor, but they managed. They idolized their older brother as a child, even though he wasn’t always nice to they in return. Then one day their brother was conscripted into the army, and they haven’t heard from him since - none of the money he promised to send home, not even a letter. They have finally come of age theirself and set out to find him, or at least find out what happened to him.`,
            // `When they were a teenager, they stopped by a fortune teller’s stall at a festival, just out of idle curiosity. The fortune teller performed her rites and examined they, and promptly burst out laughing. She refunded their money and refused to tell they what she had seen. All she told they was, “Good luck!”`,
            // `They were a middle-aged craftsman/woman with a successful business, several children, and a happy life. One day they came home to discover their spouse was cheating on they. Newly divorced, they had a bit of a mid-life crisis and spent all of their savings on a [book of magic/set of shiny armor/fencing lessons/musical instrument/etc]. Gosh darn it, they want to have an adventure!`,
            // `Their parents are scholars, historians specifically, and they've been raised on countless trips to archaeological digs, libraries, and lectures with them. They may or may not have taken to the studies as much as they'd like, but when the restless need to spread their wings and get away from home took hold, they were excited to request that they document all the things they discover on their adventures and bring them home to share.`,
            // `They were the oldest child of a prosperous peasant. They had a life of beer, bread and barn dances to look forward to. Then, they went into the big town on a religious pilgrimage, and were knocked out and press-ganged into the army. Turns out, they loved it and never looked back. Their dad had other kids. Too bad the Goblin Wars are over now and their lord disbanded his army.`,
            // `They were a slave, on a big estate. One day, a charismatic leader got the slaves to rise in rebellion. They're pretty sure there are others who didn't end up crucified, but they've never met any of them. Here in the city, nobody has any idea the rebellion even happened.`,
            // `They were a village priest. Births, deaths, rites of passage. Holy cow, was it boring. They renounced their vows and moved on. They've never suffered from this: the gods have never wrought revenge upon they. They get the feeling they don't care, or they're not there. Some of the things they learned (healing, counseling) have proved pretty useful.`,
            // `They were a wealthy playboy, the son of a rich merchant. He got murdered; they lost what was left gambling. Turns out they're pretty good in a fight. They still have expensive tastes.`,
            // `They were trained as a courtesan. They got blamed for breaking up a marriage among nobles. Some of them still like they; others want they dead. Sometimes, it's hard to tell.`,
            // `They were conscripted to join the army, but it was a sham. They and a couple others were lured into an ambush by bandits. Though outnumbered, their group managed to fend them off. Unfortunately, only they survived the ordeal and managed to escape before the bandits got any more reinforcements, though not without taking a valuable item the bandits were after. Now they're on the run hoping to lure the bandits away from home.`,
            // `They are transported to another plane of existence where everything and everyone from their past life has occurred just the same, except they. In this plane they died early in life/never been born/had rose as a crime lord that went missing as his reign fell/whatever else they can up with.`,
            // `Their family has been guarding an ancient artifact for generations that has been said to hold immense power. It is stolen under their watch but they track it down JUST as it is about to be used for evil. It's a dud. Now they journey around to find the real artifact that their family should've been guarding/ find the reason why they've been given such a fool's errand to follow for so long.`,
            // `A warlock finds out they're not the only user of their patron's magic. Others share the same pact they made with it and now the patron desires them all to find each other and fight to the death. The winner shall be granted the true power the patron split between them/wish/ immortality/ whatever else.`,
            // `Their mother carried their little body through the woods, with her dying breath she brought they to the wise man of the forest and collapsed as soon as she told him their name. He raised they in her stead until he died of ...`,
            // `Despite being cheerful and righteous, they can't remember anything before they're 25th birthday. Every time they kill something evil, they get a small memory back. Every quest returns to they a piece of their former self...and the more they see, the more they suspect they were not a good person.`,
            // `On a mission to buy some new clothes they were mistaken for an adventurer who had already orders some. They were thus outfitted and always one to role with with what life throws at they decided to run with it. Somewhere there is an underdressed adventurer looking for her clothes and wondering who stole her identity.`,
            // `Their parents always said that reading would be the death of they. Despite this they taught theirself how to read behind their back. They then discovered the will and testament of their real parents and realize they are being raised by their uncle who controls all the family wealth. Fearful for their life and feeling betrayed they abandon the household to make their own name and find out what really happened to their parents. Their uncle may or may not know that they know about the deception.`,
            // `Once, they belonged into a wealthy and noble family, who unofficially ruled the city, due to their wealth and power. They were enjoying their time in the sun and were proud of their family name, until they discovered their father is a vampire, who works with evil necromancers and together turn civilians into monsters. Conflicted on their hatred, feelings of betrayal, sense of duty and love for their house, they grabbed their dearest friends and hit the road, forsaking their family name and keeping the secrets of their family hidden.`,
            // `They were raised by travelling merchants, going with them wherever they went. As they got older, they started teaching they the ways of the trade, and they planned to travel and trade with them their whole life. One day, their caravan was attacked by bandits, who killed everyone, and would have killed they, if they didn't get away. Since then, they abandoned their dream, and have been making a living out of adventures.`,
            // `They were trained by a master of their skill, like many others, in an appropriate organisation. One day, they set each of the students on a quest for retrieving a mythical item. The thing their character was supposed to find though, was simply a myth. When they told the master the story, they didn't believe they, and expelled they from the order.`,
            // `Their parents were retired adventurers, who told they their epic tales, and probably expected they to follow their steps. When they reached adulthood, they set out to do even more epic deeds than them, despite having no training at all.`,
            // `The first thing their remember is being rescued from rubble by a good-hearted noble, who then patched they up and offered his help in trying to find who they are. The only clue they have are their class abilities (which are like muscle memory to they), and the knowledge of whatever the collapsed building was.`,
            // `They grew up as a normal city kid, and never really did anything interesting with their life. They had a decent job and was going to get married soon, until the day they got lost in the wilderness. That was years ago, and they have never been able to find their way back to their hometown, because nobody seems to know about it.`,
            // `They grew up with nothing, cheating and stealing where they could. All they’ve ever earned was a target on their back and bad reputation. Eventually they found theirself on the run from the wrong kind of people. In a tavern they met a wizard that promised a way out. With nowhere else to turn, they reluctantly agreed. The wizard took they to his study and performed a ritual to switch their face with the face of another person of similar build. Now they go off into the world with a new identity and a chance to start over. Or so they thought... (The face they wear has it's history too).`,
            // `They are the child of a single woman taken in by a traveling caravan of performers while pregnant. She never described their father to they, and she changes the subject when they ask. Those in the caravan are their substitute family. They have several 'grandparents,' 'aunts,' 'uncles,' and 'cousins.' They took part in the caravan's entertainment for coin, whether as a performer or someone behind the scenes. When they felt the need, they left the caravan of their own free will to pursue their journey. They were given a special crest with the performers' symbol so they would be welcomed back if they returned.`,
            // `They are an experiment, either made or modified for a reason they cant even remember. with so many genetic changes and magical 'enhancements' that they cant even count the amount of places where they're from. A lab rat from a man who seemed to want to do good, and claims to try to have done so but never told what he was doing specifically, never said what his end goal was and just kept going, and going and going. The doctor was put to death for his experiments. Whatever purpose they had been made for is now lost to they, as is just about everything they used to know. They don't know who they were, assuming they were anything other than this.`,
            // `They fell into life threatening trouble one day exploring some ruins close to town. There they found a strange altar with and old woman sitting behind it. She said she could help they escape, if they promise to serve her. They're pretty sure she's a god, but she won't tell they her name, or what she's the god of. She shows up sometimes and points, and whatever she points at they must somehow acquire and leave behind in certain ruins. Her tastes are getting kind of extravagant.`,
            // `They were once the son of a wealthy merchant who traveled more than average compared to other merchants at the time. Their father would often take they and their theynger sister on some of his shorter journeys, exposing they to a dangers of sailing across the seas. On one advantage their father's ship was attacked by pirates killing everyone on board. Because of the tragic death of their father they desire revenge, and will do anything to kill them.`,
            // `Their an anti-social person who lives a quiet life in a rural part of the kingdom. In their quiet life they discovered a interest in ancient artifacts left over from the last civilization. Known most of their down time is sent studying these artifacts through reading ancient texts, and practicing their magic.`,
            // `They sold vegetables from a street cart they were still making payments on. A wild street chase broke out and one of the escapees upended their cart to delay some guards, shattering it badly. Reeling from the financial loss of their vegetables and blocked from setting up another shop by overzealous debt-collector harassment, they left town with all they had hoping to put their life back together.`,
            // `They were once a wicked individual who took pleasure in the misery of others. They were then struck by powerful cursed magic that turned their entire outlook on life around, so that they now are a force for good who brings happiness to others. Their dark past still haunts they, and sometimes their old friends try to call they back.`,
            // `They were a simple bed-and-breakfast inn owner. One of their guests left for a night of carousing and never returned. Among their left-behind possessions was an ornate locked box with no key. Hoping to find the owner or their organization, they took the box to a local bush-wizard to get it identified. While they were away, their inn was ransacked and burned to the ground. Word got around they had the box and they were being hunted, so they fled in terror.`,
            // `When they were theyng, they found a diary that would message back to they if they wrote in it. It taught they many mysterious skills and spells. One day, the diary told they that it couldn't write to they anymore, and it went silent. They set off when they got older to explore some of the places the diary mentioned and uncover the identity of their mysterious penpal.`,
            // `When they were theyng, they were polymorphed into a flying horse by a malfunctioning spell. Some explorers promised to help they, and they taken on many harrowing adventures. The help never came, as the explorers preferred a flying horse. Decades pass, they were lost and sold many times. Eventually a kindly witch made they whole again, picking up human life at the age they were changed. (Can substitute for flying carpet if they aren't a horse person.)`,
            // `A lonely child found a ring of wishing. They wished for their imaginary friend, they, to become real. The child soon became sick and died, and their parents blamed they and ran they out of town. Using the powers that the child imagined they to have, they have begun to search for a purpose.`,
            // `They were born dumb to a wealthy family with an estate. Ashamed and not knowing what else to do with they, their family used they as a slave, setting they to all the most awful and menial tasks. Not knowing any better, they became strong with a smile. One evening, they showed kindness to an old woman who turned out to be a fairy queen in disguise. She blessed they with intelligence. Disgusted with the way they were treated, they left home, hoping to learn to read, study, and start life anew.`,
            // `After their town was razed and everyone they knew died, they woke up in the middle of the ashes. Something, for some reason, kept they alive, and a life of adventure might give they the opportunity to find out what and why.`,
            // `The bandits thought they left nothing of value in their village, and maybe they were right because that night they lost their arm and way of life.`,
            // `They grew up as the region's stereotype, a poor farmer with a passion for whittling. After inheriting the farm prospectors found gold in the river and they sold the farm for more money than they thought was in circulation. Unsure of how to spend money and unwilling to save it, they purchased an abandoned adventurer's guild with plans to turn it into a wooden toy shop before finding it not quite as abandoned as they thought.`,
            // `They are a farmer who found a talking rock which only they could hear, in the middle of their own farm. Everyone thinks they lost their mind, which eventually leads to an unwanted embargo, and they go bankrupt.`,
            // `They lead a relatively normal life as a tailor in a small town until their infant daughter started showing signs of sorcerous abilities and was stolen in the night.`,
            // `They were the student of the greatest bard in the land, until they murdered him.`,
            // `They were trapped in a cloud giant's castle for years living of of giant crumbs. Only recently were they able to escape.`,
            // `They were an orphan taken in by the local butcher. They were a loner bug dilligent and they loved their adoptive father. One day the village is attacked by bandits, who kill their adoptive father. They get their revenge on the bandits but the brutality of their vengeance alienates they even more to the rest of the village.`,
            // `They grew up watching the pit fighters in the capital city, marveling at their strength and ability. They spent years training on their own in both armed and hand fighting, with the ultimate goal of entering the pit and becoming a legend in their own right. As they are about to enter for their first match, their opponent and the announcer come over to lay out the match, revealing all of the fights are pre-determined and set up so no one is really injured. They walked away and now are trying to find their place in the world.`,
            // `For their entire life up to now they have watched others perform magic, they were few, but fantastical and filled their heart with wonder. Practice and study as they may, they were never able to recreate even simple cantrips that the local wizard has tried to teach they. Distraught, they ran to the woods to a secret clearing to cry for a bit. That day something incredible happens, magic shot from they fingertips, and shortly after a man in a suit and tie walk up from the edge of the clearing and sets his briefcase down on a large flat rock that they had never seen sitting there before. “It seems we have some paperwork to go over,” he said with a smile.`,
            // `They met and joined a errant knight and his small court that traveled searching for riches and a new home for this lord and his barren town after the war. After years of service and being brought to be loyal to this cause, the knight died in his sleep all the sudden and his attendants looted the caravan and ran off, leaving they to bury their teacher, pack what gear he had and was left behind and pick up the quest of Knighthood to this unknown lord as he was show.`,
            `${firstName} was a demon hunter on the desert planet Derach. ${firstName} fought alongside their small battalion and this group was revered for their efficiency and kept to themselves. One day a strange rift opened and pulled the group apart banishing each of the soldiers to different corners of the universe. ${firstName} only goal once reaching a strange green planet was to find a way to portal back to the demon’s world and find their companions. Unfortunately C was captured by the planets inhabitants and forced into slavery.`,
            // `They only remember the last 5-10 years of their live. Before that it is all blank. Their parents/caretakers/close ones tell they that they had a terrible accident and lost all memory after the accident. But then they find written agreements of their adoption, detailing that they were selected for an experimental form of adoption. This meant that their memory was wiped and their biological parents wiped out. They have been engineered by wizards/scientists to be the perfect human. They then find a note that the amnesia can be reversed if [plot hook] is done. A warning is written in big letters that reversing the amnesia spell might have unforeseen effects.`,
            // `They spent most of their childhood and early adulthood as a farmer, the difficulty of their daily work offset by the amazing times they've had with friends and family. One day, they hit their head on a rock. When they next awoke, they were in leather armor, on a sailing ship as part of an adventuring party. An entire life of adventure, riches, and excitement unfolded, and as they lay down for the last time, surrounded by their allies and loved ones, they woke back up with a pain in their temple, 3 seconds after hitting their head. They can't feel comfortable any more as a farmhand, they need a blade in their hand and a bag of loot at their side.`,
            // `They're a wandering conman, appearing trustworthy as they bend others around their finger, making theirself invaluable to them with the hard work and amazing success they provide. Every time they leave to fulfill their life's dream of finding a perfect spouse, they leave behind a trail of heartbreak, impossible upkeep, and new businesses doomed to fail.`,
            // `They'd probably say that they're about 605-615 now. The years go by in an instant. When they were theyng they devoted their life to meditation. Recently, they were visited by a boy, who they began to talk with, and would do anything for. He lived, trained with they, and eventually succumbed to age. They, now unquestionably ancient, they have no clue how to interact socially or succeed in anything else, but they want to see what world the boy left behind for they.`,
            // `They've spent their entire life underground, in the same building. Every day, a music box played they a lesson. They learned languages, numbers, history, how to act properly in society, how to assassinate the high king. Now, the doors finally open and they see the outside for the first time. It's time to use all that they've learned.`,
            // `They've always been able to talk to the trees. They tell they interesting things. How they are, what they feel, how those who pass through and around them respect or disrespect them. Recently, the trees have been quieter and quieter. They need to find out why, for their sake... and theirs.`,
            // `They were drunk. Their low marks in Thermo meant they wouldn't be on the dean's roll this semester. Their parents were going to lynch they. They spend the night weeping, stumbling into a dark part of campus they didn't recognize. They made a deal. They thought they were going to intimidate their professor for they. They woke up in a hay bale, with no phone poles in sight. They get a strange feeling that they won't be graduating this year.`,
            // `They were an orphan. Their parents died in a plague that went through when they were small and, to care for they, the town council apprenticed they to the local gravedigger. For years they served, learning the ins and outs of the physical and spiritual side of dealing with death. They learned about their god, the patron of death, from the gravedigger, but his worship always seemed a bit hollow, a little too rote. One night they picked up the sacred text he kept on the small shrine in their shared chambers and read it. They became shocked and dismayed at the disparity between the soft platitudes their guardian parrots and the dire truths uncovered in their god's scriptures. That night the gravedigger, his home, their entire life burned to the ground as they set off to become the god of death's most faithful servant ever.`,
            // `Born to caravan guards, as a child they traveled with merchants and learned to sort goods, haggle, fix wagons, spot danger, and cook meals on the road. They met all sorts of interesting people who paid to be guarded by a convoy. Now that they have come of age, they want to explore some of places they heard about.`,
            // `They are the 11th child of 14 siblings. Instead of hanging around their cramped home, they spent their waking hours in a nearby library, learning, sorting books, and doing sums for others for small fee they brought home to their parents. They have come of age and hope to write a book one day that will sell tens of thousands of copies.`,
            // `They were raised in a dragon's den. One of their parents was a dragon's favorite and the dragon allowed their family to take up residence in his/her home. They, and they once they were old enough, provided services such as greeting guests, expelling uninvited intruders, maintaining inventory, cleaning, and cooking fine meals. They have fond memories of playing in a piles of gold, stirring a 2000 gallon stew pot, donning magic clothing and weapons, leafing through esoteric books of powerful magic to look at the pictures, and attempting to outwit their draconic landlord with whatever puzzles and games they could think of. They left on good terms at the same time the dragon's theyngling left to establish its own territory, and they hope to carve out a bit of the world for theirself as well.`,
            // `They were raised in an abandoned necromancer's lab by intelligent skeletons and various other undead. They ran a lot of errands, being tolerant of sunlight and unlikely to send the whole town fleeing for the hills. Their main mentor was a flamboyant skeleton with a hat of disguise and a penchant for long-winded but thrilling tales of ages past. Armed with ancient weapons, some minor alchemy materials, the lost necromancer's notes, and the skills their undead family taught they, they now walk the earth. They are quite open-minded about creatures of the dark and undeath, but having seen the goodness they are capable of, they are intolerant of undead who would exist at the expense of others and visit cruelty on the living.`,
            // `They were born into a clan that viewed those born with magical power as evil. During their coming of age ceremony their powers awakened and they found theirself surrounded in arcane power. Fearful of they, the clan leader cast they out. Now they roam as an exile from their clan trying to understand their powers.`,
            // `Their birth was a summoning deep in the forest, and they recall the face of their first parental figure was sheer disappointment. Summoned as a readymade adult, their memory of childhood is non-existent, and less helpful, their summoner teleported away the moment they arrived nude on the mossy floor.`,
            // `They don't remember their father at all, but their mother says that they were the most handsome and talented bard in all the land. Each day they wonder what adventures he must be on, as their village has nothing for they but chickens to pluck and hogs to hang. With nothing but pitchfork and hoe in hand they set out, determined to find their father, or at least bring back a story for the folks back home.`,
            // `Their father was a blacksmith, but he's not truly their father. Their mother cheated on him years ago and he knows it. Whether it's true or not they'll never know. He hates they for it nonetheless. He did the bare minimum a father needed to do until they were old enough then kicked they out despite their mother's plea's. They stole the greataxe(or preferred weapon) he was withholding until the customer paid and left their old life behind.`,
            // `They were orphaned at the church of (insert God of Strength, War, Valor here) where they were raised from a theyng age to become a fierce warrior for their God.`,
            // `When they were theyng, they had a thing for fire. It was pretty, destructive, and alluring. One night as their family slept they were playing with it and accidentally set the family home ablaze. Their mother awoke to the inferno and using every once of power she had saved they from the blaze before succumbing and burning up right in front of their eyes. It was the most beautiful thing they ever saw, and if only the world understood, then maybe they wouldn't be so afraid of fire.`,
            // `Mistress tells they that they used to be a great Paladin. A sworn warrior of good, bringing justice and light to a terrible land. Then they came to her and Mistress may be the strongest enchantress there is, maybe stronger. Now they are Mistress's defender, a (insert Warforged, Golem here).`,
            // `They are ... were a member of the city watch. Now, they suppose that they've likely lost that position. Just like their father, they were signed up and joined their ranks at quite a theyng age. They were far too low of a rank to call their job fulfilling or exciting, but they didn't really mind it all that much. After work they'd spend about half a day's pay drowning their boredom in booze. They've always had a love for a good brew, but they never thought it much of a problem. Until recently. It seems one night they decided to go on a week long binge. What few memories they have are too fuzzy and disorienting to make any sense of. How they're alive, they don't know. During their blackout, they seem to have somehow made it to somewhere they don't even recognize. They're wearing equipment they don't remember acquiring. They accidentally set off a cantrip, despite the fact they've never even seen magic at work, let alone use it. Some guy just told they that they asked him to get they up so they could go meet with someone about a new job. They decide that they need to figure out what happened and that maybe they really do have a drinking problem.`,
            // `They grew up alone in a rather large and well kept house, no parents that they can remember, or relatives they visited, but food would always appear out of nowhere in the pantry, as did gold in the sofa and water in the well. One day, they woke up on the ground, the house having completely disappeared from existence. In its place, a note remained, reading 'Stay Strong!' Of course, they began adventuring from there.`,
            // `They narrowly escaped their home city after a nasty plague was set upon it. The man who helped they escape was a high nobleman, and they later heard that he was culled along with much of the city. That city was their home, they loved it, and now it is all but gone.`,
            // `They were a member of minor nobility that got wiped out by a conspiracy, so they fled to a monastery. But then they got kicked out for tricky one of the priest(ess)es into breaking their vows of chastity.`,
            // `They were part of a desert caravan that ran out of water. But a vision appeared leading to an unknown oasis ... and commanding they to go to the city of (Plot starts here).`,
            // `They were raised by a lovely mother and a father that turned out to be a true polymorphic gorilla. As a result, some of their beliefs and habits are a bit ape-ish.`,
            // `They were born in a tribe of nomadic people. In their theyng age they and their parents got captured in a raid and sold as slaves. Their family got lucky because they have been sold to a noble. His castle was in a cold region with hard winters. He was a brutal leader but fair to everybody who did as he told. They learned the etiquette of the royal court and got along very well. As they became an adult he gave they to another lord to become a soldier. Their kingdom was at war. On the way to their new owner their caravan got raided by their enemy. They somehow escaped. A few days later they found out that their former lord has been attacked and everyone including their parents were murdered. They left the kingdom and never came back till today.`,
            // `Born an orphan, they were adopted by a wealthy family at a theyng age to be raised as help. (How the family treated they growing up is up to the player.) Shortly after their 18th birthday the entire estate is burned to the ground and they are the only known survivor. They are suspect and wanted by the local, kingdom for questioning and crimes against the family. Can they clear their name before the kingdom picks they up, are they to blame for the fire, or are they innocent and wrongly accused? Will they be able to find the villain in time?`,
            // `A retired member of the army, they have been jaded by war, seen far more than any one person aught to see in a hundred life times. After settling down and manning an inn for some years, they've gotten the itch for adventure, and now ready to strike out on their own and see the good in the world.`,
            // `Given up as sacrifice at a theyng age by a small village to insure their harvest, they were picked up by a band of traveling performers. Growing up with them they traveled the country side. Upon reaching adulthood, their adopted parents told they the truth of where they came from. Do they venture off for revenge? Do they forgive and forget?`,
            // `Sold into slavery at theyng age, they where set free by traveling adventures early in their teen years. Since then they have always dreamed of becoming one theirself. Not wanting to waste away their life tending to home and hearth they've set out for the call of the wild.`,
            // `Daughter of a diplomat, they traveled the world's capitals with their father. They grew bored of the stuffy and bureaucratic business and roamed the foreign streets and markets. It is here they fell in with a dashing rogue who stole their heart and taught they the secrets of his world over one glorious summer. They resolved to embark on a career of their own choosing, not their father's.`,
            // `A radiant portal spit they out. The last words they remember were 'Penance'. Aasimar know who they are, but won't disclose it even under torture.`,
            // `Raised by pirates they raided the wrong temple and they were the sole surviver.`,
            // `Raised by ogres they always threatened to eat they growing up. They payed them tribute and grew above the goblin ranks. Eventually they made their bid for freedom by poisoning all their dinner. They are a legend amongst the goblins and ogres.`,
            // `They had a normal childhood in the city. Schooling, family, friends, playing on the large stone walls...but all that was taken away in an instant when 200 hollow-core Warforged self destructed... leveling the city they once called home. Their master and her apprentice long dead they hunt down the last of their demented toys to honor their loss and make the burn marks on their back hurt a little less.`,
            // `Taken in by a pack of traveling werewolves they were given a silver necklace and acted as their cover. They outed them in a city and they were finally liberated. Their daughter still hunts they... waiting to find they alone.`,
            // `As an orphan they were taken in by a sweet, old, good-natured necromancer. They fetched goods from the nearby city, helped dig up parts, played with his creations... They left on good terms and they have no fear of the undead.`,
            // `Their heart opens a portal to the Nine Hells... according to the prophecy.`,
            // `Their family is known amongst all Dragonborn...and loved for their ancestors deeds. Which was promised in blood oath to never be disclosed to they.`,
            // `They grew up seeing visions of battle in their dreams. Horrible, cruel visions of a war far away. They share a soul with a Warforged on another continent...and they are seeking each other out.`,
            // `They were raised by giant eagles. They learned to flush out prey and perform menial tasks in service to their sky lords. Eventually they got too heavy to carry and they all abandoned they...all except their rookmate Kyla. She was the runt, left to die, and always keeps an eye out for they.`,
            // `Raised by dwarves in a mountain hold it's no wonder they have such a surly disposition. They know the runes for entry into most dwarf fortresses and can drink ale with the best of them. Switch this background to 'Halfling' and 'farm' if PC is a dwarf.`,
            // `Raised in a lighthouse on a lone island they would danger the rocks to salvage whatever they could from the unfortunate ships scuttled on the rocks. This made they a strong swimmer. Be it pirate or merchant their family name is well known and appreciated for the work they do.`,
            // `They were forced to murder their family when they became vampires. The town didn't believe they and now they are on the run. Rumor is one of their family survived their gruesome attack...`,
            ]


        const randomLastname = LastNameArray[Math.floor(Math.random() * LastNameArray.length)]
        const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
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
        const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
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

          const strArray = [1, 2, 3, 4, 5, 6]
      
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
              
              const dexArray = [1, 2, 3, 4, 5, 6]
      
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
      
              const conArray = [1, 2, 3, 4, 5, 6]
      
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
      
              const wisArray = [1, 2, 3, 4, 5, 6]
      
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
      
              const intArray = [1, 2, 3, 4, 5, 6]
      
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
      
              const chaArray = [1, 2, 3, 4, 5, 6]
      
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
