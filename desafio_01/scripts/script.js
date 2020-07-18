class usuario {
    constructor(nome, idade){
        this.user = {
            nome: nome,
            idade: idade,
            admin: ""
        };
    };
    isAdmin(){
        return this.user.admin === true;
    };
};

class administrator extends usuario{
    constructor(){
        super();
        this.user.admin = true;
    };
};

const user = new usuario;
const adm = new administrator;

console.log(user.isAdmin());
console.log(adm.isAdmin());