const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

const TelegramBot = require('node-telegram-bot-api');

const token = '1563119984:AAHNmLiXfP3nBxVhMT8Nb8M-xuHXiiaitSM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
  console.log('msg====', msg);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

bot.on('polling_error', (error) => {
  console.log(error.code); // => 'EFATAL'
});

app.listen(3000, () => {
  console.log('server running');
});
