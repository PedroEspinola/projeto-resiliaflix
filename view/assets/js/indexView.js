buscarFilmes() // função chamada no carregamento da página

function buscarFilmes() { //função para exibição dos posteres
    const filmes = [ //array com IDs de imdb dos filmes que aparecerão
        'tt0137523', //clube da luta

        'tt0480249', //eu sou a lenda
        'tt0068646',//poderoso chefão
        'tt0363163', //a queda do terceiro reich
        'tt6723592', //tenet
        'tt0816692', //interestelar
        'tt1235841', //medianeiras
        'tt0109830', //forrest gump
        'tt0490204', //reine sobre mim
        'tt0120737', //senhor dos anéis
        'tt0281358', //um amor para recordar
        'tt2294629', //frozen
    ]
    filmes.forEach(function(filme, index) { //função que percorre os IDs e chama API


        $.ajax({
            url: `https://www.omdbapi.com/?apikey=2802824f&i=${filme}`,
            type: 'GET',
            dataType: 'json',
                success: function(result){
                    $(`#poster-${index}`).attr('src', result.Poster)
                    $(`#poster-${index}`).data('imdb', filme)
                }
            })
    })
}

$('.carousel-item').click(function(event){ //função para direcionar para a página de informações
    location.href = `view/info.html?id=${$(`#${event.target.id}`).data('imdb')}`
})
