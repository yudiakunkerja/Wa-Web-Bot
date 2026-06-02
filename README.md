# 🤖 WhatsApp AI Auto-Reply Bot

Bot WhatsApp Web dengan AI (OpenAI/Gemini) untuk auto-reply saat owner offline.

## 🚀 Deploy Cepat

### Railway
1. Fork repository ini
2. Buka [railway.app](https://railway.app)
3. "New Project" → "Deploy from GitHub repo"
4. Pilih repo ini
5. Tambahkan environment variables di tab "Variables"
6. Deploy!

### Render
1. New → Web Service
2. Connect GitHub repo
3. Environment: Docker
4. Add environment variables
5. Deploy

## ⚙️ Environment Variables

| Variable | Required | Contoh |
|---|---|---|
| `AI_PROVIDER` | ✅ | `openai` atau `gemini` |
| `OPENAI_API_KEY` | ✅ (jika openai) | `sk-xxx` |
| `OWNER_NAME` | ✅ | `Budi` |
| `MY_PHONE` | ✅ | `6281234567890` |

## 🔐 Scan QR

Setelah deploy, lihat logs untuk scan QR:
- **Railway**: Tab "Deployments" → klik deployment → "View Logs"
- **Render**: Tab "Logs"

QR hanya muncul sekali. Session tersimpan di volume.
