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