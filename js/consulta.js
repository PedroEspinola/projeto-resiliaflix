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
    pegaId(id);
}

/*controler*/
function pegaId(id){
    let db = new Db();
    db.consultar(id);
}

/*
Model
*/

