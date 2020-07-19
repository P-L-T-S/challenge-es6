Configurações para completar os desafios:

    Instalar o Node;
    
    Instalar o yarn;
        para instalar dependencias de desenvolvimento, basta acrescentar "-D" no final
        para instalar dependencias do babel:
            yarn add...
            
    Instalar o babel;
        Instalar dependencias do babel:
            @babel/cli
            @babel/core
            @babel/preset-env
            @babel/plugin-proposal-object-rest-spread
    
    Instalar webpack:
        yarn add webpack webpack-cli -D
            criar arquivo "webpack.config.js"

    configurar o babel:
        criar o .babelrc
            "presets": "preset-env"
            "plugins": "@babel/plugin-proposal-object-rest-spread

    Package.json:
        "devDependencies": {
            @babel/cli,
            @babel/core,
            @babel/preset-env,
            @babel/plugin-proposal-object-rest-spread,
        },
        "scrips"{
            "dev": "babel ./arquivo.js -o novoArquivo.js -w"
        },
        