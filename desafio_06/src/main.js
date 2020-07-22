// importa o axios para aplicacao
import axios from "axios";
// cria a funcao onde faremos a consulta da api
async function Api(userName){
    // caso a promessa retorne o valor esperado
    try{
        // aguarda o retorno da api para executar o resto da aplicacao
        const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
        // seleciona item por item do valor retornado
        response.data.map(item => {
            // exibe a propriedade nome do item
            console.log(item.name);
        });
    // caso a promessa retorne um erro
    } catch(error){
        // exibe um alerta com o erro
        alert(error);
    }
}
Api("maykbrito");