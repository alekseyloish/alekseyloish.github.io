$(document).ready(function(){
    
    $('select').styler(); // запуск плагина "FormStyler.js"

// --- "Инициализация карусели 'Популярные товары' "
    
    $("#popular-catalog").owlCarousel({
        navigation: false,
        pagination: true,

        items: 4,
        itemsDesktop : [1270,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,4],
        itemsMobile : [640,4]
    });

    $(".owl-controlls").remove();
    
    var popularCatalog = $("#popular-catalog").data('owlCarousel');
            
    // Custom Navigation Events
    $("#arrow-left").click(function(){
        popularCatalog.prev();
    });
    $("#arrow-right").click(function(){
        popularCatalog.next();
    });
    
// --- конец "Инициализация карусели 'Популярные товары' "
    
    $('.view-more-reviews').click(function(){
        var userReviews = $('.user-reviews');
        
        $(userReviews).animate({
            width: '100%'
        }, 700);
    });
    
});