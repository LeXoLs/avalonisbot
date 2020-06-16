const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
a!davet: Botun Davet Linkini Gösterir.  
a!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
a!steam: steamstore Olan her Sey gösterir = örnek: m!steamstore Csgo.
a!sunucubilgi: Sunucunun bilgilerini gönderir.
a!ping: bot pingini gösterir.
a!istatistik: Botun istatistik gösterir.
a!bilgi: Bot Bilgi Gösterir.
a!havadurumu: hava durumunu gösterir.
a!top10: Botun En İyi Sunucularını Gösterir (Yeni!)

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};
