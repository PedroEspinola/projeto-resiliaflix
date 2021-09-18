/*
controler
*/
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
    db = new Db();
    db.gravar(id, cadastro)
    limparCampos()
    alert('Usuario Cadastrado com Sucesso!');
}


/*
Controller
*/
  
function pesquisaCEP(){
   
    var cep = $('#cep').val();
    
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
    