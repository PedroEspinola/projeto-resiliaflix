
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

function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}



  
function pesquisaCEP(){
   
var cep = $('#cep').val();

    if(cep != '' && cep.length === 8){
        
        try {
            const reqcep = $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`, 
                async: false,
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

   let pessoa = new Pessoa(cpf,nome,snome,datanasc,cel,email,sex,estciv);

   console.log(pessoa)

   pessoa.imprimirDadosPessoais();
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

