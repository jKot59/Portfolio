import postMessage from "./postMessage"
import showMessage from "./showMessage"
import spinner from './spinner'

function mailer () {
    const form = document.querySelector('.contacts__form'),
          thanks = document.getElementById('thanks'),
          cross = document.querySelectorAll('.modal__close'),
          error = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        spinner('show')

        postMessage('./mailer/smart.php', form)
        .then(() => {
            showMessage(thanks, cross[0])
            form.reset()
        })
        .catch(() => {
            showMessage(error, cross[1])
        })
        .finally(() => spinner('hide'))
    })

}

export default mailer