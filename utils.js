const fs = require("fs");

function log(mensagem) {

    const agora = new Date().toLocaleTimeString("pt-BR");

    console.log(`[${agora}] ${mensagem}`);

}

async function esperar(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function screenshot(page,nome){

    try{

        await page.screenshot({

            path:`screenshots/${nome}.png`,

            fullPage:true

        });

        log(`Screenshot salva: ${nome}.png`);

    }

    catch(e){

        log(`Erro ao salvar screenshot: ${e.message}`);

    }

}

function salvarTexto(nome,conteudo){

    fs.writeFileSync(

        `logs/${nome}`,

        conteudo,

        "utf8"

    );

    log(`${nome} salvo.`);

}

module.exports={

    log,

    esperar,

    screenshot,

    salvarTexto

};
