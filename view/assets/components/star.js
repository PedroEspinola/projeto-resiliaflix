class star extends HTMLElement {
    constructor(){
        super()
        this.build()
    }

    build(){
        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.style())

        const rater = this.createRater()
        this.stars = this.createStars()

        this.stars.forEach(star => rater.appendChild(star))

        this.resetRating()

        shadow.appendChild(rater)
    }

    createRater(){
        const rater = document.createElement('div')
        rater.classList.add('star-film')
        rater.addEventListener('mouseout', this.resetRating.bind(this))
        return rater
    }

    createStars(){
        const createStar = ( _, id) => {
            const parametrosUrl = new URLSearchParams(location.search); //pega os parametro da URL
            const parametrosObjeto = Object.fromEntries(parametrosUrl.entries()); //conerte par objeto os parametros da URL

            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(id) + 1)
            star.innerHTML = '&#9733;'
            star.addEventListener('click', this.setRating.bind(this))
            star.addEventListener('mouseover', this.ratingHover.bind(this))

            if (localStorage[parametrosObjeto.id]) {
                this.setAttribute(
                    'data-rating',
                    localStorage[parametrosObjeto.id]
                )
            }
            return star
        }

        return Array.from({length: 5 }, createStar)
    }

    resetRating(){
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.hightlightRating()
    }

    setRating(event){
        const parametrosUrl = new URLSearchParams(location.search); //pega os parametro da URL
        const parametrosObjeto = Object.fromEntries(parametrosUrl.entries()); //conerte par objeto os parametros da URL

        localStorage.setItem(parametrosObjeto.id,  event.target.getAttribute('data-value'))

        this.setAttribute(
            'data-rating',
            event.target.getAttribute('data-value')
        )
    }

    ratingHover(event){
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.hightlightRating()
    }

    hightlightRating(){
        this.stars.forEach(star => {
            star.style.color = this.currentRatingValue >=star.getAttribute('data-value')
            ? '#fcbf49'
            : 'gray'
        })
    }

    style(){
        const style = document.createElement('style')
        style.textContent = `
        .star{
            font-size: 3rem;
            color: gray;
            cursor: pointer;
        }`
        return style
    }
}
customElements.define('star-film', star)