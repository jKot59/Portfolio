function spinner (event) {
    const spinner = document.querySelector('.spinner-border')

    event === 'show' ? spinner.style.display = 'block' : spinner.style.display = 'none'
}

export default spinner