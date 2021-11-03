const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let fs = require ('fs') 
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    await conn.sendMessage(m.chat, `🕒 Tunggu sebentar ya _${conn.getName(m.sender)}_ ! `, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) throw `balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, out, global.packname, global.author)
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) throw `balas gambar dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link, global.packname, global.author)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik! Ubah menjadi gif terlebih dahulu')
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) throw `balas video dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link,'STIKERIN 🌙', '© ARH BOT')
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], 'STIKERIN 🌙', '© ARH BOT')
      else return m.reply('URL tidak valid!\n\nContoh penggunaan stiker url\n' + `${usedPrefix + command} https://i.ibb.co/fd309b1/arh.jpg`)
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw `「  STICKER IMAGE  」\n\n 
Untuk membuat foto menjadi sticker\n\n
Cara penggunaan:
1. Kirim terlebih dahulu foto yang mau dibuat jadi stiker
2. Setelah dikirim balas/reply foto kemudian ketik ${usedPrefix + command}
3. Tunggu sebentar sampai bot nya ngirim stiker, *SABAR* jangan di spam

Kalau masih ga paham bisa chat owner, kalau ga ngerti2 juga silahkan baca sampai ngerti, budayakan membaca 


©ARHBOT ${m.isGroup ? ', balas gambarnya!' : ''}`
  }
  await conn.sendButton(m.chat, ` 
Okee udah ${conn.getName(m.sender)} (ㆆ_ㆆ)👌`,  '© 𝗔𝗥𝗛BOT‏‏‏', 'MENU', '.menu') 
}
handler.help = ['stiker ', 'stiker <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(wm)?$/i
handler.register = false

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
