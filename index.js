const puppeteerConfig = {
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--disable-accelerated-2d-canvas',
    '--no-first-run',
    '--no-zygote',
    '--single-process',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
  ],
};

// Kalau di cloud, pakai Chromium sistem
if (config.isCloud) {
  puppeteerConfig.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium';
}

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: '.wwebjs_auth' }),
  puppeteer: puppeteerConfig,
});
