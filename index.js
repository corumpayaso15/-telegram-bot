const TelegramBot = require('node-telegram-bot-api');

// 🔑 TU TOKEN
const token = '8977522670:AAHoF-iVaCRNoMJxdcNE22L5Og5bKmDNkiA';

const bot = new TelegramBot(token, { polling: true });

const tiendaURL = 'https://losjnrs-shop.vercel.app/';
const soporteURL = 'https://t.me/MIAUGR9';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "👋 Bienvenido a Zkizzle Club VIP\n\nElige una opción:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🛍 Tienda", web_app: { url: tiendaURL } }
        ],
        [
          { text: "🔥 VIP", callback_data: "vip" }
        ],
        [
          { text: "📞 Soporte", url: soporteURL }
        ]
      ]
    }
  });
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  if (query.data === 'vip') {
    bot.sendMessage(chatId,
      "🔥 VIP\n\nPago único: $200 MXN o $14 USD\nMétodos: Transferencia / PayPal / Depósito"
    );
  }

  bot.answerCallbackQuery(query.id);
});
