/*view*/
document.getElementById("btnPesquisar").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("btnLimparEnd").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("btnClean").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("btnCadastrar").addEventListener("click", function(event){
    event.preventDefault()
});


/*view*/
function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}


/*
Controller
*/
  
function pesquisaCEP(){
   
var cep = $('#cep').val();
    var teste;
    if(cep != '' && cep.length === 8){
        
        try {
            const reqcep = $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`, 
                async: false,
            //    type: 'GET',
            //    dataType: 'JSON'
            }).responseJSON;
            $('#rua').val(`${reqcep.logradouro}`);
            $('#num').prop('disabled', false).focus();
            $('#comp').prop('disabled', false); 
            $('#bairro').val(`${reqcep.bairro}`);
            $('#city').val(`${reqcep.localidade}`);
            $('#est').val(`${reqcep.uf}`);
        } catch (error) {
            /*alert provisorio*/
            alert(`Houve um erro durante a execução: ${error}`);
        }
        
    }else{
        /*alert provisorio*/
        alert('dados invalidos')
    }
    
}

/*
View
*/

function limparCampos(){
    $('#nome').val('');
    $('#snome').val('');
    $('#datanasc').val('');
    $('#cel').val('');
    $('#sex').val('');
    $('#cpf').val('');
    $('#email').val('');
    $('#estciv').val('');
    $('#cep').val('');
    $('#rua').val('');
    $('#num').val('');
    $('#comp').val('');
    $('#bairro').val('');
    $('#city').val('');
    $('#est').val('');
   
}

/*view*/
function limparCEP(){
    $('#cep').val('');
    $('#rua').val('');
    $('#num').val('');
    $('#comp').val('');
    $('#bairro').val('');
    $('#city').val('');
    $('#est').val('');
}


/********************
 * DANGER, TEST ZONE*
 ********************/


/*view*/
function cadastrar(){
    
    let nome = $('#nome').val();
    let snome =  $('#snome').val();
    let datanasc = $('#datanasc').val();
    let cel = $('#cel').val();
    let sex = $('#sex').val();
    let cpf = $('#cpf').val();
    let email = $('#email').val();
    let estciv = $('#estciv').val();
    let cep = $('#cep').val();
    let rua = $('#rua').val();
    let num = $('#num').val();
    let comp = $('#comp').val();
    let bairro = $('#bairro').val();
    let city = $('#city').val();
    let est = $('#est').val();
    
 

   let validado = validaInput(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,bairro,city,est);

   //console.log(datanasc) datanasc esta passando vazio pela validação por alguma razão
   console.log(validado);

    if(validado == true){
        //criar função factory
        criarCadastro(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,num,comp,bairro,city,est)
    }

}
/*
controler
*/
function validaInput(...variaveis){
    for(let i=0 ; i <= variaveis.length ; i++){
        if(variaveis[i] == ''){
          /*provisorio*/
          console.log(variaveis, 'bloco campo vazio verdade')
          alert('Preencha todos os Campos!');
          return false;
        }else{
            console.log(variaveis, 'bloco campos nao vazios')
            return true;
        }
    }
}
/*
controler
*/
function criarCadastro(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,num,comp,bairro,city,est){
     
    const cadastro = []
    const pessoa = new Pessoa(cpf, nome, snome, datanasc, cel, email, sex, estciv);

    const endereco = new Endereco(cep, rua, num, comp, bairro, city, est);

    cadastro.push(pessoa, endereco);

   // console.log(cadastro, 'eu sou a constante');
    let id = pessoa._id;
    db = new Db();
    db.gravar(id, cadastro)
}

/*
Model
*/
// extends Endereço
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
    consultar(){

    }
}

