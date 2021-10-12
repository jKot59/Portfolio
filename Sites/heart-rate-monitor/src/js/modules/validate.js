function validate () {

    validateForms('#consultation form')
    validateForms('#consultation-form')
    validateForms('#order form')

    $('[name=phone]').mask("+7 (999) 999-9999")

    function validateForms (form) {
        $(form).validate({
            rules: {
                name: "required" ,
                phone: "required" ,
                email: {
                    required: true,
                    email:true
                }
            },
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите свой телефон",
                email: {
                    required: "Введите email",
                    email: "Непаравильный адрес"
                }
            }
        });
    }

}

export default validate