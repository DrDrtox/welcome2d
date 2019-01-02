const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("524289190792527872");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Bienvenue à Nautica :cherries: **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
