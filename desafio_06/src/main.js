// importa o axios para aplicacao
import axios from "axios";
// cria classe
class github{
    // cria metodo estatico
    static async getRepositories(repo){
        // tenta fazer a busca
        try{
            // se funcionoar, exibe os dados no console
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        // se nao conseguir, exibe o erro no console
        }catch{
            console.warn("Repositorio não exite");
        };
    };
};
// chama o metodo da classe
github.getRepositories("P-L-T-S/diego3g");