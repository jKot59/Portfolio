function burger (callButton, menu ) {
    callButton.addEventListener('click', () => {
        menu.classList.toggle('active')
        callButton.classList.toggle('active')
    })
}

export default burger