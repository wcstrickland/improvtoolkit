import fs from 'fs'
let exercises = [
    // template
    {
        "title": "",
        "text": "",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["freedom", "memory", "pov", "group mind",
            "justification", "status", "game", "object work", "premise",
            "listening"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "I dont usually do this but...",
        "text": "A: I am {X} I believe {y}  B: Hey I know you believe {y} but I/we need you to do this {opposite of y thing}  A: I dont usually do this but {justification in spite of character}",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["freedom",  "pov", 
            "justification",  "game",  "premise",
            "listening"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "I know you, I've always known you",
        "text": "In a circle each person says 'I know you' or 'Ive always known you' or 'I know you , Mom [[or other relationship label]]'",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["freedom", 
            "justification", 
            "listening"],
        "level": ["beginner"]
    },
    {
        "title": "Always, Never, Sometimes",
        "text": "I / We [pilots] ALWAYS do our pre flight checklist, we NEVER cut corners, we SOMETIMES do some barrel rolls",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["freedom", "pov", "group mind",
            "justification",  "game", 
            "listening"],
        "level": [ "intermediate", "advanced"]
    },
    {
        "title": "Armando Stations",
        "text": "3 chairs. 1st chair does 1ish minute monologue from suggestion. 2nd chair says what funny ideas stuck out and refines them to a 'game' or 'sketch title'. 3rd chair delivers a clear premise based initiation line.",
        "size": ["small"],
        "tags": [ "memory",
             "game", "premise",
            "listening"],
        "level": [ "advanced"]
    },
    {
        "title": "And that Means",
        "text": "2 actors. The scene is 1 line per actor. Each repeats the last line and then says 'And that means' before contextualizing the previous line. Variations include every line starting with 'We', or prohibiting hypothetical language like will, could, or can.",
        "size": ["duo" ],
        "tags": [ "memory", "pov",
            "justification", "status", "game",
            "listening"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "I say, I do, I am",
        "text": "Use a chain of I statements to discover and label a character either in a scene or in a circle",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["memory", "pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Super Villain",
        "text": "A: accusation, B:accept as super villain (with justification), A: Non blocking response",
        "size": ["duo", "small"],
        "tags": ["pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "My/Our whole Deal",
        "text": "1 or More players make a 'My whole deal' statement to signal a clear character philosophy with repeatable behaviors. This can be done at the top of a scene, midway through, or as a circle exercise",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["pov",
            "justification", "status", "game",
        ],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Think, Feel, Have, Want, Am",
        "text": "Discover a character through a series of I statements",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["pov",
            "justification", "game",
        ],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Work, Home, Play",
        "text": "A strong character with a repeatable pattern is established in a scene or in a circle. People tag/send this character either to work, home, or a hobby",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Play to lose",
        "text": "2 person scenes with opposing view points is firmly established. Without bailing on their opinion each performer tries to find a way to lose",
        "size": ["duo",],
        "tags": ["pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "You Seem",
        "text": "A: makes a statement about themselves. Others in a circle or their scene partner say 'You seem {whatever they seem}' continue",
        "size": ["duo", "circle", "small"],
        "tags": ["memory", "pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Mind Meld",
        "text": "",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["group mind",
        ],
        "level": ["beginner"]
    },
    {
        "title": "Story Stealing",
        "text": "1 person tells a story, another person in the circle is selected to try to retell the story as closely as they can",
        "size": ["circle", "small"],
        "tags": ["memory", "pov", "group mind",

            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "I, You, We",
        "text": "2 person scenes where every line must start with I, You, or We",
        "size": ["duo", "small"],
        "tags": ["pov", "group mind",
            "justification", "status",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "ABC, 123, tags and edits",
        "text": "Scenes that are just ABCs back and forth with tag outs that change it to 123 back and forth",
        "size": ["small"],
        "tags": ["memory", "group mind",
            "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Blind Counting",
        "text": "Eyes Closed. People say a number trying to count up. If 2 people speak at the same time you start over",
        "size": ["circle", "small", "big"],
        "tags": ["group mind",
            "listening"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "Follow The Follower",
        "text": "Everyone stands in a neutral position. Each person takes on any small movements they observe in the group. The feedback loop ebbs and flows.",
        "size": ["circle", "small", "big"],
        "tags": ["group mind",
        ],
        "level": ["beginner",]
    },
    {
        "title": "HELL YES",
        "text": "Basic direct yes and scenes. Each line now starts with HELL Yes instead of Yes And.",
        "size": ["duo"],
        "tags": ["freedom", "pov", "group mind",

            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Shared Description",
        "text": "In a circle each person describes the SAME object maintaining the truth of the descriptions before",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "group mind",
            "object work",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Beat the Hell outta the game",
        "text": "2 person scene runs until a clear game is established. The backline does a tag run on that game.",
        "size": ["duo", "small"],
        "tags": ["memory", "pov",
            "justification", "status", "game",
            "listening"],
        "level": ["advanced"]
    },
    {
        "title": "Did you hear about so and so?",
        "text": "A: did you hear about {name} at the {location}, B: Yeah they are always {blanking}. C: Embodies the character for a few lines.",
        "size": ["circle", "small", "big"],
        "tags": ["memory", "pov", "group mind",
            "justification", "status",
            "listening"],
        "level": ["intermediate"]
    },
    {
        "title": "Building The World",
        "text": "In a circle each person names an object that could be in the same location as the previous objects. The location is named. Each person provides a Specific about the location. Repeat with Who and Why",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "pov", "group mind",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Pattern Game",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "pov", "group mind",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Salesperson of the Year",
        "text": "person to your right labels a personal object and gives it to you. You then take center circle and make your sales pitch. At the end everyone chants “I’d buy that!” ",
        "size": ["circle", "small", "big"],
        "tags": ["memory", "pov",
            "justification", "status", "game", "object work",
        ],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Remember That Time",
        "text": "Like other group story telling games but framed as a collectively shared memory. 5-6 people up like in a panel. Everyone has a unique viewpoint on what happened and what they individually experienced. Get the name of this story from the rest of class. Then instructor points to players one by one to tell this story from each distinct character, each building on the information given by other characters, telling a collective story ",
        "size": ["circle", "small", "big"],
        "tags": ["pov", "group mind",
            "justification",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Emotional Noise",
        "text": "1st person says something mundane. 2nd makes an honest emotional noise and pauses before speaking. That line should match the noise.",
        "size": ["duo", "circle", "small", "big"],
        "tags": ["pov",
            "justification",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Whats the deal with Neal",
        "text": "Three prompts to inspire a monologue What’s the deal with - name + profession? They’re always blanking. Once I saw them blanking.",
        "size": ["circle", "small"],
        "tags": ["pov",
            "justification", "status", "game"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Dumb Dumb Convention",
        "text": "Name Name Business. Drill. Two people introduce themselves and their profession, then they mutually decide they should start a new business that combines their own independent businesses. “My name is Twizzler Cornerstore and I make candy“. … “my name is Dingus Waphouse and I am a massage therapist”… “we should start a spa exfoliating people with sugar” then try to simultaneously name the business “ And we’ll name the spa …Sweet Rubbbins!”",
        "size": ["duo"],
        "tags": ["pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Don't get me started",
        "text": "go around circle. Player gives neighbor a single word prompt. Player then has a big emotional reaction and goes on an improvised rant about the object. 'Cakes? Don't get me started on Cakes!….' Goes on the explain their heightened emotional reaction to Cakes. ",
        "size": ["circle", "small", "big"],
        "tags": ["pov",
            "justification", "status", "game", "object work",
        ],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Family Portrait",
        "text": "4/5 players are up. They are given prompts to portray. 'Alien Family. Worried Family. Chicken Family. Circus family, etc' They strike those poses. (This game can be further extrapolated into generating strong characters for a scene)",
        "size": ["small"],
        "tags": ["pov", "group mind",
            "status", "game",
        ],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Word Train",
        "text": "Circled up, build a series of words joined together by free association. Ex: Cat, Burglar, Alarm, System, Failure, Launch, Pad, Cushion, Fall, Back, Pack, etc etc etc. Idea is to build memory and listening whilst contributing in a way that helps the team build a longer train.",
        "size": ["circle", "small", "big"],
        "tags": ["memory",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Problem/Solution",
        "text": "Player A comes up with a problem. Player B grabs nearby object grabs a nearby object and presents it as a solution to the problem. Object must not be obvious, preferably it is random. Player A gladly accepts the object and explains how it will be used to solve the problem",
        "size": ["duo", "circle", "small", "big"],
        "tags": [
            "justification", "object work",
        ],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Sequence of Sequences",
        "text": "Circle: 1 points at another and says a word, and so on until the full circle is complete. Establish more 'circuits' and begin to juggle multiple",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "group mind",

            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Point, Yes, Move",
        "text": "circle: 1 points to another, ONLY when the person pointed to says yes can the pointer move. They walk slowly toward them. The one who said yes must now point at a new person. Harder than it seems.",
        "size": ["circle", "small", "big"],
        "tags": ["group mind",
        ],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Pass the Face",
        "text": "Circle up. One player makes a face and then makes eye contact with someone who has to make the same face then generate a new face and pass it along with eye contact. Add sound effects or phrasing.",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "pov", "group mind",
            "status",
        ],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "What's In the Kitchen?",
        "text": "Players enter a space and interact with an object. The following players address the space and ALL objects set before them",
        "size": ["small", "big"],
        "tags": ["memory", "object work",
        ],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Hitchhiker",
        "text": "2 actors in a car, everyone else is lined up. 2 actors must establish a relationship and why they are in the car. Once relationship is established, 3rd actor sticks thumb out as an exaggerated character and in a characteristic voice asks if they're headed to (destination). Original 2 actors immediately take on all the characteristics of Actor 3. They cruise down the road for a bit, having a grand time. Then driver makes and excuse to bail. Actor 3 gets in front seat and the drill starts over.",
        "size": ["small", "big"],
        "tags": ["freedom", "pov", "group mind",
            "justification", "game", "object work",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Did Ya Ever",
        "text": "One word at a time story. Starts with on player saying 'did ya ever' then each player after building a story one word at a time until a natural conclusion. Do with Hillbilly accent, etc",
        "size": ["circle", "small", "big"],
        "tags": ["memory", "pov", "group mind",
            "justification",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Distillation",
        "text": "pair in scene. 1 min scene. After that each player only gets 3 lines to portray the same scene. After that, each player only gets 1 line",
        "size": ["duo",],
        "tags": ["memory", "pov", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Clover",
        "text": "start with one word, word association until we arrive back at original word",
        "size": ["circle", "small", "big"],
        "tags": ["group mind"],
        "level": ["beginner"]
    },
    {
        "title": "Fingy",
        "text": "index fingers join in middle. Say Fingy. One person initiates silly movement from finger, rest follow, finger eventually lands back I'm center, say Fingy to finish",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind"],
        "level": ["beginner"]
    },
    {
        "title": "Fortunately/Unfortunately",
        "text": "players tell story one person at a time, each subsequent player must begin their part of the story with 'fortunately/unfortunately'",
        "size": ["circle", "small", "big"],
        "tags": ["justification", "group mind"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "It's Tuesday",
        "text": "One actor says something rather mundane. The other actor completely overreacts in a positive manner then must justify their reaction.",
        "size": ["duo"],
        "tags": ["justification", "listening"],
        "level": ["intermediate"]
    },
    {
        "title": "Loser Ball",
        "text": "Players in circle. One by one they pass a ball and whoever is supposed to catch it ends up not catching it. Everyone cheers them for not catching it! Ball is a different size and weight each time.",
        "size": ["circle", "small", "big"],
        "tags": ["object work"],
        "level": ["beginner"]
    },
    {
        "title": "Yes, Let's!",
        "text": "Circled up, each player suggests an activity and everyone enthusiastically agrees 'Yes, Let's!' and everyone acts it out.",
        "size": ["circle", "small", "big"],
        "tags": ["freedom"],
        "level": ["beginner",]
    },
    {
        "title": "Anyone Like Me?",
        "text": "Circle up. One by one go around I'm looking for people who, like me, love ice cream Anyone who agrees claps, gives praise, etc.",
        "size": ["circle", "small", "big"],
        "tags": ["group mind"],
        "level": ["beginner"]
    },
    {
        "title": "Terrible Presents",
        "text": "One by one players present a terrible present to their neighbor. Neighbor gleefully accepts the present and explains how they'll utilize it.",
        "size": ["circle", "small", "big"],
        "tags": ["group mind", "justification"],
        "level": ["intermediate"]
    },
    {
        "title": "Don't Get Me Started",
        "text": "go around circle. Actor gives another actor a single word prompt. Actor then goes on improvised rant about object. 'Cakes? Don't get me started on Cakes!",
        "size": ["circle", "small", "big"],
        "tags": ["pov", "justification"],
        "level": ["beginner"]
    },
    {
        "title": "Baton Offer",
        "text": "Exercise: Baton Offering 2 person scene. Each actor has a baton or some object. When you feel like you have made an offer you hand the other the baton. If you have both batons you need to be making offers. Variation: each player says their line and then breaks character to say 'what' they are offering to the scene. Example: A: Hey James mom said she wont be home until 10. Break Character: I am offering the Who and the Where.  B: You know what that means, we can read ALL WE WANT!. Break Character: I am offering an unusual behavior and peas in a pod.",
        "size": ["duo"],
        "tags": ["memory", "pov", "group mind",
            "justification", "status", "game", "object work",
            "listening"],
        "level": ["advanced"]
    },
    {
        "title": "Attract dont Argue",
        "text": "2 person scene with strong opposed views. Each actor tries to win the other over to their side instead of attacking the other",
        "size": ["duo"],
        "tags": ["pov", "group mind",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "You wanted to see me, [occupation]?",
        "text": "2 actors. 1 says you wanted to see me and then gives the other person an occupation. The responded lists 2 normal things that person would want or say and 1 crazy thing",
        "size": ["duo"],
        "tags": ["pov", "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "What did you just say?",
        "text": "2 person scene. At any point one actor responds with 'What did you just say?' and finds meaning in that statement",
        "size": ["duo"],
        "tags": ["freedom", "pov",
            "justification", "status", "game",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Terrible Gifts",
        "text": "Circle. One by one players present a terrible present to their neighbor. Neighbor gleefully accepts the present and explains how they'll utilize it.",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "pov",
            "justification", "object work",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Magic Clay",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": [
            "justification", "object work",
        ],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "hey fred schnieder",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind",
        ],
        "level": ["beginner"]
    },
    {
        "title": "Beastie Rap",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "group mind",
            "listening"],
        "level": ["beginner", "intermediate"]
    },
    {
        "title": "Bunny Bunny",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind",
            "listening"],
        "level": ["beginner"]
    },
    {
        "title": "Crazy 8s",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind",
            "listening"],
        "level": ["beginner"]
    },
    {
        "title": "Zip, Zap, Zop",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind",
            "listening"],
        "level": ["beginner"]
    },
    {
        "title": "Woosh Bang Pow",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "pov", "group mind",
            "listening"],
        "level": ["beginner", "intermediate", "advanced"]
    },
    {
        "title": "Pass the Clap",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "group mind",
            "listening"],
        "level": ["beginner"]
    },
    {
        "title": "Red ball, Blue Ball",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["memory", "group mind",
            "object work",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "Ninja Star, Tomahawk, Big Wet Fish",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["memory", "group mind",
            "object work",
            "listening"],
        "level": ["intermediate", "advanced"]
    },
    {
        "title": "5 Things",
        "text": "",
        "size": ["circle", "small", "big"],
        "tags": ["freedom", "memory", "group mind",
        ],
        "level": ["intermediate", "advanced"]
    },
]

fs.writeFileSync('exercises.csv', 'title,size,tags,levels,text', 'utf-8')
for (const ex of exercises) {
    fs.appendFileSync('exercises.csv', `\n${ex.title.replaceAll(',', ' ')},${''},${ex.tags.join(' ')},${' '},${ex.text.replaceAll(',', ' ')}`, 'utf-8')
}