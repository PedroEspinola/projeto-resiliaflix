function carregarFilme(filme){ //requisição para API
    console.log(filme)
    return $.ajax({
        url: `http://www.omdbapi.com/?apikey=2802824f&i=${filme}`,
        type: 'GET',
        dataType: 'json'
    })
}