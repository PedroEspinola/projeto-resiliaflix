function pesquisaCEP(){

}
function limparCampos(){

}
function limparCEP(){

}

function cadastrar(){

}

class Pessoa{
    constructor(cpf,nome,snome,datanasc,cel,email,sex,estciv){
        this.id = cpf,
        this.nome = nome,
        this.snome = snome,
        this.datanasc = datanasc,
        this.cel = cel,
        this.email = email,
        this.sex = sex,
        this.estciv = estciv
    }
    imprimirDados(){
        console.log( this.id,
            this.nome,
            this.snome,
            this.datanasc,
            this.cel,
            this.email,
            this.sex,
            this.estciv);
    }

}