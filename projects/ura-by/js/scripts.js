function initSlider() {
    $('#top-slider').carouFredSel({
        auto: true,
        responsive: true,
        width: '100%',		
        scroll: {
            items           : 1,
            easing          : "quadratic",
            duration        : 2000,
            timeoutDuration : 3000,
            pauseOnHover    : true,
            fx:"crossfade"
        },
        prev: '#prev',
        next: '#next',
        pagination: false,
        mousewheel: true,
        items: {
            visible: {
                min: 1,
                max: 1
            }
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });
}

$(document).ready(function(){
    
    initSlider();
    
    var touch = $("#touch-menu");
    var menu = $(".main-nav");
    var touchSecondNav = $('.dropdown-nav');
    var secondNav = $('.sub-menu');
    
    $(touch).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(touchSecondNav).on('click', function(e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            $(this).next(secondNav).slideToggle();
            $(this).parent().toggleClass('active');
        }
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if (w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    
    function callTimer(sId) {
        iNumber = sId.replace('timer-for-', '');
        
        var sEnd = $('input[name=timer-end-for-' + iNumber + ']').val(),
            oEnd = new Date(sEnd),
            oNow = new Date(),
            iDiff = oEnd.getTime() - oNow.getTime();
        
        iDays = 0;
        iDays = Math.floor(iDiff / (1000 * 60 * 60 * 24));
        
        iHours = 0;
        iHours = Math.floor(iDiff / (1000 * 60 * 60) - (24 * iDays));
        
        iMinutes = 0;
        iMinutes = Math.floor(iDiff / (1000 * 60) - (24 * 60 * iDays) - (60 * iHours));
        
        iSeconds = 0;
        iSeconds = Math.floor(iDiff / 1000 - (24 * 60 * 60 * iDays) - (60 * 60 * iHours) - (60 * iMinutes));
        
        var sDays = '' + iDays;
        if (sDays.length < 2) sDays = '0' + sDays;
        
        var sHours = '' + iHours;
        if (sHours.length < 2) sHours = '0' + sHours;
        
        var sMinutes = '' + iMinutes;
        if (sMinutes.length < 2) sMinutes = '0' + sMinutes;
        
        var sSeconds = '' + iSeconds;
        if (sSeconds.length < 2) sSeconds = '0' + sSeconds;
        
        $('#' + sId).find('#days-' + iNumber).find('.d1').html(sDays.substr(0, 1));
        $('#' + sId).find('#days-' + iNumber).find('.d2').html(sDays.substr(1, 1));
        
        $('#' + sId).find('#hours-' + iNumber).find('.d1').html(sHours.substr(0, 1));
        $('#' + sId).find('#hours-' + iNumber).find('.d2').html(sHours.substr(1, 1));
        
        $('#' + sId).find('#minutes-' + iNumber).find('.d1').html(sMinutes.substr(0, 1));
        $('#' + sId).find('#minutes-' + iNumber).find('.d2').html(sMinutes.substr(1, 1));
        
        $('#' + sId).find('#seconds-' + iNumber).find('.d1').html(sSeconds.substr(0, 1));
        $('#' + sId).find('#seconds-' + iNumber).find('.d2').html(sSeconds.substr(1, 1));
        
        setTimeout(function() {
            callTimer(sId);
        }, 1000);
    }

});