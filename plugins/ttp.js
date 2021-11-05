const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
let fs = require ('fs') 

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (!text) throw '「 *TTP* 」\n\nUntuk membuat tulisan menjadi stiker\n\n' + `Cara penggunaan: ${usedPrefix + command} <teks>\nContoh: ${usedPrefix + command} Arh Bot`
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar ya _${conn.getName(m.sender)}_ ! `, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

  if (/^ttp1?$/i.test(command)) {
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
       
  }
  if (/2$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks }))
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
  if (/3$/i.test(command)) {
    let stiker = await sticker(null, global.API('hardianto', '/api/maker/ttp', { text: teks }, 'apikey'), global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
     
  }
  if (/4$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks, outlineColor: '255,0,0,255', textColor: '0,0,0,255' }))
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
    
}
handler.help = new Array(4).fill('ttp').map((v, i) => v + (i + 1) + '')
handler.tags = ['sticker']
handler.register = false
handler.command = /^ttp[1-4]?$/i

module.exports = handler
