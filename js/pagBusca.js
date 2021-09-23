let button = document.querySelector("#buttonSearch")
let input = document.querySelector("#inputSearch")
let body = document.querySelector("body")
let contentCards = document.querySelector("#contentCards")
let filmeInexistente = document.querySelector("#filmeInexistente")
document.addEventListener('keydown', function(e) {
  if(e.key == "Enter"){
    document.getElementById("buttonSearch").click();
  }
});

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let search = input.value;
          let apart = search.split(' ')
          var together = apart.join("+")
          $.ajax({
            url:`https://www.omdbapi.com/?s=${together}&apikey=e633dcec&page=all`,
            type:"GET",
            dataType:"json",
            success:function(request){
              const arrayDeFilmes = request.Search
              console.log(request)
              if(request.Response === 'False'){
                contentCards.innerHTML = ` `
                filmeInexistente.classList.remove("invisivel")
               }else {
                filmeInexistente.classList.add("invisivel")
                mostraNaTela(arrayDeFilmes)
               }
            }
          })

   });

   function mostraNaTela(arrayDeFilmes){

     contentCards.innerHTML = ` `
     arrayDeFilmes.map(function(filme){
     const div = document.createElement("div")
     div.classList.add("cardFilme")
     const img = document.createElement("img")
     div.appendChild(img)
     img.src = filme.Poster
     img.alt = filme.Title
     img.id =  filme.imdbID
     contentCards.appendChild(div)
     img.addEventListener("click",function(event){

    location.href =`../view/info.html?id=${event.target.id}`
     })
     })
   }
