const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

const TelegramBot = require('node-telegram-bot-api');

const token = '1563119984:AAHNmLiXfP3nBxVhMT8Nb8M-xuHXiiaitSM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  console.log('msg====', msg);
  var hi = 'hi';
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id, 'Hello dear user');
  }

  var bye = 'bye';
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, 'Hope to see you around again , Bye');
  }
});
bot.on('polling_error', (error) => {
  console.log(error.code); // => 'EFATAL'
});

app.listen(3000, () => {
  console.log('server running');
});
