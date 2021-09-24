function validacaoEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            let efocus = document.createElement('p');
            efocus.setAttribute('id', 'efocus');
            efocus.style.color = 'green';
            efocus.innerHTML = 'Email valido!';
            document.getElementById('demail').appendChild(efocus);
    }
    else{
        $('#tituloErro').html('Email Invalido!');
        $('#msgErro').html(`Preencha o Email corretamente com @ e .com`);
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#id').focus()
        })
    }
    }


function validaInput(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,bairro,city,est,id,senha){
    if(cpf == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#cpf').focus()
        })
        return false
    }
    if(nome == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#nome').focus()
        })
        return false
    }
    if(snome == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#snome').focus()
        })
        return false
    }
    if(datanasc == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#datanasc').focus()
        })
        return false
    }
    if(cel == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#cel').focus()
        })
        return false
    }
    if(rg == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#rg').focus()
        })
        return false
    }
    if(sex == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#sex').focus()
        })
        return false
    }
    if(estciv == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#estciv').focus()
        })
        return false
    }
    if(cep == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#cep').focus()
        })
        return false
    }
    if(rua == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#rua').focus()
        })
        return false
    }
    if(bairro == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#bairro').focus()
        })
        return false
    }
    if(city == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#city').focus()
        })
        return false
    }
    if(est == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#est').focus()
        })
        return false
    }
    if(id == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#id').focus()
        })
        return false
    }

    if(senha == ''){
        $('#tituloErro').html('Campo Obrigatorio!');
        $('#msgErro').html('Verifique se o campo foi preenchido corretamente!')
        $('#showModalError').modal('show');
        $('#btnErrorModal').on('click',function(){
            $('#senha').focus()
        })
        return false
    }
    return true;
}
/*
controler

function validaInput(...variaveis){
    for(let i=0 ; i <= variaveis.length ; i++){
        if(variaveis[i] == '' || variaveis[i] == null){
          $('#tituloErro').html('Preencha todos os Campos');
          $('#msgErro').html('Verifique se todos os campos foram preenchidos!!')
          $('#showModalError').modal('show');
          return false;
        }else{
            
            return true;
        }
    }
}
/*
controler
*/
function criarCadastro(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,num,comp,bairro,city,est,id,senha){
     
    const cadastro = []
    const pessoa = new Pessoa(cpf, nome, snome, datanasc, cel, rg, sex, estciv);
    const endereco = new Endereco(cep, rua, num, comp, bairro, city, est);
    const log = new Login(id,senha)
    console.log(pessoa,endereco,log)
    cadastro.push(pessoa, endereco,log);

   // console.log(cadastro, 'eu sou a constante');
    id = log._id;
    db = new Db();
    db.gravar(id, cadastro)
    limparCampos()
    $('#tituloSuccess').html('Usuario Cadastrado!');
    $('#msgSuccess').html(`Seu Usuario é:${id} \n Sua Senha é: \n ${senha}`);
    $('#showModalSuccess').modal('show');
}


/*
Controller
*/
  

function buscaCep(cep){
    if(cep != '' && cep.length === 8){
            
        try {
            const reqcep = $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`, 
                async: false,
            //    type: 'GET',
            //    dataType: 'JSON'
            }).responseJSON;
            
            if(reqcep.erro !== true){
                $('#rua').val(`${reqcep.logradouro}`);
                $('#num').prop('disabled', false).focus();
                $('#comp').prop('disabled', false); 
                $('#bairro').val(`${reqcep.bairro}`);
                $('#city').val(`${reqcep.localidade}`);
                $('#est').val(`${reqcep.uf}`);
            }else{
                $('#tituloErro').html('CEP Não Encontrado');
                $('#msgErro').html(`Houve um erro durante a Busca do CEP! \n Tente novamente, use Somente NUMEROS! \n Erro: ${error}`);
                $('#showModalError').modal('show');
            }
            
        } catch (error) {
            $('#tituloErro').html('Erro!');
            $('#msgErro').html(`Houve um erro durante a Busca do CEP! \n Tente novamente, use Somente NUMEROS! \n Erro: ${error}`);
            $('#showModalError').modal('show');
        }
        
    }else{
        $('#tituloErro').html('Dados invalidos!');
        $('#msgErro').html('Verifique se Digitou o CEP corretamente! \n Use Somente NUMEROS!');
        $('#showModalError').modal('show');
    }
}
