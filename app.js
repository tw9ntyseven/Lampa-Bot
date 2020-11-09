const { Telegraf } = require('telegraf')
const config = require('config')
const bot = new Telegraf(config.get('token'))

// const PORT = process.env.PORT || 80

// app.get('/', (req, res) => {
//     res.env
// })

// app.listen(PORT, () => {
//     console.log("Server has been started");
// })

bot.use(Telegraf.log())

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('reminder', (ctx) => ctx.reply('Echo'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()