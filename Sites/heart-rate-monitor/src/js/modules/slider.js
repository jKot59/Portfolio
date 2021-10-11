function moveSlider () {
    const leftArrow = document.querySelector('.carousel__btn_left'),
          rightArrow = document.querySelector('.carousel__btn_right'),
          sliderWindow = document.querySelector('.carousel__sliderWindow'),
          slider = document.querySelector('.carousel__inner'),
          carouselDots = document.querySelector('.carousel__dots')


    let positionOfSlider = 0
    // let sliderWidth = parseInt(window.getComputedStyle(slider).getPropertyValue("width"))
    let sliderWidth = slider.offsetWidth
    // минус 1 потому что первый слайдер начинается с 0, а не с 750px. Т.е общая
    // ширина 1500 (750*2), а не 2250
    let countOfSliders = sliderWindow.querySelectorAll('div').length - 1

    createDots()
    makeAdotActive()
    leftArrow.addEventListener('click', switchSliderLeft)
    rightArrow.addEventListener('click', switchSliderRight)
    // ставим сразу инлайн стиль для позиции, чтобы первое переключение было плавное
    sliderWindow.style.left=`${positionOfSlider}px`

    function createDots() {
        for (let i = 0; i < countOfSliders + 1; i++) {
            let dot = document.createElement('div')
            dot.classList.add('carousel__dot')
            dot.addEventListener('click', () => {
                positionOfSlider = i * -sliderWidth
                sliderWindow.style.left=`${positionOfSlider}px`
                makeAdotActive()
            })
            carouselDots.appendChild(dot)

        }
    }

    function switchSliderLeft() {
        if(positionOfSlider == 0) {
            positionOfSlider = -countOfSliders * sliderWidth
        } else {
            positionOfSlider += sliderWidth
        }
        sliderWindow.style.left=`${positionOfSlider}px`
        makeAdotActive()

    }

    function switchSliderRight() {
        if(Math.abs(positionOfSlider) == countOfSliders * sliderWidth) {
            positionOfSlider = 0
        } else {
            positionOfSlider -= sliderWidth
        }
        sliderWindow.style.left=`${positionOfSlider}px`
        makeAdotActive()

    }

    function makeAdotActive() {
        let numberOfOpenSlide = Math.abs(positionOfSlider / sliderWidth)
        let carouselDot = document.querySelectorAll('.carousel__dot')

        carouselDot.forEach( dot => dot.classList.remove('carousel__dot_active'))
        carouselDot[numberOfOpenSlide].classList.add('carousel__dot_active')
    }


}

export default moveSlider