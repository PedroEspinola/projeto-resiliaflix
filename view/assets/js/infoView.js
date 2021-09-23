// View
renderizarCarrossel() // função chamada no carregamento da página
renderizarFilme() //função que manipula o DOM para renderizar o filme

function renderizarFilme() { // renderização dos dados API
    const parametrosUrl = new URLSearchParams(location.search); //pega os parametro da URL
    const parametrosObjeto = Object.fromEntries(parametrosUrl.entries()); //conerte par objeto os parametros da URL

    const filme = carregarFilme(parametrosObjeto.id) //chama o conroller para carregamento do filme

    filme.done((result) => { //success do ajax (só funciona com .done) - para renderizar o filme
        const filme = new Filme( //instância do Model - preenchimento do model com o resultado da requisição
            result.Poster,
            result.Title,
            result.Year,
            result.Plot,
            result.Actors,
            result.Writer,
            result.Runtime,
            result.Genre,
        )
        $('#poster').attr('src', filme.getPoster()); //manipulação de DOM
        $('#titulo').html(filme.getTitulo());
        $('#ano').html(filme.getAno());
        $('#sinopse').html(filme.getSinopse());
        $('#atores').html(filme.getAtores());
        $('#direcao').html(filme.getDirecao());
        $('#duracao').html(filme.getDuracao());
        $('#genero').html(filme.getGenero());
    }).fail((error)=>{
        console.log(error)
    })
}

function renderizarCarrossel() { //percorre os itens e faz uma requisição para cada uma chamando Controller
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
    filmes.forEach((filme,index) => { //para cada elemento carrega o filme da API
        carregarFilme(filme).done(result => {
            $(`#poster-${index}`).attr('src', result.Poster);
            $(`#poster-${index}`).data('imdb', filme);
        })
    })
}
$('.carousel-item').click(function(event){ //função para direcionar para a página de informações
    location.href = `./info.html?id=${$(`#${event.target.id}`).data('imdb')}`
})
