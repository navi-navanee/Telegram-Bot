const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv').config()


const token =process.env.Token

console.log(token);

const bot = new TelegramBot(token, {polling: true});
