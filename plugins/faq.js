const { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
let ava = './src/rawr.jpg'
let fs = require ('fs')
let path = require('path')
m.reply()
    
await  conn.sendFile(m.chat, ava, 'ava.jpg', `◪ 「 𝗥𝗔𝗪𝗥 𝗢𝗧𝗣」 ◪\n\nHalo kak *_${conn.getName(m.sender)}_* ! \n${ucapan()}\n\nSilahkan di baca FAQ berikut sebelum order ya kak biar jelas (•◡•)\n\n
Q: Nomor yg didapatkan itu darimana min?
A: Semua nomor yg kami dapatkan dari penyuplai adalah real sim-card.
 
Q: Setelah saya beli nomor, lalu dikemudian hari saya butuh nomor sebelumnya, bisa dipakai lagi ga?
A: Tidak bisa, 1 nomor hanya bisa dipakai untuk 1 SMS, kalau Anda keluar/Log Out/Hapus APK, nomornya gabisa dipakai lagi.

Q: Berapa banyak waktu yg saya miliki untuk menunggu SMS?
A: Tergantung, admin akan Menginformasikan sebelum di proses, biasanya 10-20 menit. 

Q: Gimana mimin menentukan harga?
A: Harga ditentukan oleh pesuplai (Penawaran & Permintaan).

Q: Apakah nomor yg diberikan legal? 
A: Tentu saja legal, nomor yg kami miliki datang dari pesuplai yg dapat dipercaya.

Q: Saya ingin membeli nomor yg bisa digunakan berhari-hari dan berkali-kali, bisa min?
A: Bisa dong, dengan sistem Rent kamu bisa sewa nomor selama beberapa Jam,Hari,Minggu, dan Bulan yg telah ditentukan.

Q: Nomor yg saya beli, apakah kedepannya akan dijual lagi untuk diverifikasi orang lain?
A: Tidak, nomor yg sudah diaktivasi akan sepenuhnya dihapus dari server, nomor yg sudah kamu beli tidak akan dijual lagi.
 
Q: Proses penerimaan dan pengiriman SMS oleh Admin manual atau otomatis?
A: Proses SMS masuk sangat cepat, antara 1-20 menit, saat ini pengiriman masih manual, harap bersabar.

Q: Apa alasan SMS tidak masuk-masuk?
A: Banyak faktor, salah satu alasan nya adalah IP Address Anda tidak sesuai dengan nomor yg dipesan, jika IP Address Anda telah digunakan untuk verifikasi SMS berkali-kali lalu Anda ingin membeli nomor baru, disarankan untuk mengubah IP Address Anda sesuai dengan negara yg dibeli.

Q: Mengapa wajib merubah IP Address setelah sering melakukan SMS di IP yg sama?
A: Karena WhatsApp memiliki fitur penyaringan yg sangat baik, jika Anda membeli nomor menggunakan IP Address yg sama secara berulangkali, WhatsApp akan mendeteksi adanya aktivitas mencurigakan, jadi SMS tidak akan terkirim.


Latest Update: 20 October 2021`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'BOT WhatsApp Terverifikasi', "jpegThumbnail": fs.readFileSync('./src/arh.jpg')} } }, m)
}


handler.customPrefix = /^(.faq)$/i
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
