// cria uma nova promessa
function minhaPromisse(x) {
    return new Promise(resolve => {
        // adiciona uma tempo para executar o retorno da promessa
        setTimeout(() => {
            // retorna a promessa
            resolve(x);
        }, 1000);
    })
};
// cria uma funcoa assincrona que executa a promessa
async function funcaoAssinc() {
    // aguarda o retorno da promessa1 para ser executado
    const response1 = await minhaPromisse("1s");
    // apos o retorno da promessa exibe no console.log
    console.log(response1);
    // agurada o retorno da promessa 2
    const response2 = await minhaPromisse("2s");
    // apos o retorno da promessa2 para exibir no consolo.log
    console.log(response2);
    // aguarda o retorno da promessa 3
    const response3 = await minhaPromisse("3s");
    // apos o retorno da promessa 3 exibe no console.log
    console.log(response3);
};
// executa a funcao assincrona
funcaoAssinc();