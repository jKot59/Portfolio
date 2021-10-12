function validate () {

    validateForms('#consultation form')
    validateForms('#consultation-form')
    validateForms('#order form')

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