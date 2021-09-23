/*controler*/
function pegaDados(id){
    let db = new Db();
    let dados = db.consultar(id);
    console.log(dados)
    if(dados !== null){
        $('#rnome').val(dados[0]._nome).prop('disabled', false).focus();
        $('#rsnome').val(dados[0]._snome).prop('disabled', false);
        $('#rdatanasc').val(dados[0]._datanasc).prop('disabled', false);
        $('#rcpf').val(dados[0]._id);
        $('#rcel').val(dados[0]._cel).prop('disabled', false);
        $('#rg').val(dados[0]._rg)
        $('#rsex').val(dados[0]._sex).prop('disabled', false);
        $('#restciv').val(dados[0]._estciv).prop('disabled', false);
        $('#rcep').val(dados[1]._cep).prop('disabled', false);
        $('#rrua').val(dados[1]._rua).prop('disabled', false);
        $('#rnum').val(dados[1]._num).prop('disabled', false);
        $('#rcomp').val(dados[1]._comp).prop('disabled', false);
        $('#rbairro').val(dados[1]._bairro).prop('disabled', false);
        $('#rcity').val(dados[1]._city).prop('disabled', false);
        $('#rest').val(dados[1]._est).prop('disabled', false);
        $('#rid').val(dados[2]._id)
        $('#senha').val(dados[2]._senha).prop('disabled', false);
        $('#csenha').val(dados[2]._senha).prop('disabled', false);
    }else{
        $('#tituloErro').html('Usuario Não Encontrado!');
        $('#msgErro').html('Verifique se o Email foi digitado corretamente!')
        $('#showModalError').modal('show');
    }
}
function validaInput(cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,bairro,city,est,id,senha){
    let variaveis = [cpf,nome,snome,datanasc,cel,rg,sex,estciv,cep,rua,bairro,city,est,id,senha]
    for(let i=0 ; i <= variaveis.length ; i++){
        console.log(variaveis[i])
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

function excluirCadastro(id){
    let db = new Db()
    db.delete(id)
    limparCampos()
}

function buscaCep(cep){
    if(cep != '' && cep.length === 8){
            
        try {
            const reqcep = $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`, 
                async: false,
            //    type: 'GET',
            //    dataType: 'JSON'
            }).responseJSON;
            $('#rrua').val(`${reqcep.logradouro}`);
            $('#rnum').focus();
            $('#rbairro').val(`${reqcep.bairro}`);
            $('#rcity').val(`${reqcep.localidade}`);
            $('#rest').val(`${reqcep.uf}`);
            console.log('cheguei');
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