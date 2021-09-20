document.getElementById("btnPesquisar").addEventListener("click", function(event){
    event.preventDefault()
    console.log('cheguei')
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

function pesquisaCEP(){
   
    var cep = $('#cep').val();
    
    buscaCep(cep)
        
}