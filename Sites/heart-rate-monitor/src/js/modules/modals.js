function modals () {
    const callBtn = document.querySelectorAll('[data-modal=consultation]'),
          overlay = document.querySelector('.overlay'),
          order = document.getElementById('order'),
          consultation = document.getElementById('consultation'),
          crosses = document.querySelectorAll('.modal__close'),
          buyBtn = document.querySelectorAll('.catalog button'),
          allCards = document.querySelectorAll('.catalog-item'),
          thanks = document.getElementById('thanks')


    showModal(callBtn, 'call')
    showModal(buyBtn, 'buy')
    closeModal()

    function showModal (buttons, action) {
        buttons.forEach( btn => {
            btn.addEventListener('click', (event) => {
                document.body.style.overflow = 'hidden';
                overlay.style.display='block'
                action === 'call' ? consultation.style.display='block' : openBuyModal(event)
            })
        })
    }

    function openBuyModal (event) {
        buyBtn.forEach( (btn, i) => {
            if(event.target == btn) {
                let headerFromCard = allCards[i].querySelector('.catalog-item__subtitle').innerText
                changeModalHeader(headerFromCard)
            }
        })

        order.style.display='block'

        function changeModalHeader (header) {
            document.querySelector('#order .modal__subtitle').innerText = header
        }
    }

    function closeModal () {
        crosses.forEach( cross => {
            cross.addEventListener('click', () => {
                document.body.style.overflow = '';
                overlay.style.display='none'
                consultation.style.display='none'
                order.style.display='none'
                thanks.style.display='none'
            })
        })
    }
}

export default modals