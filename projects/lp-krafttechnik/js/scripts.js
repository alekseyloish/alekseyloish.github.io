$(document).ready(function(){

    $('input[name=client-phone]').mask("+38-(999)-999-99-99", {placeholder: "x"});
    
    $('.btn-add-review').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-add-review').fadeIn(250);
    });
    
    $('.popup-bg, .button-back').click(function(e) {
        e.preventDefault(e);
        $('.popup').fadeOut(250);
        $('.popup-bg').fadeOut(250);
    });
    
    $('.about-company').click(function (e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(250);
        $('.popup-about-us').fadeIn(250);
    });
    
    (function initCountdown() {
        var startPoint = $('#countdown-action').attr('data-startpoint');
        
        $('#countdown-action').timeTo({
            timeTo: new Date(new Date(startPoint)),
            displayDays: 2,
            displayCaptions: true,
            lang: 'ru',
            fontSize: 40,
            captionSize: 16
        });
    })();

});