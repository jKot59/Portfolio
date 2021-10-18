// checking for percent value dont be more than 100% and less than 0%
// and dimention have to has simbol %

function abilities () {
    const dimentions = document.querySelectorAll('.skills__level-header-percent'),
          levels = document.querySelectorAll('.skills__level-scale-current')

    dimentions.forEach( (item, i) => {
        let dimention = item.innerText
        let dimentionRegExp = dimention.match(/[\d]{0,3}\%/g)

        if(dimentionRegExp !== null) {
            let percentValue = parseInt(dimentionRegExp.join(''))
            if(percentValue <= 100 && percentValue >= 0)  levels[i].style.width = dimention
        } else {
            levels[i].style.width = 0
        }
    })
}

export default abilities