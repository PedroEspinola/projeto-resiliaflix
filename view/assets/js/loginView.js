document.getElementById('btnLogin').addEventListener("click", function (event){
    event.preventDefault();
})

function login(){
    let id = $('#id').val();
    let pass = $('#senha').val()

    if(id !== '' && pass !== ''){
        validaLogin(id, pass);
    }else{
        $('#tituloErro').html('Preencha todos os Campos');
        $('#msgErro').html('Verifique se todos os campos foram preenchidos corretamente!!')
        $('#showModalError').modal('show');
    }
       
}