const minhaPromisse = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("ok");
    }, 2000);
});

async function executaPromise(){
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
};

executaPromise();