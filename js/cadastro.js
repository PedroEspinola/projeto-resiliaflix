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
  
function pesquisaCEP(){
    
}


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



function cadastrar(){
    let nome = $('#nome').val();
    let snome =  $('#snome').val();
    let datanasc = $('#datanasc').val();
    let cel = $('#cel').val();
    let sex = $('#sex').val();
    let cpf = $('#cpf').val();
    let email = $('#email').val();
    let estciv = $('#estciv').val();
    
    console.log(nome,snome,datanasc,cel,sex,cpf,email,estciv);
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


class Endereco extends Pessoa{
    constructor(cep,rua,num,comp,bairro,city,est){
        this.cep = cep,
        this.rua = rua,
        this.num = num,
        this.comp = comp,
        this.bairro = bairro,
        this.city = city,
        this.est = est
    }
}

