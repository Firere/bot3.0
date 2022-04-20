const { Client, Intents, Guild } = require('discord.js');
const { token } = require("./config.json");
const Bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

Bot.once("ready", () => {

});

Bot.on("messageCreate", async message => {
   
});

Bot.login(token);
