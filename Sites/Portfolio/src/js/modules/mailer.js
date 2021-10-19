function mailer () {
    $('form').submit(function (event) {
        event.preventDefault()
        
        $.ajax({
            type:'POST',
            url:'./mailer/smart.php',
            data:$(this).serialize(),
            
        }).done(function () {
            $(this).val("")
            $('form').trigger('reset')
        })
        return false
    })
}

export default mailer