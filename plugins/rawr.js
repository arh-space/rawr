const { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
let ava = './src/rawr.jpg'
let fs = require ('fs')
let path = require('path')
m.reply()
    
await  conn.sendFile(m.chat, ava, 'ava.jpg', `◪ 「 𝗥𝗔𝗪𝗥 𝗢𝗧𝗣」 ◪\n\nHalo kak *_${conn.getName(m.sender)}_* ! \n${ucapan()}\n\nReady OTP nya kak (•◡•)~\n\n┏ 「  𝗟𝗜𝗦𝗧 𝗟𝗔𝗬𝗔𝗡𝗔𝗡 」
┊ » WhatsApp
┊ » Telegram
┊ » Website
┊ » Gojek
┊ » Soon ◪ 
┗\n\n┏ 「  𝗟𝗜𝗦𝗧 𝗡𝗘𝗚𝗔𝗥𝗔  」
┊ » Indonesia +62
┊ » US +1
┊ » UK +44
┊ » Russia +7
┊ » Malaysia +60
┊ » Vietnam +84
┊ » Poland +48
┊ » Soon ◪ 
┗\n\n⚠️ 𝗣𝗘𝗥𝗛𝗔𝗧𝗜𝗔𝗡 ⚠️
• Harga untuk tiap aplikasi dan negara berbeda.
• Konfirmasi terlebih dahulu sebelum order kepada admin agar tidak ada pihak yang dirugikan.\n`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'BOT WhatsApp Terverifikasi', "jpegThumbnail": fs.readFileSync('./src/arh.jpg')} } }, m)
await conn.send2Button(m.chat, `‎`,   '\n© 2021 🌟 𝗥𝗔𝗪𝗥 BOT | Developed by ARH ', 'ORDER', '.owner', 'FAQ', '.faq') 
}


handler.customPrefix = /^(.rawr)$/i
handler.command = new RegExp
module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari 🌙"
    if (time >= 4) {
        res = "Selamat pagi ⛅"
    }
    if (time > 10) {
        res = "Selamat siang 🏙️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat senja 🌆"
    }
    if (time >= 19) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }
