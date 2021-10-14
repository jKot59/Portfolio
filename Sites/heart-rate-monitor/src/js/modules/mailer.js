function mailer () {

    $(document).ajaxSend(function() {
        $('.spinner-border', this).fadeIn()
    })

    $('form').submit(function (event) {
        event.preventDefault()

        if(!$(this).valid()) return // проверка валидации формы

        $.ajax({
            type:'POST',
            url:'./mailer/smart.php',
            data:$(this).serialize(),
            success: function() {
                $('#consultation-form .spinner-border').fadeOut()
                $('#consultation .spinner-border').fadeOut()
                $('#order .spinner-border').fadeOut()
            }
        }).done(function () {
            $(this).val("")
            $('#consultation, #order').fadeOut()
            $('.overlay, #thanks').fadeIn('slow')
            $('form').trigger('reset')
        })
        return false
    })
}

export default mailer