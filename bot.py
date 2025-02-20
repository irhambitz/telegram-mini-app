import telebot

# Token bot dari BotFather
TOKEN = "8047840852:AAEuKlI1K4oWqAAwbPJdle25vPqiOBXbDog"
bot = telebot.TeleBot(TOKEN)

# URL GitHub Pages tempat Mini App di-hosting
MINI_APP_URL = "https://irhambitz.github.io/telegram-mini-app/"

# Handler untuk perintah /start
@bot.message_handler(commands=['start'])
def start(message):
    chat_id = message.chat.id
    text = "Selamat datang! Klik tombol di bawah untuk membuka Mini App 🎮"
    
    # Inline keyboard dengan tombol untuk membuka Mini App
    keyboard = telebot.types.InlineKeyboardMarkup()
    button = telebot.types.InlineKeyboardButton(text="🚀 Buka Mini App", web_app=telebot.types.WebAppInfo(url=MINI_APP_URL))
    keyboard.add(button)
    
    # Kirim pesan dengan tombol ke pengguna
    bot.send_message(chat_id, text, reply_markup=keyboard)

# Jalankan bot
print("Bot is running...")
bot.polling()
