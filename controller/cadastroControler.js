/*
controler
*/
function validaInput(...variaveis){
    for(let i=0 ; i <= variaveis.length ; i++){
        if(variaveis[i] == ''){
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
function criarCadastro(cpf,nome,snome,datanasc,cel,email,sex,estciv,cep,rua,num,comp,bairro,city,est){
     
    const cadastro = []
    const pessoa = new Pessoa(cpf, nome, snome, datanasc, cel, email, sex, estciv);

    const endereco = new Endereco(cep, rua, num, comp, bairro, city, est);

    cadastro.push(pessoa, endereco);

   // console.log(cadastro, 'eu sou a constante');
    let id = pessoa._id;
    db = new Db();
    db.gravar(id, cadastro)
    limparCampos()
    $('#tituloSuccess').html('Usuario Cadastrado!');
    $('#msgSuccess').html('O Usuario foi cadastrado com Sucesso!');
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
            $('#rua').val(`${reqcep.logradouro}`);
            $('#num').prop('disabled', false).focus();
            $('#comp').prop('disabled', false); 
            $('#bairro').val(`${reqcep.bairro}`);
            $('#city').val(`${reqcep.localidade}`);
            $('#est').val(`${reqcep.uf}`);
           
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
