$(document).ready(function(){

    $('.button-order').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-add-zvonok').fadeIn(250);
    });
    
    $('.button-price').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-add-zayavka').fadeIn(250);
    });
    
    $('.popup-bg, .button-back, .close_popup').click(function(e) {
        e.preventDefault(e);
        $('.popup').fadeOut(250);
        $('.popup-bg').fadeOut(250);
    });
    
    $('.form-order').submit(function(e) {
        e.preventDefault();
        if ($(this).find('input[name=client-name]').val() != '') {
            var user_name = $(this).find('input[name=client-name]').val();
        }
        
        if ($(this).find('input[name=client-phone]').val() !=
            'Введите Ваш телефон') {
            var user_phone = $(this).find('input[name=client-phone]').val();
        }
        
        var submit = $(this).find('.button-submit');
        
        if (user_name && user_phone) $.post('/mail.php', {
            user_name: user_name,
            user_phone: user_phone
        }, function() {
            submit.after(
                '<span class="finish">Заявка принята</span>');
            submit.remove();
        });
    });

});