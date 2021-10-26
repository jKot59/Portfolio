import lazyload from "./lazyload"

function sliderSolutions () {
    const leftArrow = document.querySelector('.solutions__slider .left-arrow'),
          rightArrow = document.querySelector('.solutions__slider .right-arrow'),
          items = document.querySelectorAll('.solutions__slider-window img'),
          links = document.querySelectorAll('.solutions__navigation a')


    let currentSlide = 0

    links.forEach( (link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target == links[i]) {
                currentSlide = i
                changeTabColor()
                showSlide()
            }
        })
    })

    leftArrow.addEventListener('click', () => {
        if(currentSlide > 0) {
            --currentSlide
            showSlide()
            changeTabColor()
        } else {
            currentSlide = items.length - 1
            showSlide()
            changeTabColor()
        }
    })

    rightArrow.addEventListener('click', () => {
        if(currentSlide < items.length - 1) {
            ++currentSlide
            showSlide()
            changeTabColor()
        } else {
            currentSlide = 0
            showSlide()
            changeTabColor()
        }
    })

    function changeTabColor () {
        links.forEach( link => link.style.color = 'white')
        links[currentSlide].style.color = 'var(--main-color)'
    }
    function showSlide () {
        items.forEach( (item, i) => {
            if(i == currentSlide) {
                item.classList.add('active')
                lazyload(item)
            } else {
                item.classList.remove('active')
            }
        })
    }
}

export default sliderSolutions