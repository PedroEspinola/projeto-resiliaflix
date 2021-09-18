class Pessoa {
    constructor(cpf,nome,snome,datanasc,cel,email,sex,estciv){
        //super(cep,rua,num,comp,bairro,city,est);
        this._id = cpf,
        this._nome = nome,
        this._snome = snome,
        this._datanasc = datanasc,
        this._cel = cel,
        this._email = email,
        this._sex = sex,
        this._estciv = estciv
    }
    setpesonalData(cpf,nome,snome,datanasc,cel,email,sex,estciv){
        if(cpf!==''&& nome!==''&&snome!==''&&datanasc!==''&&cel!==''&&email!==''&&sex!==''&&estciv!==''){
            this._id = cpf,
            this._nome = nome,
            this._snome = snome,
            this._datanasc = datanasc,
            this._cel = cel,
            this._email = email,
            this._sex = sex,
            this._estciv = estciv
        }else{
            return console.log('todos os campos precisam ser preenchidos');
        }
       
    }
    getpersonalData(){
        return this._nome,this._snome,this._datanasc,this._cel,this._email,this._sex,this._estciv
    }
    imprimirDadosPessoais(){
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


/* 
Model
*/

 // extends Pessoa
class Endereco{
    constructor(cep,rua,num,comp,bairro,city,est){
        //super(cpf,nome,snome,datanasc,cel,email,sex,estciv);
        this._cep = cep,
        this._rua = rua,
        this._num = num,
        this._comp = comp,
        this._bairro = bairro,
        this._city = city,
        this._est = est
    }
    setEnd(cep,rua,num,comp,bairro,city,est){
        if(cep !== '' && rua !== '' && num !== '' && comp !== '' && bairro !== '' && city !== '' && est !== ''){
            this._cep = cep,
            this._rua = rua,
            this._num = num,
            this._comp = comp,
            this._bairro = bairro,
            this._city = city,
            this._est = est
        }else{
            return console.log('todos os campos precisam ser preenchidos');
        }
    }
    getEnd(){
        return this.cep, this.rua, this.num, this.comp, this.bairro, this.city, this.est;
    }
    imprimirEndereço(){
        console.log( this.cep,
            this.rua,
            this.num,
            this.comp,
            this.bairro,
            this.city,
            this.est);
    }
}
/*
Model
*/
// class para possivel armazenamento em localStorage
class Db{
    gravar(id, arr){
        localStorage.setItem(id, JSON.stringify(arr))
    }
    consultar(id){
        try {
            id = parseInt(id)
            console.log(id)
            const cadastro = JSON.parse(localStorage.getItem(id))
            if(cadastro == null){
                /*provisorio*/
                alert('Cadastro Não encontrado');
            }
            console.log(cadastro)
            return cadastro;

          } catch (error) {
              alert(`Erro durante a Busca: ${error}`)
          }
    }
}

