function slider () {
    const slider = document.querySelector('.promo__slider'),
          dots = slider.querySelectorAll('.promo__slider-dots li'),
          leftArrow = slider.querySelector('.left-arrow'),
          rightArrow = slider.querySelector('.right-arrow')


    let currentSlide = 0
    let intervalId

    autoToggle(2000)

    // переключение сладов при клике по точкам
    dots.forEach( (dot, i) => {
        dot.addEventListener('click', (e) => {
            if(e.target === dots[i]) {
                currentSlide = i
                showSLide(currentSlide)
                clearInterval(intervalId)
            }
        })
    })

    // переключение слайдов при клике по стрелкам
    leftArrow.addEventListener('click', () => {
        if(currentSlide > 0) {
            --currentSlide
            showSLide(currentSlide)
            clearInterval(intervalId)
        }
        
    })
    rightArrow.addEventListener('click', () => {
        if(currentSlide < 4) {
            ++currentSlide
            showSLide(currentSlide)
            clearInterval(intervalId)
        }
    })

    function autoToggle (time) {
        intervalId = setInterval(() => {
            currentSlide < 4 ? ++currentSlide : currentSlide = 0
            showSLide(currentSlide)
        }, time)
    }

    function showSLide (slideNumber) {
        dots.forEach( (dot, i) => {
            dot.className = ''  // делаем все точки неактивные
            if(slideNumber == i) {
                slider.className = 'promo__slider' // class which have to stay
                slider.classList.add(`promo__slider_slide${slideNumber + 1}`) // активируем слайд
                dots[i].classList.add('active') // активируем точку
            }
        })
    }

}

export default slider