function pageUp () {
    $(window).scroll(function() {
        if( $(this).scrollTop() > 1600) {
            $('.page-up').fadeIn()
        } else {
            $('.page-up').fadeOut()
        }
    })

    // плавнвый скрол по секциям 

    // $("a[href^='#']").click(function () {
    //     const _href = $(this).attr("href")
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"})
    //     return false
    // })
}

export default pageUp