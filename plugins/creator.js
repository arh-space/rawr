let handler = function (m) {
  this.fakeReply(m.chat, `Halo kak ${conn.getName(m.sender)}!\nIni contact Owner aku yaa~\nKalau ada yang mau ditanyain silahkan chat owner aku, tapi jangan *SPAM* dan sabar kalau belum di balas karena owner aku bukan bot :)`, '447384093284@s.whatsapp.net', 'Rawr')
  this.sendContact(m.chat, '447384093284', 'Rawr', m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler