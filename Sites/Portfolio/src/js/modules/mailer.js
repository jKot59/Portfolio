function mailer () {
    const form = document.querySelector('.contacts__form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        fetch('./mailer/smart.php', {
            method: 'POST',
            body: new FormData(form)
        })
    })
}

export default mailer