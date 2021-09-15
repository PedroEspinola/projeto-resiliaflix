buscarFilmes() // função chamada no carregamento da página

function buscarFilmes() { //função para exibição dos posteres
    const filmes = [ //array com IDs de imdb dos filmes que aparecerão
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
        'tt10838180',
    ]
    filmes.forEach(function(filme, index) { //função que percorre os IDs e chama API


        $.ajax({
            url: `http://www.omdbapi.com/?apikey=2802824f&i=${filme}`,
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                $(`#poster-${index}`).attr('src', result.Poster)
            }

        })

    })
    console.log(filmes)

}