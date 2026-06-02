FROM node:20-bookworm-slim

# Install Chromium dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set environment untuk Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV NODE_ENV=production

WORKDIR /app

# Copy package files dulu (supaya layer cache efisien)
COPY package*.json ./

# 🔧 FIX: Ganti npm ci jadi npm install
RUN npm install --omit=dev

# Copy source code
COPY . .

# Buat folder untuk session WhatsApp
RUN mkdir -p /app/.wwebjs_auth /app/.wwebjs_cache

CMD ["node", "index.js"]
