const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('===================================');
  console.log('AI Agent Tester');
  console.log('===================================');

  // Garante que a pasta exista
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  console.log('Abrindo navegador...');

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900
    }
  });

  console.log('Abrindo Google Sites...');

  await page.goto(
    'https://sites.google.com/view/ghl-agent-test/iframe',
    {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    }
  );

  console.log('Esperando carregamento...');

  await page.waitForTimeout(8000);

  console.log('Salvando screenshot...');

  await page.screenshot({
    path: 'screenshots/homepage.png',
    fullPage: true
  });

  console.log('Fechando navegador...');

  await browser.close();

  console.log('Teste finalizado com sucesso!');
})();
