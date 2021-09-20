/*controler*/
function pegaDados(id){
    let db = new Db();
    let dados = db.consultar(id);

    if(dados !== null){
        $('#rnome').val(dados[0]._nome).prop('disabled', false).focus();
        $('#rsnome').val(dados[0]._snome).prop('disabled', false);
        $('#rdatanasc').val(dados[0]._datanasc).prop('disabled', false);
        $('#rcpf').val(dados[0]._id);
        $('#rcel').val(dados[0]._cel).prop('disabled', false);
        $('#remail').val(dados[0]._email).prop('disabled', false);
        $('#rsex').val(dados[0]._sex).prop('disabled', false);
        $('#restciv').val(dados[0]._estciv).prop('disabled', false);
        $('#rcep').val(dados[1]._cep).prop('disabled', false);
        $('#rrua').val(dados[1]._rua).prop('disabled', false);
        $('#rnum').val(dados[1]._num).prop('disabled', false);
        $('#rcomp').val(dados[1]._comp).prop('disabled', false);
        $('#rbairro').val(dados[1]._bairro).prop('disabled', false);
        $('#rcity').val(dados[1]._city).prop('disabled', false);
        $('#rest').val(dados[1]._est).prop('disabled', false);
    }else{
        alert('CPF Invalido!');
    }
}
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
    let db = new Db();
    db.gravar(id, cadastro)
    limparCampos()
    /*provisorio*/
    alert('Dados Atualizados com Sucesso')
}
function excluirCadastro(id){
    let db = new Db()
    db.delete(id)
    limparCampos()
    alert('Usuario Excluido com Sucesso!')
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
            /*alert provisorio*/
            alert(`Houve um erro durante a execução: ${error}`);
        }
        
    }else{
        /*alert provisorio*/
        alert('dados invalidos')
    }
}