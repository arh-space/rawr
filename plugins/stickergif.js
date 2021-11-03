const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, command }) => {
await conn.sendMessage(m.chat, `🕒 Tunggu sebentar ya _${conn.getName(m.sender)}_ ! `, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
    
    gokil = `
「  STICKER VIDEO/GIF  」\n\n 
Untuk membuat video/gif menjadi sticker\n\n
Cara penggunaan:
1. Kirim terlebih dahulu video/gif yang mau dibuat jadi stiker, Maksimal 10 detik!
2. Setelah dikirim balas/reply video/gif kemudian ketik ${usedPrefix + command}
3. Tunggu sebentar sampai bot nya ngirim stiker, *SABAR* jangan di spam

Kalau masih ga paham bisa chat owner, kalau ga ngerti2 juga silahkan baca sampai ngerti, budayakan membaca 


©ARHBOT`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/video/.test(mime)) {
        if ((q.msg || q).seconds > 11) throw `_*Maksimal 10 detik! Ubah menjadi gif terlebih dahulu*_`
        const encmedia = m.quoted ? m.quoted.fakeObj : m
        const media = await conn.downloadAndSaveMediaMessage(encmedia)
        const ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
            })
            .on('error', function (e) {
                console.log(`Error : ${e}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                m.reply(`_*Gagal, pada saat mengkonversi ${tipe} ke stiker*_`)
            })
            .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, buff, 'stickerMessage', { quoted: m }, global.packname, global.author)
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
    } else throw gokil
}
handler.help = ['stikergif','stikervideo']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(video)?(gif)?$/i

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}