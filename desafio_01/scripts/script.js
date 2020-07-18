// cria a classe
class usuario {
    // inicia a classe com seus valores
    constructor(nome, idade){
        this.user = {
            nome: nome,
            idade: idade,
            admin: ""
        };
    };
    // metodo que retorna se usuario e adm ou nao
    isAdmin(){
        return this.user.admin === true;
    };
};
// cria classe e faz com que ela herde classe usuario
class administrator extends usuario{
    // inicia classe
    constructor(){
        // chama construtor da classe pai
        super();
        // modifica valor do atributo admin
        this.user.admin = true;
    };
};
// instancia novo usuario
const user = new usuario;
//instancia novo adm
const adm = new administrator;
// exibe no console se user e adm ou nao
console.log(user.isAdmin());
// exibe no console se user e adm ou nao
console.log(adm.isAdmin());