
const { Telegraf } = require('telegraf');

const dotenv = require('dotenv').config()

const bot = new Telegraf(process.env.token)


bot.use((ctx,next) => {
    ctx.reply("Enter Your first name")
    ctx.state.firstname=ctx.message.text
    next(ctx)
})

bot.use((ctx,next) => {
    ctx.reply("Enter Your LastName")
    ctx.state.lastName=ctx.message.text
    next(ctx)
})

bot.use((ctx,next) => {
    ctx.sendMessage(`${ctx.state.firstname}${ctx.state.lastName}`)
    next(ctx)
})

bot.launch();


