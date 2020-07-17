CONFIGURACOES INICIAIS PARA o desafio

Node
Yarn:
        
    Instalar dependencias:
        Para instalar dependencias:
            "yarn add ...";

        Interface de linha de Comando:
            "@babel/cli";

        Converte o codigo ES6 em um novo arquivo adaptado para navegadores;
            "@babel/core";

        Identifica o ambiente de desenvolvimento e converte ES6 em codigo que navegadores entendem;
            "@babel/preset-env";

        plugin utilizado pra usar o rest e spread;
            "@babel/plugin-proposal-object-rest-spread";


        Escrever script no package.json:
            Enquanto se escreve o codigo principal, converte automaticamente para o arquivo adaptado a navegadores;
                "scripts": {
                "dev": "babel ./aula.js -o ./bundle.js -w"
                };
                
BABEL:
    "presets": ["@babel/preset-env"];