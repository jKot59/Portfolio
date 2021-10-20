function showMessage (modal, cross) {
    const overlay = document.querySelector('.overlay')

    overlay.style.display = 'block'
    modal.style.display = 'block'

    cross.addEventListener('click', () => {
        overlay.style.display = "none"
        modal.style.display = 'none'
    })
}

export default showMessage