const { chromium } = require("playwright");

const fs = require("fs");

const config = require("./config.json");

const {

    log,

    esperar,

    screenshot,

    salvarTexto

}=require("./utils");

(async()=>{

    log("================================");

    log("AI Agent Tester");

    log("================================");

    const browser=await chromium.launch({

        headless:true

    });

    const page=await browser.newPage({

        viewport:{

            width:1440,

            height:900

        }

    });

    log("Abrindo site...");

    await page.goto(

        config.url,

        {

            waitUntil:"networkidle"

        }

    );

    await esperar(5000);

    log("Site carregado.");

    await screenshot(

        page,

        "homepage"

    );

    salvarTexto(

        "titulo.txt",

        await page.title()

    );

    const frames=page.frames();

    let texto="";

    texto+="TOTAL DE IFRAMES: ";

    texto+=frames.length;

    texto+="\n\n";

    for(const frame of frames){

        texto+=frame.url();

        texto+="\n";

    }

    salvarTexto(

        "frames.txt",

        texto

    );

    const botoes=await page.locator("button").allTextContents();

    salvarTexto(

        "buttons.txt",

        botoes.join("\n")

    );

    const inputs=await page.locator("input").evaluateAll(

        els=>els.map(e=>

            e.placeholder ||

            e.name ||

            e.type ||

            "sem identificação"

        )

    );

    salvarTexto(

        "inputs.txt",

        inputs.join("\n")

    );

    log("Finalizado.");

    await browser.close();

})();
