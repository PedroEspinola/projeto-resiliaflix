class Filme{
    poster = null //nulo por não ser um valor fixo
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

    // get para pegar o atributo e set caso seja preciso modifica-lo
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
