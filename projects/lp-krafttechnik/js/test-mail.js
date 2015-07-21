// Валидация полей и отправка заявки
$('.btn-send').click(function(){

    var error = 0;
    var form = $(this).parents(form);
    var clientName = form.find('input[name=client-name]');
    var clientPhone = form.find('input[name=client-phone]');

    var regName = /^[а-яА-Яa-zA-Z]{1,25}$/;

    if ( clientName.val() == '' || !regName.test(clientName.val()) ) {
        error += 1;
        clientName.addClass('error');
        alert('Введите имя корректно!')
    } else {
        clientName.removeClass('error');
    }

    if ( clientPhone.val() == '' ) {
        error += 1;
        clientPhone.addClass('error');
        alert('Укажите номер телефона!')
    } else {
        clientPhone.removeClass('error');
    }

    if (error == 0) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: {
                form: 'go',
                c_name: clientName.val(),
                c_phone: clientPhone.val()
            },
            success: function(msg) {
                clientName.val('');
                clientPhone.val('');

                $('.popup').fadeOut(250);
                $('.popup-bg').fadeOut(300);

                alert('Ваша заявка принята!');
            }
        });
    }

    return false;

});