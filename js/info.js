buscarFilmes() // função chamada no carregamento da página

function buscarFilmes() { //função para exibição dos posteres
    const filmes = [ //array com IDs de imdb dos filmes que aparecerão
        'tt0363163', //a queda do terceiro reich
        'tt6723592', //tenet
        'tt0480249', //eu sou a lenda
        'tt0816692', //interestelar
        'tt0137523', //clube da luta
        'tt0109830', //forrest gump
        'tt0490204', //reine sobre mim
        'tt0281358', //um amor para recordar
        'tt0120737', //senhor dos anéis
        'tt2294629', //frozen
        'tt0068646',//poderoso chefão
        'tt1235841', //medianeiras
    ]
    filmes.forEach(function (filme, index) { //função que percorre os IDs e chama API

        $.ajax({
            url: `http://www.omdbapi.com/?apikey=2802824f&i=${filme}`,
            type: 'GET',
            dataType: 'json',
                success: function(result){
                    $(`#poster-${index}`).attr('src', result.Poster);
                    $(`#poster-${index}`).data('imdb', filme);
                }
            })
    })

}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);


$.ajax({
    url: `http://www.omdbapi.com/?apikey=2802824f&i=${params.id}`,
    type: 'GET',
    dataType: 'json',
        success: function(result){
        $('#poster').attr('src', result.Poster);
        $('#titulo').html(result.Title);
        $('#ano').html(result.Year);
        $('#sinopse').html(result.Plot);
        $('#atores').html(result.Actors);
        $('#direcao').html(result.Writer);
        $('#duracao').html(result.Runtime);
        $('#genero').html(result.Genre);
        console.log(result);
    }
    })