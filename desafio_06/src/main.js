function minhaPromisse(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    })
};
async function funcaoAssinc() {
    const response1 = await minhaPromisse("1s");
    console.log(response1);

    const response2 = await minhaPromisse("2s");
    console.log(response2);

    const response3 = await minhaPromisse("3s");
    console.log(response3);
};
funcaoAssinc();