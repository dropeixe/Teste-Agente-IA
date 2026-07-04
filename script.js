const { chromium } = require("playwright");

console.log("VERSAO 2 - 04/07/2026 - 00:45");

(async () => {

    console.log("Abrindo Chrome...");

    const browser = await chromium.launch({
        headless: true
    });

    console.log("Chrome aberto.");

    await browser.close();

    console.log("Fim.");

})();
