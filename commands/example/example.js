const Discord = require('discord.js')

module.exports = {
		config: {
				name: "example",
        aliases: ["test"]
				},
  
				run: async (client, message, args) => {
          
 let uptime = msP(client.uptime)
     let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setURL('https://github.com/legaccy/')
    .setAuthor('Discord Bot', 'https://avatars2.githubusercontent.com/u/66487398?s=60&v=4', 'https://github.com/legaccy')
    .setTitle('Hello World!')
    .setDescription(`**This is a test/example command!**`)
    
     message.channel.send(embed) 
								}
                        } 
