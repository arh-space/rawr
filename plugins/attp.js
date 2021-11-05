const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let handler = async (m, { conn, text, command, usedPrefix }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (!text) throw '「 *ATTP* 」\n\nUntuk membuat tulisan menjadi stiker animasi\n\n' + `Cara penggunaan: ${usedPrefix + command} <teks>\nContoh: ${usedPrefix + command} Arh Bot`
await conn.sendMessage(m.chat, `🕒 Tunggu sebentar ya _${conn.getName(m.sender)}_ ! `, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })


  if (/^attp1?$/i.test(command)) {
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
  }

  if (/2$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2gif/', { text: teks }))
    res = await url.json()
    let stiker = await sticker(null, res.image, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
}
handler.help = new Array(2).fill('attp').map((v, i) => v + (i + 1) + '')
handler.tags = ['sticker']
handler.register = false
handler.limit = false
handler.command = /^attp[1-2]?$/i

module.exports = handler
