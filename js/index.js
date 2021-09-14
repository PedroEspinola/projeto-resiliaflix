buscarFilmes() // função chamada no carregamento da página

function buscarFilmes() { //função para exibição dos posteres
    const filmes = [ //array com IDs de imdb dos filmes que aparecerão
        'tt0363163',
        'tt6723592',
        'tt0480249',
        'tt0816692',
        'tt0137523',
        'tt0109830',
        'tt0490204',
        'tt0281358',
        'tt0480249',
        'tt0816692',
        'tt0137523',
        'tt0109830',
    ]
    filmes.forEach(function (filme, index) { //função que percorre os IDs e chama API

        $.ajax({
            url: `http://www.omdbapi.com/?apikey=2802824f&i=${filme}`,
            type: 'GET',
            dataType: 'json',
                success: function(result){
                    $(`#poster-${index}`).attr('src', result.Poster)
                    $(`#poster-${index}`).data('imdb', filme)
                }
            })
    })

}

$('.carousel-item').click(function(event){ //função para direcionar para apágina de informações
    location.href = `../html/info.html?id=${$(`#${event.target.id}`).data('imdb')}`

})
