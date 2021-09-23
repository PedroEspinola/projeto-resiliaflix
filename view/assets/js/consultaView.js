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

$('#rid').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Este sera seu usuário';
    document.getElementById('demail').appendChild(efocus);
})
$('#rid').focusout(function (){
    $('#efocus').remove()
})

$('#senha').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Nunca revele sua senha';
    document.getElementById('dsenha').appendChild(efocus);
})
$('#dsenha').focusout(function (){
    $('#efocus').remove()
})

$('#csenha').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Nunca revele sua senha';
    document.getElementById('dcsenha').appendChild(efocus);
})
$('#dcsenha').focusout(function (){
    $('#efocus').remove()
})

$('#dcsenha').focusout(function (){
    let s1 = $('#senha').val();
    let s2 = $('#csenha').val();

    if(s1 !== s2){
        $('#tituloErro').html('Erro!');
            $('#msgErro').html(`As senhas não são identicas`);
            $('#showModalError').modal('show');
    }
})
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
    $('#rid').val('');
    $('#senha').val('');
    $('#csenha').val('');
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
    let id = $('#id').val();
    let senha = $('#senha').val();
    
 

   let validado = validaInput(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,bairro,city,est,id,senha,csenha);
   console.log(validado)
   if(validado !== '' || validado !== false){
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
    
    let nome = $('#nome').val();
    let snome =  $('#snome').val();
    let datanasc = $('#datanasc').val();
    let cel = $('#cel').val();
    let sex = $('#sex').val();
    let cpf = $('#cpf').val();
    let rg = $('#rg').val();
    let estciv = $('#estciv').val();
    let cep = $('#cep').val();
    let rua = $('#rua').val();
    let num = $('#num').val();
    let comp = $('#comp').val();
    let bairro = $('#bairro').val();
    let city = $('#city').val();
    let est = $('#est').val();
    let id = $('#id').val();
    let senha = $('#senha').val();
    
 

   let validado = validaInput(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,bairro,city,est,id,senha);

   //console.log(datanasc) datanasc esta passando vazio pela validação por alguma razão
   console.log(validado);

    if(validado == true){
        //criar função factory
        criarCadastro(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,num,comp,bairro,city,est,id,senha)
    }

}

function remover(){
    let id = $('#id').val()
    if(id == '' || id == null){
        $('#tituloErro').html('Email Incorreto');
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

