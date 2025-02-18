import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start((ctx) => ctx.reply('Welcome to the bot!'));
bot.help((ctx) => ctx.reply('Send me a message and I will reply.'));

bot.on('text', (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});

bot.launch();

console.log('Bot is running...');
