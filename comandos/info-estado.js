let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = imagen5
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `ββ[ *ππ‘π ππ²π¬π­π’π ππ₯π* ]
β *β€ π·πΎπ»π° ${taguser}*
β
β *=β’ π€ TIEMPO ACTIVO:* ${uptime}
β *=β’ π CREADOR: Aleizn*
β *=β’ π PAGINA OFICIAL:* Aleizn.git
βββββββββββββββββ`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: ' πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» β' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'PΓGINA OFICIAL', body: 'Aleizn', thumbnail: img, sourceUrl: `https://dorrat-bot-oficial.ml/`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*π€ TIEMPO ACTIVO:* ${uptime} β π BY Aleizn β π PAGINA OFC: dorrar-bot-oficial.ml`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\nβ *=β’ β±οΈ ` + d, ' DΓ­a(s)* ', `\nβ *=β’ β ` + h, ' Hora(s)* ', `\nβ *=β’ π°οΈ ` + m, ' Minuto(s)* ', `\nβ *=β’ β²οΈ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
