import { Client, GatewayIntentBits, Message } from "discord.js"

require("dotenv").config()

function fire(event: string, extra?: string) {
    (extra) ?
        console.log(`[${Date.now()}] Fired: ${event}, ${extra}`) :
        console.log(`[${Date.now()}] Fired: ${event}`)
}

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
]})

client.once("ready", () => {
    fire("READY")
})

const insults = [
    [
        "did you fall from heaven? because your #face looks pretty fucked up, like the royal family tree",
        "i'd kill myself if i looked like your #ass",
        "why haven't you just hung yourself you miserable #",
        "you're as fucked up as the royal family tree, you fucking worthless #",
        "people like you, #s, make this world unbearable to live in. you should just fucking end our suffering already by jumping off a cliff",
        "stop fucking complaining \"oh they don't like me :pleading_face:\" \"oh my dad's so abusive :pleading_face:\" \"oh my grades are so bad :pleading_face:\" \"oh i'm so worthless :pleading_face:\" \"oh nobody likes me :pleading_face:\" and just put yourself out of your misery you fucking #",
        "you # i genuinely want to tear your face in half by your jaw, stuff my hand down your throat, grab your intestines and hand you with them while you’re raped by an ugly fat guy and hooked up onto adrenaline"
    ],
    [
        "fag", "faggot", "idiot", "cunt", "trannie", "queer", "twat", "whore", "slut", "slag"
    ]
]

client.on("messageCreate", async (message: Message) => {
    fire("MESSAGE_CREATE")
    const insult1 = insults[0][Math.floor(Math.random() * insults[0].length)]
    const insult2 = insults[1][Math.floor(Math.random() * insults[1].length)]
    message.reply(insult1.replace(/#/g, insult2))
})

client.login(process.env.TOKEN)