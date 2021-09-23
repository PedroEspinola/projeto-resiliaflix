function validaLogin(id , pass){
    let db = new Db();
    let log = db.consultar(id)

    if(pass == log[2]._senha){
        window.location.href = '../index.html'
    }else{
        $('#tituloErro').html('Usuario Incorreto');
        $('#msgErro').html('Verifique se o Email e Senha foi Digitado Corretamente!!')
        $('#showModalError').modal('show');
    }

}