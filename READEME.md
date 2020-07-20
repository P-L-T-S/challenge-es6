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

    configurar o babel:
        criar o .babelrc
            "presets": "preset-env"
            "plugins": "@babel/plugin-proposal-object-rest-spread

            Instalar webpack:
                yarn add webpack webpack-cli -D
                    criar arquivo "webpack.config.js"

            Configurar webpack:
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader",
                            },
                        },
                    ],
                },

            Instalar webpack-dev-server:
                yarn add webpack-dev-server

            Configurar webpack:
                devServer: {
                    contentBase: __dirname + "/public"
                },

    Package.json:
        "devDependencies": {
            @babel/cli,
            @babel/core,
            @babel/preset-env,
            @babel/plugin-proposal-object-rest-spread,
        },
        "scrips"{
            para executar o babel:
                "dev": "babel ./arquivo.js -o novoArquivo.js -w"
            para executar o webpack em modo de desenvolvimento:
                "dev" : "webpack --mode=development -w"
        }