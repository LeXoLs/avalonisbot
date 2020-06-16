const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2009')
.addField('Bot Sahibi', '<@683287574076588103>')
.addField('Neden Biz?', 'Gelişmiş Özellikli Botumuz Var ')
.addField('Davet Linklerini Nasıl Görebilirim?', 'a!davet')
.addField('Hedefimiz Nedir?', '150 Sunucu Büyük Hedefim')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};