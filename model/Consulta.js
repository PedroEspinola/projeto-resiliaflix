class Pessoa {
    constructor(cpf,nome,snome,datanasc,cel,rg,sex,estciv){
        //super(cep,rua,num,comp,bairro,city,est);
        this._cpf = cpf,
        this._nome = nome,
        this._snome = snome,
        this._datanasc = datanasc,
        this._cel = cel,
        this._rg = rg,
        this._sex = sex,
        this._estciv = estciv
    }
    setpesonalData(cpf,nome,snome,datanasc,cel,rg,sex,estciv){
        if(cpf!==''&& nome!==''&&snome!==''&&datanasc!==''&&cel!==''&&rg!==''&&sex!==''&&estciv!==''){
            this._cpf = cpf,
            this._nome = nome,
            this._snome = snome,
            this._datanasc = datanasc,
            this._cel = cel,
            this._rg = rg,
            this._sex = sex,
            this._estciv = estciv
        }else{
            return console.log('todos os campos precisam ser preenchidos');
        }
       
    }
    getpersonalData(){
        return this._nome,this._snome,this._datanasc,this._cel,this._rg,this._sex,this._estciv
    }
    imprimirDadosPessoais(){
        console.log( this.cpf,
            this.nome,
            this.snome,
            this.datanasc,
            this.cel,
            this.rg,
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
        console.log( this._cep,
            this._rua,
            this._num,
            this._comp,
            this._bairro,
            this._city,
            this._est);
    }
}

class Login{
    constructor(id,senha){
        this._id = id;
        this._senha = senha;
    }
}
class Db{
    gravar(id, arr){
        localStorage.setItem(id, JSON.stringify(arr))
    }
    consultar(id){
        try {
            const cadastro = JSON.parse(localStorage.getItem(id))
            if(cadastro == null){
                $('#tituloErro').html('Usuario Não encontrado!');
                $('#msgErro').html('Verifique se o Email foi digitado corretamente!');
                $('#showModalError').modal('show');
            }
            return cadastro;

          } catch (error) {
            $('#tituloErro').html('Error!');
            $('#msgErro').html(`Houve um Erro durante a busca do Email, Error: ${error}`);
            $('#showModalError').modal('show');
          }
    }
    delete(id){
        localStorage.removeItem(id)
            $('#tituloSuccess').html('Usuario Excluido!');
            $('#msgSuccess').html(`Ususario Excluido com Sucesso! Usuario: ${id}`);
            $('#showModalSuccess').modal('show');
    }
}