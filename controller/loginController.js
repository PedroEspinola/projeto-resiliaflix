function validaLogin(id , pass){
    let db = new Db();
    let log = db.consultar(id)

    if(pass == log[0]._email){
        window.location.href = '../index.html'
    }else{
        $('#tituloErro').html('Usuario Incorreto');
        $('#msgErro').html('Verifique se o CPF e Senha foi Digitado Corretamente!!')
        $('#showModalError').modal('show');
    }

    console.log(log._email)
}