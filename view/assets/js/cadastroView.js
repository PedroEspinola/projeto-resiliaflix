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
$('#id').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Este sera seu usuário';
    document.getElementById('demail').appendChild(efocus);
})
$('#id').focusout(function (){
    $('#efocus').remove()
})

$('#senha').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Nunca revele sua senha';
    document.getElementById('dsenha').appendChild(efocus);
})
$('#senha').focusout(function (){
    $('#efocus').remove()
})

$('#csenha').focusin(function (){
    let efocus = document.createElement('p');
    efocus.setAttribute('id', 'efocus');
    efocus.style.color = 'green';
    efocus.innerHTML = 'Nunca revele sua senha';
    document.getElementById('dcsenha').appendChild(efocus);
})
$('#csenha').focusout(function (){
    $('#efocus').remove()
    $('#efocus').remove()
})

$('#csenha').focusout(function (){
    let s1 = $('#senha').val();
    let s2 = $('#csenha').val();

    if(s1 !== s2){
        console.log('chegei')
        $('#senha').val('')
        $('#tituloErro').html('Erro!');
        $('#msgErro').html(`As senhas não são identicas`);
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#senha').focus()
        })
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

/*
View
*/

function limparCampos(){
    $('#nome').val('');
    $('#snome').val('');
    $('#datanasc').val('');
    $('#cel').val('');
    $('#sex').val('');
    $('#rg').val('');
    $('#email').val('');
    $('#estciv').val('');
    $('#id').val('');
    $('#senha').val('');
    $('#csenha').val('')
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

function pesquisaCEP(){
   
    let cep = $('#cep').val();
    
    buscaCep(cep)
        
}


