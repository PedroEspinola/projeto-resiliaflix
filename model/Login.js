class Db {
    consultar(id) {
        try {
            const cadastro = JSON.parse(localStorage.getItem(id))
            if (cadastro == null) {
                $('#tituloErro').html('Usuario Não encontrado!');
                $('#msgErro').html('Verifique se o CPF foi digitado corretamente! \n Utilize Somente NUMEROS!');
                $('#showModalError').modal('show');
            }
            return cadastro;

        } catch (error) {
            $('#tituloErro').html('Error!');
            $('#msgErro').html(`Houve um Erro durante a busca do CPF, Error: ${error}`);
            $('#showModalError').modal('show');
        }

    }
}