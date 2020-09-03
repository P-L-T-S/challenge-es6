# :notebook: **Sobre**:

Fiz estes desafios enquanto estudava **ES6** através da [Rocketseat](http://rocketseat.com.br) .

Meu principal objetivo em colocar este arquivo no meu repositório é para ver como eu avanço com o tempo e para registrar minha evolução.

<br>

# :computer: **Técnologias utilizadas**:

- HTML
- CSS
- ES6
- Node
- NPM
- Yarn
- Babel
- Webpack







# :pick: Configurações para completar os desafios:


    Instalar o Node;
    // gerenciador de pacotes e extencoes
    Instalar o yarn;
        para instalar dependencias de desenvolvimento, basta acrescentar "-D" no final
        para instalar dependencias do babel:
            yarn add...
            
    Instalar o babel;
        Instalar dependencias do babel:
            @babel/cli -D
            @babel/core -D
            // converte codigo ES6+ para ambiente de desenvolvimento utilizado
            @babel/preset-env -D
            // plugin para utilizar o rest e spread
            @babel/plugin-proposal-object-rest-spread -D
            // para converter async para codigo compreendido pelo novegador
            @babel/plugin-transform-async-to-generator -D

    configurar o babel:
        criar o .babelrc
                "presets": "@babel/preset-env"
                "plugins": ["@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-transform-async-to-generator"]


    Instalar webpack:
        yarn add webpack -D
        yarn add webpck-cli -D
        yarn add babel-loader -D
        yarn @babel/polyfill -D
        
    Criar arquivo "webpack.config.js"

    Configurar webpack:
        module.exports = {
            entry: "./arquivo",
            output:{
                path: __dirname,
                filename: "./outroarquivo"
            }
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
        };

    Instalar webpack-dev-server:
        yarn add webpack-dev-server -D

    Adicionar configuracao no webpack:
        devServer: {
            contentBase: __dirname + "/public"
        },

    Package.json:
        "devDependencies": {
            @babel/cli,
            @babel/core,
            @babel/preset-env,
            @babel/plugin-proposal-object-rest-spread,
            @babel/plugin-transform-async-to-generator
            "@babel/polyfill": "^7.10.4",
            "babel-loader": "^8.1.0",
            "webpack": "^4.43.0",
            "webpack-cli": "^3.3.12",
            "webpack-dev-server": "^3.11.0"
        },
        "scrips"{
            para executar o babel:
                "dev": "babel ./arquivo.js -o novoArquivo.js -w"
            para executar o webpack em modo de desenvolvimento:
                "dev" : "webpack --mode=development -w"
        }
