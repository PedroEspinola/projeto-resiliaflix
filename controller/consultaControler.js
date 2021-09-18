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
