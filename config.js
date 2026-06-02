import dotenv from 'dotenv';
dotenv.config();

export const config = {
  aiProvider: process.env.AI_PROVIDER || 'openai',
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
  },
  botName: process.env.BOT_NAME || 'Asisten AI',
  ownerName: process.env.OWNER_NAME || 'Owner',
  ownerPhone: (process.env.MY_PHONE || '').replace(/\D/g, ''),
  autoReplyGroups: process.env.AUTO_REPLY_GROUPS === 'true',
  typingDelay: parseInt(process.env.TYPING_DELAY_MS || '2500', 10),
  maxHistory: parseInt(process.env.MAX_HISTORY || '15', 10),
  
  // 🔧 DETEKSI ENVIRONMENT CLOUD
  isCloud: process.env.RAILWAY_ENVIRONMENT || process.env.RENDER || process.env.KOYEB,
};
