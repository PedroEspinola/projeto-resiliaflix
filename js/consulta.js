document.getElementById("btnPesquisar").addEventListener("click", function(event){
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


/*view*/
function pesquisar(){
    let id = $('#id').val();
    let dados = pegaDados(id);
    console.log(dados)
    $('#rnome').val(dados[0]._nome).prop('disabled', false).focus();
    $('#rsnome').val(dados[0]._snome).prop('disabled', false);
    $('#rdatanasc').val(dados[0]._datanasc).prop('disabled', false);
    $('#rcpf').val(dados[0]._id).prop('disabled', false);
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

}
/*controler*/
function pegaDados(id){
    let db = new Db();
    let dados = db.consultar(id);
    return dados;
}
    /*Model
*/
/*provisorio... talvez */
class Db{
    gravar(id, arr){
        localStorage.setItem(id, JSON.stringify(arr))
    }
    consultar(id){
        try {
            id = parseInt(id)
            console.log(id)
            const cadastro = JSON.parse(localStorage.getItem(id))
            if(cadastro == null){
                /*provisorio*/
                alert('Cadastro Não encontrado');
            }
            console.log(cadastro)
            return cadastro;
          } catch (error) {
              alert(`Erro durante a Busca: ${error}`)
          }
    }
}
