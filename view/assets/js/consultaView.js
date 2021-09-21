document.getElementById("btnPesquisar").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("btnCEP").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("confirmar").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("atualizar").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("remover").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("confirmar").addEventListener("click", function(){
    confirmar()
})
document.getElementById("atualizar").addEventListener("click", function(){
    atualizar()
})
document.getElementById("remover").addEventListener("click", function(){
    remover()
})
document.getElementById("btnCEP").addEventListener("click", function(event){
    pesquisaCEP()
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
function limparCampos(){
    $('#rnome').val('');
    $('#rsnome').val('');
    $('#rdatanasc').val('');
    $('#rcel').val('');
    $('#rsex').val('');
    $('#rcpf').val('');
    $('#remail').val('');
    $('#restciv').val('');
    $('#rcep').val('');
    $('#rrua').val('');
    $('#rnum').val('');
    $('#rcomp').val('');
    $('#rbairro').val('');
    $('#rcity').val('');
    $('#rest').val('');
   
}

/*view*/
function pesquisar(){
    let id = $('#id').val();
    pegaDados(id);
    
}

function confirmar(){
    let nome = $('#rnome').val();
    let snome =  $('#rsnome').val();
    let datanasc = $('#rdatanasc').val();
    let cel = $('#rcel').val();
    let sex = $('#rsex').val();
    let cpf = $('#rcpf').val();
    let email = $('#remail').val();
    let estciv = $('#restciv').val();
    let cep = $('#rcep').val();
    let rua = $('#rrua').val();
    let bairro = $('#rbairro').val();
    let city = $('#rcity').val();
    let est = $('#rest').val();
    
 

   let validado = validaInput(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,bairro,city,est);
   console.log(validado)
   if(validado !== '' && validado !== false){
    limparCampos()
    $('#tituloSuccess').html('Usuario Cadastrado!');
    $('#msgSuccess').html('O Usuario foi cadastrado com Sucesso!');
    $('#showModalSuccess').modal('show');
   }else{
    $('#tituloErro').html('Preencha todos os Campos');
    $('#msgErro').html('Verifique se todos os campos foram preenchidos corretamente!!')
    $('#showModalError').modal('show');
   }
}
/*view*/
function atualizar(){
    let nome = $('#rnome').val();
    let snome =  $('#rsnome').val();
    let datanasc = $('#rdatanasc').val();
    let cel = $('#rcel').val();
    let sex = $('#rsex').val();
    let cpf = $('#rcpf').val();
    let email = $('#remail').val();
    let estciv = $('#restciv').val();
    let cep = $('#rcep').val();
    let rua = $('#rrua').val();
    let num = $('#rnum').val();
    let comp = $('#rcomp').val();
    let bairro = $('#rbairro').val();
    let city = $('#rcity').val();
    let est = $('#rest').val();
    
 

   let validado = validaInput(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,bairro,city,est);

   //console.log(datanasc) datanasc esta passando vazio pela validação por alguma razão
   console.log(validado);

    if(validado == true){
        //criar função factory
        criarCadastro(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,num,comp,bairro,city,est)
    }

}

function remover(){
    let id = $('#rcpf').val()
    if(id == '' || id == null){
        $('#tituloErro').html('CPF Incorreto');
        $('#msgErro').html('Verifique se o campo foi preechido corretamente!!')
        $('#showModalError').modal('show');
    }else{
        excluirCadastro(id)
    }
}

function pesquisaCEP(){
   
    var cep = $('#rcep').val();
    
    buscaCep(cep)
        
}