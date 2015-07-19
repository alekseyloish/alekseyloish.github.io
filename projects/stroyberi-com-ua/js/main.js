$(document).ready(function(){
    
// ------------
    
    $('.slider').glide({
        autoplay: 5000,
        arrows: true,
        arrowRightText: '',
        arrowLeftText: '',
        navigation: false
    });
    
// ------------    
    
    // Инициализация адаптивной навигации сайта
    var touch = $("#touch-menu");
    var menu = $(".main-navigation");
    var menuItem = $(".menu-item");
    var subMenuContainer = $(".sub-navigation");
    var subMenu = $(".sub-navigation-inner");
    
    $(touch).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if (w > 840 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    
    $(menu).hover(function(e){
        e.preventDefault();
        subMenu.slideDown(200);
    }, function(e){
        e.preventDefault();
        subMenu.fadeOut(150);
    });

// ------------    
    
    // Инициализация счетчика обратного счета
    $('#countdown').timeTo({
        timeTo: new Date(new Date('Wed Jan 07 2015 18:00:00 GMT+0200 (Украина (зима))')),
        displayDays: 2,
        theme: 'white',
        displayCaptions: true,
        lang: 'ru',
        fontSize: 28,
        captionSize: 11
    });
    
// ------------    
    
    $('#top-panel-tovar').hide();
    $(function (){
        $(window).scroll(function (){
            if($(this).scrollTop() > 250) {
                $('#top-panel-tovar').slideDown(250);
            } else {
                $('#top-panel-tovar').slideUp(250);
            }
        });
    });
    
});
