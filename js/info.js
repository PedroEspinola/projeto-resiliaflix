// View
buscarFilmes() // função chamada no carregamento da página
const filme = filmeController()
filme.done((result) => {
    const filme = new Filme(
        result.Poster,
        result.Title,
        result.Year,
        result.Plot,
        result.Actors,
        result.Writer,
        result.Runtime,
        result.Genre,
    )

    renderizarFilme(filme)
})

function renderizarFilme(filme){
    console.log(filme)
    $('#poster').attr('src', filme.getPoster);
    $('#titulo').html(filme.Title);
    $('#ano').html(filme.Year);
    $('#sinopse').html(filme.Plot);
    $('#atores').html(filme.Actors);
    $('#direcao').html(filme.Writer);
    $('#duracao').html(filme.Runtime);
    $('#genero').html(filme.Genre);
}

//Controller
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

function filmeController(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return $.ajax({
        url: `http://www.omdbapi.com/?apikey=2802824f&i=${params.id}`,
        type: 'GET',
        dataType: 'json'
    })
}

// Model
class Filme{
    poster = null
    titulo = null
    ano = null
    sinopse = null
    atores = null
    direcao = null
    duracao = null
    genero = null

    constructor(poster, titulo, ano, sinopse, atores, direcao, duracao, genero) {
        this.poster = poster
        this.titulo = titulo
        this.ano = ano
        this.sinopse = sinopse
        this.atores = atores
        this.direcao = direcao
        this.duracao = duracao
        this.genero = genero
    }

    setPoster(poster){
        this.poster = poster
    }

    getPoster(){
        return this.poster
    }

    setTitulo(titulo){
        this.titulo = titulo
    }

    getTitulo(){
        return this.titulo
    }

    setAno(ano){
        this.ano = ano
    }

    getAno(){
        return this.ano
    }

    setSinopse(sinopse){
        this.sinopse = sinopse
    }

    getSinopse(){
        return this.sinopse
    }

    setAtores(atores){
        this.atores = atores
    }

    getAtores(){
        return this.atores
    }

    setDirecao(direcao){
        this.direcao = direcao
    }

    getDirecao(){
        return this.direcao
    }

    setDuracao(duracao){
        this.duracao = duracao
    }

    getDuracao(){
        return this.duracao
    }

    setGenero(genero){
        this.genero = genero
    }

    getGenero(){
        return this.genero
    }
}
