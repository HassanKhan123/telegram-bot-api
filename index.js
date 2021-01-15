const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

const TelegramBot = require('node-telegram-bot-api');

const token = '1563119984:AAHNmLiXfP3nBxVhMT8Nb8M-xuHXiiaitSM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  var Hi = 'hi';
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, 'Hello dear user');
  }
  var bye = 'bye';
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, 'Hope to see you around again , Bye');
  }
  var robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
  }
});

bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id, 'https://www.somesite.com/image.jpg', {
    caption: 'Here we go ! \nThis is just a caption ',
  });
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome', {
    reply_markup: {
      keyboard: [['Sample text', 'Second sample'], ['Keyboard'], ["I'm robot"]],
    },
  });
});

bot.on('polling_error', (error) => {
  console.log(error.code); // => 'EFATAL'
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server running');
});
