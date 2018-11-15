
const Discord = require('discord.js'),

    bot = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

bot.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511875595773149185");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Bienvenue à Neptune :wilted_rose:  **`), 4000)        

}

});



bot.login(process.env.BOT_TOKEN);
