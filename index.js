const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const token = '6209866924:AAFxeyki-rPD9i9h6u6tJFyYa_wYfr5LJSY';

const bot = new TelegramBot(token, {polling: true});

const { downloader } = require('./req')


bot.on('message', async(message) => {
    try {
        const chatId = message.chat.id
    const name = message.from.first_name

    if(message.text === '/start'){
            bot.sendMessage(chatId, `Nma gap <b>${name}</b>`, {
            parse_mode: 'HTML'
        })
    }

    const getVideo = await downloader(message.text)
    await bot.sendVideo(chatId, getVideo.video, {
        caption: getVideo.caption 
    })
    if(!getVideo){
        bot.sendMessage(chatId, "Это не тот ссылка!")
    }
    if(message){
        bot.sendMessage(chatId, 'Не пиши всякий чуж! А то попадёшь в чёрный список!')
    }

    bot.sendMessage(chatId, "<b>Создатель бота @Nuriddinov_408</b>",{
        parse_mode: 'HTML'
    })

    } catch (error) {
        console.log(error)
    }

})