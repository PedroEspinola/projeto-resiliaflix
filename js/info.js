const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)


$.ajax({
    url: `http://www.omdbapi.com/?apikey=2802824f&i=${params.id}`,
    type: 'GET',
    dataType: 'json',
        success: function(result){
        $('#poster').attr('src', result.Poster)
        $('#titulo').html(result.Title)
        $('#ano').html(result.Year)
        $('#sinopse').html(result.Plot)
        console.log(result)
    }
    })