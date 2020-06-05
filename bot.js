const { Collection, RichEmbed } = require("discord.js");
const { token, database } = require("./botconfig.json");
const fs = require("fs");
const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

client.on("message", async message => {
  if (message.content.startsWith("<@BOT-ID>")) {
    let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = "BOT-PREFIX";
    message.channel.send({
      embed: {
        color: 141414,
        description: `Hello! ....`
      }
    });
  }
});

["aliases", "commands"].forEach(x => (client[x] = new Collection()));
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(client)
);

client.login('BOT-TOKEN')
