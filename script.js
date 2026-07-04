const { chromium } = require('playwright');

(async () => {

    console.log("Iniciando...");

    const browser = await chromium.launch({
        headless: true
    });

    console.log("Chrome aberto.");

    await browser.close();

    console.log("Finalizado.");

})();
