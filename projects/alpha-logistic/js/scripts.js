function initMobileNav() {
    
    var touchMenu = $('#touch-menu'),
        mainNavigation = $('.main-nav');
    
    $(touchMenu).on('click', function(e) {
        e.preventDefault();
        mainNavigation.slideToggle(250);
    });
    
    $(window).resize(function() {
        var w = $(window).width();
        if ( (w > 980) && mainNavigation.is(':hidden') ) {
            mainNavigation.removeAttr('style');
        }
    });
    
}

$(document).ready(function(){

    $('.slider').owlCarousel({
        items: 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,3],
        itemsTabletSmall: false,
        itemsMobile : [480,1],
        autoPlay: true,
        navigation: false,
        pagination: false,
        responsive: true,
        slideSpeed: 250,
        rewindSpeed: 600,
        width: 'auto'
    });
    
    var clientsSlider = $('.slider').data('owlCarousel');
    $('.slider-btn').filter('.btn-prev').on('click', function() {
        clientsSlider.prev();
    });
    $('.slider-btn').filter('.btn-next').on('click', function() {
        clientsSlider.next();
    });
    
    initMobileNav();

});