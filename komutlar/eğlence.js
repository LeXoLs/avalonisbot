const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
a!aşkölç: Aşkınızı Ölçersiniz.
a!kafasalla: Kafa sallarsınız.
a!kedi: Rastgele kedi gif atar.
a!doğumgünü: Doğumgününü Gösterir xD
a!yazıtura: Yazı-Tura atar.
a!öp: iştediniz kişiyi öpersiniz.
a!mcskin: Belirtilen oyuncunun kostümünü gösterir.
a!tekme-at: İstediğiniz Kişiye tekme Atarsınız.
a!nahçek: İstediğiniz Kişiye Çekiç Atarsınız.
a!düello: İstediğiniz bir kişi ile düello atarsınız.
a!yazdır : Herhangi bir kişiye zorla mesaj yazdırtırsınız.
a!yazı-banner : Klasik banner yaparsınız
a!espri-yap : Bot Komik Bir Espri Yapar 
a!gifbul : İstediğiniz Gif'i Bulur
a!rip-efekti : Avatarınıza Rip Efekti Ekler
a!hack : İstediğiniz Kişiyi Hackler
a!kralol : Kral Olursunuz!
a!tts <Mesaj> : Maks 50 Kelimelik Sesli Mesaj Söyler (Bir Ses Kanalına Girmesseniz Çalışmaz) 
a!15-temmuz : 15 Temmuz Marşını Çalar. NE MUTLU TÜRKÜM DİYENE! 🇹🇷🇹🇷🇹🇷
a!wasted : Herhangi Bir Kisinin Profiline Gta 5 Deki Wasted Efektini Ekler
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};
