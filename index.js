const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options');
const token = '5197885178:AAEKMYgG3Jg2kwAcufLCvMLE2qA803-wHn0';

const bot = new TelegramApi(token, { polling: true });
const chats = {};

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'I will guess a number from 1 to 9 and u have to pick the right one');
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    chats[chatId] = randomNumber;
    await bot.sendMessage(chatId, 'Game has been started', gameOptions);

}
const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'start' },
        { command: '/info', description: 'info' },
        { command: '/game', description: 'Number game' },
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        //console.log(msg);
        if (text === '/start') {
            return bot.sendMessage(chatId, `Ur name is - ${msg.from.first_name} ${msg.from.username}`);
        }
        if (text === '/info') {
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/4.jpg');
        }
        if (text === '/game') {
            return startGame(chatId);
        }
        bot.sendMessage(chatId, `U send me ${text}`);
        return bot.sendMessage(chatId, "I don't understand");
    })

}
bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data == '/again') {
        return startGame(chatId);
    }
    if (data == chats[chatId]) {
        return await bot.sendMessage(chatId, `U guessed! ${data}`, againOptions);
    } else {
        return await bot.sendMessage(chatId, `U lost, ur pick was ${chats[chatId]}`, againOptions);

    }
    //bot.sendMessage(chatId, `U have choosen number ${data}`);
})
start();