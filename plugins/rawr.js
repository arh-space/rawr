const { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
let ava = './src/rawr.jpg'
let fs = require ('fs')
let path = require('path')
m.reply()
    
await  conn.sendFile(m.chat, ava, 'ava.jpg', `โช ใ ๐ฅ๐๐ช๐ฅ ๐ข๐ง๐ฃใ โช\n\nHalo kak *_${conn.getName(m.sender)}_* ! \n${ucapan()}\n\nReady OTP nya kak (โขโกโข)~\n\nโ ใ  ๐๐๐ฆ๐ง ๐๐๐ฌ๐๐ก๐๐ก ใ
โ ยป WhatsApp
โ ยป Telegram
โ ยป Website
โ ยป Gojek
โ ยป Soon โช 
โ\n\nโ ใ  ๐๐๐ฆ๐ง ๐ก๐๐๐๐ฅ๐  ใ
โ ยป Indonesia +62
โ ยป US +1
โ ยป UK +44
โ ยป Russia +7
โ ยป Malaysia +60
โ ยป Vietnam +84
โ ยป Poland +48
โ ยป Soon โช 
โ\n\nโ ๏ธ ๐ฃ๐๐ฅ๐๐๐ง๐๐๐ก โ ๏ธ
โข Harga untuk tiap aplikasi dan negara berbeda.
โข Konfirmasi terlebih dahulu sebelum order kepada admin agar tidak ada pihak yang dirugikan.\n`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'BOT WhatsApp Terverifikasi', "jpegThumbnail": fs.readFileSync('./src/arh.jpg')} } }, m)
await conn.send2Button(m.chat, `โ`,   '\nยฉ 2021 ๐ ๐ฅ๐๐ช๐ฅ BOT | Developed by ARH ', 'ORDER', '.owner', 'FAQ', '.faq') 
}


handler.customPrefix = /^(.rawr)$/i
handler.command = new RegExp
module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari ๐"
    if (time >= 4) {
        res = "Selamat pagi โ"
    }
    if (time > 10) {
        res = "Selamat siang ๐๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore ๐"
    }
    if (time >= 18) {
        res = "Selamat senja ๐"
    }
    if (time >= 19) {
        res = "Selamat malam ๐"
    }
    return res
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }
