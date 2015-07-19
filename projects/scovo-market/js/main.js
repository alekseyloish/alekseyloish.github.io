$(document).ready(function(){
    // Инициализация выпадающего горизонтального меню
    $(function(){
        subHorizontalMenu.init();
    });
});


// Скрипт кнопки "Наверх"
$(document).ready(function() {
    $('#page-up').hide();
    $(function (){
        $(window).scroll(function (){
            if($(this).scrollTop() > 250) {
                $('#page-up').fadeIn();
            } else {
                $('#page-up').fadeOut();
            }
        });

        $('#page-up').click(function (){
            $('body, html').animate({
                scrollTop: 0
            }, 700);
            return false;
        })
    });
});

