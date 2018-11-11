const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "493237177170395155";
var channel = "511141964159254529";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** HeyIm7sam, HeyIm7sam, HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7samHeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7sam HeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7samHeyIm7sam , **')
    },305);
})

client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "466914661670060032") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });
 
client.login("NDY2OTE0NjYxNjcwMDYwMDMy.DsXz9Q.u4ExF7611XAgqBTeBhKGqD_L8M8");
