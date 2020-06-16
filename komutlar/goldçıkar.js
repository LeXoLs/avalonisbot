const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();


exports.run = (client, message, args) => {
 if(message.author.id != 683287574076588103) { return message.channel.send("Bu komut sahibime özdür.")}

  let şahıs = args[0]

  if (!şahıs) return message.channel.send('Goldu alınacak şahsı taglayınız.')
  
  
  
  message.channel.send(`\`${şahıs}\` Artık gold değil!!`)
db.set(`gold_${şahıs}`, 'kapalı')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: 'yapımcı'
};
exports.help = {
  name: 'goldçıkar',
  description: 'Napcan?',
  usage: 'goldçıkar'
};

