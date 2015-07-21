function scrollToSection(ob) {
    
    var anchorLink = $(ob).attr('href');
    var toAnchor = $(anchorLink).offset().top;
    
    $('body, html').animate({
        scrollTop: toAnchor
    }, 1000);
    return false;
    
}

function initMobileNav() {
    
    var mobNav = $('#mobile-nav'),
        menu = $('.top-nav');
    
    $(mobNav).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if (w > 860 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    
}

function scrollToTop() {
    
    $('body, html').animate({
        scrollTop: 0
    }, 1000);
    
}

$(document).ready(function(){
    
    initMobileNav();

    $('.button-order-call').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-zvonok').fadeIn(250);
        
        scrollToTop();
        
    });

    $('.button-order-product').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-product').fadeIn(250);
        
        scrollToTop();
        
    });

    $('.popup-bg, .close-popup').click(function(e) {
        e.preventDefault(e);
        $('.popup').fadeOut(250);
        $('.popup-bg').fadeOut(250);
    });
    
    $('.top-nav').find('a').click(function(e) {
        e.preventDefault();
        scrollToSection(this);
    });
    
    $(function() {
        $(window).scroll(function() {
            if ( ($(this).scrollTop() > 375) && ($(window).width() > 960) ) {
                if ( $('.top-nav-holder').hasClass('fixed') == false ) {
                    $('.top-nav-holder').addClass('fixed');
                }
                return false;
            }
            $('.top-nav-holder').removeClass('fixed');
        });
    });
    

});