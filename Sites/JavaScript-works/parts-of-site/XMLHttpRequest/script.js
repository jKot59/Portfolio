window.addEventListener('DOMContentLoaded', () => {


    const form = document.querySelector('form')

    form.addEventListener('submit', e => {
        e.preventDefault();

        postRequest(form);
    })

    function postRequest(form) {
    const request = new XMLHttpRequest();

    const feedBAck = document.createElement('div');

    feedBAck.classList.add('small');

    form.append(feedBAck);


    request.open('POST', 'server.php')
    // request.setRequestHeader ('Content-type', 'application/json')
    const formData = new FormData(form);

    request.send(formData)

    form.reset();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            message(feedBAck, 'Успешно')
        } else {
            message(feedBAck, 'Не получилось отправить')
        }
    })
    }

    function message(feedBAck, text) {
        feedBAck.classList.remove('small')
        feedBAck.classList.add('text')
        feedBAck.innerHTML = `
        ${text}
        `
        setTimeout( () => {
            feedBAck.remove();
        }, 3000)
    }
})