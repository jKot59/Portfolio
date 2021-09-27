'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input')

    form.addEventListener('submit', e => {
        e.preventDefault();

        const sername = inputs[0].value,
              level = inputs[1].value,
              obj = {}

        obj.sername = sername;
        obj.level = level;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(json => console.log(json))


    })

    
})